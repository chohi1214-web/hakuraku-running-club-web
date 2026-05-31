import { starIcon, testimonials } from "@/data/siteData";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const Star = starIcon;

export default function TestimonialsSection() {
  return (
    <section className="section-shell" id="voices">
      <SectionTitle
        eyebrow="Voice"
        title="お客様の声"
        sectionCode="04"
        subtitle="Community Voice"
        description="走る理由は人それぞれ。でも、楽しいから続く。そんなリアルな声を集めました。"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.name} delay={idx * 0.08}>
              <article className="glass-card h-full p-5 transition hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-2xl bg-accent-50 p-3 text-accent-600">
                  <Icon size={18} />
                </div>
                <p className="text-base font-medium leading-relaxed text-slate-800">{item.quote}</p>
                <div className="mt-5 flex items-center text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={`${item.name}-${i}`} size={14} />
                    ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
