import { SectionLabel } from '@/components/ui/SectionLabel';
import { images } from '@/data/images';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="bg-charcoal-900 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div className="reveal relative order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={images.aboutDish}
                alt={images.aboutDishAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-cream-50 p-5 shadow-xl sm:block lg:-right-6">
              <p className="font-serif text-3xl text-copper-600">100%</p>
              <p className="mt-1 max-w-[10rem] text-xs leading-snug text-charcoal-600">
                Authentic Thakali recipes, made from scratch
              </p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -left-5 -top-5 -z-10 h-24 w-24 rounded-full border border-copper-400/20" />
          </div>

          {/* Text side */}
          <div className="order-2 lg:pl-4">
            <SectionLabel light className="reveal">
              About Us
            </SectionLabel>
            <h2 className="reveal reveal-delay-1 mt-5 font-serif text-4xl leading-tight text-cream-50 sm:text-5xl">
              Authentic Thakali Taste
            </h2>

            <div className="reveal reveal-delay-2 mt-6 space-y-5 text-sm leading-relaxed text-cream-200/75 sm:text-base">
              <p>
                Welcome to Pokhara Thakali Kitchen. We are dedicated to serving
                traditional Thakali cuisine and rich Nepali flavors in an authentic,
                welcoming dining atmosphere in Pokhara.
              </p>
              <p>
                Our kitchen focuses on what makes Thakali food special: wholesome
                Dal Bhat, generous Thakali Thali sets served with hot rice, dal,
                seasoned curries, tangy achars, and aromatic ghee.
              </p>
              <p>
                From rich mutton curries and tender chicken dishes to savory
                sukuti and hearty sides, every meal is prepared with care to bring
                you a satisfying and memorable dining experience.
              </p>
            </div>

            {/* Highlights */}
            <div className="reveal reveal-delay-3 mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: 'Traditional Recipes', sub: 'Cooked the Thakali way' },
                { title: 'Generous Portions', sub: 'Meals meant to be shared' },
                { title: 'Fresh Ingredients', sub: 'Sourced & prepared daily' },
                { title: 'Warm Hospitality', sub: 'A welcoming table for all' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-cream-200/10 bg-charcoal-800/40 p-4"
                >
                  <p className="font-serif text-lg text-cream-50">{item.title}</p>
                  <p className="mt-1 text-xs text-cream-300/60">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
