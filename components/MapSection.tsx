import { mapSpots } from "@/data/siteData";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const typeColorMap: Record<string, string> = {
  おすすめコース: "bg-accent-50 text-accent-700",
  集合場所: "bg-slate-100 text-slate-700",
  夜景スポット: "bg-indigo-50 text-indigo-700"
};

export default function MapSection() {
  return (
    <section id="map" className="section-shell">
      <SectionTitle
        eyebrow="Map"
        title="ランニングマップ"
        sectionCode="04"
        subtitle="Recommended Spots"
        description="おすすめランニングコース、集合場所、夜景スポットをひと目で。Google Maps風の見やすさを意識しました。"
      />

      <div className="glass-card grid gap-5 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
        <Reveal>
          <div className="animated-grid relative h-[340px] overflow-hidden rounded-3xl border border-slate-100 bg-white p-5">
            <div className="absolute left-8 top-8 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-soft">
              Hakuraku Running Layer
            </div>
            <svg viewBox="0 0 500 300" className="h-full w-full">
              <path
                d="M30 240 C110 180, 160 90, 240 130 C320 170, 390 130, 470 60"
                stroke="rgb(2 132 199)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="30" cy="240" r="11" fill="rgb(15 23 42)" />
              <circle cx="240" cy="130" r="10" fill="rgb(21 156 255)" />
              <circle cx="470" cy="60" r="11" fill="rgb(79 70 229)" />
            </svg>
          </div>
        </Reveal>

        <div className="space-y-4">
          {mapSpots.map((spot, idx) => {
            const Icon = spot.icon;
            return (
              <Reveal key={spot.name} delay={idx * 0.08}>
                <article className="rounded-3xl border border-slate-100 bg-white p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-xs ${typeColorMap[spot.type]}`}>
                      {spot.type}
                    </span>
                    <span className="text-slate-400">
                      <Icon size={16} />
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900">{spot.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{spot.area}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{spot.note}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
