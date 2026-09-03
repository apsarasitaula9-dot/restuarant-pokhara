import { useState } from 'react';
import { Info } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { menuCategories, type MenuItem } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className="group flex items-baseline gap-3 py-3">
      {/* Name */}
      <span className="font-serif text-lg text-charcoal-800 transition-colors group-hover:text-copper-600">
        {item.name}
      </span>

      {/* Dotted leader */}
      <span className="mx-1 hidden flex-1 translate-y-[-2px] border-b border-dotted border-charcoal-300/40 sm:block" />

      {/* Price */}
      <span className="shrink-0 text-sm font-medium text-copper-600">
        {item.price}
      </span>
    </li>
  );
}

export function Menu() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState(menuCategories[0].id);

  const activeCategory = menuCategories.find((c) => c.id === active)!;
  const isAlcohol = activeCategory.id === 'alcohol';

  return (
    <section id="menu" ref={ref} className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionLabel className="reveal justify-center">
            Our Menu
          </SectionLabel>
          <h2 className="reveal reveal-delay-1 mt-5 font-serif text-4xl text-charcoal-900 sm:text-5xl">
            A Taste of Thakali
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-charcoal-600 sm:text-base">
            Browse the full menu by category. From comforting thali sets to
            traditional sukuti and cool refreshments — there's something for
            every craving.
          </p>
        </div>

        {/* Category tabs */}
        <div className="reveal reveal-delay-3 mb-10">
          {/* Horizontal scroll strip */}
          <div className="scroll-fade -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 sm:no-scrollbar">
            {menuCategories.map((cat) => {
              const isActive = cat.id === active;
              const isAlc = cat.id === 'alcohol';
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-label transition-all duration-300 sm:px-5 sm:py-2.5 ${
                    isActive
                      ? isAlc
                        ? 'bg-rust-500 text-cream-50 shadow-md shadow-rust-500/20'
                        : 'bg-copper-400 text-charcoal-900 shadow-md shadow-copper-400/20'
                      : 'bg-white text-charcoal-600 ring-1 ring-charcoal-900/5 hover:ring-copper-400/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Alcohol separator notice */}
        {isAlcohol && (
          <div className="reveal mx-auto mb-8 flex max-w-2xl items-center gap-3 rounded-lg border border-rust-500/20 bg-rust-500/5 px-5 py-3 text-center">
            <Info size={16} className="shrink-0 text-rust-500" />
            <p className="text-xs leading-relaxed text-rust-600">
              Alcohol is served separately from the main food menu. Please drink
              responsibly. ID may be required.
            </p>
          </div>
        )}

        {/* Menu panel */}
        <div
          key={active}
          className="mx-auto max-w-4xl animate-fade-up rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal-900/5 sm:p-10 lg:p-12"
        >
          {/* Category title */}
          <div className="mb-6 text-center">
            <h3 className="font-serif text-3xl text-charcoal-900 sm:text-4xl">
              {activeCategory.label}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-label text-copper-600">
              {activeCategory.subtitle}
            </p>
            <div className="hairline mx-auto mt-5 max-w-xs" />
          </div>

          {/* Items — two columns on larger screens */}
          <ul
            className={`grid gap-x-10 gap-y-0 sm:grid-cols-2 ${
              activeCategory.items.length <= 2 ? 'sm:grid-cols-1' : ''
            }`}
          >
            {activeCategory.items.map((item) => (
              <div key={item.name}>
                <MenuRow item={item} />
                {item.description && (
                  <p className="-mt-1 mb-2 pl-1 text-xs leading-relaxed text-charcoal-500">
                    {item.description}
                  </p>
                )}
                {item.note === 'confirm' && (
                  <p className="-mt-1 mb-2 pl-1 text-[11px] italic text-copper-600/80">
                    Please confirm current pricing
                  </p>
                )}
                {item.note === 'range' && (
                  <p className="-mt-1 mb-2 pl-1 text-[11px] italic text-copper-600/80">
                    Price varies by size
                  </p>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* Pricing note */}
        <p className="reveal mt-8 text-center text-xs text-charcoal-500">
          Prices are in Nepali Rupees (Rs) and are indicative for this demo. Please
          confirm current pricing at the restaurant.
        </p>
      </div>
    </section>
  );
}
