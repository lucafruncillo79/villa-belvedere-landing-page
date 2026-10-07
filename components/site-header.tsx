'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#camere', label: 'Camere' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#contatti', label: 'Contatti' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        solid
          ? 'border-b border-border bg-background/95 text-foreground backdrop-blur'
          : 'bg-transparent text-white',
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md" aria-label="Villa Belvedere, torna all'inizio">
          <span className="font-serif text-2xl font-medium tracking-wide">Villa Belvedere</span>
          <span
            className={cn(
              'text-[10px] uppercase tracking-[0.35em]',
              solid ? 'text-muted-foreground' : 'text-white/75',
            )}
          >
            Boutique B&amp;B
          </span>
        </a>

        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1 py-0.5">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#prenota"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-95 md:inline-flex shadow-sm"
        >
          Prenota ora
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Ottimizzazione: Animazione di comparsa fluida per il menu mobile */}
      {open ? (
        <nav id="menu-mobile" aria-label="Navigazione mobile" className="border-t border-border md:hidden bg-background/95 backdrop-blur animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md py-3 text-base transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-2">
              <a
                href="#prenota"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground shadow-md"
              >
                Prenota ora
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}