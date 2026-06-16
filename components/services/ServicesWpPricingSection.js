export default function ServicesWpPricingSection({ data }) {
  return (
    <section className="services-wp-pricing full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp text-center">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-primary text-center xl:table-fixed">
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
                  <td className="p-4 xl:px-6 xl:py-5 font-semibold border-r border-primary">{row.type}</td>
                  <td className="p-4 xl:px-6 xl:py-5 border-r border-primary">{row.bestFor}</td>
                  <td className="p-4 xl:px-6 xl:py-5 border-r border-primary">{row.features}</td>
                  <td className="p-4 xl:px-6 xl:py-5 font-semibold">{row.investment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
