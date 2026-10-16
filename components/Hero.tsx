'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Play, Volume2, VolumeX } from 'lucide-react'
import { PROJECT_FORM_URL } from '@/lib/site'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()
  const [soundOn, setSoundOn] = useState(false)
  const [playing, setPlaying] = useState(false)

  // Respect reduced motion: don't autoplay, show the poster and a play button instead.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (reduceMotion) {
      v.pause()
    } else {
      v.play().catch(() => setPlaying(false))
    }
  }, [reduceMotion])

  const watchWithSound = () => {
    const v = videoRef.current
    if (!v) return
    v.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' })
    v.currentTime = 0
    v.muted = false
    setSoundOn(true)
    v.play()
  }

  const toggleSound = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setSoundOn(!v.muted)
    if (v.paused) v.play()
  }

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { y: '105%' },
          animate: { y: '0%' },
          transition: { duration: 0.9, ease, delay },
        }

  return (
    <section id="top" className="pt-28 md:pt-40">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <h1 className="font-wide font-extrabold leading-[0.88] tracking-[-0.035em] text-[clamp(3.5rem,11vw,9.75rem)]">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span className="block" {...reveal(0.05)}>
              Content
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span className="block" {...reveal(0.17)}>
              that sells.
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="mt-10 md:mt-14 grid gap-10 md:grid-cols-12 md:items-end"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <div className="md:col-span-7 lg:col-span-6">
            <p className="max-w-[38ch] text-lg md:text-xl leading-relaxed text-bone/85 text-pretty">
              Short-form video, brand films, and ad creative for Michigan businesses. Made by someone who spent ten years in the shop before picking up a camera.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={PROJECT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[2px] bg-bronze px-7 py-4 text-center font-semibold text-racing-deep hover:bg-bronze-light transition-colors"
              >
                Start your project
              </a>
              <button
                onClick={watchWithSound}
                className="inline-flex items-center justify-center gap-2.5 rounded-[2px] border border-bone/30 px-7 py-4 font-semibold text-bone hover:border-bone/70 transition-colors"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden />
                Watch the reel
              </button>
            </div>
          </div>

          <dl className="md:col-span-5 lg:col-start-8 grid grid-cols-2 gap-6 border-t border-bone/15 pt-6">
            <div className="flex flex-col-reverse">
              <dt className="mt-2 text-[15px] text-sage">organic views for client businesses</dt>
              <dd className="font-wide text-3xl md:text-[2.5rem] font-bold leading-none">6M+</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="mt-2 text-[15px] text-sage">hands-on in the automotive industry</dt>
              <dd className="font-wide text-3xl md:text-[2.5rem] font-bold leading-none">10 yrs</dd>
            </div>
          </dl>
        </motion.div>
      </div>

      <motion.div
        id="work"
        className="mx-auto mt-14 md:mt-20 max-w-site px-0 md:px-8 scroll-mt-24"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.7 }}
      >
        <div className="relative overflow-hidden md:rounded-[2px] bg-racing-deep">
          <video
            ref={videoRef}
            className="block aspect-video w-full object-cover"
            src="/video/portfolio-reel.mp4"
            poster="/images/reel-poster.jpg"
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label="Starke Media reel of recent client work"
          />

          {!playing && (
            <button
              onClick={watchWithSound}
              className="absolute inset-0 flex items-center justify-center bg-racing-deep/30"
              aria-label="Play the reel with sound"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-bronze text-racing-deep">
                <Play className="h-7 w-7 translate-x-0.5 fill-current" aria-hidden />
              </span>
            </button>
          )}

          {playing && (
            <button
              onClick={toggleSound}
              className="absolute bottom-3 left-3 md:bottom-5 md:left-5 inline-flex items-center gap-2 rounded-[2px] bg-racing-deep/80 px-3.5 py-2 text-sm font-medium text-bone backdrop-blur hover:bg-racing-deep transition-colors"
              aria-label={soundOn ? 'Mute the reel' : 'Turn on sound'}
            >
              {soundOn ? <Volume2 className="h-4 w-4" aria-hidden /> : <VolumeX className="h-4 w-4" aria-hidden />}
              {soundOn ? 'Sound on' : 'Sound off'}
            </button>
          )}
        </div>
        <p className="mt-4 px-5 md:px-0 text-[15px] text-sage">
          Recent client work, shot and edited by Starke Media.
        </p>
      </motion.div>
    </section>
  )
}
