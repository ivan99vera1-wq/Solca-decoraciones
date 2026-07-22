"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        dark ? "bg-cream/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(17,17,17,0.06)]" : "bg-transparent"
      )}
    >
      <nav className="container-px mx-auto flex h-20 max-w-content items-center justify-between">
        <Logo variant={dark ? "dark" : "light"} showWordmark={false} className="w-9" />

        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-hover
                className={cn(
                  "link-underline text-[13px] font-medium uppercase tracking-widest2 transition-colors duration-300",
                  dark ? "text-ink/80 hover:text-ink" : "text-cream/85 hover:text-cream"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            href="#contacto"
            variant={dark ? "primary" : "ghost"}
            className={cn("!px-6 !py-2.5 text-xs", !dark && "text-cream")}
          >
            Solicitar presupuesto
          </Button>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          data-cursor-hover
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            dark ? "text-ink" : "text-cream"
          )}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-ink/10 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-px mx-auto flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg text-ink/85 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button href="#contacto" onClick={() => setOpen(false)} className="w-full">
                  Solicitar presupuesto
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
