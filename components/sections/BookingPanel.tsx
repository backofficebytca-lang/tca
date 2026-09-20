import { Eyebrow } from "@/components/typography/Eyebrow";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Reveal } from "@/components/motion/Reveal";
import { NoBreak } from "@/components/typography/NoBreak";
import { RENDEZ_VOUS_PAGE } from "@/lib/content/rendez-vous";

/** The booking block: the reasons on the left, the scheduling widget on the right. */
export function BookingPanel() {
  const { booking } = RENDEZ_VOUS_PAGE;

  return (
    <div className="grid gap-10 rounded-[18px] bg-mist p-6 md:p-10 lg:grid-cols-12 lg:gap-x-14">
      <div className="lg:col-span-5">
        <Eyebrow on="card">{booking.eyebrow}</Eyebrow>
        <Reveal>
          <h2 className="t-h2 mt-5 max-w-md">{booking.title}</h2>
        </Reveal>
        <ul className="mt-8 flex flex-col gap-3">
          {booking.points.map((point) => (
            <li key={point} className="t-body flex gap-3">
              <CheckIcon className="mt-1.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-7">
        <div
          className="flex min-h-[380px] w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-ink/25 bg-paper px-8 text-center"
          role="img"
          aria-label="Emplacement réservé au widget de prise de rendez-vous (Cal.com ou Calendly), à connecter"
        >
          <p className="t-h3">
            <NoBreak>Widget de prise de rendez-vous</NoBreak>
          </p>
          <p className="t-small max-w-xs text-gray">
            Intégration Cal.com ou Calendly à connecter — hébergement en Union européenne,
            conformément au cahier des charges.
          </p>
        </div>
      </div>
    </div>
  );
}
