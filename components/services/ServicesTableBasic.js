export default function ServicesTableBasic({ data }) {
  const boldColumns = data.boldColumns || [0];
  return (
    <section className="services-basic-table full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp text-center">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
          {data.subtitle && <p className="mx-auto max-w-4xl">{data.subtitle}</p>}
        </div>

        <div className="table-data-content overflow-x-auto">
          <table className={`w-full border border-primary text-center${data.colWidths ? " xl:table-fixed" : ""}`}>
            {data.colWidths && (
              <colgroup>
                {data.colWidths.map((w, i) => <col key={i} style={{ width: w }} />)}
              </colgroup>
            )}
            <thead>
              <tr className="bg-primary font-22 text-nowrap">
                {data.columns.map((col, i) => (
                  <th
                    key={i}
                    className={`p-4 xl:px-6 xl:py-5 font-semibold${i < data.columns.length - 1 ? " border-r border-black/50" : ""}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i} className={i % 2 !== 0 ? "bg-black-light" : ""}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`p-4 xl:px-6 xl:py-5${data.contentAlign === "left" ? " text-left" : ""}${boldColumns.includes(j) ? " font-semibold" : ""}${j < row.length - 1 ? " border-r border-primary" : ""}`}
                    >
                      {typeof cell === "string" ? (
                        cell
                      ) : (
                        <>
                          <span className="text-primary font-bold">{cell.icon === "cross" ? "✗" : "✓"}</span>{" "}
                          <span className="font-semibold">{cell.title}</span>
                          <br />
                          {cell.desc}
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
