import { Mail, MapPin, Phone } from 'lucide-react'

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TripadvisorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6.5" cy="13.5" r="3.5" />
      <circle cx="17.5" cy="13.5" r="3.5" />
      <path d="M2 8h20M12 8l-2 9.5M12 8l2 9.5" />
    </svg>
  )
}

const socials = [
  { href: 'https://instagram.com', label: 'Instagram', icon: InstagramIcon },
  { href: 'https://facebook.com', label: 'Facebook', icon: FacebookIcon },
  { href: 'https://tripadvisor.it', label: 'Tripadvisor', icon: TripadvisorIcon },
]

const links = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#camere', label: 'Camere e suite' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#prenota', label: 'Prenota' },
]

export function SiteFooter() {
  /* Ottimizzazione: Anno dinamico in tempo reale */
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4 md:col-span-2">
          <p className="font-serif text-3xl">Villa Belvedere</p>
          <p className="max-w-sm text-sm leading-relaxed text-background/70">
            Boutique B&amp;B sulla costa italiana. Ospitalità autentica, eleganza discreta e
            panorami che restano nel cuore.
          </p>
          <ul className="mt-2 flex gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguici su ${label}`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-background/25 transition-colors hover:border-primary hover:bg-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Link utili">
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-background/60">Esplora</h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-background/85 transition-colors hover:text-background">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-background/60">Contatti</h2>
          <address className="mt-5 flex flex-col gap-3 text-sm not-italic text-background/85">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              Via del Belvedere 12, 84017 Positano (SA), Italia
            </p>
            <a href="tel:+390891234567" className="flex items-center gap-2 transition-colors hover:text-background">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              +39 089 123 4567
            </a>
            <a href="mailto:info@villabelvedere.it" className="flex items-center gap-2 transition-colors hover:text-background">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              info@villabelvedere.it
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-background/60 sm:flex-row sm:justify-between lg:px-8">
          <p>{`© ${currentYear} Villa Belvedere. Tutti i diritti riservati.`}</p>
          <p>P.IVA 01234567890 · CIN IT065100C1ABCDEFGH</p>
        </div>
      </div>
    </footer>
  )
}