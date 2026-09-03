import { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import type { GalleryImage } from '@/data/images';

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  const next = useCallback(
    () => onNavigate(((index ?? 0) + 1) % images.length),
    [index, images.length, onNavigate]
  );
  const prev = useCallback(
    () => onNavigate((index ?? 0) - 1 < 0 ? images.length - 1 : (index ?? 0) - 1),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, next, prev]);

  if (!isOpen || index === null) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
    >
      {/* Close */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream-200/20 text-cream-200 transition-colors hover:bg-cream-200/10"
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cream-200/20 text-cream-200 transition-colors hover:bg-cream-200/10 md:left-8"
        aria-label="Previous image"
      >
        <span className="text-xl">‹</span>
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cream-200/20 text-cream-200 transition-colors hover:bg-cream-200/10 md:right-8"
        aria-label="Next image"
      >
        <span className="text-xl">›</span>
      </button>

      {/* Image */}
      <figure
        className="relative max-h-[88vh] max-w-[92vw] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-4 text-center">
          <span className="font-serif text-xl text-cream-100">{img.label}</span>
          <span className="mt-1 block text-xs uppercase tracking-label text-cream-300/60">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
