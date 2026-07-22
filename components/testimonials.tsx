"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const hasMultiple = TESTIMONIALS.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, [hasMultiple]);

  const current = TESTIMONIALS[index];
  if (!current) return null;

  return (
    <section className="section-py bg-cream">
      <div className="container-px mx-auto max-w-content">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
              Opiniones
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <Quote className="mx-auto mb-6 text-gold/60" size={32} strokeWidth={1} />
          </ScrollReveal>

          <div className="relative min-h-[9rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-balance font-display text-xl font-normal italic leading-relaxed text-ink sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-6 text-xs uppercase tracking-widest2 text-stone-500">
                  {current.author} — {current.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {hasMultiple && (
            <div className="mt-8 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ver reseña ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-stone-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
