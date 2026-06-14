"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import API from "@/lib/api";

import InputCard from "@/components/InputCard";

import {
  Activity,
  Smartphone,
  Clock3,
  Moon,
  Gamepad2,
  Dumbbell,
  GraduationCap,
  BookOpen,
  Users,
  AppWindow,
  BrainCircuit,
} from "lucide-react";

export default function PredictionForm() {

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<any>(null);

  const [form, setForm] = useState({
    name: "",

    age: 18,
    gender: 0,
    school_grade: 11,

    daily_usage: 5,
    phone_checks: 20,
    social_media: 2,
    gaming: 1,
    apps_used: 10,

    sleep_hours: 7,
    exercise_hours: 1,
    academic: 8,
    education_time: 2,
  });

  const handleSlider = (
    name: string,
    value: number
  ) => {

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {

    setForm((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePredict = async () => {

    try {

      setLoading(true);

      const response = await API.post(
        "/predict",
        form
      );

      setResult(response.data);

    } catch (error) {

      console.log(error);

      alert("Prediction Failed");

    } finally {

      setLoading(false);
    }
  };

  const finalPrediction = result
    ? [
        result.knn,
        result.random_forest,
        result.xgboost,
      ]
        .sort(
          (
            a: string,
            b: string,
            arr = [
              result.knn,
              result.random_forest,
              result.xgboost,
            ]
          ) =>
            arr.filter(v => v === a).length -
            arr.filter(v => v === b).length
        )
        .pop()
    : null;

  return (

    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-blue-100 overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-purple-200 shadow-sm mb-6">

            <BrainCircuit className="w-4 h-4 text-purple-600" />

            <p className="text-purple-600 font-bold text-sm tracking-wide">
              AI POWERED ANALYSIS
            </p>

          </div>

          <h1 className="text-7xl font-black tracking-tight leading-tight text-slate-900">

            Prediksi

            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">

              {" "}Kecanduan HP

            </span>

          </h1>

          <p className="text-slate-500 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">

            Analisis kebiasaan digital menggunakan teknologi Artificial Intelligence
            berbasis K-Nearest Neighbor, Random Forest, dan XGBoost.

          </p>

        </motion.div>

        {/* NAMA */}

        <motion.div
          whileHover={{ y: -4 }}
          className="
            bg-white/70
            backdrop-blur-xl
            border
            border-white/50
            rounded-[28px]
            p-6
            shadow-[0_8px_30px_rgb(0,0,0,0.05)]
            mb-6
          "
        >

          <div className="flex items-center gap-3 mb-5">

            <div className="
              w-12
              h-12
              rounded-2xl
              border
              border-slate-300
              bg-white
              flex
              items-center
              justify-center
            ">

              <Users />

            </div>

            <p className="text-slate-500 font-semibold">
              Nama Lengkap
            </p>

          </div>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInput}
            placeholder="Masukkan nama lengkap..."
            className="
              w-full
              border
              border-slate-200
              rounded-2xl
              p-4
              text-lg
              outline-none
              bg-white
              focus:ring-2
              focus:ring-purple-300
            "
          />

        </motion.div>

        {/* DROPDOWN */}

        <div className="grid md:grid-cols-2 gap-6 mb-6">

          <motion.div
            whileHover={{ y: -4 }}
            className="
              bg-white/70
              backdrop-blur-xl
              border
              border-white/50
              rounded-[28px]
              p-6
              shadow-[0_8px_30px_rgb(0,0,0,0.05)]
            "
          >

            <div className="flex items-center gap-3 mb-5">

              <div className="
                w-12
                h-12
                rounded-2xl
                border
                border-slate-300
                bg-white
                flex
                items-center
                justify-center
              ">

                <Users />

              </div>

              <p className="text-slate-500 font-semibold">
                Gender
              </p>

            </div>

            <select
              name="gender"
              value={form.gender}
              onChange={handleSelect}
              className="
                w-full
                border
                border-slate-200
                rounded-2xl
                p-4
                text-lg
                outline-none
                bg-white
              "
            >
              <option value={0}>Male</option>
              <option value={1}>Female</option>
            </select>

          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="
              bg-white/70
              backdrop-blur-xl
              border
              border-white/50
              rounded-[28px]
              p-6
              shadow-[0_8px_30px_rgb(0,0,0,0.05)]
            "
          >

            <div className="flex items-center gap-3 mb-5">

              <div className="
                w-12
                h-12
                rounded-2xl
                border
                border-slate-300
                bg-white
                flex
                items-center
                justify-center
              ">

                <GraduationCap />

              </div>

              <p className="text-slate-500 font-semibold">
                Kelas
              </p>

            </div>

            <select
              name="school_grade"
              value={form.school_grade}
              onChange={handleSelect}
              className="
                w-full
                border
                border-slate-200
                rounded-2xl
                p-4
                text-lg
                outline-none
                bg-white
              "
            >
              <option value={10}>Kelas 10</option>
              <option value={11}>Kelas 11</option>
              <option value={12}>Kelas 12</option>
            </select>

          </motion.div>

        </div>

        {/* INPUT GRID */}

        <div className="grid md:grid-cols-2 gap-6">

          <InputCard
            icon={<Activity />}
            title="Usia Kamu"
            value={form.age}
            min={10}
            max={30}
            step={1}
            field="age"
            onChange={handleSlider}
          />

          <InputCard
            icon={<Smartphone />}
            title="Frekuensi Cek HP"
            value={form.phone_checks}
            min={1}
            max={300}
            step={1}
            field="phone_checks"
            onChange={handleSlider}
          />

          <InputCard
            icon={<Clock3 />}
            title="Screen Time Harian"
            value={form.daily_usage}
            min={1}
            max={24}
            step={0.5}
            field="daily_usage"
            onChange={handleSlider}
          />

          <InputCard
            icon={<Smartphone />}
            title="Scrolling Sosmed"
            value={form.social_media}
            min={0}
            max={24}
            step={0.5}
            field="social_media"
            onChange={handleSlider}
          />

          <InputCard
            icon={<Gamepad2 />}
            title="Sesi Gaming"
            value={form.gaming}
            min={0}
            max={24}
            step={0.5}
            field="gaming"
            onChange={handleSlider}
          />

          <InputCard
            icon={<Moon />}
            title="Waktu Tidur"
            value={form.sleep_hours}
            min={0}
            max={24}
            step={0.5}
            field="sleep_hours"
            onChange={handleSlider}
          />

          <InputCard
            icon={<Dumbbell />}
            title="Olahraga & Fisik"
            value={form.exercise_hours}
            min={0}
            max={24}
            step={0.5}
            field="exercise_hours"
            onChange={handleSlider}
          />

          <InputCard
            icon={<GraduationCap />}
            title="Performa Akademik"
            value={form.academic}
            min={1}
            max={10}
            step={0.5}
            field="academic"
            onChange={handleSlider}
          />

          <InputCard
            icon={<BookOpen />}
            title="Waktu Belajar"
            value={form.education_time}
            min={0}
            max={24}
            step={0.5}
            field="education_time"
            onChange={handleSlider}
          />

          <InputCard
            icon={<AppWindow />}
            title="Jumlah Aplikasi Harian"
            value={form.apps_used}
            min={1}
            max={100}
            step={1}
            field="apps_used"
            onChange={handleSlider}
          />

        </div>
{/* BUTTON */}

<motion.button
  whileTap={{ scale: 0.98 }}
  whileHover={{ scale: 1.01 }}
  onClick={handlePredict}
  disabled={loading}
  className="
    mt-10
    w-full
    bg-slate-950
    hover:bg-slate-900
    transition-all
    duration-300
    text-white
    py-6
    rounded-3xl
    text-xl
    font-bold
    shadow-2xl
  "
>

  {loading
    ? "Menganalisis..."
    : "⚡ ANALISIS SEKARANG"}

</motion.button>

{/* RESULT */}

{result && (

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="
      mt-10
      bg-white/70
      backdrop-blur-xl
      border
      border-white/50
      rounded-[32px]
      p-8
      shadow-[0_8px_30px_rgb(0,0,0,0.05)]
    "
  >

    <h2 className="text-4xl font-black text-slate-900 mb-3">

      Hasil Analisis AI

    </h2>

    <p className="text-slate-500 text-lg mb-8">

      Halo{" "}
      <span className="font-semibold">
        {form.name || "User"}
      </span>,
      berikut hasil prediksi AI berdasarkan pola penggunaan smartphone Anda.

    </p>

    <div className="space-y-5 text-xl">

      <div className="flex justify-between">

        <span>🔵 KNN</span>

        <span className="font-bold">
          {result.knn}
        </span>

      </div>

      <div className="flex justify-between">

        <span>🌲 Random Forest</span>

        <span className="font-bold">
          {result.random_forest}
        </span>

      </div>

      <div className="flex justify-between">

        <span>🚀 XGBoost</span>

        <span className="font-bold">
          {result.xgboost}
        </span>

      </div>

    </div>

    <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">

      <p className="text-lg mb-3 opacity-90">

        Kesimpulan Akhir AI

      </p>

      <h1 className="text-6xl font-black">

        {finalPrediction}

      </h1>

    </div>

  </motion.div>
)}
      </div>

    </main>
  );
}