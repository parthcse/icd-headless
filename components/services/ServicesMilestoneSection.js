// SVG icons keyed by item.icon string from data
const ICONS = {
  clients: (
    <svg className="w-auto" xmlns="http://www.w3.org/2000/svg" width="1.66em" height="1.66em" viewBox="0 0 100 100" fill="none">
      <path d="M75 46.875C78.639 46.8723 82.2286 47.7182 85.4834 49.3457C88.7383 50.9731 91.5688 53.3371 93.75 56.25" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.25 56.25C8.43124 53.3371 11.2617 50.9731 14.5166 49.3457C17.7714 47.7182 21.361 46.8723 25 46.875" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 71.875C58.6294 71.875 65.625 64.8794 65.625 56.25C65.625 47.6206 58.6294 40.625 50 40.625C41.3706 40.625 34.375 47.6206 34.375 56.25C34.375 64.8794 41.3706 71.875 50 71.875Z" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.125 84.375C30.3683 80.5682 33.5663 77.4127 37.4027 75.2204C41.2392 73.0281 45.5813 71.875 50 71.875C54.4187 71.875 58.7608 73.0281 62.5973 75.2204C66.4337 77.4127 69.6317 80.5682 71.875 84.375" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M62.8906 31.25C63.475 28.9866 64.6824 26.9324 66.3757 25.3207C68.069 23.709 70.1802 22.6045 72.4697 22.1325C74.7592 21.6605 77.1352 21.8399 79.3279 22.6505C81.5205 23.461 83.4419 24.8701 84.8739 26.7179C86.3059 28.5656 87.191 30.7778 87.4288 33.1033C87.6667 35.4289 87.2476 37.7745 86.2193 39.8738C85.1909 41.9731 83.5945 43.742 81.6113 44.9796C79.6281 46.2172 77.3377 46.8738 75 46.875" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 46.875C22.6623 46.8738 20.3719 46.2172 18.3887 44.9796C16.4055 43.742 14.8091 41.9731 13.7807 39.8738C12.7524 37.7745 12.3333 35.4289 12.5711 33.1033C12.809 30.7778 13.6941 28.5656 15.1261 26.7179C16.5581 24.8701 18.4795 23.461 20.6721 22.6505C22.8648 21.8399 25.2408 21.6605 27.5303 22.1325C29.8198 22.6045 31.931 23.709 33.6243 25.3207C35.3176 26.9324 36.525 28.9866 37.1094 31.25" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  websites: (
    <svg className="w-auto" xmlns="http://www.w3.org/2000/svg" width="1.66em" height="1.66em" viewBox="0 0 100 100" fill="none">
      <path d="M40.625 40.625V81.25" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 40.625H87.5" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M84.375 18.75H15.625C13.8991 18.75 12.5 20.1491 12.5 21.875V78.125C12.5 79.8509 13.8991 81.25 15.625 81.25H84.375C86.1009 81.25 87.5 79.8509 87.5 78.125V21.875C87.5 20.1491 86.1009 18.75 84.375 18.75Z" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  satisfaction: (
    <svg className="w-auto" xmlns="http://www.w3.org/2000/svg" width="1.66em" height="1.66em" viewBox="0 0 100 100" fill="none">
      <path d="M50 62.5C58.6294 62.5 65.625 55.5044 65.625 46.875C65.625 38.2456 58.6294 31.25 50 31.25C41.3706 31.25 34.375 38.2456 34.375 46.875C34.375 55.5044 41.3706 62.5 50 62.5Z" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.9219 77.8793C27.2731 73.2482 30.8608 69.3585 35.2873 66.6415C39.7138 63.9245 44.8062 62.4863 50 62.4863C55.1938 62.4863 60.2862 63.9245 64.7127 66.6415C69.1392 69.3585 72.7269 73.2482 75.0781 77.8793" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M86.9805 43.7502C88.2989 51.5835 87.0936 59.6332 83.5387 66.7369C79.9838 73.8406 74.2632 79.6307 67.2029 83.2711C60.1427 86.9116 52.1081 88.214 44.2594 86.9903C36.4107 85.7666 29.1539 82.0801 23.537 76.4632C17.9201 70.8463 14.2336 63.5895 13.0099 55.7408C11.7862 47.8921 13.0886 39.8575 16.7291 32.7973C20.3695 25.737 26.1596 20.0164 33.2633 16.4615C40.367 12.9066 48.4167 11.7013 56.25 13.0197" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M69.0742 21.8086L76.1055 29.2305L90.168 15.168" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  service: (
    <svg className="w-auto" xmlns="http://www.w3.org/2000/svg" width="1.66em" height="1.66em" viewBox="0 0 100 100" fill="none">
      <path d="M62.5 34.375H18.75C17.0241 34.375 15.625 35.7741 15.625 37.5V81.25C15.625 82.9759 17.0241 84.375 18.75 84.375H62.5C64.2259 84.375 65.625 82.9759 65.625 81.25V37.5C65.625 35.7741 64.2259 34.375 62.5 34.375Z" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M62.5 15.625H56.25" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M78.125 15.625H81.25C82.0788 15.625 82.8737 15.9542 83.4597 16.5403C84.0458 17.1263 84.375 17.9212 84.375 18.75V21.875" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M84.375 43.75V37.5" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M78.125 65.625H81.25C82.0788 65.625 82.8737 65.2958 83.4597 64.7097C84.0458 64.1237 84.375 63.3288 84.375 62.5V59.375" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40.625 15.625H37.5C36.6712 15.625 35.8763 15.9542 35.2903 16.5403C34.7042 17.1263 34.375 17.9212 34.375 18.75V21.875" stroke="#F17E3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ServicesMilestoneSection({ data }) {
  return (
    <section className="services-milestone full-section">
      <div className="container">
        <div className="gap-4 xl:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center leading-relaxed small">
          {data.items.map((item, i) => (
            <div key={i} className="group p-8 transition-all duration-500 bg-black-light animate zoomIn">
              <div className="font-48 flex items-center justify-center mb-[0.2em] transition-all duration-500 group-hover:-translate-y-2">
                {ICONS[item.icon]}
              </div>
              <h3 className="font-30 font-bold mb-0">{item.value}</h3>
              <p className="text-[1.15rem] leading-[1.45rem] font-semibold mt-2">
                {item.lines.map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < item.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
