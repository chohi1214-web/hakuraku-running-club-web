type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  sectionCode?: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  sectionCode,
  subtitle
}: SectionTitleProps) {
  return (
    <div className="mb-12 max-w-3xl border-l border-slate-200 pl-5 sm:pl-7">
      <div className="mb-3 flex items-center gap-3">
        {sectionCode && <p className="text-xs tracking-[0.2em] text-slate-400">{sectionCode}</p>}
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-700">{eyebrow}</p>
      </div>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{subtitle}</p>}
      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
