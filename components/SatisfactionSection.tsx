"use client";

import { motion } from "framer-motion";
import { satisfactionMetrics, smileIcon } from "@/data/siteData";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

const Smile = smileIcon;

export default function SatisfactionSection() {
  return (
    <section className="section-shell pt-4">
      <SectionTitle
        eyebrow="Satisfaction"
        title="満足度"
        sectionCode="05"
        subtitle="How Happy We Are"
        description="参加メンバーの継続率と満足度は毎シーズン更新。数字以上に、雰囲気の良さが好評です。"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {satisfactionMetrics.map((metric, idx) => (
          <Reveal key={metric.label} delay={idx * 0.08}>
            <motion.article
              whileHover={{ y: -4 }}
              className="glass-card relative overflow-hidden p-6"
            >
              <div className="absolute right-4 top-4 text-accent-500/60">
                <Smile size={18} />
              </div>

              <div className="relative mx-auto mb-5 h-32 w-32 rounded-full bg-slate-100 p-2">
                <motion.div
                  initial={{ background: "conic-gradient(#dbeafe 0%, #eff6ff 0%)" }}
                  whileInView={{
                    background: `conic-gradient(var(--tw-gradient-from) ${metric.value}%, #eff6ff ${metric.value}%)`
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut", delay: idx * 0.1 }}
                  className={`h-full w-full rounded-full bg-gradient-to-b ${metric.colorClass} p-2`}
                >
                  <div className="flex h-full items-center justify-center rounded-full bg-white text-2xl font-bold text-slate-900">
                    {metric.value}%
                  </div>
                </motion.div>
              </div>

              <p className="text-center text-sm text-slate-500">{metric.label}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
