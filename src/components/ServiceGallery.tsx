/**
 * ServiceGallery.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Full-screen gallery modal for a single service.
 * Shows all images for that service in a masonry-style grid.
 * Click any image → opens a lightbox with prev/next/close controls.
 * Keyboard accessible: ← → to navigate, Escape to close.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaWhatsapp, FaDownload } from "react-icons/fa";
import { type ServiceItem } from "./servicesData";
import "./ServiceGallery.css";

interface ServiceGalleryProps {
  service: ServiceItem;
  onClose: () => void;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ service, onClose }) => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const images = service.galleryImages ?? [];
  const total = images.length;

  // ── Lock body scroll while gallery is open ──
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus the close button for accessibility
    setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // ── Keyboard navigation ──
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIdx === null) {
        if (e.key === "Escape") onClose();
        return;
      }
      if (e.key === "Escape") {
        setLightboxIdx(null);
        return;
      }
      if (e.key === "ArrowRight") {
        setLightboxIdx((prev) => (prev !== null ? (prev + 1) % total : 0));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIdx((prev) =>
          prev !== null ? (prev - 1 + total) % total : total - 1
        );
      }
    },
    [lightboxIdx, total, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // ── WhatsApp link ──
  const whatsappLink = `https://wa.me/2347044572371?text=${encodeURIComponent(
    `Hi Dualmark Kreative! I am interested in your "${service.name}" service (${service.price}). Please provide more details.`
  )}`;

  return (
    <>
      {/* ── GALLERY OVERLAY ── */}
      <div
        className="sg-overlay"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${service.name} Gallery`}
        onClick={(e) => {
          if (e.target === overlayRef.current) onClose();
        }}
      >
        <div className="sg-panel">
          {/* ── HEADER ── */}
          <div className="sg-header">
            <div className="sg-header-info">
              <span className="sg-cat-tag">{service.category.toUpperCase()}</span>
              <h2 className="sg-title">{service.name}</h2>
              <p className="sg-count">
                {total} {total === 1 ? "image" : "images"} in this collection
              </p>
            </div>

            <div className="sg-header-actions">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sg-whatsapp-btn"
                aria-label={`Order ${service.name} via WhatsApp`}
              >
                <FaWhatsapp size={15} />
                <span>Order Now</span>
              </a>

              <button
                className="sg-close-btn"
                onClick={onClose}
                ref={closeRef}
                aria-label="Close gallery"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* ── IMAGE GRID ── */}
          <div className="sg-grid-wrap">
            {total === 0 ? (
              <div className="sg-empty">
                <p>No images available for this service yet.</p>
              </div>
            ) : (
              <div className="sg-grid">
                {images.map((src, idx) => (
                  <button
                    key={idx}
                    className="sg-thumb-btn"
                    onClick={() => setLightboxIdx(idx)}
                    aria-label={`View ${service.name} image ${idx + 1} of ${total}`}
                  >
                    <img
                      src={src}
                      alt={`${service.name} — example ${idx + 1}`}
                      className="sg-thumb-img"
                      loading={idx < 9 ? "eager" : "lazy"}
                    />
                    <div className="sg-thumb-overlay">
                      <span className="sg-thumb-zoom">⊕</span>
                      {/* DOWNLOAD icon on thumb hover */}
                      <a
                        href={src}
                        download
                        className="sg-thumb-download"
                        onClick={(e) => e.stopPropagation()}
                        title="Download image"
                        aria-label={`Download image ${idx + 1}`}
                      >
                        <FaDownload size={14} />
                      </a>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxIdx !== null && (
        <div
          className="sg-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${service.name} lightbox — image ${lightboxIdx + 1} of ${total}`}
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains("sg-lightbox"))
              setLightboxIdx(null);
          }}
        >
          {/* Close */}
          <button
            className="sg-lb-close"
            onClick={() => setLightboxIdx(null)}
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>

          {/* Counter */}
          <div className="sg-lb-counter" aria-live="polite">
            {lightboxIdx + 1} / {total}
          </div>

          {/* Prev */}
          {total > 1 && (
            <button
              className="sg-lb-nav sg-lb-prev"
              onClick={() =>
                setLightboxIdx((prev) =>
                  prev !== null ? (prev - 1 + total) % total : 0
                )
              }
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Image */}
          <div className="sg-lb-img-wrap">
            <img
              key={lightboxIdx}
              src={images[lightboxIdx]}
              alt={`${service.name} — image ${lightboxIdx + 1}`}
              className="sg-lb-img"
            />
          </div>

          {/* Next */}
          {total > 1 && (
            <button
              className="sg-lb-nav sg-lb-next"
              onClick={() =>
                setLightboxIdx((prev) =>
                  prev !== null ? (prev + 1) % total : 0
                )
              }
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          )}

          {/* Caption */}
          <div className="sg-lb-caption">
            <strong>{service.name}</strong>
            <span className="sg-lb-price">{service.price}</span>
            {/* DOWNLOAD current lightbox image */}
            <a
              href={images[lightboxIdx]}
              download
              className="sg-lb-download-btn"
              title="Download this image"
              aria-label="Download full-size image"
            >
              <FaDownload size={12} />
              <span>Download</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceGallery;
