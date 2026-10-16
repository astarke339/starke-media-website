import Image from 'next/image'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/site'

export default function About() {
  return (
    <section id="about" className="bg-racing-deep scroll-mt-16">
      <div className="mx-auto max-w-site px-5 md:px-8 py-24 md:py-32 grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
            <Image
              src="/images/profile.jpg"
              alt="Austin Starke, founder of Starke Media"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <h2 className="font-wide text-4xl md:text-[3.4rem] font-extrabold leading-none tracking-[-0.03em]">
            Austin Starke
          </h2>
          <p className="mt-3 text-lg text-sage">Founder</p>

          <div className="mt-8 space-y-5 max-w-[56ch] text-lg leading-relaxed text-bone/85">
            <p>
              Before Starke Media, I spent about ten years wrapping, installing PPF, and detailing cars. That work taught me that most businesses don&apos;t need more content. They need better content, posted consistently, with a plan behind it.
            </p>
            <p>
              Now I help businesses across Michigan turn their everyday work into video that brings in customers. No stock footage and no templates, just your business, filmed the way it deserves.
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-b border-bronze pb-1 text-lg font-medium text-bronze-light hover:text-bone hover:border-bone transition-colors"
          >
            See new work on Instagram @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  )
}
