import reflex as rx
import sqlmodel

from typing import List, Optional
from . import ai
from reflex_gpt.models import ChatSession, ChatSessionMessageModel

class ChatMessage(rx.Base):
    message:str
    is_bot:bool = False


class ChatState(rx.State):
    """
    All functionallities for Chat with AI
    """
    chat_session: ChatSession = None
    not_found: Optional[bool] = None
    did_submit:bool = False
    messages: List[ChatMessage] = []
    
    @rx.var
    def user_did_submit(self) -> bool:
        return self.did_submit
    
    def get_session_id(self) -> int:
        try:
            my_session_id = int(self.router.page.params.get("session_id"))
        except:
            my_session_id = None
        return my_session_id
    
    def create_new_chat_session(self):
        with rx.session() as db_session:
                obj = ChatSession()
                db_session.add(obj) # prepare to save
                db_session.commit() # actually save
                db_session.refresh(obj) 
                print(obj, obj.id)
                self.chat_session = obj
                return obj
    
    def clear_ui(self):
        """Clear the UI messages and reset state"""
        self.chat_session = None
        self.not_found = None
        self.did_submit = False
        self.messages = []
    
    def create_new_chat_and_redirect(self):
        """Create a new chat session and redirect to its page"""
        self.clear_ui()
        new_chat_session = self.create_new_chat_session()
        return rx.redirect(f"/chat/{new_chat_session.id}")
        
    def clear_chat_and_start_new(self):
        """Clear current chat and start a new one"""
        self.clear_ui()
        self.create_new_chat_session()
        self.messages = []
        yield
    
    def get_chat_session_from_db(self, session_id:int = None):
        """Get Chat Session from DB and populate messages"""
        if session_id is None:
            session_id = self.get_session_id()
        # ChatSession.id == session_id
        with rx.session() as db_session:
            sql_statement = sqlmodel.select(
                ChatSession
            ).where(
                ChatSession.id == session_id
            )
            result = db_session.exec(sql_statement).one_or_none()
            if result is None:
                self.not_found = True
            else:
                self.not_found = False
            self.chat_session = result
            messages = result.messages
            for msg_obj in messages:
                msg_txt = msg_obj.content
                is_bot = False if msg_obj.role == "user" else True
                self.append_message_to_ui(message=msg_txt, is_bot=is_bot)
        
    def on_detail_load(self):
        """Load the chat session details based on the session_id in the URL"""
        session_id = self.get_session_id()
        reload_detail = False
        if not self.chat_session:
            reload_detail = True
        else:
            "Has a chat session"
            if self.chat_session.id != session_id:
                reload_detail = True
        if reload_detail:
            self.clear_ui()
            if isinstance(session_id, int):
                self.get_chat_session_from_db(session_id=session_id)
        
    def on_load(self):
        self.clear_ui()
        self.create_new_chat_session()
                
    def insert_messages_to_db(self, content, role="unknown"):
        print("Inserting message to db", content, role)
        if self.chat_session is None:
            return
        if not isinstance(self.chat_session, ChatSession):
            return
        with rx.session() as db_session:
            data = {
                "session_id": self.chat_session.id,
                "content": content,
                "role": role,
            }
            obj = ChatSessionMessageModel(**data)
            db_session.add(obj) # prepare to save
            db_session.commit() # actually save 
    
    
    def append_message_to_ui(self, message, is_bot:bool = False):

        self.messages.append(
                ChatMessage(
                    message = message,
                    is_bot = is_bot,
                )
            )
        
    def get_gpt_messages(self):
        gpt_messages = [
            {
                "role": "system",
                "content": "You are a interior architect and designer and you are a green designer that clean energy is a big deal for you. You will help the user with their interior design questions and provide suggestions based on the user's input.respond in markdown"
            }
        ]
        for chat_message in self.messages:
            role = "user" if not chat_message.is_bot else "system"
            gpt_messages.append(
                {
                    "role": role,
                    "content": chat_message.message
                }
            )
        
        return gpt_messages
    
    async def handling_submit(self, form_data:dict):
        print("Form submitted with data:", form_data)
        user_message = form_data.get("message")
        if user_message:
            self.did_submit = True
            self.append_message_to_ui(message = user_message, is_bot = False)
            self.insert_messages_to_db(content=user_message, role="user")
            yield
            gpt_messages = self.get_gpt_messages()
            bot_response = ai.get_llm_response(gpt_messages)
            # await asyncio.sleep(2)
            self.did_submit = False
            self.append_message_to_ui(message = bot_response, is_bot = True)
            self.insert_messages_to_db(content=bot_response, role="system")
            yield