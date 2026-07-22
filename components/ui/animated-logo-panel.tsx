"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FloralSprig } from "@/components/ui/floral-sprig";

const SPRIGS = [
  { top: "8%", left: "10%", size: 46, duration: 6, delay: 0, flip: false, rotate: -12, opacity: 0.8 },
  { top: "14%", left: "74%", size: 34, duration: 7, delay: 0.6, flip: true, rotate: 8, opacity: 0.55 },
  { top: "66%", left: "6%", size: 38, duration: 6.5, delay: 1.1, flip: false, rotate: 10, opacity: 0.6 },
  { top: "70%", left: "78%", size: 50, duration: 5.5, delay: 0.3, flip: true, rotate: -8, opacity: 0.85 },
  { top: "42%", left: "84%", size: 30, duration: 7.5, delay: 1.6, flip: false, rotate: 4, opacity: 0.4 },
  { top: "36%", left: "2%", size: 28, duration: 6.8, delay: 0.9, flip: true, rotate: -4, opacity: 0.4 },
];

export function AnimatedLogoPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2px] bg-gradient-to-br from-[#F5EFE3] via-[#EFE6D3] to-[#E4D5B8]">
      {SPRIGS.map((sprig, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={shouldReduceMotion ? {} : { y: [0, -12, 0], x: [0, 4, 0] }}
          transition={{
            duration: sprig.duration,
            delay: sprig.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            top: sprig.top,
            left: sprig.left,
            width: sprig.size,
            opacity: sprig.opacity,
            transform: `rotate(${sprig.rotate}deg)`,
          }}
        >
          <FloralSprig className="h-auto w-full" flip={sprig.flip} />
        </motion.div>
      ))}

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
