import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailRequest(BaseModel):
    email: str
    tone: str

@app.get("/")
def home():
    return {"message": "Backend Running"}



@app.post("/analyze")
def analyze_email(data: EmailRequest):

    try:

        prompt = f"""
        Generate a professional email reply.

        Email:
        {data.email}

        Tone:
        {data.tone}
        """

        response = requests.post(
            "http://127.0.0.1:11434/api/generate",
            json={
                "model": "llama3",
                "prompt": prompt,
                "stream": False
            }
        )

        ai_data = response.json()

        print(ai_data)

        result = ai_data.get(
            "response",
            "No AI response generated."
        )

        return {
            "category": "AI Generated",
            "priority": "Medium",
            "confidence": "95%",
            "reply": result
        }

    except Exception as e:

        return {
            "category": "Error",
            "priority": "Error",
            "confidence": "0%",
            "reply": str(e)
        }