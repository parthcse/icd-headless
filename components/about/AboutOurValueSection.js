export default function AboutOurValueSection() {
  const items = [
    {
      icon: "/images/learning-icon.svg",
      title: "Learning",
      text: "Learning that extends beyond simply acquiring knowledge but applying it to the job. We keep our employees updated with our in-house learning programs.",
    },
    {
      icon: "/images/growth-icon.svg",
      title: "Growth",
      text: "Mutual growth! With the willingness to apply practical approaches, innovative ideas, and seamless efforts, we believe in growing together.",
    },
    {
      icon: "/images/happiness-icon.svg",
      title: "Happiness",
      text: "Happy employees and happy clients. We truly believe in a holistic approach to keep our talent happy which brings happiness to our clients.",
    },
  ];

  return (
    <section className="about-our-value full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">Our</h3>
          <h2 className="main-title">Core Values</h2>
          <p className="mx-auto max-w-2xl">
            We believe in demonstrating a strong commitment to sustainable, responsible, honest and transparent business
            practices.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-space-small text-center md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="column">
              <div className="img-box flex aspect-[433/250] items-center rounded-tl-[12%] rounded-br-[12%] bg-black-light p-4">
                <img className="mx-auto max-w-[30%]" src={item.icon} alt="" />
              </div>
              <h2 className="font-30 pt-space-small leading-none lg:pb-1 xl:pb-2">{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
