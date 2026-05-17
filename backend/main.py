from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend is running"}

@app.get("/calculate")
def calculate(growth: float, competition: float, profit: float):

    score = (growth * 0.4) + (profit * 0.4) - (competition * 2)

    if score >= 15:
        recommendation = "Highly Attractive Market"
    elif score >= 8:
        recommendation = "Moderately Attractive Market"
    else:
        recommendation = "High Risk Market"

    return {
        "score": round(score, 1),
        "recommendation": recommendation
    }