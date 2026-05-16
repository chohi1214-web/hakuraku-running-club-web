import Link from "next/link";
import { FiInstagram, FiMessageCircle, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-100 bg-white">
      <div className="section-shell py-10 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Hakuraku Running Club</h3>
            <p className="mt-2 text-sm text-slate-500">日常に走る楽しみを</p>
          </div>

          <div className="flex items-center gap-3">
            {[FiInstagram, FiYoutube, FiMessageCircle].map((Icon, idx) => (
              <Link
                key={idx}
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition hover:border-accent-300 hover:text-accent-600"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs tracking-wide text-slate-400">
          Copyright © 2026 Hakuraku Running Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
