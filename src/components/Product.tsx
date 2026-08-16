import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import "./Product.css";
import { servicesData, categoryList, type ServiceItem } from "./servicesData";
import CardSlideshow from "./CardSlideshow";
import ServiceGallery from "./ServiceGallery";
import {
  FaPrint,
  FaGem,
  FaPalette,
  FaVideo,
  FaCode,
  FaBullhorn,
  FaLayerGroup,
  FaSearch,
  FaTimes,
  FaWhatsapp,
  FaCheck,
  FaImages,
  FaPlay,
  FaClock,
  FaInfoCircle,
  FaSlidersH,
  FaDownload
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Product: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || "all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [galleryService, setGalleryService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
    window.scrollTo(0, 0);
  }, []);

  // Filter services based on category and search query
  const filteredServices = useMemo(() => {
    return servicesData.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.specification && item.specification.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Ensure only one video plays across all cards/modals at any given time
  const handleVideoPlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const currentVideo = e.currentTarget;
    document.querySelectorAll("video").forEach((vid) => {
      if (vid !== currentVideo && !vid.paused) {
        vid.pause();
      }
    });
  };

  const handleOpenModal = (service: ServiceItem) => {
    document.querySelectorAll("video").forEach((vid) => {
      if (!vid.paused) vid.pause();
    });
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    document.querySelectorAll("video").forEach((vid) => {
      if (!vid.paused) vid.pause();
    });
    setSelectedService(null);
  };

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "FaPrint":
        return <FaPrint />;
      case "FaGem":
        return <FaGem />;
      case "FaPalette":
        return <FaPalette />;
      case "FaVideo":
        return <FaVideo />;
      case "FaCode":
        return <FaCode />;
      case "FaBullhorn":
        return <FaBullhorn />;
      default:
        return <FaLayerGroup />;
    }
  };

  const getWhatsAppLink = (serviceName: string) => {
    const text = `Hi Dualmark Kreative! I’d like to discuss a project for your “${serviceName}” service. Please provide me with a custom quote based on my requirements.`;
    return `https://wa.me/2347044572371?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="catalog-page">
      <div className="launch-date">
        {" "}
        🎊🎁OFFICIALLY LAUNCHING • OCTOBER 15, 2026.
      </div>

      {/* HEADER SECTION */}
      <header className="catalog-header">
        <div className="catalog-header-container" data-aos="fade-up">
          <div className="catalog-badge">
            <span className="catalog-badge-dot"></span>
            <span>DIGITAL SERVICES CATALOG</span>
          </div>

          <h1 className="catalog-title">
            Creative Solutions Designed to Bring Your <span className="catalog-title-accent">Ideas to Life</span>
          </h1>

          <p className="catalog-subtitle">
            Explore our comprehensive suite of professional printing, branding, graphic design, video editing, web development, and digital marketing services tailored to elevate your business.
          </p>

          {/* SEARCH & QUICK STATS BAR */}
          <div className="catalog-search-wrap">
            <div className="catalog-search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search printing, banners, logos, web dev, video editing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="catalog-search-input"
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery("")}>
                  <FaTimes />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* CATEGORY NAVIGATION TABS */}
      <section className="catalog-nav-section">
        <div className="catalog-nav-container">
          <div className="catalog-tabs">
            {categoryList.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`catalog-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="tab-icon">{renderCategoryIcon(cat.iconName)}</span>
                  <span className="tab-label">{cat.label}</span>
                  <span className="tab-count">{cat.count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATALOG MAIN CONTENT */}
      <main className="catalog-main">
        <div className="catalog-main-container">
          {/* SEARCH & RESULT COUNTER */}
          <div className="catalog-results-bar">
            <div className="results-info">
              <FaSlidersH className="results-icon" />
              <span>
                Showing <strong>{filteredServices.length}</strong> {filteredServices.length === 1 ? "service" : "services"}
                {activeCategory !== "all" && (
                  <> in <span className="active-cat-name">{categoryList.find(c => c.id === activeCategory)?.label}</span></>
                )}
                {searchQuery && <> for "<strong>{searchQuery}</strong>"</>}
              </span>
            </div>

            {(activeCategory !== "all" || searchQuery !== "") && (
              <button
                className="reset-filter-btn"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* SERVICES GRID */}
          {filteredServices.length > 0 ? (
            <div className="catalog-grid">
              {filteredServices.map((service, index) => (
                <article
                  className="service-card"
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 60}
                >
                  {/* CARD IMAGE CONTAINER */}
                  <div className="card-image-wrap">
                    {service.videoUrl ? (
                      /* VIDEO CARD — playable HTML5 player */
                      <div className="card-video-wrap">
                        <video
                          className="card-video-player"
                          src={service.videoUrl}
                          controls
                          preload="metadata"
                          playsInline
                          onPlay={handleVideoPlay}
                        >
                          Your browser does not support the video tag.
                        </video>
                        <div className="card-video-badge">
                          <FaPlay size={9} />
                          <span>Watch Preview</span>
                        </div>
                        {/* DOWNLOAD VIDEO BUTTON */}
                        <a
                          href={service.videoUrl}
                          download
                          className="card-video-download-btn"
                          onClick={(e) => e.stopPropagation()}
                          title="Download this video"
                          aria-label="Download video"
                        >
                          <FaDownload size={11} />
                          <span>Download</span>
                        </a>
                      </div>
                    ) : (
                      /* IMAGE CARD — existing slideshow */
                      <>
                        <CardSlideshow
                          images={service.cardImages}
                          alt={service.name}
                          intervalMs={3000}
                        />
                        <div className="card-image-overlay"></div>
                      </>
                    )}

                    {/* BADGES */}
                    {service.badge && (
                      <span className="card-badge">{service.badge}</span>
                    )}

                    {/* CATEGORY TAG */}
                    <span className="card-cat-tag">
                      {service.category.toUpperCase()}
                    </span>
                  </div>

                  {/* CARD BODY */}
                  <div className="card-body">
                    <h3 className="card-title">{service.name}</h3>
                    <p className="card-desc">{service.shortDesc}</p>

                    {/* SPECIFICATION / TURNAROUND PILLS */}
                    <div className="card-specs-row">
                      {service.specification && (
                        <div className="card-spec-pill" title={service.specification}>
                          <FaInfoCircle size={11} />
                          <span>{service.specification}</span>
                        </div>
                      )}
                      {service.turnaround && (
                        <div className="card-time-pill">
                          <FaClock size={11} />
                          <span>{service.turnaround}</span>
                        </div>
                      )}
                    </div>

                    {/* PRICING INDICATOR */}
                    <div className="card-quote-indicator">
                      <span className="card-quote-tag">SERVICE PRICING</span>
                      <div className="card-quote-value">
                        <span className="card-quote-icon">✦</span>
                        Custom Quote
                      </div>
                      <p className="card-quote-sub">Tailored to your project requirements</p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="card-actions-row">
                      <button
                        className="card-btn-secondary"
                        onClick={() => handleOpenModal(service)}
                      >
                        View Details
                      </button>

                      <a
                        href={getWhatsAppLink(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-btn-primary"
                      >
                        <FaWhatsapp size={14} />
                        <span>Discuss Project</span>
                      </a>
                    </div>

                    {/* VIEW GALLERY BUTTON */}
                    {((service.galleryVideos && service.galleryVideos.length > 0) || (service.galleryImages && service.galleryImages.length > 0)) && (
                      <button
                        className="card-btn-gallery"
                        onClick={() => {
                          document.querySelectorAll("video").forEach((v) => {
                            if (!v.paused) v.pause();
                          });
                          setGalleryService(service);
                        }}
                        aria-label={`View all ${service.name} items in gallery`}
                      >
                        {service.isVideo || (service.galleryVideos && service.galleryVideos.length > 0) ? (
                          <>
                            <FaPlay size={11} />
                            <span>View Video Gallery ({service.galleryVideos?.length || 0})</span>
                          </>
                        ) : (
                          <>
                            <FaImages size={13} />
                            <span>View Gallery ({service.galleryImages?.length || 0})</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* NO RESULTS STATE */
            <div className="no-results-box" data-aos="fade-up">
              <div className="no-results-icon">
                <FaSearch size={32} />
              </div>
              <h3>No Services Found</h3>
              <p>We couldn't find any services matching your search or selected filter.</p>
              <button
                className="reset-filter-btn-lg"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Show All Services
              </button>
            </div>
          )}
        </div>
      </main>

      {/* SERVICE DETAILS MODAL POPUP */}
      {selectedService && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <button
              className="modal-close-btn"
              onClick={handleCloseModal}
            >
              <FaTimes />
            </button>

            <div className="modal-grid">
              {/* MODAL LEFT: VIDEO PLAYER or SLIDESHOW */}
              <div className="modal-image-col">
                <div className="modal-img-wrap">
                  {selectedService.videoUrl ? (
                    /* Full-size video player in modal */
                    <div className="modal-video-wrap">
                      <video
                        className="modal-video-player"
                        src={selectedService.videoUrl}
                        controls
                        preload="metadata"
                        playsInline
                        onPlay={handleVideoPlay}
                      >
                        Your browser does not support the video tag.
                      </video>
                      {/* DOWNLOAD VIDEO BUTTON inside modal */}
                      <a
                        href={selectedService.videoUrl}
                        download
                        className="modal-video-download-btn"
                        title="Download this video"
                        aria-label="Download video"
                      >
                        <FaDownload size={13} />
                        <span>Download Video</span>
                      </a>
                    </div>
                  ) : (
                    <CardSlideshow
                      images={selectedService.cardImages}
                      alt={selectedService.name}
                      intervalMs={3000}
                    />
                  )}
                  {selectedService.badge && (
                    <span className="card-badge modal-badge-pos">
                      {selectedService.badge}
                    </span>
                  )}
                </div>

                {/* View Gallery link inside modal */}
                {((selectedService.galleryVideos && selectedService.galleryVideos.length > 0) || (selectedService.galleryImages && selectedService.galleryImages.length > 0)) && (
                  <button
                    className="modal-gallery-btn"
                    onClick={() => {
                      handleCloseModal();
                      setGalleryService(selectedService);
                    }}
                  >
                    {selectedService.isVideo || (selectedService.galleryVideos && selectedService.galleryVideos.length > 0) ? (
                      <>
                        <FaPlay size={12} />
                        <span>View Video Gallery ({selectedService.galleryVideos?.length || 0} videos)</span>
                      </>
                    ) : (
                      <>
                        <FaImages size={14} />
                        <span>View Full Gallery ({selectedService.galleryImages?.length || 0} images)</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* MODAL RIGHT: DETAILS */}
              <div className="modal-info-col">
                <div className="modal-cat-badge">
                  {selectedService.category.toUpperCase()} SERVICE
                </div>

                <h2 className="modal-title">{selectedService.name}</h2>

                {/* PRICING INDICATOR */}
                <div className="modal-quote-indicator">
                  <span className="modal-quote-tag">SERVICE PRICING</span>
                  <div className="modal-quote-value">✦ Custom Quote</div>
                  <p className="modal-quote-sub">Tailored to your project requirements</p>
                </div>

                <p className="modal-full-desc">{selectedService.fullDesc}</p>

                {/* SPECIFICATIONS LIST */}
                {selectedService.specification && (
                  <div className="modal-spec-box">
                    <strong>Specification / Package:</strong>
                    <p>{selectedService.specification}</p>
                  </div>
                )}

                {/* FEATURES CHECKLIST */}
                {selectedService.features && selectedService.features.length > 0 && (
                  <div className="modal-features-wrap">
                    <strong>Key Features & Deliverables:</strong>
                    <ul className="modal-features-list">
                      {selectedService.features.map((feat, idx) => (
                        <li key={idx}>
                          <FaCheck className="check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* TURNAROUND */}
                {selectedService.turnaround && (
                  <div className="modal-turnaround">
                    <FaClock className="clock-icon" />
                    <span>Estimated Turnaround: <strong>{selectedService.turnaround}</strong></span>
                  </div>
                )}

                {/* MODAL CTA BUTTONS */}
                <div className="modal-cta-group">
                  <a
                    href={getWhatsAppLink(selectedService.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn-whatsapp"
                  >
                    <FaWhatsapp size={16} />
                    <span>Discuss Project</span>
                  </a>

                  <a
                    href="tel:+2347044572371"
                    className="modal-btn-phone"
                  >
                    Call +234 704 457 2371
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULL SERVICE GALLERY */}
      {galleryService && (
        <ServiceGallery
          service={galleryService}
          onClose={() => setGalleryService(null)}
        />
      )}
    </div>
  );
};

export default Product;
