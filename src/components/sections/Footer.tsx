import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#visit' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-950 py-14">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-copper-400/50 font-serif text-lg text-copper-300">
                थ
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-medium text-cream-50">
                  {restaurantInfo.name}
                </span>
                <span className="text-[10px] uppercase tracking-label text-copper-300/80">
                  Authentic Nepali Cuisine
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-300/60">
              Authentic Thakali cuisine in Pokhara.
            </p>

            <p className="mt-3 font-deva text-sm text-copper-300/70">
              {restaurantInfo.nepaliTagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="text-xs uppercase tracking-label text-copper-300">
              Navigation
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-sm text-cream-200/70 transition-colors hover:text-cream-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map Link */}
          <div>
            <h4 className="text-xs uppercase tracking-label text-copper-300">
              Contact & Location
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream-200/65">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-copper-400/70" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-copper-400/70" />
                <a
                  href={restaurantInfo.phoneHref}
                  className="transition-colors hover:text-copper-300"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={restaurantInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-label text-copper-300 transition-colors hover:text-copper-200"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-light mt-12" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-cream-300/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {restaurantInfo.name}.
          </p>
          <p className="italic text-cream-300/50">
            {restaurantInfo.conceptDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
