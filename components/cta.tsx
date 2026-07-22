import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { Button } from "@/components/ui/button";
import { FloralSprig } from "@/components/ui/floral-sprig";

export function Cta() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-stone-900 py-32">
      <Image src="/images/cta-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-stone-900/55" />

      <div className="container-px relative mx-auto max-w-content text-center">
        <ScrollReveal>
          <p className="mb-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-light">
            <FloralSprig className="h-4 w-auto text-gold-light" />
            Empecemos
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-normal leading-tight text-cream sm:text-5xl lg:text-6xl">
            <RevealText text="Hablemos de tu próximo proyecto." />
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <Button href="#contacto" variant="primary" className="bg-cream text-ink hover:bg-white">
              Solicitar presupuesto
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
