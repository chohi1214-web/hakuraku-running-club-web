import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FinalCtaSection() {
  return (
    <section className="section-shell pt-8">
      <Reveal>
        <div className="glass-card overflow-hidden px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">06 - Join Us</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">走ろう、みんなで。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            レベルは関係ない。走る理由も、ペースも自由。
            <br />
            ここでは、隣で走る誰かとつながることが一番の価値です。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#activities"
              className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              活動をチェック
            </Link>
            <Link
              href="#instagram"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-accent-300 hover:text-accent-600"
            >
              Instagramを見る
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
