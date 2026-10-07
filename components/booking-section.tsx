import { Mail, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { BookingForm } from '@/components/booking-form'

export function BookingSection() {
  return (
    <section id="prenota" aria-labelledby="prenota-title" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-5 lg:px-8">
        <div className="flex flex-col gap-10 lg:col-span-2">
          <SectionHeading
            id="prenota-title"
            align="left"
            eyebrow="Disponibilità"
            title="Pianifica la tua fuga"
            description="Inviaci le date del tuo soggiorno: ti risponderemo personalmente con la migliore offerta disponibile, senza costi di intermediazione."
          />

          <address id="contatti" className="flex scroll-mt-24 flex-col gap-5 not-italic">
            {/* Ottimizzazione: Aggiunti stili di focus accessibili da tastiera */}
            <a 
              href="tel:+390891234567" 
              className="group flex items-center gap-4 text-foreground transition-colors hover:text-primary rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-primary transition-transform duration-300 group-hover:scale-105">
                <Phone className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">Telefono</span>
                +39 089 123 4567
              </span>
            </a>
            
            <a 
              href="mailto:info@villabelvedere.it" 
              className="group flex items-center gap-4 text-foreground transition-colors hover:text-primary rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-primary transition-transform duration-300 group-hover:scale-105">
                <Mail className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                info@villabelvedere.it
              </span>
            </a>

            <div className="flex items-center gap-4 text-foreground">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-primary">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground">Indirizzo</span>
                Via del Belvedere 12, 84017 Positano (SA)
              </span>
            </div>
          </address>
        </div>

        <div className="lg:col-span-3">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}