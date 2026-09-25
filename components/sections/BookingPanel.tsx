import { Eyebrow } from "@/components/typography/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { RENDEZ_VOUS_PAGE } from "@/lib/content/rendez-vous";

// Google Calendar Appointment Scheduling — public booking page for the
// connected calendar. Creates the event, attaches a Google Meet link and
// emails the confirmation automatically; nothing else to wire up here.
const GOOGLE_CALENDAR_SRC =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2XCYOp4PaYsIHHB5TVx5eNnMHgXdcOef_zBzoxsmrScPEyoF1cBXICbVzJADso5gYDAvymFF7Q?gv=true";

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
        <p className="t-body mt-8 max-w-md text-gray">{booking.note}</p>
      </div>

      <div className="lg:col-span-7">
        <div className="w-full overflow-hidden rounded-xl bg-paper">
          <iframe
            src={GOOGLE_CALENDAR_SRC}
            title="Prise de rendez-vous TCA Backoffice"
            loading="lazy"
            className="block h-[800px] w-full border-0 md:h-[700px]"
          />
        </div>
      </div>
    </div>
  );
}
