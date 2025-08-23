from typing import List
import reflex as rx
from . import ai
from reflex_gpt.models import Chat as ChatModel

class ChatMessage(rx.Base):
    message:str
    is_bot:bool = False


class ChatState(rx.State):
    """
    All functionallities for Chat with AI
    """
    did_submit:bool = False
    messages: List[ChatMessage] = []
    
    @rx.var
    def user_did_submit(self) -> bool:
        return self.did_submit
    
    def on_load(self):
        with rx.session() as session:
            results = session.exec(
                ChatModel.select()
            ).all()
            print("Loaded chats from DB:", results)
    
    
    def append_message(self, message, is_bot:bool = False):
        with rx.session() as session:
            obj = ChatModel(
                title = message,
            )
            session.add(obj)
            session.commit()
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
            self.append_message(message = user_message, is_bot = False)
            yield
            gpt_messages = self.get_gpt_messages()
            bot_response = ai.get_llm_response(gpt_messages)
            # await asyncio.sleep(2)
            self.did_submit = False
            self.append_message(message = bot_response, is_bot = True)
            yield