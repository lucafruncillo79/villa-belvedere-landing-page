import { CarFront, Coffee, Sparkles, Trees, Waves, Wifi, Wine, Flower2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const amenities = [
  {
    icon: Wifi,
    title: 'Wi-Fi veloce',
    description: 'Connessione in fibra gratuita in tutta la villa, ideale anche per lavorare da remoto.',
  },
  {
    icon: Waves,
    title: 'Piscina panoramica',
    description: 'Una piscina a sfioro sospesa sul mare, con lettini e servizio aperitivo al tramonto.',
  },
  {
    icon: Coffee,
    title: 'Colazione inclusa',
    description: 'Prodotti locali, dolci fatti in casa e caffè espresso serviti in terrazza ogni mattina.',
  },
  {
    icon: Trees,
    title: 'Parco privato',
    description: 'Due ettari di uliveti, cipressi e giardini profumati dove passeggiare in tranquillità.',
  },
  {
    icon: Sparkles,
    title: 'Area benessere',
    description: 'Sauna, bagno turco e massaggi su prenotazione per un relax totale di corpo e mente.',
  },
  {
    icon: Wine,
    title: 'Cantina e degustazioni',
    description: 'Serate dedicate ai vini del territorio, accompagnati da formaggi e salumi tipici.',
  },
  {
    icon: CarFront,
    title: 'Parcheggio gratuito',
    description: 'Posto auto riservato e custodito all’interno della proprietà per tutti gli ospiti.',
  },
  {
    icon: Flower2,
    title: 'Esperienze su misura',
    description: 'Gite in barca, corsi di cucina ed escursioni organizzate dal nostro concierge.',
  },
]

export function Amenities() {
  return (
    <section id="servizi" aria-labelledby="servizi-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="servizi-title"
          eyebrow="I nostri servizi"
          title="Ogni comfort, con il calore di casa"
          description="Abbiamo curato ogni dettaglio per rendere il tuo soggiorno semplice, autentico e indimenticabile."
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map(({ icon: Icon, title, description }) => (
            <li 
              key={title} 
              /* Ottimizzazione: rimosso l'hover generico sul contenitore e aggiunto il selettore group */
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-muted/60"
            >
              {/* Ottimizzazione: l'icona si anima e inverte i colori quando l'utente passa il mouse sulla card */}
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-5 transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-2xl text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}