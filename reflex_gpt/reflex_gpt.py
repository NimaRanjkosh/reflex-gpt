"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config

from . import pages, chat
from .navigation import routes


app = rx.App()
app.add_page(pages.home_page, route=routes.HOME_ROUTE)
app.add_page(pages.about_us_page, route=routes.ABOUT_US)
app.add_page(
    chat.chat_page,
    route=routes.CHAT_ROUTE,
    on_load=chat.state.ChatState.on_load,
)
