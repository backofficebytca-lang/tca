import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({
  loading = "lazy",
  className,
}: {
  loading?: "eager" | "lazy";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="TCA Backoffice — retour à l'accueil"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/brand/tca-logo-black.png"
        alt="TCA Backoffice"
        width={556}
        height={253}
        loading={loading}
        className="h-9 w-auto md:h-10"
      />
    </Link>
  );
}
