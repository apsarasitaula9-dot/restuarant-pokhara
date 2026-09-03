import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { restaurantInfo, reviews } from '@/data/restaurant';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Reviews() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<'grid' | 'carousel'>('carousel');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" ref={ref} className="bg-cream-100/70 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionLabel className="reveal justify-center">
            Google Reviews
          </SectionLabel>
          <h2 className="reveal reveal-delay-1 mt-5 font-serif text-4xl text-charcoal-900 sm:text-5xl">
            Loved by Our Guests
          </h2>

          {/* Prominent Rating Card */}
          <div className="reveal reveal-delay-2 mx-auto mt-6 inline-flex flex-col items-center gap-3 rounded-2xl border border-charcoal-900/5 bg-white px-8 py-5 shadow-sm sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="font-serif text-4xl font-semibold text-charcoal-900">
                {restaurantInfo.rating.toFixed(1)}
              </span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>

            <div className="hidden h-8 w-px bg-cream-300 sm:block" />

            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-charcoal-800">
                Based on {restaurantInfo.totalReviews} Google reviews
              </p>
              <p className="text-xs text-charcoal-500">
                Authentic ratings from real visitors
              </p>
            </div>

            <div className="mt-2 sm:mt-0 sm:pl-2">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-copper-400 px-5 py-2 text-xs font-medium uppercase tracking-label text-charcoal-900 transition-all duration-300 hover:bg-copper-300 hover:shadow-md hover:shadow-copper-400/25"
              >
                View All Google Reviews
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Carousel controls header for desktop */}
        <div className="reveal reveal-delay-3 mb-6 flex items-center justify-between">
          <p className="text-xs uppercase tracking-label text-charcoal-500">
            Selected Reviews ({reviews.length})
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-900/10 bg-white text-charcoal-700 shadow-sm transition-all hover:border-copper-400 hover:text-copper-600 active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-medium text-charcoal-500">
              {currentIndex + 1} / {reviews.length}
            </span>
            <button
              onClick={nextReview}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-900/10 bg-white text-charcoal-700 shadow-sm transition-all hover:border-copper-400 hover:text-copper-600 active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid / Responsive Slider */}
        <div className="reveal reveal-delay-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, index) => {
            const isHighlighted = index === currentIndex;
            return (
              <article
                key={rev.id}
                className={`relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal-900/8 ${
                  isHighlighted ? 'ring-2 ring-copper-400' : ''
                }`}
              >
                <div>
                  {/* Top row: Stars & Google label */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-md bg-cream-100 px-2 py-0.5 text-[10px] font-medium text-charcoal-600">
                      <span className="font-semibold text-blue-600">G</span>
                      Google Review
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal-700">
                    “{rev.comment}”
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="mt-6 flex items-center justify-between border-t border-cream-200 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-copper-400/20 font-serif text-sm font-semibold text-copper-600 ring-1 ring-copper-400/40">
                      {rev.avatarInitial}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold leading-tight text-charcoal-900">
                        {rev.reviewer}
                      </h4>
                      <p className="text-[11px] text-charcoal-400">{rev.date}</p>
                    </div>
                  </div>

                  <Quote size={20} className="text-cream-300" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Section 5: Google Review CTA */}
        <div className="reveal reveal-delay-5 mt-14 rounded-2xl border border-copper-400/20 bg-gradient-to-r from-cream-100 via-white to-cream-100 p-8 text-center shadow-sm">
          <div className="mx-auto max-w-xl">
            <div className="mb-3 flex items-center justify-center gap-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-charcoal-800">
                {restaurantInfo.rating.toFixed(1)} ★ · {restaurantInfo.totalReviews} Google Reviews
              </span>
            </div>

            <h3 className="font-serif text-2xl text-charcoal-900 sm:text-3xl">
              See what our guests are saying on Google.
            </h3>

            <p className="mt-2 text-xs text-charcoal-600 sm:text-sm">
              Read real customer impressions, dish recommendations, and dining experiences directly on Google Maps.
            </p>

            <div className="mt-6">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-copper-400 px-8 py-3.5 text-xs font-semibold uppercase tracking-label text-charcoal-900 transition-all duration-300 hover:bg-copper-300 hover:shadow-lg hover:shadow-copper-400/30"
              >
                Read More Reviews on Google
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
