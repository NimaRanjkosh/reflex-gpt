import asyncio
from typing import List

import reflex as rx

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
    
    def append_message(self, message, is_bot:bool = False):
        self.messages.append(
                ChatMessage(
                    message = message,
                    is_bot = is_bot,
                )
            )
    
    async def handling_submit(self, form_data:dict):
        print("Form submitted with data:", form_data)
        user_message = form_data.get("message")
        if user_message:
            self.did_submit = True
            self.append_message(message = user_message, is_bot = False)
            yield
            await asyncio.sleep(2)
            self.did_submit = False
            self.append_message(message = user_message, is_bot = True)
            yield