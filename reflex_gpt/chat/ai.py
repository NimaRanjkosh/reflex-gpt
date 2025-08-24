import os

from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

# Constant Variables
MODEL = "gpt-5-nano"
API_KEY = os.getenv("API_KEY")
BASE_URL = os.getenv("BASE_URL")

# ---------------------------------------------- For Local LLM Testing with LM Studio

LOCAL_API_KEY="no-key" # Local LLMs do not need API keys
LOCAL_URL=os.getenv("LOCAL_URL") # My Local LM Studio URL 
LOCAL_MODEL="Mistral 7B Instruct v0.1" # My Local Model

# ---------------------------------------------- Helper Functions

def get_client():   
    return OpenAI(api_key=API_KEY, base_url=BASE_URL)
    # return OpenAI(api_key=LOCAL_API_KEY, base_url=LOCAL_URL) in case of using local LLMs

def get_llm_response(gpt_messages):
    client = get_client()
    completion = client.chat.completions.create(
        model = MODEL,
        #model = LOCAL_MODEL, # in case of using local LLMs
        messages = gpt_messages,
        
    )
    return completion.choices[0].message.content



