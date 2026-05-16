import { FiSmile } from "react-icons/fi";
import { ramenShops } from "@/data/siteData";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

export default function RamenSection() {
  return (
    <section id="ramen" className="section-shell">
      <SectionTitle
        eyebrow="After Run"
        title="おすすめのラーメン"
        sectionCode="05"
        subtitle="Ramen Picks"
        description="ラン後の一杯は、別腹。ちょっとネタ感を混ぜつつ本気で選んだお店です。"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {ramenShops.map((shop, idx) => (
          <Reveal key={shop.name} delay={idx * 0.08}>
            <article className="glass-card h-full overflow-hidden">
              <div className="relative h-48">
                <img src={shop.image} alt={shop.name} className="h-full w-full object-cover" />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs text-amber-600">
                  <FiSmile size={13} />
                  ご褒美枠
                </span>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{shop.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{shop.point}</p>
                <p className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700">{shop.score}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
