import { Reveal } from "@/components/motion/Reveal";

type Cell = string | boolean;

function renderCell(value: Cell) {
  if (typeof value === "boolean") {
    return (
      <span aria-hidden className="text-ink">
        {value ? "•" : "—"}
      </span>
    );
  }
  return value;
}

export function ComparisonTable({
  rows,
}: {
  rows: { label: string; starter: Cell; essentiel: Cell; pilotage: Cell }[];
}) {
  return (
    <Reveal>
      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-ink text-left text-paper">
              <th className="px-6 py-4 font-normal">Prestation</th>
              <th className="px-4 py-4 font-medium">Starter</th>
              <th className="px-4 py-4 font-medium">Essentiel</th>
              <th className="px-4 py-4 pr-6 font-medium">Pilotage</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label} className={i % 2 === 1 ? "bg-ink/[0.03]" : undefined}>
                <td className="px-6 py-4 text-ink">{row.label}</td>
                <td className="px-4 py-4 font-mono text-ink/85">{renderCell(row.starter)}</td>
                <td className="px-4 py-4 font-mono text-ink/85">{renderCell(row.essentiel)}</td>
                <td className="px-4 py-4 pr-6 font-mono text-ink/85">{renderCell(row.pilotage)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
