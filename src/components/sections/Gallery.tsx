import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Lightbox } from '@/components/ui/Lightbox';
import { images, type GalleryImage } from '@/data/images';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const spanClass: Record<GalleryImage['span'], string> = {
  tall: 'sm:row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
};

const aspectClass: Record<GalleryImage['span'], string> = {
  tall: 'aspect-[3/4]',
  wide: 'aspect-[16/10]',
  normal: 'aspect-square',
};

export function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" ref={ref} className="bg-charcoal-900 py-20 sm:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionLabel light className="reveal justify-center">
            Food Gallery
          </SectionLabel>
          <h2 className="reveal reveal-delay-1 mt-5 font-serif text-4xl text-cream-50 sm:text-5xl">
            From Our Kitchen
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream-200/65 sm:text-base">
            A glimpse of the plates, platters and flavors that come out of our
            Thakali kitchen. Tap any image to view it larger.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {images.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-xl ${spanClass[img.span]} ${aspectClass[img.span]}`}
              aria-label={`View ${img.label} larger`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent opacity-60 transition-opacity duration-400 group-hover:opacity-90" />

              {/* Zoom icon */}
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:opacity-100">
                <ZoomIn size={16} />
              </div>

              {/* Label */}
              <span className="absolute bottom-3 left-4 right-4 text-left font-serif text-base text-cream-50 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:text-lg">
                {img.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={images.gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
