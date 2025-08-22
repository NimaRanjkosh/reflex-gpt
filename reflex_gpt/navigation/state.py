import reflex as rx

from . import routes


class NavState(rx.State):
    def to_home(self):
        """
        on_click event
        """
        print("clicked on Home")
        return rx.redirect(routes.HOME_ROUTE)
    
    def to_about_us(self):
        """
        on_click event
        """
        print("clicked on About Us")
        return rx.redirect(routes.ABOUT_US)
    
    def to_chat(self):
        return rx.redirect(routes.CHAT_ROUTE)
    