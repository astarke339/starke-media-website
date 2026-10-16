const services = [
  {
    title: 'Monthly content',
    description:
      'We film at your location and deliver a steady stream of edited short-form videos every month, with photos when you need them.',
  },
  {
    title: 'Remote editing',
    description:
      'You film on your phone, we edit. Send us raw footage and get back polished videos ready to post.',
  },
  {
    title: 'Brand films',
    description:
      'A 60 to 90 second hero video for your website, YouTube, or a launch. Longer formats are available too.',
  },
  {
    title: 'Ad creative',
    description:
      'Video built to run as paid ads on Facebook and Instagram, cut in the formats each placement needs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-36 scroll-mt-16">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-wide text-4xl md:text-[3.4rem] font-extrabold leading-none tracking-[-0.03em]">
            Services
          </h2>
          <p className="mt-5 max-w-[30ch] text-lg leading-relaxed text-sage">
            Pick one, or combine them into a monthly plan that fits your business.
          </p>
        </div>
        <ul className="md:col-span-8 border-t border-bone/15">
          {services.map((s) => (
            <li
              key={s.title}
              className="grid gap-2 sm:gap-8 border-b border-bone/15 py-7 md:py-9 sm:grid-cols-[minmax(0,13rem)_1fr]"
            >
              <h3 className="font-semiwide text-xl md:text-2xl font-bold">{s.title}</h3>
              <p className="max-w-[52ch] text-lg leading-relaxed text-bone/75">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
