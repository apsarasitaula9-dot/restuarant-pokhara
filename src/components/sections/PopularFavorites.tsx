import { SectionLabel } from '@/components/ui/SectionLabel';
import { images } from '@/data/images';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Dish {
  name: string;
  description: string;
  price: string;
  img: string;
  alt: string;
  popular?: boolean;
}

const dishes: Dish[] = [
  {
    name: 'Momo',
    description: 'Hand-folded steamed dumplings with a choice of chicken or veg filling, served with house chutney.',
    price: 'Rs 200 – 270',
    img: images.momo,
    alt: images.momoAlt,
    popular: true,
  },
  {
    name: 'Mutton Curry',
    description: 'Slow-cooked tender mutton in a rich, spiced gravy with traditional Thakali masala.',
    price: 'Rs 320',
    img: images.muttonCurry,
    alt: images.muttonCurryAlt,
    popular: true,
  },
  {
    name: 'Thakali Chicken Khana Set',
    description: 'A complete meal — rice, dal, chicken curry, seasonal sides, achar, papad, ghee and curd.',
    price: 'Rs 520',
    img: images.thaliSet,
    alt: images.thaliSetAlt,
    popular: true,
  },
  {
    name: 'Chicken Thali',
    description: 'Generous thali with chicken curry, rice, lentils, salad and homemade pickles.',
    price: 'Rs 520',
    img: images.chickenThali,
    alt: images.chickenThaliAlt,
    popular: true,
  },
];

export function PopularFavorites() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="favorites"
      ref={ref}
      className="bg-cream-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <SectionLabel className="reveal justify-center">
            Guest Favorites
          </SectionLabel>
          <h2 className="reveal reveal-delay-1 mt-5 font-serif text-4xl text-charcoal-900 sm:text-5xl">
            Popular Favorites
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-charcoal-600 sm:text-base">
            The dishes our guests come back for — the heart of our Thakali kitchen,
            plated with care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {dishes.map((dish, i) => (
            <article
              key={dish.name}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-charcoal-900/5 transition-all duration-500 hover:shadow-xl hover:shadow-charcoal-900/10`}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent" />

                {/* Popular badge */}
                {dish.popular && (
                  <span className="absolute left-4 top-4 rounded-full bg-copper-400/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-label text-charcoal-900 backdrop-blur-sm">
                    Popular
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl text-charcoal-900">{dish.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-600">
                  {dish.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-cream-200 pt-3">
                  <span className="text-xs uppercase tracking-label text-copper-600">
                    {dish.price}
                  </span>
                  <span className="text-[10px] uppercase tracking-label text-charcoal-400">
                    {dish.popular ? 'Signature' : ' Loved'}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* See full menu */}
        <div className="reveal reveal-delay-5 mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-label text-copper-600 transition-colors hover:text-copper-500"
          >
            View Full Menu
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
