import ContactForm from "@/components/common/ContactForm";

export default function ServicesSeoAuditFormSection({ data }) {
  return (
    <section className="seo-services-form full-section">
      <div className="container">
        <div className="heading-wrap xl:pb-16 animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title mb-0">{data.title}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-mini xl:gap-space items-center">
          <ContactForm variant="split" />
          <figure>
            <img src={data.image} alt={data.imageAlt || ""} />
          </figure>
        </div>
      </div>
    </section>
  );
}
