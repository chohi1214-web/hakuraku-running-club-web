"use client";

import { motion } from "framer-motion";

const words = [
  "HAKURAKU RUNNING FRIENDS",
  "DAILY RUN JOY",
  "BEGINNER FRIENDLY",
  "RUN EAT SMILE",
  "HAKURAKU RUNNING FRIENDS",
  "DAILY RUN JOY",
  "BEGINNER FRIENDLY",
  "RUN EAT SMILE",
  "HAKURAKU RUNNING FRIENDS",
  "DAILY RUN JOY",
  "BEGINNER FRIENDLY",
  "RUN EAT SMILE",
  "HAKURAKU RUNNING FRIENDS",
  "DAILY RUN JOY",
  "BEGINNER FRIENDLY",
  "RUN EAT SMILE"
];

export default function MarqueeBand() {
  return (
    <section className="overflow-hidden border-y border-slate-100 bg-white py-4">
      <motion.div
        className="flex gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.24em] text-slate-400"
        animate={{ x: [0, -600] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </motion.div>
    </section>
  );
}
