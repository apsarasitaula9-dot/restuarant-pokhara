import { UtensilsCrossed, Leaf, Soup, Heart } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const benefits = [
  {
    icon: UtensilsCrossed,
    title: 'Authentic Thakali Cuisine',
    text: 'Recipes rooted in the Kali Gandaki valley, cooked the traditional way with in-house masalas and time-honored technique.',
  },
  {
    icon: Leaf,
    title: 'Traditional Nepali Flavors',
    text: 'The balance of smoky, tangy and spiced that defines a real Nepali meal — from sukuti to achar, dal to dhindo.',
  },
  {
    icon: Soup,
    title: 'Fresh & Flavorful Meals',
    text: 'Ingredients sourced and prepared daily, with generous portions meant to satisfy and bring people together.',
  },
  {
    icon: Heart,
    title: 'A Warm Dining Experience',
    text: 'The hospitality Thakali kitchens are known for — a welcoming table, unhurried service, and food made with care.',
  },
];

export function WhyChooseUs() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <SectionLabel className="reveal justify-center">
            Why Dine With Us
          </SectionLabel>
          <h2 className="reveal reveal-delay-1 mt-5 font-serif text-4xl text-charcoal-900 sm:text-5xl">
            A Kitchen You Can Trust
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`reveal reveal-delay-${i + 1} group rounded-2xl border border-charcoal-900/5 bg-white p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal-900/8`}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream-100 ring-1 ring-copper-400/20 transition-colors duration-500 group-hover:bg-copper-400/10">
                  <Icon size={26} className="text-copper-600" strokeWidth={1.4} />
                </div>
                <h3 className="mt-5 font-serif text-xl text-charcoal-900">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  {b.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
