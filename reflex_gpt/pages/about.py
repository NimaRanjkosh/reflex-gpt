"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from reflex_gpt import ui

def about_us_page() -> rx.Component:
    # About Us page
    return ui.base_layout(
        rx.color_mode.button(position="bottom-right"),
        rx.vstack(
            rx.heading("Welcome to About Us!", size="9"),
            spacing="5",
            justify="center",
            min_height="85vh",
        ),
        rx.logo(),
    )
