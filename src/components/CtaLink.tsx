import { CHECKOUT_URL, OFFER_ANCHOR } from "@/config/sales";

const sizes = {
  xl: "bg-[#16A34A] hover:bg-[#15803D] text-[17px] sm:text-xl md:text-[27px] px-6 sm:px-9 md:px-14 py-[18px] sm:py-[22px] md:py-7",
  lg: "bg-[#16A34A] hover:bg-[#15803D] text-[15px] sm:text-lg md:text-xl px-5 sm:px-7 md:px-12 py-4 sm:py-[18px] md:py-[22px]",
  navy: "bg-[#314677] hover:bg-[#26375e] text-base md:text-lg px-8 py-5 tracking-wide",
} as const;

const base = "inline-flex items-center justify-center whitespace-nowrap max-w-full rounded-xl font-extrabold text-white uppercase tracking-tight";

export function CtaLink({
  children,
  size = "lg",
  variant = "offer",
  soonLabel,
}: {
  children: React.ReactNode;
  size?: keyof typeof sizes;
  variant?: "offer" | "buy";
  soonLabel?: string;
}) {
  if (variant === "buy") {
    if (!CHECKOUT_URL) {
      return (
        <span
          role="button"
          aria-disabled="true"
          className={`${base} ${sizes[size]} opacity-60 cursor-not-allowed`}
        >
          {soonLabel ?? children}
        </span>
      );
    }
    return (
      <a href={CHECKOUT_URL} className={`animate-pulse-cta ${base} transition-all hover:-translate-y-1 hover:shadow-2xl ${sizes[size]}`}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={OFFER_ANCHOR}
      className={`animate-pulse-cta ${base} transition-all hover:-translate-y-1 hover:shadow-2xl ${sizes[size]}`}
    >
      {children}
    </a>
  );
}
