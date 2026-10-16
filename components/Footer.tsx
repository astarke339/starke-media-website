import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line">
      <div className="mx-auto max-w-site px-5 md:px-8 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-wide text-[15px] font-extrabold uppercase tracking-[0.04em]">Starke Media</p>
          <p className="mt-2 text-sm text-mist">
            Video production in Metro Detroit, serving businesses across Michigan.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <div className="flex gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-bone/80 hover:text-bone">
              Instagram @{INSTAGRAM_HANDLE}
            </a>
            <a href={`mailto:${EMAIL}`} className="text-bone/80 hover:text-bone">
              Email
            </a>
          </div>
          <p className="text-mist">© {new Date().getFullYear()} Starke Media</p>
        </div>
      </div>
    </footer>
  )
}
