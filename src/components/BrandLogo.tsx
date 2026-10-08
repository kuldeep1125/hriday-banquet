// [ADDED] BrandLogo component replicating the authentic logo mark of Hriday Hall
import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  showSubtext?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "h-10",
  variant = "light",
  showSubtext = true
}) => {
  const goldColor = "#d4af37";
  const textColor = variant === "light" ? "#f5f0e8" : "#0f0f0f";
  const subtextColor = variant === "light" ? "#a8a29a" : "#525252";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Heart Emblem inspired by real venue signage */}
      <div className="relative flex-shrink-0 w-10 h-10 rounded-full border border-brand-gold/40 bg-brand-surface/80 flex items-center justify-center p-2 shadow-sm">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer elegant heart curve */}
          <path
            d="M50 82C50 82 22 62 16 42C10 22 24 12 37 18C44 21 48 27 50 30C52 27 56 21 63 18C76 12 90 22 84 42C78 62 50 82 50 82Z"
            stroke={goldColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner welcoming warm flourish */}
          <path
            d="M50 68C50 68 32 54 28 40C24 26 34 20 42 24C46 26 49 30 50 32C51 30 54 26 58 24C66 20 76 26 72 40C68 54 50 68 50 68Z"
            fill={goldColor}
            fillOpacity="0.25"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-2">
          <span 
            className="font-serif font-bold text-xl tracking-tight leading-none"
            style={{ color: textColor }}
          >
            Hriday Hall
          </span>
          <span className="text-xs font-semibold tracking-wider text-brand-gold uppercase">
            हृदय
          </span>
        </div>
        {showSubtext && (
          <span 
            className="text-[10px] uppercase tracking-widest font-medium mt-0.5"
            style={{ color: subtextColor }}
          >
            Banquet & Event Venue · Moshi
          </span>
        )}
      </div>
    </div>
  );
};
