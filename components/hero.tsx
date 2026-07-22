"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-stone-900">
      <motion.div style={{ y: bgY }} className="absolute inset-0 h-[124%]">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/55" />
      <div className="absolute inset-0 bg-stone-900/10" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-px relative z-10 mx-auto w-full max-w-content"
      >
        <p className="mb-6 text-xs font-medium uppercase tracking-widest2 text-gold-light">
          SOLCA Decoraciones
        </p>

        <h1 className="max-w-3xl font-display text-[2.6rem] font-normal leading-[1.08] text-cream sm:text-6xl lg:text-[5rem]">
          <RevealText text="Diseñamos espacios que inspiran." wordDelay={0.08} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-md text-balance text-base font-light leading-relaxed text-cream/75 sm:text-lg"
        >
          Decoración personalizada con acabados de alta calidad, pensada para transformar tu espacio en una experiencia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <Button href="#contacto" variant="primary" className="bg-cream text-ink hover:bg-white">
            Solicitar presupuesto
          </Button>
          <Button href="#proyectos" variant="ghost" className="text-cream">
            Ver proyectos
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-cream/60"
      >
        <span className="text-[10px] uppercase tracking-widest2">Descubre más</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
