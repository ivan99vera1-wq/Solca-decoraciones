"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    {
      href: SITE.whatsapp,
      label: "WhatsApp",
      icon: MessageCircle,
    },
    {
      href: SITE.instagram,
      label: "Instagram",
      icon: Instagram,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {visible &&
          links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Escríbenos por ${link.label}`}
              data-cursor-hover
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-ink text-cream shadow-[0_8px_24px_-8px_rgba(17,17,17,0.35)] transition-colors duration-300 hover:bg-stone-800"
            >
              <link.icon size={19} strokeWidth={1.4} />
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {link.label}
              </span>
            </motion.a>
          ))}
      </AnimatePresence>
    </div>
  );
}
