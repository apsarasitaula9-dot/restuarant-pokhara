import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

/** Small uppercase copper label with decorative lines. */
export function SectionLabel({ children, light = false, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span
        className={`h-px w-8 ${light ? 'bg-copper-300/50' : 'bg-copper-500/60'}`}
      />
      <span
        className={`text-xs font-medium uppercase tracking-label ${
          light ? 'text-copper-300' : 'text-copper-600'
        }`}
      >
        {children}
      </span>
      <span
        className={`h-px w-8 ${light ? 'bg-copper-300/50' : 'bg-copper-500/60'}`}
      />
    </div>
  );
}
