import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { FloralSprig } from "@/components/ui/floral-sprig";

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
          <div className="absolute -bottom-8 -right-6 hidden h-32 w-32 flex-col items-center justify-center gap-2 border border-gold/40 bg-cream sm:flex">
            <FloralSprig className="h-6 w-auto" />
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
              <RevealText text="Cada detalle, hecho con dedicación artesanal." />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-7 max-w-lg text-balance text-[15px] font-light leading-relaxed text-stone-600 sm:text-base">
              En SOLCA Decoraciones creemos que cada espacio y cada celebración cuentan una
              historia. Combinamos sensibilidad estética y trabajo artesanal para crear
              ambientaciones, decoración de eventos y piezas personalizadas que reflejan la
              identidad de quienes las encargan.
            </p>
            <p className="mt-5 max-w-lg text-balance text-[15px] font-light leading-relaxed text-stone-600 sm:text-base">
              Desde arcos de globos y ambientaciones florales hasta manualidades y regalos a
              medida, cuidamos materiales, proporciones y color en cada proyecto, grande o
              pequeño.
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
