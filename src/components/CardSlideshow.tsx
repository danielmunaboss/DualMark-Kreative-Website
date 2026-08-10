/**
 * CardSlideshow.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Auto-rotating image slideshow for service cards.
 * Shows up to 3 images, cycling every 3 seconds with a smooth crossfade.
 * Timer is cleaned up on unmount to avoid memory leaks.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useEffect, useRef } from "react";
import "./CardSlideshow.css";

interface CardSlideshowProps {
  images: string[];          // up to 3 images (fewer OK)
  alt: string;               // service name used as base alt text
  intervalMs?: number;       // default 3000ms
}

const CardSlideshow: React.FC<CardSlideshowProps> = ({
  images,
  alt,
  intervalMs = 3000,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = images.length;

  // Guard: nothing to show
  if (total === 0) {
    return (
      <div className="cs-wrap cs-placeholder" role="img" aria-label={alt}>
        <span className="cs-no-image">No image available</span>
      </div>
    );
  }

  // Single image — no animation needed
  if (total === 1) {
    return (
      <div className="cs-wrap">
        <img
          src={images[0]}
          alt={alt}
          className="cs-img cs-img--single"
          loading="lazy"
        />
      </div>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % total);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total, intervalMs]);

  return (
    <div
      className="cs-wrap"
      role="img"
      aria-label={`${alt} slideshow — image ${activeIdx + 1} of ${total}`}
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`${alt} — sample ${idx + 1}`}
          className={`cs-img${idx === activeIdx ? " cs-img--active" : ""}`}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Dot indicators */}
      <div className="cs-dots" aria-hidden="true">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`cs-dot${idx === activeIdx ? " cs-dot--active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlideshow;
