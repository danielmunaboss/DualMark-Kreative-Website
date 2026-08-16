/**
 * ServiceGallery.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Full-screen gallery modal for a single service.
 * Supports both Image Galleries and dedicated Video Galleries.
 * For video services, displays playable video cards and a full video player lightbox.
 * Ensures only one video plays at a time and provides direct download controls.
 * Keyboard accessible: ← → to navigate, Escape to close.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaWhatsapp, FaDownload, FaPlay, FaExpand } from "react-icons/fa";
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

  const isVideoGallery = Boolean(
    service.isVideo ||
    (service.galleryVideos && service.galleryVideos.length > 0) ||
    service.category === "video"
  );

  const items = isVideoGallery
    ? (service.galleryVideos ?? [])
    : (service.galleryImages ?? []);

  const total = items.length;

  // Single active video player handler across the page & gallery
  const handleVideoPlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const currentVideo = e.currentTarget;
    document.querySelectorAll("video").forEach((vid) => {
      if (vid !== currentVideo && !vid.paused) {
        vid.pause();
      }
    });
  };

  const handleClose = useCallback(() => {
    document.querySelectorAll("video").forEach((vid) => {
      if (!vid.paused) vid.pause();
    });
    onClose();
  }, [onClose]);

  // ── Lock body scroll while gallery is open ──
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prev;
      document.querySelectorAll("video").forEach((vid) => {
        if (!vid.paused) vid.pause();
      });
    };
  }, []);

  // ── Keyboard navigation ──
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIdx === null) {
        if (e.key === "Escape") handleClose();
        return;
      }
      if (e.key === "Escape") {
        document.querySelectorAll("video").forEach((vid) => {
          if (!vid.paused) vid.pause();
        });
        setLightboxIdx(null);
        return;
      }
      if (e.key === "ArrowRight") {
        document.querySelectorAll("video").forEach((vid) => {
          if (!vid.paused) vid.pause();
        });
        setLightboxIdx((prev) => (prev !== null ? (prev + 1) % total : 0));
      }
      if (e.key === "ArrowLeft") {
        document.querySelectorAll("video").forEach((vid) => {
          if (!vid.paused) vid.pause();
        });
        setLightboxIdx((prev) =>
          prev !== null ? (prev - 1 + total) % total : total - 1
        );
      }
    },
    [lightboxIdx, total, handleClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // ── WhatsApp link ──
  const whatsappLink = `https://wa.me/2347044572371?text=${encodeURIComponent(
    `Hi Dualmark Kreative! I’d like to discuss a project for your “${service.name}” service. Please provide me with a custom quote based on my project requirements.`
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
          if (e.target === overlayRef.current) handleClose();
        }}
      >
        <div className="sg-panel">
          {/* ── HEADER ── */}
          <div className="sg-header">
            <div className="sg-header-info">
              <span className="sg-cat-tag">
                {isVideoGallery ? "VIDEO SHOWCASE GALLERY" : `${service.category.toUpperCase()} GALLERY`}
              </span>
              <h2 className="sg-title">{service.name}</h2>
              <p className="sg-count">
                {total} {total === 1 ? (isVideoGallery ? "video" : "image") : (isVideoGallery ? "videos" : "images")} in this collection
              </p>
            </div>

            <div className="sg-header-actions">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sg-whatsapp-btn"
                aria-label={`Discuss ${service.name} project via WhatsApp`}
              >
                <FaWhatsapp size={15} />
                <span>Discuss Project</span>
              </a>

              <button
                className="sg-close-btn"
                onClick={handleClose}
                ref={closeRef}
                aria-label="Close gallery"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* ── GRID CONTENT ── */}
          <div className="sg-grid-wrap">
            {total === 0 ? (
              <div className="sg-empty">
                <p>No {isVideoGallery ? "videos" : "images"} available for this service yet.</p>
              </div>
            ) : isVideoGallery ? (
              /* ── VIDEO GALLERY GRID ── */
              <div className="sg-video-grid">
                {items.map((src, idx) => (
                  <div key={idx} className="sg-video-card">
                    <div className="sg-video-frame">
                      <video
                        className="sg-video-player"
                        src={src}
                        controls
                        preload="metadata"
                        playsInline
                        onPlay={handleVideoPlay}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="sg-video-badge">
                        <FaPlay size={10} />
                        <span>Showcase #{idx + 1}</span>
                      </div>
                    </div>

                    <div className="sg-video-card-footer">
                      <button
                        className="sg-video-expand-btn"
                        onClick={() => {
                          document.querySelectorAll("video").forEach((vid) => {
                            if (!vid.paused) vid.pause();
                          });
                          setLightboxIdx(idx);
                        }}
                        aria-label={`Open Video #${idx + 1} in Fullscreen Lightbox`}
                      >
                        <FaExpand size={12} />
                        <span>Theater Mode</span>
                      </button>

                      <a
                        href={src}
                        download
                        className="sg-video-download-btn"
                        title="Download video"
                        aria-label={`Download video ${idx + 1}`}
                      >
                        <FaDownload size={12} />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* ── IMAGE GALLERY GRID ── */
              <div className="sg-grid">
                {items.map((src, idx) => (
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
          aria-label={`${service.name} lightbox — ${isVideoGallery ? "video" : "image"} ${lightboxIdx + 1} of ${total}`}
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains("sg-lightbox")) {
              document.querySelectorAll("video").forEach((vid) => {
                if (!vid.paused) vid.pause();
              });
              setLightboxIdx(null);
            }
          }}
        >
          {/* Close */}
          <button
            className="sg-lb-close"
            onClick={() => {
              document.querySelectorAll("video").forEach((vid) => {
                if (!vid.paused) vid.pause();
              });
              setLightboxIdx(null);
            }}
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>

          {/* Counter */}
          <div className="sg-lb-counter" aria-live="polite">
            {isVideoGallery ? "Video" : "Image"} {lightboxIdx + 1} / {total}
          </div>

          {/* Prev */}
          {total > 1 && (
            <button
              className="sg-lb-nav sg-lb-prev"
              onClick={() => {
                document.querySelectorAll("video").forEach((vid) => {
                  if (!vid.paused) vid.pause();
                });
                setLightboxIdx((prev) =>
                  prev !== null ? (prev - 1 + total) % total : 0
                );
              }}
              aria-label="Previous item"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Media Content (Video or Image) */}
          {isVideoGallery ? (
            <div className="sg-lb-video-wrap">
              <video
                key={lightboxIdx}
                src={items[lightboxIdx]}
                controls
                autoPlay
                playsInline
                onPlay={handleVideoPlay}
                className="sg-lb-video-player"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="sg-lb-img-wrap">
              <img
                key={lightboxIdx}
                src={items[lightboxIdx]}
                alt={`${service.name} — image ${lightboxIdx + 1}`}
                className="sg-lb-img"
              />
            </div>
          )}

          {/* Next */}
          {total > 1 && (
            <button
              className="sg-lb-nav sg-lb-next"
              onClick={() => {
                document.querySelectorAll("video").forEach((vid) => {
                  if (!vid.paused) vid.pause();
                });
                setLightboxIdx((prev) =>
                  prev !== null ? (prev + 1) % total : 0
                );
              }}
              aria-label="Next item"
            >
              <FaChevronRight />
            </button>
          )}

          {/* Caption */}
          <div className="sg-lb-caption">
            <strong>{service.name}</strong>
            <a
              href={items[lightboxIdx]}
              download
              className="sg-lb-download-btn"
              title={`Download this ${isVideoGallery ? "video" : "image"}`}
              aria-label={`Download full-size ${isVideoGallery ? "video" : "image"}`}
            >
              <FaDownload size={12} />
              <span>Download {isVideoGallery ? "Video" : "Image"}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceGallery;
