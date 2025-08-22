import os

from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

MODEL = "gpt-5-nano"
API_KEY = os.getenv("API_KEY")
BASE_URL = os.getenv("BASE_URL")

def get_client():   
    return OpenAI(api_key=API_KEY, base_url=BASE_URL)

def get_llm_response(gpt_messages):
    client = get_client()
    completion = client.chat.completions.create(
        model = MODEL,
        messages = gpt_messages,
        
    )
    return completion.choices[0].message.content



