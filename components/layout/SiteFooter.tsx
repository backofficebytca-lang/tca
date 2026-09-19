import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/navigation/Logo";
import { DotGrid } from "@/components/motion/DotGrid";
import { FOOTER_COLUMNS } from "@/lib/constants/nav";
import { PENDING, SITE } from "@/lib/constants/site";

export function SiteFooter() {
  return (
    <footer data-header-surface="dark" className="relative overflow-hidden bg-ink text-paper">
      <DotGrid tone="dark" className="opacity-[0.05]" />
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 md:flex-row md:items-end">
            <div className="max-w-md">
              <Logo variant="white" className="mb-6 inline-block" />
              <p className="text-xl tracking-tight text-paper/90">
                {SITE.positioningPhrase}.
              </p>
            </div>
            <p className="text-sm text-paper/60">
              {SITE.group} — {SITE.name} &amp; {SITE.sisterCompany}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-paper/50">
                  {col.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-paper/85 underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {col.title === "Contact" && (
                  <ul className="mt-3 flex flex-col gap-3 text-sm text-paper/85">
                    <li>
                      <a href={`mailto:${SITE.contactEmail}`} className="underline-offset-4 hover:underline">
                        {SITE.contactEmail}
                      </a>
                    </li>
                    <li className="text-paper/60">{PENDING.phone}</li>
                    <li className="text-paper/60">Horaires {SITE.hoursDetail}</li>
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/15 pt-8 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {SITE.name} — {SITE.group}. Tous droits réservés.
            </p>
            <p>{SITE.domain}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
