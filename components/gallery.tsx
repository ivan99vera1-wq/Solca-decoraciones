"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { GALLERY } from "@/lib/constants";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section id="proyectos" className="section-py bg-cream">
      <div className="container-px mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
              Proyectos
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              <RevealText text="Una selección de nuestro trabajo." />
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-5">
          {GALLERY.map((item, i) => (
            <ScrollReveal key={item.title} delay={(i % 3) * 0.08}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                data-cursor-hover
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[2px] text-left"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] uppercase tracking-widest2 text-gold-light">
                    {item.category}
                  </p>
                  <p className="mt-1 font-display text-lg text-cream">{item.title}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900 p-4"
            role="dialog"
            aria-modal="true"
            onClick={close}
          >
            <button
              aria-label="Cerrar"
              onClick={close}
              data-cursor-hover
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-cream/80 transition-colors hover:text-cream"
            >
              <X size={22} strokeWidth={1.3} />
            </button>

            <button
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              data-cursor-hover
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream/70 transition-colors hover:text-cream sm:left-6"
            >
              <ChevronLeft size={26} strokeWidth={1.2} />
            </button>
            <button
              aria-label="Siguiente"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              data-cursor-hover
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream/70 transition-colors hover:text-cream sm:right-6"
            >
              <ChevronRight size={26} strokeWidth={1.2} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/5] w-full max-w-md sm:max-w-lg"
            >
              <Image
                src={GALLERY[activeIndex]!.image}
                alt={GALLERY[activeIndex]!.title}
                fill
                sizes="90vw"
                className="rounded-sm object-cover"
              />
              <div className="absolute inset-x-0 -bottom-12 text-center">
                <p className="text-[10px] uppercase tracking-widest2 text-gold-light">
                  {GALLERY[activeIndex]!.category}
                </p>
                <p className="mt-1 font-display text-lg text-cream">{GALLERY[activeIndex]!.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
