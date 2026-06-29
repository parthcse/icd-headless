const OFFICES = [
  {
    country: "USA",
    address: "160 Locksunart Way, Apt 3 Sunnyvale, California, 94087, United States",
  },
  {
    country: "UK",
    address: "Lyndale Farmhouse, Chester High Road, Neston, CH64 3TH, United Kingdom",
  },
  {
    country: "Australia",
    address: "20 Goodhall St, Northfield SA 5085, Australia",
  },
  {
    country: "India",
    address:
      "310, Sarthik - II, Opp. Rajpath Club, Sarkhej - Gandhinagar Hwy, Bodakdev, Ahmedabad, Gujarat 380054",
  },
];

const PinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#F76724"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export default function ContactOfficesSection() {
  return (
    <section className="full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48 font-normal">Our Global Presence</h3>
          <h2 className="main-title whitespace-nowrap">Our Office Locations</h2>
        </div>

        <div className="grid animate fadeUp gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OFFICES.map((office) => (
            <div
              key={office.country}
              className="group flex flex-col border border-[#272727] bg-black-light p-6 transition-colors duration-200 hover:border-primary/50 lg:p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/[0.05] ring-1 ring-inset ring-primary/20 transition-transform duration-200 group-hover:scale-105">
                <PinIcon />
              </span>
              <h3 className="font-22 mb-0 mt-5 font-semibold">{office.country}</h3>
              <p className="mt-2 leading-relaxed text-muted">{office.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
