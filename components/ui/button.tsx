"use client";

import { forwardRef, type AnchorHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

type ButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const base =
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm tracking-wide transition-colors duration-300 ease-premium";

    const variants = {
      primary: "bg-ink text-cream hover:bg-stone-800",
      secondary: "border border-ink/20 text-ink hover:border-ink/60 bg-transparent",
      ghost: "border border-cream/30 text-cream hover:border-cream/70 bg-transparent backdrop-blur-sm",
    };

    const shine = {
      primary: "bg-white/10",
      secondary: "bg-ink/[0.06]",
      ghost: "bg-white/15",
    };

    return (
      <Magnetic className="inline-block">
        <motion.a
          ref={ref}
          className={cn(base, variants[variant], className)}
          data-cursor-hover
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
          {...props}
        >
          <motion.span
            aria-hidden="true"
            variants={{ rest: { x: "-130%" }, hover: { x: "130%" } }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className={cn("pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12", shine[variant])}
          />
          <motion.span
            variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 inline-flex items-center gap-2"
          >
            {children}
          </motion.span>
        </motion.a>
      </Magnetic>
    );
  }
);

Button.displayName = "Button";
