from google.auth.transport import requests
from google.oauth2 import id_token
import os


GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")


def verify_google_token(token: str):
    try:
        user_info = id_token.verify_oauth2_token(
            token,
            requests.Request(),
            GOOGLE_CLIENT_ID,
        )

        return {
            "name": user_info.get("name"),
            "email": user_info.get("email"),
            "picture": user_info.get("picture"),
        }

    except Exception:
        return None