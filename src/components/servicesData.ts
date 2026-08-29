/**
 * servicesData.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Data-driven service catalogue.
 *
 * Each service now has:
 *   cardImages   — exactly 3 images shown in the auto-rotating card slideshow.
 *                  Change these 3 entries to pick different hero images.
 *   galleryImages — full list of all images for that service's gallery page.
 *
 * Images are imported from imageRegistry.ts which uses Vite's import.meta.glob.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
  flexImages,
  posterImages,
  flyersImages,
  framesImages,
  bagsImages,
  brochuresImages,
  jottersImages,
  magazinesImages,
  newspapersImages,
  envelopesImages,
  photoCardImages,
  awardImages,
  fullBrandingImages,
  monogramingImages,
  clothBrandingImages,
  capBrandingImages,
  carBrandingImages,
  threeDFrameImages,
  shopBrandingImages,
  clothtagsImages,
  outdoorImages,
  indoorImages,
  outdoorSignageImages,
  rollupImages,
  graphicsDesignImages,
  businessCardImages,

  webDevImages,
  webVideos,
} from "./imageRegistry";

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Pick the first `n` items, or all if fewer than `n` exist. */
function first(arr: string[], n: number): string[] {
  return arr.slice(0, Math.min(n, arr.length));
}

/** Pick items at specific indices (0-based). Falls back gracefully. */
function pick(arr: string[], ...indices: number[]): string[] {
  return indices
    .map((i) => arr[Math.min(i, arr.length - 1)])
    .filter(Boolean);
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ServiceItem {
  id: string;
  name: string;
  category: "printing" | "branding" | "design" | "video" | "web" | "marketing";
  shortDesc: string;
  fullDesc: string;
  price: string;
  isStartingPrice?: boolean;
  specification?: string;
  features?: string[];
  /** @deprecated use cardImages[0] as main fallback */
  imageUrl: string;
  cardImages: string[];      // exactly 3 (or fewer if folder has <3 images)
  galleryImages: string[];   // all images for this service's gallery
  galleryVideos?: string[];  // all videos for this service's gallery (video category)
  badge?: string;
  turnaround?: string;
  isVideo?: boolean;
  videoUrl?: string;         // mp4 src for playable video showcase on card
}

export interface CategoryInfo {
  id: "all" | "printing" | "branding" | "design" | "video" | "web" | "marketing";
  label: string;
  iconName: string;
  count: number;
}

// ─── Service Data ─────────────────────────────────────────────────────────────

export const servicesData: ServiceItem[] = [
  // ==========================================
  // 1. PRINTING SERVICES  (5 grouped cards)
  // ==========================================

  // ── Card 1: Brand & Marketing Materials ──
  {
    id: "print-brand-marketing",
    name: "Brand & Marketing Materials",
    category: "printing",
    shortDesc: "Business cards, brochures & flyers, posters, flex banners and roll-up stands — everything to market your brand.",
    fullDesc: "One-stop shop for all brand marketing print. We produce premium business cards on 350gsm stock, double-sided flyers, A4–A1 posters, heavy-duty outdoor flex banners, and professional roll-up display stands — all with vibrant CMYK color accuracy and fast turnarounds.",
    price: "₦12,000",
    isStartingPrice: true,
    specification: "Business Cards · Brochures · Flyers · Posters · Flex Banners · Roll-up Banners",
    features: [
      "Premium 350gsm Business Cards",
      "Full-Color Double-Sided Flyers",
      "A4 – A1 Poster Options",
      "Waterproof Outdoor Flex Banners",
      "Professional Roll-up Display Stands",
    ],
    imageUrl: businessCardImages[0] ?? "",
    cardImages: [
      businessCardImages[0] ?? "",
      flyersImages[0] ?? "",
      flexImages[0] ?? "",
    ].filter(Boolean),
    galleryImages: [
      ...businessCardImages,
      ...flyersImages,
      ...posterImages,
      ...flexImages,
      ...rollupImages,
      ...brochuresImages,
    ],
    badge: "Popular",
    turnaround: "24 – 48 Hours",
  },

  // ── Card 2: Corporate & Office Stationery ──
  {
    id: "print-office-stationery",
    name: "Corporate & Office Stationery",
    category: "printing",
    shortDesc: "Jotters & notepads, branded letterheads, envelopes, and premium folders & presentation materials.",
    fullDesc: "Complete corporate office stationery printed to professional standards. Wire-o bound jotters with custom covers, crisp letterhead bond paper with your logo, self-seal branded envelopes, and hardback presentation folders — perfect for boardrooms, conferences, and client pitches.",
    price: "₦20,000",
    isStartingPrice: true,
    specification: "Jotters · Notepads · Letterheads · Envelopes · Folders",
    features: [
      "Wire-O Bound Custom Jotters & Notepads",
      "Official Letterhead Bond Paper",
      "Peel & Seal Branded Envelopes",
      "Hardback Presentation Folders",
      "Bulk Corporate Order Discounts",
    ],
    imageUrl: jottersImages[0] ?? "",
    cardImages: [
      jottersImages[0] ?? "",
      envelopesImages[0] ?? "",
      jottersImages[2] ?? "",
    ].filter(Boolean),
    galleryImages: [
      ...jottersImages,
      ...envelopesImages,
    ],
    badge: "Corporate",
    turnaround: "2 – 5 Days",
  },

  // ── Card 3: Publications ──
  {
    id: "print-publications",
    name: "Publications",
    category: "printing",
    shortDesc: "Full-color magazines & catalogs, special newspapers, and annual reports printed to professional standards.",
    fullDesc: "Glossy saddle-stitched and perfect-bound magazines, corporate annual reports, product catalogs, and custom special edition newspapers. Printed on premium 130gsm gloss inner pages with spot UV or foil-stamped covers for a publication that commands attention.",
    price: "₦75,000",
    isStartingPrice: true,
    specification: "Magazines · Catalogs · Special Newspapers · Annual Reports",
    features: [
      "Full-Color Saddle Stitch or Perfect Binding",
      "Spot UV & Foil Stamping Covers",
      "130gsm Gloss Inner Pages",
      "Special Edition Newspaper Broadsheets",
      "Corporate Annual Report Layouts",
    ],
    imageUrl: magazinesImages[0] ?? "",
    cardImages: [
      magazinesImages[0] ?? "",
      newspapersImages[0] ?? "",
      magazinesImages[2] ?? "",
    ].filter(Boolean),
    galleryImages: [
      ...magazinesImages,
      ...newspapersImages,
    ],
    turnaround: "3 – 7 Days",
  },

  // ── Card 4: Corporate Gifts & Awards ──
  {
    id: "print-gifts-awards",
    name: "Corporate Gifts & Awards",
    category: "printing",
    shortDesc: "Custom gift bags & branded packaging, plus premium awards, plaques, and trophies.",
    fullDesc: "Make every occasion unforgettable. We produce luxury custom-printed gift bags and branded packaging in heavyweight card stock, as well as crystal, wooden, and acrylic recognition plaques with precision laser engraving and UV logo printing — each finished in a velvet gift box.",
    price: "₦30,000",
    isStartingPrice: true,
    specification: "Gift Bags · Branded Packaging · Awards · Plaques · Trophies",
    features: [
      "Luxury Custom-Printed Gift Bags",
      "Heavy Card Branded Packaging",
      "Crystal / Wooden / Acrylic Plaques",
      "Precision Laser Engraving",
      "Velvet Gift Box Included",
    ],
    imageUrl: bagsImages[0] ?? "",
    cardImages: [
      bagsImages[0] ?? "",
      awardImages[0] ?? "",
      bagsImages[2] ?? "",
    ].filter(Boolean),
    galleryImages: [
      ...bagsImages,
      ...awardImages,
    ],
    badge: "Premium",
    turnaround: "3 – 5 Days",
  },

  // ── Card 5: Photo & Art Printing ──
  {
    id: "print-photo-art",
    name: "Photo & Art Printing",
    category: "printing",
    shortDesc: "HD picture printing on archival photo paper and stunning photo framing in glass, wood, or acrylic.",
    fullDesc: "Bring your memories and art to life with ultra-HD photo lab prints on Fuji/Kodak archival paper, available from 4×6 wallet prints to large-format wall enlargements. Pair your prints with our luxury glass, wooden, or acrylic wall frames with sturdy hanging hardware and optional custom engraving.",
    price: "₦8,000",
    isStartingPrice: true,
    specification: "Picture Printing · Photo Framing · Canvas Prints",
    features: [
      "HD Archival Fuji/Kodak Photo Paper",
      "4×6 to Large-Format Wall Enlargements",
      "Glossy or Lustre Silk Finish",
      "Luxury Glass / Wood / Acrylic Frames",
      "Custom Engraving Available",
    ],
    imageUrl: photoCardImages[0] ?? "",
    cardImages: [
      photoCardImages[0] ?? "",
      framesImages[0] ?? "",
      framesImages[5] ?? "",
    ].filter(Boolean),
    galleryImages: [
      ...photoCardImages,
      ...framesImages,
    ],
    badge: "HD Quality",
    turnaround: "24 – 48 Hours",
  },

  // ==========================================
  // 2. BRANDING SERVICES
  // ==========================================
  {
    id: "brand-company",
    name: "Full Company Branding Suite",
    category: "branding",
    shortDesc: "Complete visual identity system for corporate businesses, startups, and institutions.",
    fullDesc: "Transform your company into an unforgettable market leader. Includes corporate logo suite, color palette, typography guidelines, stationery mockups, and digital asset templates.",
    price: "₦150,000",
    isStartingPrice: true,
    specification: "Complete Identity Package | Brand Guide PDF included",
    features: ["Primary & Secondary Logo Designs", "Official Brand Guidelines PDF", "Business Card & Letterhead Templates", "Social Media Starter Assets"],
    imageUrl: fullBrandingImages[0] ?? "",
    cardImages: pick(fullBrandingImages, 0, 1, 2),
    galleryImages: fullBrandingImages,
    badge: "Top Choice",
    turnaround: "5-10 Days"
  },
  {
    id: "brand-logo-print",
    name: "Logo Printing & Merchandise",
    category: "branding",
    shortDesc: "High-precision logo printing on promotional merchandise, office tools, and corporate gifts.",
    fullDesc: "Branded corporate items including customized USB drives, umbrellas, water bottles, keychains, and pens with crisp screen printing or pad printing.",
    price: "₦40,000",
    isStartingPrice: true,
    specification: "Pack of 50 Pcs | Screen / Pad / UV Printing",
    features: ["Durable Non-Fade Inks", "Wide Range of Merchandise Options", "Free Digital Mockup Before Print", "Corporate Gift Packaging"],
    imageUrl: monogramingImages[0] ?? "",
    cardImages: pick(monogramingImages, 0, 1, 2),
    galleryImages: monogramingImages,
    turnaround: "3-5 Days"
  },
  {
    id: "brand-polo-tshirt",
    name: "Polo & T-Shirt Branding",
    category: "branding",
    shortDesc: "Custom embroidered and DTF printed polo shirts and round-neck corporate t-shirts.",
    fullDesc: "High-quality corporate uniforms, promotional staff t-shirts, and event apparel. Screen printing, Direct-to-Film (DTF), and computerized embroidery.",
    price: "₦3,500",
    isStartingPrice: true,
    specification: "Per Piece (Min 10 Pcs) | 100% Cotton Polo Stock",
    features: ["Precision Computerized Embroidery", "Vivid DTF & Screen Printing", "100% Heavyweight Cotton", "All Sizes S - 3XL Available"],
    imageUrl: clothBrandingImages[0] ?? "",
    cardImages: pick(clothBrandingImages, 0, 1, 2),
    galleryImages: clothBrandingImages,
    badge: "Popular",
    turnaround: "3-5 Days"
  },
  {
    id: "brand-cap",
    name: "Cap & Hat Branding",
    category: "branding",
    shortDesc: "Custom embroidered baseball caps, trucker hats, and bucket caps with your logo.",
    fullDesc: "Promotional and fashion headwear custom embroidered with 3D puff stitching or heat-pressed logos. Ideal for political campaigns, sports clubs, and corporate events.",
    price: "₦2,500",
    isStartingPrice: true,
    specification: "Per Unit (Min 15 Pcs) | Adjustable Strap",
    features: ["3D Puff Embroidery Option", "High Quality Structured Caps", "Multiple Color Options", "Durable Metal Buckles"],
    imageUrl: capBrandingImages[0] ?? "",
    cardImages: pick(capBrandingImages, 0, 1, 2),
    galleryImages: capBrandingImages,
    turnaround: "3-4 Days"
  },
  {
    id: "brand-car",
    name: "Vehicle & Car Branding",
    category: "branding",
    shortDesc: "Full vehicle vinyl wraps and partial magnetic fleet branding for maximum mobile visibility.",
    fullDesc: "Turn your company vehicles into mobile billboards. Weather-proof cast vinyl wraps for delivery vans, trucks, buses, and corporate sedans with UV laminate coating.",
    price: "₦120,000",
    isStartingPrice: true,
    specification: "Per Vehicle | Cast Vinyl + Laminate",
    features: ["Car-Safe Non-Damage Adhesive", "5+ Year Anti-Fade UV Laminate", "Full Wrap or Partial Decals", "Professional On-Site Installation"],
    imageUrl: carBrandingImages[0] ?? "",
    cardImages: first(carBrandingImages, 3),
    galleryImages: carBrandingImages,
    badge: "High Impact",
    turnaround: "3-5 Days"
  },
  {
    id: "brand-3d-frame",
    name: "3D Wall Frame Branding",
    category: "branding",
    shortDesc: "Dimensional 3D acrylic and illuminated signage frames for reception desks and walls.",
    fullDesc: "Elevate your office reception area with raised 3D acrylic logos and backlit LED wall signs that project authority and prestige.",
    price: "₦85,000",
    isStartingPrice: true,
    specification: "Custom Size | Laser Cut Acrylic & Standoff Bolts",
    features: ["Laser-Cut Acrylic Precision", "Optional LED Backlighting", "Stainless Steel Wall Mounts", "3D Floating Effect"],
    imageUrl: threeDFrameImages[0] ?? "",
    cardImages: pick(threeDFrameImages, 0, 1, 2),
    galleryImages: threeDFrameImages,
    turnaround: "4-7 Days"
  },
  {
    id: "brand-shop",
    name: "All Types of Customized Branding",
    category: "branding",
    shortDesc: "From event souvenirs to promotional merchandise — we brand any item with your logo, name, or design for lasting visibility.",
    fullDesc: "Whatever you can imagine, we can brand it. Whether you need customized souvenirs for a wedding, branded merchandise for a corporate event, promotional gifts for a product launch, or personalized items for any special occasion — Dualmark Kreative delivers. We apply your logo, name, or artwork onto a wide range of items including mugs, T-shirts, bags, caps, pens, notebooks, phone cases, gift boxes, keychains, wristbands, and much more. Every item is carefully printed, embroidered, or engraved to a polished, professional finish that makes your brand unforgettable.",
    price: "₦15,000",
    isStartingPrice: true,
    specification: "Custom Order | Single Piece or Bulk Supply",
    features: [
      "Wide Range of Brandable Items Available",
      "Custom Logo, Name & Photo Printing",
      "Perfect for Events, Promos & Corporate Gifts",
      "Embroidery, Screen Print & UV Print Options",
      "Bulk Order Discounts Available",
      "Fast Turnaround & Guaranteed Quality"
    ],
    imageUrl: shopBrandingImages[0] ?? "",
    cardImages: pick(shopBrandingImages, 0, 1, 2),
    galleryImages: shopBrandingImages,
    badge: "Any Item",
    turnaround: "3-7 Days"
  },

  {
    id: "brand-award-branding",
    name: "Corporate Award Branding",
    category: "branding",
    shortDesc: "Bespoke branded trophies, plaques, and medals for corporate recognition events.",
    fullDesc: "Custom branded awards made from optic crystal, mahogany wood, and brushed brass metals for annual general meetings, sports tournaments, and gala awards.",
    price: "₦35,000",
    isStartingPrice: true,
    specification: "Per Unit | Crystal / Metal / Wood",
    features: ["Laser Etching & Color Infill", "Custom Metallic Finishes", "Presented in Satin Gift Boxes", "Fast Turnaround Support"],
    imageUrl: awardImages[3] ?? awardImages[0] ?? "",
    cardImages: pick(awardImages, 3, 5, 7),
    galleryImages: awardImages,
    turnaround: "3-5 Days"
  },
  {
    id: "brand-clothes",
    name: "Fashion & Clothes Branding",
    category: "branding",
    shortDesc: "Custom clothing brand neck labels, hang tags, polybags, and heat transfer prints.",
    fullDesc: "Launch your independent fashion line with custom woven neck labels, branded hang tags, custom care labels, and luxury plastic packaging bags.",
    price: "₦45,000",
    isStartingPrice: true,
    specification: "Starter Fashion Pack | Tags + Neck Labels",
    features: ["Custom Woven Fabric Labels", "Thick Die-Cut Hang Tags", "Custom Zipper Polybags", "Heat Transfer Neck Prints"],
    imageUrl: clothtagsImages[0] ?? "",
    cardImages: pick(clothtagsImages, 0, 1, 2),
    galleryImages: clothtagsImages,
    turnaround: "4-7 Days"
  },
  {
    id: "brand-3d-logo",
    name: "Outdoor Signage",
    category: "branding",
    shortDesc: "Eye-catching outdoor signs, channel letters, and roadside signages that put your business on the map — day and night.",
    fullDesc: "Make your business impossible to miss. Our outdoor signage solutions are built to withstand the elements while keeping your brand looking sharp 24/7. We design and produce a wide variety of outdoor signs including illuminated channel letters, lightbox signs, pylon signs, A-frame boards, directional signs, and branded fascia boards. Whether you're opening a new shop, upgrading your storefront, or directing customers to your location, our outdoor signs are durable, vibrant, and professionally installed.",
    price: "₦80,000",
    isStartingPrice: true,
    specification: "Custom Size | Illuminated or Non-Illuminated",
    features: [
      "Illuminated LED Channel Letters",
      "Lightbox & Pylon Sign Options",
      "Weather-Proof & Long-Lasting Materials",
      "Custom Sizes for Any Location",
      "Professional On-Site Installation",
      "Day & Night Visibility"
    ],
    imageUrl: outdoorSignageImages[0] ?? "",
    cardImages: pick(outdoorSignageImages, 0, 1, 2),
    galleryImages: outdoorSignageImages,
    badge: "High Visibility",
    turnaround: "5-10 Days"
  },
  {
    id: "brand-outdoor",
    name: "Billboard Branding",
    category: "branding",
    shortDesc: "Large-format outdoor billboards, pylon signs, and gantry advertising structures.",
    fullDesc: "High-impact outdoor branding solutions engineered to withstand wind, rain, and intense sunlight. Includes heavy structural frame installations and high-wattage LED floodlights.",
    price: "₦250,000",
    isStartingPrice: true,
    specification: "Custom Dimensions | Heavy Steel Frame",
    features: ["Structural Wind Load Certified", "Ultra-Durable UV Inks", "Night Floodlight Illumination", "Site Survey Included"],
    imageUrl: outdoorImages[0] ?? "",
    cardImages: pick(outdoorImages, 0, 1, 2),
    galleryImages: [...outdoorImages, ...outdoorSignageImages],
    turnaround: "7-14 Days"
  },
  {
    id: "brand-indoor",
    name: "Indoor Signage",
    category: "branding",
    shortDesc: "Internal office wall murals, acrylic direction signs, and branded glass frosting.",
    fullDesc: "Turn bland corporate interiors into inspiring workplaces with custom vinyl wall wraps, privacy frosted glass films, and directional door signages.",
    price: "₦70,000",
    isStartingPrice: true,
    specification: "Per Room Scope | Vinyl & Frosted Film",
    features: ["Custom Patterned Glass Frosting", "High-Resolution Wall Murals", "Directional Door Signages", "Clean Dust-Free Installation"],
    imageUrl: indoorImages[0] ?? "",
    cardImages: pick(indoorImages, 0, 1, 2),
    galleryImages: indoorImages,
    turnaround: "3-5 Days"
  },

  // ==========================================
  // 3. GRAPHIC DESIGN SERVICES
  // ==========================================
  {
    id: "design-company-flyer",
    name: "Company Promotional Flyer Design",
    category: "design",
    shortDesc: "High-converting corporate flyer design crafted to attract customers and drive leads.",
    fullDesc: "Custom graphic flyer designs for corporate products, seasonal discounts, business launches, and service announcements. Delivered in high-res print PDF and web-ready PNG/JPEG.",
    price: "₦10,000",
    isStartingPrice: true,
    specification: "1 Concept | Print Ready PDF + PNG + Source File",
    features: ["24-48 Hour Turnaround", "Unlimited Revision Pass", "300 DPI Print-Ready PDF", "Social Media Dimensions Included"],
    imageUrl: graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 0, 1, 2),
    galleryImages: graphicsDesignImages,
    badge: "Popular",
    turnaround: "24-48 Hours"
  },
  {
    id: "design-commercial-flyer",
    name: "Company & Commercial Flyer Design",
    category: "design",
    shortDesc: "High-impact commercial and corporate flyer designs tailored for marketing, promotions, and brand campaigns.",
    fullDesc: "Professional commercial and company flyer designs crafted for products, corporate events, sales campaigns, and trade shows. Delivered in high-resolution print PDF and digital formats.",
    price: "₦10,000",
    isStartingPrice: true,
    specification: "HD Digital Artwork | High Res JPG & PDF",
    features: ["Express 24-48 Hour Delivery", "Corporate & Commercial Layouts", "Optimized for Print & Social Media", "Print-Ready PDF & Source Files"],
    imageUrl: graphicsDesignImages[3] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 3, 4, 5),
    galleryImages: graphicsDesignImages,
    badge: "Popular",
    turnaround: "24-48 Hours"
  },
  {
    id: "design-church-flyer",
    name: "Church & Ministry Flyer Design",
    category: "design",
    shortDesc: "Dynamic, creative church program flyers, crusade banners, and sermon graphics.",
    fullDesc: "Inspiring and modern Christian event flyers for Sunday services, conferences, crusades, and online live streams. Bold typography and dramatic lighting visuals.",
    price: "₦10,000",
    isStartingPrice: true,
    specification: "High Res Artwork | Square & Banner Ratios",
    features: ["3D Title Effects & Lighting", "Preacher & Guest Photo Retouch", "Versions for Instagram, FB & Screen Display", "Fast Delivery"],
    imageUrl: graphicsDesignImages[6] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 6, 7, 0),
    galleryImages: graphicsDesignImages,
    badge: "Creative",
    turnaround: "24-48 Hours"
  },
  {
    id: "design-e-flyer",
    name: "Social Media E-Flyer Suite",
    category: "design",
    shortDesc: "Sleek e-flyers optimized specifically for WhatsApp Status, Instagram Stories, and Facebook Ads.",
    fullDesc: "Eye-catching digital e-flyer graphics optimized for mobile viewing. High contrast layout that grabs instant attention on social feeds.",
    price: "₦7,000",
    isStartingPrice: true,
    specification: "1080x1350px & 1080x1920px HD Formats",
    features: ["Optimized for Mobile Screens", "Fast 24-Hour Turnaround", "Source File (.PSD / .AI) Available", "Vibrant Color Schemes"],
    imageUrl: graphicsDesignImages[2] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 2, 1, 4),
    galleryImages: graphicsDesignImages,
    turnaround: "24 Hours"
  },

  // ==========================================
  // 4. VIDEO EDITING & CONTENT CREATION
  // ==========================================
  {
    id: "video-content-creation",
    name: "Social Media Content Video Editing",
    category: "video",
    shortDesc: "High-engagement video editing for TikTok, Instagram Reels, YouTube Shorts, and brand vlogs.",
    fullDesc: "Engaging vertical video editing with dynamic captions, sound effects, meme overlays, color grading, and fast cuts designed to boost watch time and virality.",
    price: "₦20,000",
    isStartingPrice: true,
    specification: "Per Reel / Short (Up to 60s) | 4K / 1080p",
    features: ["Animated B-Roll & Subtitles", "Trending Sound FX & Music", "Color Grading & Stabilization", "Fast 48-Hour Turnaround"],
    imageUrl: "",
    cardImages: [],
    galleryImages: [],
    galleryVideos: webVideos,
    badge: "Trending",
    isVideo: true,
    videoUrl: webVideos[0] ?? "",
    turnaround: "1-2 Days"
  },
  {
    id: "video-wedding",
    name: "Wedding Highlights & Full Film",
    category: "video",
    shortDesc: "Cinematic wedding trailer edits, ceremonial films, and emotional storytelling videos.",
    fullDesc: "Transform raw wedding footage into a breathtaking cinematic masterpiece. Includes professional color grading, audio cleaning, licensed romantic soundscape, and multi-cam sync.",
    price: "₦85,000",
    isStartingPrice: true,
    specification: "3-5 Min Teaser + Full Length Film Edit",
    features: ["Cinematic 4K Color Grading", "Multi-Camera Audio Synchronization", "Licensed Romantic Soundtrack", "Custom USB / Cloud Storage Delivery"],
    imageUrl: "",
    cardImages: [],
    galleryImages: [],
    galleryVideos: webVideos,
    isVideo: true,
    videoUrl: webVideos[1] ?? webVideos[0] ?? "",
    turnaround: "5-10 Days"
  },
  {
    id: "video-burial",
    name: "Burial & Memorial Tribute Video",
    category: "video",
    shortDesc: "Touching funeral ceremony highlights, biography documentaries, and memorial photo slideshows.",
    fullDesc: "Dignified video editing to celebrate the life of your loved ones. Includes photo restoration, voiceover sync, tribute music, and full event compilation.",
    price: "₦50,000",
    isStartingPrice: true,
    specification: "Full Memorial Event Video + 1-Min Highlight",
    features: ["Photo Slideshow Animation", "Audio Cleanup & Voiceover Sync", "Memorial Music Selection", "Fast Delivery for Funeral Services"],
    imageUrl: "",
    cardImages: [],
    galleryImages: [],
    galleryVideos: webVideos,
    isVideo: true,
    videoUrl: webVideos[2] ?? webVideos[0] ?? "",
    turnaround: "3-5 Days"
  },
  {
    id: "video-program-event",
    name: "Event & Party Highlights Video",
    category: "video",
    shortDesc: "High-energy event recap videos for birthdays, concerts, galas, and corporate launches.",
    fullDesc: "Pacing video edits that capture the energy of your events. Fast cuts, beat-synced transitions, sound design, and animated logo intro/outro.",
    price: "₦40,000",
    isStartingPrice: true,
    specification: "1-3 Minute Aftermovie | 4K / 1080p Export",
    features: ["Beat-Synced Transition Effects", "Motion Graphic Logo Intro", "Sound Effects & Crowd Audio", "Optimized for Instagram & YouTube"],
    imageUrl: "",
    cardImages: [],
    galleryImages: [],
    galleryVideos: webVideos,
    isVideo: true,
    videoUrl: webVideos[0] ?? "",
    turnaround: "2-4 Days"
  },
  {
    id: "video-conference",
    name: "Conference & Corporate Event Video",
    category: "video",
    shortDesc: "Professional conference video editing with lower thirds, presentation slides, and speaker clips.",
    fullDesc: "Polished corporate video editing for seminars, summits, panel discussions, and keynotes. Includes speaker title lower thirds, slide inserts, and crisp voice equalization.",
    price: "₦65,000",
    isStartingPrice: true,
    specification: "Full Keynote Edit + Short Promo Recap",
    features: ["Animated Speaker Name Lower-Thirds", "Presentation Slide Overlay Integration", "Noise Reduction & Voice EQ", "Executive Presentation Style"],
    imageUrl: "",
    cardImages: [],
    galleryImages: [],
    galleryVideos: webVideos,
    badge: "Corporate",
    isVideo: true,
    videoUrl: webVideos[1] ?? webVideos[0] ?? "",
    turnaround: "4-7 Days"
  },

  // ==========================================
  // 5. WEBSITE DEVELOPMENT / FULL-STACK
  // ==========================================
  {
    id: "web-ecommerce",
    name: "E-Commerce Online Store",
    category: "web",
    shortDesc: "Full-featured online store with payment gateway, product catalog, cart, and order management.",
    fullDesc: "Build a high-converting online shop. Features Paystack/Flutterwave/Stripe integration, automated inventory control, customer accounts, order tracking, and mobile-optimized checkout.",
    price: "₦180,000",
    isStartingPrice: true,
    specification: "Full Store Setup | Unlimited Products | Payment Gateway",
    features: ["Paystack / Flutterwave Integration", "Mobile-First Shopping Cart & Checkout", "Inventory & Order Management", "SEO & Speed Optimization"],
    imageUrl: webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 0, 1, 2),
    galleryImages: webDevImages,
    badge: "Top Seller",
    turnaround: "7-14 Days"
  },
  {
    id: "web-personal",
    name: "Personal / Portfolio Website",
    category: "web",
    shortDesc: "Sleek personal portfolio website for executives, creators, freelancers, and public figures.",
    fullDesc: "Showcase your achievements, projects, bio, and contact information with a stunning personal website. Ultra-fast load times, dark/light theme, and CV/resume download button.",
    price: "₦75,000",
    isStartingPrice: true,
    specification: "3-5 Pages | Modern UI/UX | Mobile Responsive",
    features: ["Custom Interactive Portfolio Layout", "WhatsApp & Contact Form Integration", "Domain & Hosting Setup Support", "Fast 5-Day Delivery"],
    imageUrl: webDevImages[1] ?? webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 1, 2, 3),
    galleryImages: webDevImages,
    turnaround: "3-5 Days"
  },
  {
    id: "web-business",
    name: "Commercial & Corporate Website",
    category: "web",
    shortDesc: "Professional company website to establish trust, capture leads, and showcase services.",
    fullDesc: "Establish a powerful corporate web presence. Features custom homepage, services breakdown, team profiles, interactive quote calculator, blog section, and Google Maps integration.",
    price: "₦130,000",
    isStartingPrice: true,
    specification: "5-10 Pages | Corporate CMS | SEO Ready",
    features: ["Custom UI/UX Brand Design", "Lead Capture & Contact Forms", "Google Maps & Business Setup", "1-Year SSL & Free Domain Support"],
    imageUrl: webDevImages[2] ?? webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 2, 3, 0),
    galleryImages: webDevImages,
    badge: "Essential",
    turnaround: "5-10 Days"
  },
  {
    id: "web-frontend",
    name: "Front-End Web Application",
    category: "web",
    shortDesc: "Custom React/Vite/Next.js front-end development with responsive animations and modern UI.",
    fullDesc: "High-performance front-end web application development using React, Next.js, and TypeScript. Pixel-perfect translation of Figma/Adobe XD designs into blazing fast code.",
    price: "₦150,000",
    isStartingPrice: true,
    specification: "React / Next.js / TypeScript Stack",
    features: ["Pixel-Perfect Figma to Code", "Smooth Animations (Framer/AOS)", "100/100 Google Lighthouse Score", "Fully Mobile Responsive"],
    imageUrl: webDevImages[3] ?? webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 3, 0, 1),
    galleryImages: webDevImages,
    turnaround: "5-10 Days"
  },
  {
    id: "web-backend",
    name: "Back-End API & Database Engineering",
    category: "web",
    shortDesc: "Secure REST / GraphQL APIs, database architecture, authentication, and server setups.",
    fullDesc: "Robust backend system architecture built with Node.js, Express, PostgreSQL, MongoDB, or Firebase. Features JWT authentication, role-based access, and cloud server deployment.",
    price: "₦160,000",
    isStartingPrice: true,
    specification: "Node.js / Express / PostgreSQL / Cloud",
    features: ["Secure JWT / OAuth Authentication", "RESTful / GraphQL API Architecture", "Database Schema Optimization", "Cloud Deployment (AWS / Vercel / Render)"],
    imageUrl: webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 0, 2, 1),
    galleryImages: webDevImages,
    turnaround: "7-12 Days"
  },
  {
    id: "web-fullstack",
    name: "Full-Stack Web Application",
    category: "web",
    shortDesc: "End-to-end custom web software, SaaS platforms, portals, and web applications.",
    fullDesc: "Complete web app engineering from database to user interface. Ideal for SaaS platforms, educational portals, booking systems, real estate directories, and custom tools.",
    price: "₦250,000",
    isStartingPrice: true,
    specification: "Full Stack (React + Node.js + DB + Cloud)",
    features: ["End-to-End System Architecture", "Admin Dashboard & Analytics", "Real-Time Notifications & Email Gateway", "3 Months Technical Support"],
    imageUrl: webDevImages[1] ?? webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 1, 3, 2),
    galleryImages: webDevImages,
    badge: "Enterprise",
    turnaround: "10-21 Days"
  },

  // ==========================================
  // 6. DIGITAL MARKETING SERVICES
  // ==========================================
  {
    id: "mktg-social-mgmt",
    name: "Social Media Management",
    category: "marketing",
    shortDesc: "Monthly management of Instagram, Facebook, LinkedIn, and X (Twitter) accounts.",
    fullDesc: "Let us handle your social channels while you focus on business operations. Includes content planning, graphic creation, caption copywriting, scheduling, and community engagement.",
    price: "₦80,000",
    isStartingPrice: true,
    specification: "Monthly Package | 12-16 Posts + Stories + Reels",
    features: ["Custom Content Calendar", "Graphic Design & Reel Edits", "Comment & DM Engagement", "Monthly Performance Report"],
    imageUrl: graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 0, 2, 4),
    galleryImages: graphicsDesignImages,
    badge: "Monthly Pack",
    turnaround: "Ongoing / Monthly"
  },
  {
    id: "mktg-social-mktg",
    name: "Social Media Growth Campaign",
    category: "marketing",
    shortDesc: "Targeted follower growth, brand awareness campaigns, and community building.",
    fullDesc: "Data-driven marketing campaigns engineered to increase genuine brand reach, follower growth, website clicks, and organic customer inquiries.",
    price: "₦65,000",
    isStartingPrice: true,
    specification: "1-Month Growth Campaign Scope",
    features: ["Audience Persona Mapping", "Organic Hashtag & Trend Strategy", "Influencer Collaboration Setup", "Growth Tracking Analytics"],
    imageUrl: graphicsDesignImages[1] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 1, 3, 5),
    galleryImages: graphicsDesignImages,
    turnaround: "1 Month"
  },
  {
    id: "mktg-content",
    name: "Content Marketing & Copywriting",
    category: "marketing",
    shortDesc: "Compelling blog articles, sales emails, landing page copy, and social media posts.",
    fullDesc: "Words that convert readers into paying customers. Professional copywriting for website landing pages, email marketing newsletters, press releases, and SEO blog posts.",
    price: "₦45,000",
    isStartingPrice: true,
    specification: "Package of 8 Articles / Copy Suites",
    features: ["SEO-Optimized Keyword Copy", "Persuasive Call-to-Actions", "Email Newsletter Templates", "Brand Tone & Voice Guide"],
    imageUrl: webDevImages[2] ?? webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 2, 0, 3),
    galleryImages: [...webDevImages, ...graphicsDesignImages.slice(0, 4)],
    turnaround: "3-5 Days"
  },
  {
    id: "mktg-paid-ads",
    name: "Paid Ads Setup & Optimization",
    category: "marketing",
    shortDesc: "High-ROI paid advertising campaign setup across Meta (FB/IG) and Google Ads.",
    fullDesc: "Stop wasting ad budget. We build target-focused advertising campaigns with conversion pixel tracking, retargeting funnels, and A/B split testing.",
    price: "₦50,000",
    isStartingPrice: true,
    specification: "Campaign Setup & 2-Week Optimization",
    features: ["Meta Pixel & Conversion API Setup", "Laser-Targeted Audience Segments", "A/B Creative & Headline Testing", "Daily Budget Monitoring"],
    imageUrl: graphicsDesignImages[4] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 4, 6, 2),
    galleryImages: graphicsDesignImages,
    badge: "High ROI",
    turnaround: "2-3 Days Setup"
  },
  {
    id: "mktg-meta-ads",
    name: "Facebook & Instagram Advertising",
    category: "marketing",
    shortDesc: "Dedicated Meta ad campaigns for sales, lead generation, WhatsApp messages, and app installs.",
    fullDesc: "Drive targeted traffic directly to your WhatsApp, website, or store. Includes ad creative design, ad copy, audience demographic targeting, and continuous optimization.",
    price: "₦55,000",
    isStartingPrice: true,
    specification: "Monthly Ad Management | Ad Creatives Included",
    features: ["WhatsApp Direct Traffic Funnels", "Custom Lead Generation Forms", "Video & Carousel Ad Creatives", "Weekly Performance Audits"],
    imageUrl: graphicsDesignImages[5] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 5, 7, 1),
    galleryImages: graphicsDesignImages,
    badge: "Popular",
    turnaround: "Setup in 48hrs"
  },
  {
    id: "mktg-google-ads",
    name: "Google Search & YouTube Ads",
    category: "marketing",
    shortDesc: "Capture customers active searching for your products on Google Search and YouTube.",
    fullDesc: "Appear at the top of Google when potential clients search for your services. Includes keyword research, negative keyword filtering, bidding strategy, and landing page optimization.",
    price: "₦70,000",
    isStartingPrice: true,
    specification: "Campaign Setup + 1 Month Management",
    features: ["High-Intent Keyword Bidding", "Negative Keyword Filtering", "Google Display & YouTube Video Placement", "Conversion Rate Optimization"],
    imageUrl: webDevImages[3] ?? webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 3, 1, 0),
    galleryImages: [...webDevImages, ...graphicsDesignImages.slice(0, 4)],
    turnaround: "Setup in 3 Days"
  },
  {
    id: "mktg-seo",
    name: "Search Engine Optimization (SEO)",
    category: "marketing",
    shortDesc: "Rank your business #1 on Google for local and global customer searches.",
    fullDesc: "Comprehensive technical, on-page, and off-page SEO strategy to increase organic web traffic. Includes Google My Business optimization, backlink building, and speed tuning.",
    price: "₦90,000",
    isStartingPrice: true,
    specification: "Monthly SEO Optimization Package",
    features: ["Google My Business Local Maps Ranking", "On-Page Keyword & Meta Tag Tuning", "Technical Site Audit & Fixes", "Monthly Keyword Ranking Reports"],
    imageUrl: webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 0, 2, 1),
    galleryImages: [...webDevImages, ...graphicsDesignImages.slice(0, 4)],
    badge: "Long Term Growth",
    turnaround: "Monthly Service"
  },
  {
    id: "mktg-brand-promo",
    name: "Brand Promotion & Influencer Outreach",
    category: "marketing",
    shortDesc: "Influencer marketing campaigns, PR press releases, and brand sponsorship deals.",
    fullDesc: "Connect your brand with key industry influencers, local creators, and online news outlets to amplify credibility and rapidly build public trust.",
    price: "₦85,000",
    isStartingPrice: true,
    specification: "Campaign Package | Influencer Vetting",
    features: ["Influencer Vetting & Contract Management", "Press Release Distribution", "Product Gifting Campaigns", "Campaign ROI Tracking"],
    imageUrl: graphicsDesignImages[6] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 6, 0, 3),
    galleryImages: graphicsDesignImages,
    turnaround: "1-2 Weeks"
  },
  {
    id: "mktg-campaign-mgmt",
    name: "End-to-End Campaign Management",
    category: "marketing",
    shortDesc: "Full multi-channel marketing campaign execution from concept to sales conversion.",
    fullDesc: "Complete strategic campaign management across social media, search engines, email, and print. We plan, execute, monitor, and optimize your entire launch strategy.",
    price: "₦120,000",
    isStartingPrice: true,
    specification: "30-Day Multi-Channel Campaign",
    features: ["Multi-Platform Ad Orchestration", "Landing Page & Email Funnel Setup", "Real-Time Sales Conversion Tracking", "Dedicated Campaign Manager"],
    imageUrl: graphicsDesignImages[7] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 7, 5, 3),
    galleryImages: [...graphicsDesignImages, ...webDevImages],
    badge: "Full Service",
    turnaround: "1 Month"
  },
  {
    id: "mktg-digital-ad",
    name: "Digital Banner & Display Advertising",
    category: "marketing",
    shortDesc: "Interactive display banner ads placement across high-traffic news and lifestyle blogs.",
    fullDesc: "Expand reach with animated HTML5 & static display banners published across top Nigerian news websites, blogs, and ad networks.",
    price: "₦50,000",
    isStartingPrice: true,
    specification: "Per Ad Network Campaign",
    features: ["High-Traffic Blog Placements", "Animated GIF / HTML5 Banners", "Click-Through Tracking", "Retargeting Capabilities"],
    imageUrl: graphicsDesignImages[2] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 2, 4, 6),
    galleryImages: graphicsDesignImages,
    turnaround: "3-5 Days"
  },
  {
    id: "mktg-content-creation",
    name: "Social Media Content Creation Pack",
    category: "marketing",
    shortDesc: "Monthly batch creation of branded graphics, promotional videos, reels, and stories.",
    fullDesc: "Receive a ready-to-post monthly content vault of high-end graphics, product photography, video reels, and engaging captions custom tailored to your business.",
    price: "₦75,000",
    isStartingPrice: true,
    specification: "20 Custom Graphics + 4 Video Reels",
    features: ["20 High-Res Design Assets", "4 Professional Video Reels", "Pre-written Engaging Captions", "Hashtag Vault Included"],
    imageUrl: graphicsDesignImages[1] ?? graphicsDesignImages[0] ?? "",
    cardImages: pick(graphicsDesignImages, 1, 4, 7),
    galleryImages: [...graphicsDesignImages, ...webDevImages],
    badge: "Best Value",
    turnaround: "5-7 Days"
  },
  {
    id: "mktg-strategy",
    name: "Digital Marketing Strategy Roadmap",
    category: "marketing",
    shortDesc: "Comprehensive digital growth audit, competitive analysis, and 6-month marketing blueprint.",
    fullDesc: "Get a clear roadmap for scaling your revenue. Includes deep competitor analysis, sales funnel architecture, marketing channel recommendations, and budget allocation plan.",
    price: "₦60,000",
    isStartingPrice: true,
    specification: "Custom 6-Month Strategy Document + Strategy Call",
    features: ["Comprehensive Business & Competitor Audit", "Sales Funnel Blueprint PDF", "Channel Budget Allocation Model", "1-on-1 Executive Strategy Call"],
    imageUrl: webDevImages[2] ?? webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 2, 1, 3),
    galleryImages: [...webDevImages, ...graphicsDesignImages],
    turnaround: "3-5 Days"
  }
];

export const categoryList: CategoryInfo[] = [
  { id: "all", label: "All Services", iconName: "FaLayerGroup", count: servicesData.length },
  { id: "branding", label: "Branding", iconName: "FaGem", count: servicesData.filter(s => s.category === "branding").length },
  { id: "design", label: "Graphic Design", iconName: "FaPalette", count: servicesData.filter(s => s.category === "design").length },
  { id: "printing", label: "Printing", iconName: "FaPrint", count: servicesData.filter(s => s.category === "printing").length },
  { id: "video", label: "Video Editing", iconName: "FaVideo", count: servicesData.filter(s => s.category === "video").length },
  { id: "web", label: "Web Development", iconName: "FaCode", count: servicesData.filter(s => s.category === "web").length },
  { id: "marketing", label: "Digital Marketing", iconName: "FaBullhorn", count: servicesData.filter(s => s.category === "marketing").length }
];
