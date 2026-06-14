export default function ServicesSeoSaySection({ data }) {
  return (
    <section className="common-seo-say full-section text-center md:text-left pb-0 font-30 md:pt-0">
      <div className="container flex gap-space-small xl:gap-space flex-col md:flex-row-reverse items-center mt-0 md:-mt-12 xl:-mt-20">
        <div className="seo-say grid gap-[0.81em] xl:pt-20">
          <p>{data.text}</p>
          <div className="btn-wrap">
            <a href={data.ctaHref} className="btn btn-primary whitespace-normal">
              {data.ctaLabel}
              {data.btnArrow && (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                  <path d={data.btnArrow} />
                </svg>
              )}
            </a>
          </div>
        </div>
        <div className="seo-images md:w-[60%] xl:w-[45%]">
          <img src={data.image} alt={data.imageAlt} />
        </div>
      </div>
    </section>
  );
}
