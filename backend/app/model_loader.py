import joblib
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_DIR = os.path.join(BASE_DIR, "models")

knn = joblib.load(os.path.join(MODEL_DIR, "knn_model.pkl"))

rf = joblib.load(os.path.join(MODEL_DIR, "random_forest_model.pkl"))

xgb = joblib.load(os.path.join(MODEL_DIR, "xgboost_model.pkl"))

scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))