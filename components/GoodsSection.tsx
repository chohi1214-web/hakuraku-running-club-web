"use client";

import { useRef, useState } from "react";

import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { goods } from "@/data/siteData";

export default function GoodsSection() {
  const [activeIndexes, setActiveIndexes] = useState(() => goods.map(() => 0));
  const touchStartsRef = useRef<Record<number, number | null>>({});

  const showImage = (itemIndex: number, imageIndex: number) => {
    setActiveIndexes((current) => current.map((value, index) => (index === itemIndex ? imageIndex : value)));
  };

  const moveImage = (itemIndex: number, direction: number, imageCount: number) => {
    setActiveIndexes((current) =>
      current.map((value, index) => {
        if (index !== itemIndex) {
          return value;
        }

        return (value + direction + imageCount) % imageCount;
      })
    );
  };

  const handleTouchStart = (itemIndex: number, clientX: number) => {
    touchStartsRef.current[itemIndex] = clientX;
  };

  const handleTouchEnd = (itemIndex: number, clientX: number, imageCount: number) => {
    const startX = touchStartsRef.current[itemIndex];

    if (startX == null) {
      return;
    }

    const deltaX = clientX - startX;
    const threshold = 40;

    if (deltaX <= -threshold) {
      moveImage(itemIndex, 1, imageCount);
    }

    if (deltaX >= threshold) {
      moveImage(itemIndex, -1, imageCount);
    }

    touchStartsRef.current[itemIndex] = null;
  };

  return (
    <section id="goods" className="section-shell">
      <SectionTitle
        eyebrow="Goods"
        title="グッズ紹介"
        sectionCode="02"
        subtitle="Club Items"
        description="日常でも使いやすい、シンプルで気分が上がるアイテムをセレクト。"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {goods.map((item, idx) => (
          <Reveal key={item.name} delay={idx * 0.08}>
            <article className="glass-card h-full overflow-hidden p-4 transition hover:-translate-y-1">
              <div className="relative mx-auto aspect-square w-full max-w-[22rem] overflow-hidden rounded-2xl bg-slate-100">
                <div
                  className="flex touch-pan-x transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${activeIndexes[idx] * 100}%)` }}
                  onTouchStart={(event) => handleTouchStart(idx, event.touches[0].clientX)}
                  onTouchEnd={(event) => handleTouchEnd(idx, event.changedTouches[0].clientX, item.images.length)}
                >
                  {item.images.map((image, imageIdx) => (
                    <img
                      key={`${item.name}-${imageIdx}`}
                      src={image}
                      alt={`${item.name} ${imageIdx + 1}`}
                      className="h-full w-full shrink-0 object-cover"
                    />
                  ))}
                </div>

                {item.images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      aria-label={`${item.name} の前の画像へ`}
                      onClick={() => moveImage(idx, -1, item.images.length)}
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg text-slate-700 shadow-sm transition hover:bg-white"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label={`${item.name} の次の画像へ`}
                      onClick={() => moveImage(idx, 1, item.images.length)}
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg text-slate-700 shadow-sm transition hover:bg-white"
                    >
                      ›
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/80 px-3 py-1">
                      {item.images.map((_, imageIdx) => (
                        <button
                          key={`${item.name}-dot-${imageIdx}`}
                          type="button"
                          aria-label={`${item.name} の画像 ${imageIdx + 1} を表示`}
                          onClick={() => showImage(idx, imageIdx)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            activeIndexes[idx] === imageIdx ? "bg-slate-900" : "bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {activeIndexes[idx] + 1} / {item.images.length} photos
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
