import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { activities } from "@/data/siteData";

export default function ActivitiesSection() {
  return (
    <section id="activities" className="section-shell">
      <SectionTitle
        eyebrow="Record"
        title="活動記録"
        sectionCode="03"
        subtitle="What We Do"
        description="日付・距離・写真で残すランログ。次の参加イメージがしやすい、ブログカード風UIです。"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {activities.map((activity, idx) => (
          <Reveal key={activity.title} delay={idx * 0.08}>
            <article className="glass-card overflow-hidden transition hover:-translate-y-1">
              <div className="h-52 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{activity.date}</span>
                  <span className="rounded-full bg-accent-50 px-3 py-1 text-accent-700">{activity.distance}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{activity.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
