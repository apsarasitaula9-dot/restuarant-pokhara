import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrolledPast } from '@/hooks/useScrollReveal';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#visit' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const scrolled = useScrolledPast(60);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-900/95 py-3 shadow-lg shadow-charcoal-950/40 backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-copper-400/50 font-serif text-lg text-copper-300 transition-colors group-hover:border-copper-300">
              थ
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-lg text-cream-50">Pokhara Thakali Kitchen</span>
              <span className="text-[10px] uppercase tracking-label text-copper-300/80">
                Authentic Nepali Cuisine
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-sm font-medium tracking-wide text-cream-100/85 transition-colors hover:text-cream-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Reserve button (desktop) */}
          <a
            href="#contact"
            className="hidden rounded-full border border-copper-400/50 px-5 py-2 text-xs font-medium uppercase tracking-label text-copper-300 transition-all duration-300 hover:bg-copper-400 hover:text-charcoal-900 lg:inline-block"
          >
            Reserve
          </a>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-cream-50 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm transition-opacity duration-400 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-charcoal-900 px-6 pt-6 transition-transform duration-500 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl text-cream-50">Menu</span>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-cream-50"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="hairline-light my-6" />

          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3.5 font-serif text-2xl text-cream-100/90 transition-colors hover:bg-charcoal-700/50 hover:text-copper-300"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? 'translateX(0)' : 'translateX(20px)',
                    transition: `opacity 0.4s ease ${0.1 + i * 0.05}s, transform 0.4s ease ${
                      0.1 + i * 0.05
                    }s`,
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hairline-light my-6" />

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-copper-400 px-6 py-3 text-center text-sm font-medium uppercase tracking-label text-charcoal-900 transition-colors hover:bg-copper-300"
          >
            Reserve a Table
          </a>

          <p className="mt-auto pb-8 pt-6 text-xs text-cream-300/50">
            Authentic Thakali flavors, served with heart.
          </p>
        </div>
      </div>
    </>
  );
}
