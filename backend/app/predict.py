from fastapi import APIRouter
from app.schemas import PredictionInput
from app.model_loader import knn, rf, xgb, scaler
import pandas as pd

router = APIRouter()

reverse_map = {
    0: "Rendah",
    1: "Sedang",
    2: "Tinggi"
}

@router.post("/predict")
def predict(data: PredictionInput):

    input_data = pd.DataFrame([[
        data.age,
        data.gender,
        data.school_grade,
        data.daily_usage,
        data.phone_checks,
        data.social_media,
        data.gaming,
        data.apps_used,
        data.sleep_hours,
        data.exercise_hours,
        data.academic,
        data.education_time
    ]])

    scaled_data = scaler.transform(input_data)

    pred_knn = knn.predict(scaled_data)[0]

    pred_rf = rf.predict(scaled_data)[0]

    pred_xgb_num = xgb.predict(scaled_data)[0]

    pred_xgb = reverse_map[pred_xgb_num]

    return {
        "knn": str(pred_knn),
        "random_forest": str(pred_rf),
        "xgboost": str(pred_xgb)
    }