type Value = string | boolean;

type Section = {
  title: string;
  rows: { label: string; values: Value[] }[];
};

function renderValue(value: Value) {
  if (typeof value === "boolean") {
    return (
      <>
        <span aria-hidden>{value ? "•" : "—"}</span>
        <span className="sr-only">{value ? "Inclus" : "Non inclus"}</span>
      </>
    );
  }
  return value;
}

/**
 * Comparison in four thematic blocks (PDF v5 §3.3). A real table so screen
 * readers get row/column headers; the first column stays pinned while the
 * three formula columns scroll on narrow screens.
 */
export function ComparisonTable({
  columns,
  sections,
  price,
}: {
  columns: string[];
  sections: Section[];
  price: { label: string; values: string[] };
}) {
  return (
    // `relative` makes this the containing block for the absolutely
    // positioned sr-only labels, so they are clipped with the scroller
    // instead of stretching the whole page sideways on narrow screens.
    <div className="relative overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <caption className="sr-only">Comparatif des trois formules</caption>
        <thead>
          <tr className="bg-ink text-paper">
            <th
              scope="col"
              className="t-small sticky left-0 w-[8.5rem] min-w-[8.5rem] bg-ink px-4 py-5 text-left font-medium sm:w-auto sm:min-w-0 sm:px-6"
            >
              Prestation
            </th>
            {columns.map((column) => (
              <th key={column} scope="col" className="t-small px-3 py-5 font-semibold sm:px-4 sm:text-[1.0625rem]">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        {sections.map((section) => (
          <tbody key={section.title}>
            <tr>
              <th scope="colgroup" colSpan={columns.length + 1} className="t-small bg-mist px-4 py-3 text-left font-semibold text-ink sm:px-6">
                {section.title}
              </th>
            </tr>
            {section.rows.map((row) => (
              <tr key={row.label} className="group border-t border-line transition-colors duration-300 hover:bg-mist">
                <th scope="row" className="t-small sticky left-0 bg-paper px-4 py-4 font-normal text-ink transition-colors duration-300 group-hover:bg-mist sm:px-6">
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={columns[i]} className="t-small px-4 py-4 text-ink">
                    {renderValue(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}

        <tfoot>
          <tr className="border-t-2 border-ink">
            <th scope="row" className="t-small sticky left-0 bg-paper px-4 py-5 font-semibold text-ink sm:px-6">
              {price.label}
            </th>
            {price.values.map((value, i) => (
              <td key={columns[i]} className="t-body px-4 py-5 font-semibold text-ink">
                {value}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
