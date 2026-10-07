import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Amenities } from '@/components/amenities'
import { Rooms } from '@/components/rooms'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { BookingSection } from '@/components/booking-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Amenities />
        <Rooms />
        <Gallery />
        <Testimonials />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  )
}
