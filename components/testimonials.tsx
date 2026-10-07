import { Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Un posto magico. Ci siamo sentiti a casa fin dal primo istante: l’accoglienza di Giulia e Marco è stata impeccabile e la vista dalla suite toglie il fiato.',
    name: 'Francesca e Luca',
    location: 'Milano',
    stay: 'Suite Vista Mare · Giugno',
  },
  {
    quote:
      'La colazione in terrazza è un rito da non perdere. Prodotti genuini, dolci fatti in casa e un silenzio che rigenera. Torneremo sicuramente!',
    name: 'Sophie M.',
    location: 'Lione',
    stay: 'Camera Deluxe · Settembre',
  },
  {
    quote:
      'Posizione perfetta per esplorare la costa e le montagne. I bambini hanno adorato il parco e la piscina. Personale gentilissimo e sempre disponibile.',
    name: 'Famiglia Rossi',
    location: 'Torino',
    stay: 'Suite Giardino · Agosto',
  },
]

export function Testimonials() {
  return (
    <section
      id="recensioni"
      aria-labelledby="recensioni-title"
      className="bg-secondary py-24 text-secondary-foreground md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="recensioni-title"
          tone="inverse"
          eyebrow="Dicono di noi"
          title="Le parole dei nostri ospiti"
          description="Oltre 600 recensioni con una media di 4,9 su 5. La soddisfazione dei nostri ospiti è il nostro orgoglio."
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              {/* Ottimizzazione: Aggiunta transizione e sollevamento al passaggio del mouse (hover) */}
              <figure className="flex h-full flex-col gap-6 rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary-foreground/30 hover:bg-secondary-foreground/10 shadow-sm">
                <Quote className="size-8 text-accent" aria-hidden="true" />
                <div className="flex gap-1 text-accent" role="img" aria-label="Valutazione: 5 stelle su 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="font-serif text-xl leading-relaxed text-pretty">
                  <p>{`“${t.quote}”`}</p>
                </blockquote>
                <figcaption className="mt-auto border-t border-secondary-foreground/15 pt-5">
                  <p className="font-medium">
                    {t.name}, <span className="font-normal text-secondary-foreground/70">{t.location}</span>
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-secondary-foreground/60">
                    {t.stay}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}