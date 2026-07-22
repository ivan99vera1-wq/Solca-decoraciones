"use client";

import { Sofa, Sparkles, Hammer, Compass, ArrowUpRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { SERVICES, type Service } from "@/lib/constants";

const ICONS: Record<Service["icon"], LucideIcon> = {
  sofa: Sofa,
  sparkles: Sparkles,
  hammer: Hammer,
  compass: Compass,
};

export function Services() {
  return (
    <section id="servicios" className="section-py bg-stone-50">
      <div className="container-px mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
              Servicios
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              <RevealText text="Un servicio integral, pensado en cada detalle." />
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] bg-stone-200 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group relative flex h-full flex-col justify-between bg-cream p-8 lg:p-9"
                >
                  <div>
                    <motion.div
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 text-ink transition-colors duration-500 group-hover:border-gold/50 group-hover:text-gold-dark"
                    >
                      <Icon size={20} strokeWidth={1.3} />
                    </motion.div>
                    <h3 className="font-display text-lg font-normal text-ink">{service.title}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-stone-500">
                      {service.description}
                    </p>
                  </div>

                  <motion.div
                    variants={{ rest: { opacity: 0, x: -4 }, hover: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-dark"
                  >
                    <span>Descubrir</span>
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
