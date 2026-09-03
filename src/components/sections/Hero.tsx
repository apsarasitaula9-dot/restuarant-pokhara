import { MapPin, UtensilsCrossed, ChevronDown, Star } from 'lucide-react';
import { images } from '@/data/images';
import { restaurantInfo } from '@/data/restaurant';

export function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image with Ken Burns zoom */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt={images.heroAlt}
          className="h-full w-full object-cover animate-zoom-ken"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/40 to-charcoal-950/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col items-center justify-center px-5 text-center sm:px-8">
        {/* Devanagari accent */}
        <p
          className="mb-4 font-deva text-base text-copper-300/90 opacity-0 sm:text-lg"
          style={{ animation: 'fade-down 0.9s 0.2s cubic-bezier(0.22,1,0.36,1) forwards' }}
        >
          {restaurantInfo.nepaliTagline}
        </p>

        {/* Rating badge */}
        <div
          className="mb-5 opacity-0"
          style={{ animation: 'fade-down 0.8s 0.35s cubic-bezier(0.22,1,0.36,1) forwards' }}
        >
          <a
            href={restaurantInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-copper-400/30 bg-charcoal-900/70 px-4 py-1.5 text-xs text-cream-100 backdrop-blur-md transition-all duration-300 hover:border-copper-400/60 hover:bg-charcoal-900/90 hover:scale-105"
            title="View 1,022 reviews on Google Maps"
          >
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="font-semibold text-copper-300">{restaurantInfo.rating.toFixed(1)}</span>
            <span className="text-cream-300/40">·</span>
            <span className="text-cream-200/80 transition-colors group-hover:text-cream-50">
              {restaurantInfo.totalReviews} Google Reviews
            </span>
          </a>
        </div>

        {/* Restaurant name */}
        <h1
          className="max-w-4xl font-serif text-5xl leading-[1.05] text-cream-50 opacity-0 sm:text-7xl md:text-8xl"
          style={{ animation: 'fade-up 1s 0.55s cubic-bezier(0.22,1,0.36,1) forwards' }}
        >
          {restaurantInfo.name}
        </h1>

        {/* Tagline / Main headline */}
        <p
          className="mt-6 max-w-2xl font-serif text-xl italic text-cream-100/90 opacity-0 sm:text-2xl md:text-3xl"
          style={{ animation: 'fade-up 1s 0.75s cubic-bezier(0.22,1,0.36,1) forwards' }}
        >
          “{restaurantInfo.tagline}”
        </p>

        {/* Supporting text */}
        <p
          className="mt-4 max-w-xl text-sm leading-relaxed text-cream-200/80 opacity-0 sm:text-base"
          style={{ animation: 'fade-up 1s 0.95s cubic-bezier(0.22,1,0.36,1) forwards' }}
        >
          {restaurantInfo.subheadline}
        </p>

        {/* CTAs */}
        <div
          className="mt-9 flex flex-col items-center gap-3 opacity-0 sm:flex-row sm:gap-4"
          style={{ animation: 'fade-up 1s 1.15s cubic-bezier(0.22,1,0.36,1) forwards' }}
        >
          <a
            href="#menu"
            className="group flex items-center gap-2 rounded-full bg-copper-400 px-8 py-3.5 text-sm font-medium uppercase tracking-label text-charcoal-900 transition-all duration-300 hover:bg-copper-300 hover:shadow-lg hover:shadow-copper-400/30"
          >
            <UtensilsCrossed size={16} />
            Explore Menu
          </a>
          <a
            href={restaurantInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-cream-200/30 px-8 py-3.5 text-sm font-medium uppercase tracking-label text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-cream-200/60 hover:bg-cream-50/10"
          >
            <MapPin size={16} />
            Get Directions
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#favorites"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-200/50 transition-colors hover:text-cream-100"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-label">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
