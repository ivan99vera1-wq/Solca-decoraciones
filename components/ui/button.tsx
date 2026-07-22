import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const base =
      "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm tracking-wide transition-colors duration-300 ease-premium";

    const variants = {
      primary: "bg-ink text-cream hover:bg-stone-800",
      secondary: "border border-ink/20 text-ink hover:border-ink/60 bg-transparent",
      ghost: "border border-cream/30 text-cream hover:border-cream/70 bg-transparent backdrop-blur-sm",
    };

    return (
      <Magnetic className="inline-block">
        <a ref={ref} className={cn(base, variants[variant], className)} data-cursor-hover {...props}>
          {children}
        </a>
      </Magnetic>
    );
  }
);

Button.displayName = "Button";
