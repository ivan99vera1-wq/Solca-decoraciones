import { Instagram, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-cream">
      <div className="container-px mx-auto max-w-content py-14">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <Logo variant="dark" showWordmark className="w-24" />

          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone-500">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de SOLCA Decoraciones"
              data-cursor-hover
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-gold/50 hover:text-gold-dark"
            >
              <Instagram size={16} strokeWidth={1.4} />
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de SOLCA Decoraciones"
              data-cursor-hover
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-gold/50 hover:text-gold-dark"
            >
              <MessageCircle size={16} strokeWidth={1.4} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-stone-200 pt-8 text-xs text-stone-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
          <p>Diseño &amp; desarrollo con dedicación artesanal.</p>
        </div>
      </div>
    </footer>
  );
}
