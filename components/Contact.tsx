import { EMAIL, PROJECT_FORM_URL } from '@/lib/site'

export default function Contact() {
  return (
    <section id="contact" className="glow-bottom scroll-mt-16">
      <div className="mx-auto max-w-site px-5 md:px-8 py-28 md:py-40">
        <h2 className="gloss-text max-w-[14ch] font-wide font-extrabold leading-[0.98] tracking-[-0.035em] text-[clamp(2.6rem,7vw,6rem)] text-balance">
          Get a content plan for your business.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="md:col-span-6 max-w-[44ch] text-lg md:text-xl leading-relaxed text-bone/85">
            Tell us about your business and we&apos;ll send you a written plan built around your goals. Expect a reply within 24 hours.
          </p>
          <div className="md:col-span-5 md:col-start-8 flex flex-col gap-4 md:items-start">
            <a
              href={PROJECT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2px] btn-gold px-8 py-4 text-center text-lg font-semibold text-ink"
            >
              Start your project
            </a>
            <p className="text-[15px] text-mist">
              Or email{' '}
              <a href={`mailto:${EMAIL}`} className="text-bone underline decoration-gold underline-offset-4 hover:decoration-bone break-all">
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
