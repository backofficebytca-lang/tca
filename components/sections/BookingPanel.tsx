import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { RENDEZ_VOUS_PAGE } from "@/lib/content/rendez-vous";

export function BookingPanel() {
  const { booking } = RENDEZ_VOUS_PAGE;

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-5">
        <Reveal>
          <Eyebrow tone="dark">{booking.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-md text-4xl leading-[1.05] tracking-tight text-paper md:text-5xl">
            {booking.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6">
            {booking.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-paper/70 md:text-base">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper/40" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="md:col-span-7">
        <Reveal delay={0.1}>
          <div
            className="flex min-h-[420px] w-full flex-col items-center justify-center gap-3 border border-white/15 bg-white/[0.03] px-8 text-center"
            role="img"
            aria-label="Emplacement réservé au widget de prise de rendez-vous (Cal.com ou Calendly), à connecter"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-paper/60">
              Widget de prise de rendez-vous
            </p>
            <p className="max-w-xs text-sm text-paper/50">
              Intégration Cal.com ou Calendly à connecter — hébergement en Union
              européenne, conformément au cahier des charges.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
