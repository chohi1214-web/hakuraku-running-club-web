import Link from "next/link";
import { FiArrowRight, FiInstagram } from "react-icons/fi";
import { copy } from "@/data/siteData";
import Reveal from "@/components/Reveal";

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent-50/80 via-white to-white" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-accent-100/70 blur-3xl" />

      <div className="section-shell relative pt-24 sm:pt-32">
        <Reveal className="mx-auto max-w-5xl text-center" delay={0.05}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
            EST. 2026 - HAKURAKU
          </p>
          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-slate-900 sm:text-7xl md:text-8xl">
            <span className="block">DAILY RUN</span>
          </h1>
          <p className="mt-6 text-2xl font-semibold tracking-tight text-slate-800 sm:text-4xl">{copy.heroTitle}</p>
          <p className="mx-auto mt-7 max-w-2xl whitespace-pre-line text-base leading-relaxed text-slate-600 sm:text-xl">
            {copy.heroText}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#activities"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:translate-y-[-2px] hover:bg-slate-700"
            >
              活動を見る
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="#instagram"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-accent-300 hover:text-accent-600"
            >
              <FiInstagram size={16} />
              Instagram
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mx-auto mt-16 max-w-5xl">
          <div className="glass-card animated-grid relative overflow-hidden p-6 sm:p-8">
            <svg viewBox="0 0 800 160" className="h-24 w-full">
              <path
                d="M20 95 C 120 20, 220 150, 320 90 C 420 30, 520 140, 620 70 C 700 20, 760 100, 790 55"
                className="runner-path"
                fill="none"
                stroke="rgb(21 156 255)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="20" cy="95" r="7" fill="rgb(21 156 255)" className="animate-pulse" />
              <circle cx="790" cy="55" r="7" fill="rgb(2 132 199)" className="animate-pulse" />
            </svg>
            <div className="mt-3 grid gap-3 text-left sm:grid-cols-3">
              <p className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600">初心者歓迎のゆるラン中心</p>
              <p className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600">月8回以上の活動</p>
              <p className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600">走って、笑って、食べる</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-slate-400">
            <span className="h-px w-10 bg-slate-300" />
            Scroll
            <span className="h-px w-10 bg-slate-300" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
