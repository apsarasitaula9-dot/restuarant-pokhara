import { MapPin, Phone, Clock, Banknote, Navigation, ExternalLink, Star } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { restaurantInfo } from '@/data/restaurant';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function VisitUs() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="visit" ref={ref} className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <SectionLabel className="reveal justify-center">
            Find Us
          </SectionLabel>
          <h2 className="reveal reveal-delay-1 mt-5 font-serif text-4xl text-charcoal-900 sm:text-5xl">
            Visit Us
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-charcoal-600 sm:text-base">
            Located on Gauri Marg in Pokhara. Come experience authentic Thakali hospitality,
            wholesome thalis, and hearty flavors.
          </p>
        </div>

        {/* Split layout: LEFT info cards & CTA, RIGHT map preview */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: Details & Actions (5 cols on lg) */}
          <div className="reveal flex flex-col justify-between space-y-4 lg:col-span-5">
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-charcoal-900/5 transition-all hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100 ring-1 ring-copper-400/20">
                  <MapPin size={20} className="text-copper-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-copper-600">
                    Address
                  </p>
                  <p className="mt-1 font-serif text-lg font-medium leading-snug text-charcoal-900">
                    {restaurantInfo.address}
                  </p>
                  <p className="mt-1 text-xs text-charcoal-500">
                    Pokhara, Gandaki Province
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-charcoal-900/5 transition-all hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100 ring-1 ring-copper-400/20">
                  <Phone size={20} className="text-copper-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-copper-600">
                    Phone
                  </p>
                  <a
                    href={restaurantInfo.phoneHref}
                    className="mt-1 block font-serif text-xl font-medium text-charcoal-900 transition-colors hover:text-copper-600"
                  >
                    {restaurantInfo.phone}
                  </a>
                  <p className="mt-1 text-xs text-charcoal-500">
                    Direct call for inquiries or orders
                  </p>
                </div>
              </div>

              {/* Price range */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-charcoal-900/5 transition-all hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100 ring-1 ring-copper-400/20">
                  <Banknote size={20} className="text-copper-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-copper-600">
                    Price Range
                  </p>
                  <p className="mt-1 font-serif text-xl font-medium text-charcoal-900">
                    {restaurantInfo.priceRange}
                  </p>
                  <p className="mt-1 text-xs text-charcoal-500">
                    Generous traditional meals
                  </p>
                </div>
              </div>

              {/* Opening status */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-charcoal-900/5 transition-all hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100 ring-1 ring-copper-400/20">
                  <Clock size={20} className="text-copper-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-copper-600">
                    Opening Hours
                  </p>
                  <p className="mt-1 font-serif text-xl font-medium text-charcoal-900">
                    {restaurantInfo.openingHours}
                  </p>
                  <p className="mt-1 text-xs text-sage-600 font-medium">
                    ● Daily service in Pokhara
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions button */}
            <div className="pt-2">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-copper-400 px-8 py-4 text-sm font-semibold uppercase tracking-label text-charcoal-900 transition-all duration-300 hover:bg-copper-300 hover:shadow-lg hover:shadow-copper-400/30"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </div>

          {/* RIGHT: Elegant Map Card / Map Preview (7 cols on lg) */}
          <div className="reveal reveal-delay-2 relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-3xl bg-charcoal-900 p-6 shadow-xl sm:p-8 lg:col-span-7">
            {/* Map styling & subtle decorative contours */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="h-full w-full object-cover" viewBox="0 0 600 400" fill="none">
                <path d="M0 60 Q150 40 300 80 T600 70" stroke="#c8904f" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M0 120 Q180 90 360 140 T600 130" stroke="#c8904f" strokeWidth="1.5" />
                <path d="M0 190 Q120 160 300 210 T600 200" stroke="#c8904f" strokeWidth="1.2" />
                <path d="M0 270 Q200 240 400 290 T600 280" stroke="#c8904f" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M0 340 Q140 310 280 360 T600 350" stroke="#c8904f" strokeWidth="1" />
                <path d="M80 0 Q70 140 120 260 T90 400" stroke="#c8904f" strokeWidth="1" />
                <path d="M260 0 Q250 120 290 240 T270 400" stroke="#c8904f" strokeWidth="1.5" />
                <path d="M440 0 Q420 150 470 270 T430 400" stroke="#c8904f" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="300" cy="210" r="48" stroke="#c8904f" strokeWidth="0.8" opacity="0.4" />
                <circle cx="300" cy="210" r="96" stroke="#c8904f" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>

            {/* Gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/90 to-charcoal-950/75 pointer-events-none" />

            {/* Top header badge */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-copper-400/30 bg-charcoal-800/80 px-4 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-label text-cream-100">
                  Pokhara, Nepal
                </span>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-copper-400/20 bg-charcoal-800/80 px-3.5 py-1 text-xs text-amber-400 backdrop-blur-md">
                <Star size={13} className="fill-amber-400 text-amber-400" />
                <span className="font-semibold text-cream-50">{restaurantInfo.rating.toFixed(1)}</span>
                <span className="text-cream-300/50">({restaurantInfo.totalReviews})</span>
              </div>
            </div>

            {/* Center: Location Pin card */}
            <div className="relative z-10 my-auto flex flex-col items-center py-8 text-center">
              <div className="relative mb-5 flex h-20 w-20 items-center justify-center">
                {/* Radar pulse ripples */}
                <div className="absolute inset-0 rounded-full bg-copper-400/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute -inset-3 rounded-full border border-copper-400/30" />
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-copper-400 text-charcoal-900 shadow-xl shadow-copper-400/30 ring-4 ring-charcoal-900">
                  <MapPin size={30} className="fill-charcoal-900" />
                </div>
              </div>

              <h3 className="font-serif text-3xl font-semibold text-cream-50 sm:text-4xl">
                📍 {restaurantInfo.name}
              </h3>

              <p className="mt-2 max-w-sm text-sm font-medium text-copper-300 sm:text-base">
                {restaurantInfo.shortAddress}
              </p>

              <p className="mt-1 text-xs text-cream-200/60">
                Gandaki Province 33700, Nepal
              </p>
            </div>

            {/* Bottom: Open in Maps card overlay */}
            <div className="relative z-10 rounded-2xl border border-cream-100/10 bg-charcoal-800/80 p-4 backdrop-blur-md sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-label text-copper-300">
                  Interactive Navigation
                </p>
                <p className="text-xs text-cream-200/70">
                  View full live satellite & road directions on Google Maps
                </p>
              </div>

              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-cream-50/10 px-5 py-2 text-xs font-medium uppercase tracking-label text-cream-50 transition-all hover:bg-copper-400 hover:text-charcoal-900 sm:mt-0"
              >
                Open Google Maps
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
