import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/navigation/Logo";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { FOOTER_COLUMNS, APPOINTMENT_CTA } from "@/lib/constants/nav";
import { PENDING, SITE } from "@/lib/constants/site";

/**
 * Light footer, as in the reference: logo and tagline on the left, one text
 * action on the right, then the link columns and contact details.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container size="display" className="pb-10 pt-14 md:pt-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="t-lead mt-5 max-w-sm text-gray">{SITE.positioningPhrase}.</p>
          </div>
          <ArrowLink href={APPOINTMENT_CTA.href}>{APPOINTMENT_CTA.label}</ArrowLink>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 md:mt-20">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className={col.title === "Contact" ? "col-span-2 sm:col-span-1" : undefined}>
              <h2 className="t-small text-gray">{col.title}</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] font-semibold underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {col.title === "Contact" && (
                <ul className="t-small mt-3 flex flex-col gap-2 text-gray">
                  <li>
                    <a
                      href={`mailto:${SITE.contactEmail}`}
                      className="text-ink [overflow-wrap:anywhere] underline-offset-4 hover:underline"
                    >
                      {SITE.contactEmail}
                    </a>
                  </li>
                  <li>{PENDING.phone}</li>
                  <li>Horaires {SITE.hoursDetail}</li>
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="t-small mt-14 flex flex-col gap-2 border-t border-line pt-6 text-gray md:mt-20 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.group}. Tous droits réservés.
          </p>
          <p>
            {SITE.group} · {SITE.name} &amp; {SITE.sisterCompany} · {SITE.domain}
          </p>
        </div>
      </Container>
    </footer>
  );
}
