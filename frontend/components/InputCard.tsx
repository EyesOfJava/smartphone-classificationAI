"use client";

import { motion } from "framer-motion";
import React from "react";

interface InputCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  min: number;
  max: number;
  step: number;
  field: string;
  onChange: (
    field: string,
    value: number
  ) => void;
}

function InputCardComponent({
  icon,
  title,
  value,
  min,
  max,
  step,
  field,
  onChange,
}: InputCardProps) {

  return (

    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
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

      <div className="flex items-center gap-3 mb-6">

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

          {icon}

        </div>

        <p className="text-slate-500 font-semibold text-[15px]">
          {title}
        </p>

      </div>

      <div className="flex justify-end mb-5">

        <h1 className="text-5xl font-black text-slate-900">
          {value}
        </h1>

      </div>

      <input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => {
          const val = e.target.value.replace(
            /[^0-9.]/g,
            ""
          );

          onChange(
            field,
            val === "" ? 0 : Number(val)
          );
        }}
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
  );
}

const InputCard = React.memo(InputCardComponent);

export default InputCard;