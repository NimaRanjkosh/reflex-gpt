import reflex as rx
import sqlalchemy as sa

from datetime import datetime, timezone
from sqlmodel import Field


def get_utc_now() -> datetime:
    return datetime.now(tz=timezone.utc)
    


class Chat(rx.Model, table=True):
    # id
    # message ??
    # title: str
    created_at: datetime = Field(
        default_factory=get_utc_now,
        sa_type = sa.DateTime(timezone=True),
        sa_column_kwargs={
            "server_default": sa.func.now()
        },
        nullable=False,
    )
    updated_at: datetime = Field(
        default_factory=get_utc_now,
        sa_type = sa.DateTime(timezone=True),
        sa_column_kwargs={
            "onupdate": sa.func.now(),
            "server_default": sa.func.now()
        },
        nullable=False,
    )