import { cn } from "@/lib/utils";

type FloralSprigProps = {
  className?: string;
  flip?: boolean;
};

export function FloralSprig({ className, flip }: FloralSprigProps) {
  return (
    <svg
      viewBox="0 0 40 56"
      fill="none"
      aria-hidden="true"
      className={cn("text-gold", flip && "-scale-x-100", className)}
    >
      <path
        d="M20 52C17 40 23 30 21 18C20 12 24 8 25 4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M20 34C13 33 9 28 10 23C16 24 20 28 20 34Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M22 22C28 20 32 15 30 10C25 12 21 16 22 22Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="25" cy="1.5" r="2.1" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="29" cy="4.5" r="2.1" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="27.5" cy="9.2" r="2.1" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="22.5" cy="9.2" r="2.1" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="21" cy="4.5" r="2.1" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="25" cy="5.3" r="1" fill="currentColor" />
    </svg>
  );
}
