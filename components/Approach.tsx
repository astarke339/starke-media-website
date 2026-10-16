const points = [
  {
    title: 'We know the industry',
    body: 'Starke Media started with ten years of hands-on wrap, PPF, and detail work. We know which details your customers notice, and how to film them so they show.',
  },
  {
    title: 'Made for the feed',
    body: 'We plan, shoot, and cut for short-form first. Most reels land between 20 and 30 seconds, the length that holds attention and performs best.',
  },
  {
    title: 'A plan before the camera',
    body: 'Every client gets a written content plan built around their audience and goals, so every shoot has a purpose.',
  },
]

export default function Approach() {
  return (
    <section className="bg-racing-deep">
      <div className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-32 grid gap-14 md:grid-cols-12">
        <h2 className="md:col-span-5 font-wide text-4xl md:text-[3.4rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-balance">
          Built in the shop, not just behind the camera.
        </h2>
        <div className="md:col-span-6 md:col-start-7 space-y-10">
          {points.map((p) => (
            <div key={p.title}>
              <h3 className="font-semiwide text-xl font-bold text-bronze-light">{p.title}</h3>
              <p className="mt-3 max-w-[52ch] text-lg leading-relaxed text-bone/80">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
