import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";

export function About() {
  return (
    <section id="nosotros" className="section-py relative overflow-hidden bg-cream">
      <div className="container-px mx-auto grid max-w-content items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <ScrollReveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px]">
            <Image
              src="/images/about.jpg"
              alt="Composición decorativa SOLCA Decoraciones"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden h-32 w-32 items-center justify-center border border-gold/40 sm:flex">
            <span className="font-display text-sm italic text-gold-dark">Desde el detalle</span>
          </div>
        </ScrollReveal>

        <div className="order-1 lg:order-2">
          <ScrollReveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
              Sobre nosotros
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              <RevealText text="Interiorismo con carácter, pensado para durar." />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-7 max-w-lg text-balance text-[15px] font-light leading-relaxed text-stone-600 sm:text-base">
              En SOLCA Decoraciones creemos que cada espacio cuenta una historia. Combinamos
              sensibilidad estética y precisión técnica para crear ambientes que reflejan la
              identidad de quienes los habitan, cuidando materiales, proporciones y luz en cada
              proyecto.
            </p>
            <p className="mt-5 max-w-lg text-balance text-[15px] font-light leading-relaxed text-stone-600 sm:text-base">
              Trabajamos de la mano de artesanos y proveedores seleccionados para garantizar
              acabados de la más alta calidad, desde el primer boceto hasta la última pieza.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-200 pt-8 sm:max-w-md">
              <div>
                <dt className="font-display text-3xl text-ink">+10</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest2 text-stone-500">
                  Años de experiencia
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl text-ink">100%</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest2 text-stone-500">
                  Proyectos a medida
                </dd>
              </div>
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
