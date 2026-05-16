import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

export default function InstagramSection() {
  return (
    <section id="instagram" className="section-shell">
      <SectionTitle
        eyebrow="Social"
        title="Instagramリンク"
        sectionCode="07"
        subtitle="Our Atmosphere"
        description="最新の活動写真やストーリーをチェック。参加前にクラブの空気感がわかります。"
      />

      <Reveal>
        <div className="glass-card relative overflow-hidden p-6 sm:p-8">
          <div className="absolute right-6 top-6 hidden rounded-full bg-pink-50 p-3 text-pink-500 sm:block">
            <FiInstagram size={20} />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=1200&q=80"
            ].map((img) => (
              <div key={img} className="overflow-hidden rounded-3xl">
                <img src={img} alt="Instagram activity" className="h-40 w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">最新の活動を見る</p>
            <Link
              href="https://www.instagram.com/hakuraku_runningclub/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              <FiInstagram size={15} />
              Instagramへ
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
