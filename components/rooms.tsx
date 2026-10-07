import Image from 'next/image'
import { ArrowRight, BedDouble, Maximize2, Users } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const rooms = [
  {
    name: 'Suite Vista Mare',
    image: '/images/suite-vista-mare.png',
    alt: 'Suite luminosa con letto matrimoniale e finestre aperte sul mare',
    description:
      'Ampie vetrate affacciate sul golfo, pavimenti in cotto antico e un balcone privato per colazioni indimenticabili.',
    price: 320,
    guests: 2,
    size: 45,
    bed: 'Letto king size',
    badge: 'La più richiesta',
  },
  {
    name: 'Camera Deluxe',
    image: '/images/camera-deluxe.png',
    alt: 'Camera con travi in legno a vista, muri in pietra e vista sugli ulivi',
    description:
      'Travi in legno a vista, muri in pietra e arredi d’epoca. Un ambiente intimo con vista sugli uliveti.',
    price: 220,
    guests: 2,
    size: 32,
    bed: 'Letto matrimoniale',
  },
  {
    name: 'Suite Giardino',
    image: '/images/suite-giardino.png',
    alt: 'Terrazza privata con limoni in vaso, poltrone in rattan e vista sulle colline',
    description:
      'Accesso diretto al parco e terrazza privata tra limoni e bouganville. Perfetta per famiglie o soggiorni lunghi.',
    price: 280,
    guests: 4,
    size: 55,
    bed: 'Matrimoniale + divano letto',
  },
]

const priceFormatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export function Rooms() {
  return (
    <section id="camere" aria-labelledby="camere-title" className="bg-muted/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="camere-title"
            align="left"
            eyebrow="Camere e suite"
            title="Spazi pensati per il riposo"
            description="Otto ambienti unici, ognuno con il proprio carattere, arredati con materiali naturali e biancheria in puro lino."
          />
          <a
            href="#prenota"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Richiedi un preventivo
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <li key={room.name}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Ottimizzazione: Aggiunta quality={90} per la nitidezza delle foto delle stanze */}
                  <Image
                    src={room.image}
                    alt={room.alt}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {room.badge ? (
                    <span className="absolute top-4 left-4 rounded-full bg-background/95 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                      {room.badge}
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-3xl text-foreground">{room.name}</h3>
                    <p className="shrink-0 text-right">
                      <span className="block font-serif text-2xl text-primary">
                        {priceFormatter.format(room.price)}
                      </span>
                      <span className="text-xs text-muted-foreground">a notte</span>
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{room.description}</p>

                  <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <Users className="size-4 text-primary" aria-hidden="true" />
                      {room.guests} ospiti
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Maximize2 className="size-4 text-primary" aria-hidden="true" />
                      {room.size} m²
                    </li>
                    <li className="flex items-center gap-1.5">
                      <BedDouble className="size-4 text-primary" aria-hidden="true" />
                      {room.bed}
                    </li>
                  </ul>

                  {/* Ottimizzazione: Feedback al click con active:scale-95 */}
                  <a
                    href="#prenota"
                    className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-95"
                  >
                    Prenota questa camera
                    <span className="sr-only">: {room.name}</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}