import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SentenceLines } from "@/components/typography/SentenceLines";
import { BoldBrand } from "@/components/typography/BoldBrand";
import { FOOTER_COLUMNS, APPOINTMENT_CTA } from "@/lib/constants/nav";
import { PENDING, SITE } from "@/lib/constants/site";

/**
 * TCA-Recommandations.pdf §0: black background, white text, the dot-matrix
 * mark instead of the wordmark, and the new two-line slogan.
 */
export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <Container size="display" className="pb-10 pt-14 md:pt-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/brand/tca-icon-white.png"
              alt="TCA Backoffice"
              width={64}
              height={64}
              className="h-10 w-10"
            />
            <p className="t-lead mt-5 max-w-sm text-paper/70">
              <SentenceLines text={SITE.footerSlogan.join(" ")} />
            </p>
          </div>
          <ArrowLink href={APPOINTMENT_CTA.href} className="!text-paper [&_i]:!bg-paper">
            {APPOINTMENT_CTA.label}
          </ArrowLink>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 md:mt-20">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className={col.title === "Contact" ? "col-span-2 sm:col-span-1" : undefined}>
              <h2 className="t-small text-paper/50">{col.title}</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] font-semibold text-paper underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {col.title === "Contact" && (
                <ul className="t-small mt-3 flex flex-col gap-2 text-paper/70">
                  <li>
                    <a
                      href={`mailto:${SITE.contactEmail}`}
                      className="text-paper [overflow-wrap:anywhere] underline-offset-4 hover:underline"
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

        <div className="t-small mt-14 flex flex-col gap-2 border-t border-paper/15 pt-6 text-paper/60 md:mt-20 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} <BoldBrand text={SITE.name} /> — {SITE.group}. Tous droits réservés.
          </p>
          <p>
            {SITE.group} · <BoldBrand text={SITE.name} /> &amp; {SITE.sisterCompany} · {SITE.domain}
          </p>
        </div>
      </Container>
    </footer>
  );
}
