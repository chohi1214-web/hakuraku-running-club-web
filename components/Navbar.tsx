"use client";

import Link from "next/link";
import { useState } from "react";
import { FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/88 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#top" className="text-base font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-lg">
          Hakuraku Run Club
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 transition hover:text-accent-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#instagram"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-accent-300 hover:text-accent-600"
          >
            <FiInstagram />
            Instagram
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
