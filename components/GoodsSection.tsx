import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { goods } from "@/data/siteData";

export default function GoodsSection() {
  return (
    <section id="goods" className="section-shell">
      <SectionTitle
        eyebrow="Goods"
        title="グッズ紹介"
        sectionCode="06"
        subtitle="Club Items"
        description="日常でも使いやすい、シンプルで気分が上がるアイテムをセレクト。"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {goods.map((item, idx) => (
          <Reveal key={item.name} delay={idx * 0.08}>
            <article className="glass-card h-full overflow-hidden p-4 transition hover:-translate-y-1">
              <img src={item.image} alt={item.name} className="h-40 w-full rounded-2xl object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <button
                type="button"
                className="mt-4 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-accent-300 hover:text-accent-700"
              >
                詳細を見る
              </button>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
