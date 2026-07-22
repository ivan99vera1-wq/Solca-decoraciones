"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function AnimatedLogoPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2px] bg-gradient-to-br from-[#F5EFE3] via-[#EFE6D3] to-[#E4D5B8]">
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute h-[62%] w-[62%] rounded-full border border-gold/25"
        style={{ borderTopColor: "transparent", borderLeftColor: "transparent" }}
      />
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
        className="absolute h-[42%] w-[42%] rounded-full border border-gold-dark/20"
        style={{ borderBottomColor: "transparent", borderRightColor: "transparent" }}
      />

      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[34%] max-w-[160px] drop-shadow-[0_12px_24px_rgba(140,111,66,0.18)]"
      >
        <Image
          src="/logo/icon-dark.png"
          alt="SOLCA Decoraciones"
          width={417}
          height={515}
          className="h-auto w-full object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
