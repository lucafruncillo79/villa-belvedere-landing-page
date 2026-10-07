import Image from 'next/image'
import { ArrowRight, MapPin, Star } from 'lucide-react'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-end overflow-hidden text-white"
    >
      {/* Ottimizzazione 1: Qualità dell'immagine aumentata per schermi Retina */}
      <Image
        src="/images/hero.png"
        alt="Villa Belvedere affacciata sul mare al tramonto, con piscina a sfioro e cipressi"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-16 md:pb-24 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-white/85">
            <MapPin className="size-4" aria-hidden="true" />
            Costiera italiana · Tra mare e montagna
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl leading-[1.05] text-balance md:text-7xl"
          >
            Dove il tempo rallenta e il mare <em className="italic">ti accoglie</em>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/85 text-pretty md:text-lg">
            Una dimora storica affacciata sull&apos;azzurro, con suite raffinate, una piscina
            panoramica e la quiete di un parco privato. Il tuo rifugio per lasciarti alle spalle
            la frenesia quotidiana.
          </p>

          {/* Ottimizzazione 2: Micro-interazioni e feedback al click */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <a
              href="#prenota"
              aria-label="Verifica la disponibilità delle camere"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 active:scale-95"
            >
              Verifica Disponibilità
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#camere"
              aria-label="Scopri le camere disponibili"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 text-base font-medium backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
            >
              Scopri le camere
            </a>
          </div>
        </div>

        {/* Statistiche in basso (Definitive List semantica) */}
        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/25 pt-8">
          <div>
            <dt className="text-xs uppercase tracking-widest text-white/70">Valutazione</dt>
            <dd className="mt-1 flex items-center gap-1.5 font-serif text-2xl md:text-3xl">
              4,9 <Star className="size-5 fill-current" aria-hidden="true" />
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-white/70">Suite esclusive</dt>
            <dd className="mt-1 font-serif text-2xl md:text-3xl">8</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-white/70">Dal mare</dt>
            <dd className="mt-1 font-serif text-2xl md:text-3xl">300 m</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}