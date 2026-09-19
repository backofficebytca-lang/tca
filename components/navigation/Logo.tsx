import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const SOURCES = {
  black: { full: "/brand/tca-logo-black.png", icon: "/brand/tca-icon-black.png" },
  white: { full: "/brand/tca-logo-white.png", icon: "/brand/tca-icon-white.png" },
} as const;

/**
 * `compact` swaps the full wordmark for the standalone dot-ring mark — used
 * by the header once scrolled past the hero, so the nav settles into its
 * smaller footprint using an asset the brand already has for exactly this.
 */
export function Logo({
  variant = "black",
  compact = false,
  loading = "lazy",
  className,
}: {
  variant?: "black" | "white";
  compact?: boolean;
  loading?: "eager" | "lazy";
  className?: string;
}) {
  const { full, icon } = SOURCES[variant];

  return (
    <Link
      href="/"
      aria-label="TCA Backoffice — retour à l'accueil"
      className={cn("inline-flex items-center", className)}
    >
      {compact ? (
        <Image
          src={icon}
          alt="TCA Backoffice"
          width={584}
          height={585}
          loading={loading}
          className="h-8 w-auto"
        />
      ) : (
        <Image
          src={full}
          alt="TCA Backoffice"
          width={556}
          height={253}
          loading={loading}
          className="h-7 w-auto md:h-8"
        />
      )}
    </Link>
  );
}
