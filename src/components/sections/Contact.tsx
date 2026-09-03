import { Phone, MapPin, Navigation, Star, Clock, Banknote } from 'lucide-react';
import { images } from '@/data/images';
import { restaurantInfo } from '@/data/restaurant';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.spices}
          alt={images.spicesAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal-950/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-charcoal-950/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="reveal mb-5 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-copper-300/50" />
          <span className="text-xs font-medium uppercase tracking-wide-label text-copper-300">
            Reservations & Inquiries
          </span>
          <span className="h-px w-10 bg-copper-300/50" />
        </div>

        <h2 className="reveal reveal-delay-1 font-serif text-4xl text-cream-50 sm:text-5xl md:text-6xl">
          {restaurantInfo.name}
        </h2>

        <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream-200/75 sm:text-base">
          Join us for an authentic Thakali dining experience in Pokhara. We look
          forward to welcoming you with traditional hospitality and hearty meals.
        </p>

        {/* Real Info Grid */}
        <div className="reveal reveal-delay-3 mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Address */}
          <div className="rounded-xl border border-cream-100/10 bg-charcoal-900/60 p-4 text-left backdrop-blur-sm">
            <div className="flex items-center gap-2 text-copper-300">
              <MapPin size={16} />
              <span className="text-[10px] font-semibold uppercase tracking-label">Location</span>
            </div>
            <p className="mt-2 text-xs font-medium text-cream-50">
              6X46+9H8, Gauri Marg
            </p>
            <p className="text-[11px] text-cream-300/60">
              Pokhara, Gandaki Province
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-xl border border-cream-100/10 bg-charcoal-900/60 p-4 text-left backdrop-blur-sm">
            <div className="flex items-center gap-2 text-copper-300">
              <Phone size={16} />
              <span className="text-[10px] font-semibold uppercase tracking-label">Phone</span>
            </div>
            <a
              href={restaurantInfo.phoneHref}
              className="mt-2 block text-xs font-medium text-cream-50 transition-colors hover:text-copper-300"
            >
              {restaurantInfo.phone}
            </a>
            <p className="text-[11px] text-cream-300/60">
              Call for reservations
            </p>
          </div>

          {/* Price Range */}
          <div className="rounded-xl border border-cream-100/10 bg-charcoal-900/60 p-4 text-left backdrop-blur-sm">
            <div className="flex items-center gap-2 text-copper-300">
              <Banknote size={16} />
              <span className="text-[10px] font-semibold uppercase tracking-label">Price Range</span>
            </div>
            <p className="mt-2 text-xs font-medium text-cream-50">
              {restaurantInfo.priceRange}
            </p>
            <p className="text-[11px] text-cream-300/60">
              Generous thali sets
            </p>
          </div>

          {/* Opening Status */}
          <div className="rounded-xl border border-cream-100/10 bg-charcoal-900/60 p-4 text-left backdrop-blur-sm">
            <div className="flex items-center gap-2 text-copper-300">
              <Clock size={16} />
              <span className="text-[10px] font-semibold uppercase tracking-label">Hours</span>
            </div>
            <p className="mt-2 text-xs font-medium text-cream-50">
              {restaurantInfo.openingHours}
            </p>
            <p className="text-[11px] text-sage-400">
              Open today
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="reveal reveal-delay-4 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {/* Call Now */}
          <a
            href={restaurantInfo.phoneHref}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-copper-400 px-8 py-4 text-xs font-semibold uppercase tracking-label text-charcoal-900 transition-all duration-300 hover:bg-copper-300 hover:shadow-lg hover:shadow-copper-400/30 sm:w-auto"
          >
            <Phone size={15} />
            Call Now
          </a>

          {/* Get Directions */}
          <a
            href={restaurantInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-cream-200/30 px-8 py-4 text-xs font-semibold uppercase tracking-label text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-cream-200/60 hover:bg-cream-50/10 sm:w-auto"
          >
            <Navigation size={15} />
            Get Directions
          </a>

          {/* View Reviews */}
          <a
            href={restaurantInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-cream-200/30 px-8 py-4 text-xs font-semibold uppercase tracking-label text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-cream-200/60 hover:bg-cream-50/10 sm:w-auto"
          >
            <Star size={15} className="text-amber-400" />
            View Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
