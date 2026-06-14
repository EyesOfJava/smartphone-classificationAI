from pydantic import BaseModel

class PredictionInput(BaseModel):

    age: int
    gender: int
    school_grade: int

    daily_usage: float
    phone_checks: int
    social_media: float
    gaming: float
    apps_used: int

    sleep_hours: float
    exercise_hours: float
    academic: float
    education_time: float