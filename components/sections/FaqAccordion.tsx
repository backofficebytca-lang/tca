import { Reveal } from "@/components/motion/Reveal";

export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <Reveal key={item.question} delay={i * 0.03}>
          <details className="group border-b border-line py-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-ink md:text-xl">
              {item.question}
              <span
                aria-hidden
                className="shrink-0 font-mono text-xl text-gray transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray md:text-base">
              {item.answer}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
