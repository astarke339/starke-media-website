const steps = [
  {
    title: 'Tell us about your business',
    description: 'Fill out our project form with your goals and where your content stands today.',
  },
  {
    title: 'Get your content plan',
    description: 'We send a written plan built around your audience, industry, and goals.',
  },
  {
    title: 'We film and edit',
    description: 'We handle production and editing. You review every video, with two rounds of revisions included.',
  },
  {
    title: 'Post and improve',
    description: 'Your content goes live. We track what performs and adjust from there.',
  },
]

export default function Process() {
  return (
    <section className="border-t border-bone/10">
      <div className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-32">
        <h2 className="font-wide text-4xl md:text-[3.4rem] font-extrabold leading-none tracking-[-0.03em]">
          How it works
        </h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-bronze pt-6">
              <span className="font-wide text-lg font-bold text-bronze" aria-hidden>
                {i + 1}
              </span>
              <h3 className="mt-3 font-semiwide text-xl font-bold leading-snug">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-bone/75">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
