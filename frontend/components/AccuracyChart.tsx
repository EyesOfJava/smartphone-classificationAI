"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    model: "KNN",
    accuracy: 0.87
  },
  {
    model: "Random Forest",
    accuracy: 0.91
  },
  {
    model: "XGBoost",
    accuracy: 0.94
  }
];

export default function AccuracyChart() {

  return (

    <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-6">
        Model Performance
      </h2>

      <div className="w-full h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="model" stroke="#ffffff" />

            <YAxis stroke="#ffffff" />

            <Tooltip />

            <Bar dataKey="accuracy" fill="#3b82f6" />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}