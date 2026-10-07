import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const photos = [
  {
    src: '/images/gallery-piscina.png',
    alt: 'Piscina a sfioro con lettini affacciata sul mare al tramonto',
    caption: 'La piscina panoramica',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/gallery-salotto.png',
    alt: 'Salotto con soffitto a volta, camino in pietra e divani in lino',
    caption: 'Il salotto',
    className: 'md:row-span-2',
  },
  {
    src: '/images/gallery-colazione.png',
    alt: 'Colazione italiana servita in terrazza con cornetti, caffè e frutta fresca',
    caption: 'Colazione in terrazza',
    className: '',
  },
  {
    src: '/images/gallery-parco.png',
    alt: 'Viale del parco privato tra cipressi, ulivi e lavanda',
    caption: 'Il parco privato',
    className: 'md:row-span-2',
  },
  {
    src: '/images/gallery-costa.png',
    alt: 'Borgo colorato sulla costa con mare turchese e montagne verdi',
    caption: 'La costa a pochi passi',
    className: 'md:col-span-2',
  },
  {
    src: '/images/gallery-terrazza.png',
    alt: 'Tavolo apparecchiato a lume di candela sotto un pergolati al tramonto',
    caption: 'Cene sotto le stelle',
    className: '',
  },
]

export function Gallery() {
  return (
    <section id="galleria" aria-labelledby="galleria-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="galleria-title"
          eyebrow="Galleria"
          title="Scorci di bellezza quotidiana"
          description="Luce dorata, profumo di limoni e il suono delle onde: ecco come si vive a Villa Belvedere."
        />

        <ul className="mt-16 grid grid-flow-dense auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[200px] md:grid-cols-4">
          {photos.map((photo) => (
            <li
              key={photo.src}
              className={cn('group relative overflow-hidden rounded-xl shadow-sm', photo.className)}
            >
              <figure className="h-full">
                {/* Ottimizzazione: Aggiunta quality={90} e ottimizzazione dei sizes per il responsive */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100"
                />
                <figcaption className="absolute bottom-4 left-4 font-serif text-xl text-white">
                  {photo.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}