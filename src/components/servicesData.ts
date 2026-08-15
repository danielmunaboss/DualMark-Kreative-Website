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
  stickersImages,
  bagsImages,
  brochuresImages,
  jottersImages,
  exerciseBookImages,
  magazinesImages,
  newspapersImages,
  envelopesImages,
  generalInvImages,
  weddingInvImages,
  documentImages,
  photoCardImages,
  childDedicationImages,
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
  graphicsDesignImages,
  businessCardImages,
  programsImages,
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
  // 1. PRINTING SERVICES
  // ==========================================
  {
    id: "print-flex-banner",
    name: "Flex Banner",
    category: "printing",
    shortDesc: "High-resolution outdoor flex banners with vibrant CMYK color printing and durable eyelet finishing.",
    fullDesc: "Heavy-duty waterproof flex banner printing suitable for event backdrops, outdoor signages, store fronts, and political campaigns. Printed using industrial large-format eco-solvent printers.",
    price: "₦12,000",
    isStartingPrice: true,
    specification: "Size: 3x2 ft | 440gsm Heavy Duty Flex",
    features: ["Waterproof & Weather Resistant", "Metal Eyelets Included", "High DPI HD Resolution", "Fast 24-Hour Delivery Option"],
    imageUrl: flexImages[0] ?? "",
    cardImages: pick(flexImages, 0, 1, 2),
    galleryImages: flexImages,
    badge: "Popular",
    turnaround: "24-48 Hours"
  },
  {
    id: "print-poster",
    name: "Poster Printing",
    category: "printing",
    shortDesc: "Eye-catching promotional posters printed on premium glossy or matte art paper.",
    fullDesc: "Vibrant custom posters ideal for events, product promos, movie releases, and wall displays. Available in A4, A3, A2, and A1 sizes with optional lamination.",
    price: "₦15,000",
    isStartingPrice: true,
    specification: "Pack of 50 Pcs | 150gsm Art Paper | A3 Size",
    features: ["Glossy or Matte Laminate", "Vibrant Color Contrast", "A4, A3, A2, A1 Sizes", "Bulk Order Discounts"],
    imageUrl: posterImages[0] ?? "",
    cardImages: pick(posterImages, 0, 1, 2),
    galleryImages: posterImages,
    badge: "Hot Deal",
    turnaround: "1-2 Days"
  },
  {
    id: "print-flyers",
    name: "Business Flyers",
    category: "printing",
    shortDesc: "Double-sided premium marketing flyers to boost product awareness and conversions.",
    fullDesc: "Professional marketing flyers printed on 150gsm/250gsm paper stock. Ideal for street hand-outs, corporate promos, trade shows, and product announcements.",
    price: "₦18,000",
    isStartingPrice: true,
    specification: "Pack of 100 Pcs | A5 Double-Sided | 150gsm Stock",
    features: ["Full Color Both Sides", "Clean Sharp Typography", "Matte or Gloss Finish", "Custom Die-Cut Option"],
    imageUrl: flyersImages[0] ?? "",
    cardImages: pick(flyersImages, 0, 1, 2),
    galleryImages: flyersImages,
    badge: "Best Seller",
    turnaround: "1-2 Days"
  },
  {
    id: "print-business-card",
    name: "Business Card Printing",
    category: "printing",
    shortDesc: "Premium double-sided executive business card printing on heavy 350gsm card stock.",
    fullDesc: "Make an unforgettable impression with high-grade business card printing. Features options for matte or gloss lamination, spot UV, velvet soft-touch finish, and rounded corners.",
    price: "₦15,000",
    isStartingPrice: true,
    specification: "Pack of 100 Pcs | 350gsm Premium Stock | Double-Sided",
    features: ["Heavy 350gsm Premium Card Stock", "Matte, Gloss or Soft-Touch Laminate", "Spot UV & Gold Foil Options", "Fast 24-48 Hour Turnaround"],
    imageUrl: businessCardImages[0] ?? "",
    cardImages: pick(businessCardImages, 0, 1, 2),
    galleryImages: businessCardImages,
    badge: "Essential",
    turnaround: "24-48 Hours"
  },
  {
    id: "print-picture-frame",
    name: "Photo & Wall Frame",
    category: "printing",
    shortDesc: "High-definition photo prints mounted in luxury glass, wooden, or acrylic picture frames.",
    fullDesc: "Preserve your memories or elevate corporate spaces with ultra-HD photo canvas prints and glass wall frames. Perfect for homes, offices, awards, and gifts.",
    price: "₦25,000",
    isStartingPrice: true,
    specification: "Size: 16x20 Inches | Glass or Wooden Frame",
    features: ["HD Archival Print Paper", "Anti-Scratch Glass Covering", "Sturdy Wall Hanging Hardware", "Custom Engraving Available"],
    imageUrl: framesImages[0] ?? "",
    cardImages: pick(framesImages, 0, 5, 10),
    galleryImages: framesImages,
    badge: "Premium",
    turnaround: "2-3 Days"
  },
  {
    id: "print-stickers",
    name: "Custom Stickers & Labels",
    category: "printing",
    shortDesc: "Die-cut waterproof vinyl stickers and product packaging labels in any shape.",
    fullDesc: "Branded stickers for food containers, cosmetic jars, laptop decals, equipment labels, and shipping boxes. Waterproof, tear-proof, and anti-fade vinyl finish.",
    price: "₦10,000",
    isStartingPrice: true,
    specification: "Pack of 100 Pcs | Waterproof Vinyl",
    features: ["Custom Die-Cut Shapes", "Waterproof & Oil-Proof", "Easy Peel Backing", "Gloss, Matte, Holographic Finish"],
    imageUrl: stickersImages[0] ?? "",
    cardImages: pick(stickersImages, 0, 1, 2),
    galleryImages: stickersImages,
    turnaround: "1-2 Days"
  },
  {
    id: "print-bags",
    name: "Branded Paper & Gift Bags",
    category: "printing",
    shortDesc: "Eco-friendly luxury cardboard and kraft paper bags custom printed with your logo.",
    fullDesc: "Custom printed carrier bags for boutiques, corporate gifts, wedding souvenirs, and events. Reinforced handles and heavy 250gsm card stock.",
    price: "₦35,000",
    isStartingPrice: true,
    specification: "Pack of 50 Pcs | Medium Size | Rope Handle",
    features: ["Heavy Card Stock", "Rope or Ribbon Handles", "Gold Foil Stamping Available", "Custom Sizes"],
    imageUrl: bagsImages[0] ?? "",
    cardImages: pick(bagsImages, 0, 1, 2),
    galleryImages: bagsImages,
    badge: "Popular",
    turnaround: "3-5 Days"
  },
  {
    id: "print-brochures",
    name: "Corporate Brochures",
    category: "printing",
    shortDesc: "Bi-fold and tri-fold corporate company brochures with rich full-color presentation.",
    fullDesc: "Showcase your company profile, services, and product line with professionally folded multi-page brochures on thick 250gsm art paper with soft-touch matte lamination.",
    price: "₦30,000",
    isStartingPrice: true,
    specification: "Pack of 50 Pcs | Tri-Fold | 250gsm Art Paper",
    features: ["Precision Folding", "Soft-Touch Matte Finish", "Rich Full-Color Detail", "Custom Page Counts"],
    imageUrl: brochuresImages[0] ?? "",
    cardImages: pick(brochuresImages, 0, 1, 2),
    galleryImages: brochuresImages,
    turnaround: "2-4 Days"
  },
  {
    id: "print-jotters",
    name: "Customized Event Jotters",
    category: "printing",
    shortDesc: "Spiral-bound souvenir notebooks for weddings, burials, anniversaries, and corporate events.",
    fullDesc: "Personalized event notepad jotters featuring custom photo covers, inner ruled pages, wire-o binding, and glossy laminated front/back covers.",
    price: "₦45,000",
    isStartingPrice: true,
    specification: "Pack of 50 Pcs | A5 Size | 80 Inner Ruled Pages",
    features: ["Wire-O Twin Loop Binding", "Heavy Laminated Cover", "High Quality 80gsm Inner Paper", "Custom Cover Design Included"],
    imageUrl: jottersImages[0] ?? "",
    cardImages: pick(jottersImages, 0, 1, 2),
    galleryImages: jottersImages,
    badge: "Event Special",
    turnaround: "3-5 Days"
  },
  {
    id: "print-exercise-books",
    name: "Branded Exercise Books",
    category: "printing",
    shortDesc: "School and institutional customized exercise books with full-color custom covers.",
    fullDesc: "High-volume exercise book printing for private schools, NGOs, and educational campaigns. Durable cover stock with clean margin printing on inner pages.",
    price: "₦60,000",
    isStartingPrice: true,
    specification: "Pack of 100 Pcs | 60 Leaves / 80 Leaves | A4/A5",
    features: ["Custom Front & Back Cover", "Educational Information Back Cover", "Staple/Thread Binding", "Wholesale Pricing"],
    imageUrl: exerciseBookImages[0] ?? "",
    cardImages: pick(exerciseBookImages, 0, 1, 2),
    galleryImages: exerciseBookImages,
    turnaround: "4-7 Days"
  },
  {
    id: "print-magazines",
    name: "Magazine & Catalog Printing",
    category: "printing",
    shortDesc: "Full-color saddle-stitched and perfect-bound magazines, annual reports, and product catalogs.",
    fullDesc: "Glossy multi-page publications for fashion, corporate reports, church magazines, and lifestyle brands. Perfect binding or saddle stitching with spot UV covers.",
    price: "₦85,000",
    isStartingPrice: true,
    specification: "Pack of 50 Copies | 24-48 Pages | A4 Size",
    features: ["Spot UV & Foil Stamping", "Saddle Stitch or Perfect Binding", "130gsm Inner Gloss Paper", "Professional Page Preflight"],
    imageUrl: magazinesImages[0] ?? "",
    cardImages: pick(magazinesImages, 0, 1, 2),
    galleryImages: magazinesImages,
    turnaround: "5-7 Days"
  },
  {
    id: "print-newspapers",
    name: "Special Edition Newspapers",
    category: "printing",
    shortDesc: "Event and memorial newspapers for funerals, political campaigns, and special anniversaries.",
    fullDesc: "Classic newsprint publications for tribute editions, wedding news, and political manifestos. Authentic broadsheet or tabloid size layout.",
    price: "₦75,000",
    isStartingPrice: true,
    specification: "Pack of 200 Copies | 8-16 Pages | Tabloid Size",
    features: ["Traditional Newsprint Feel", "High Speed Web Press Printing", "Custom Graphic Layouts", "Fast Bulk Printing"],
    imageUrl: newspapersImages[0] ?? "",
    cardImages: pick(newspapersImages, 0, 1, 2),
    galleryImages: newspapersImages,
    turnaround: "3-4 Days"
  },
  {
    id: "print-envelopes",
    name: "Branded Corporate Envelopes",
    category: "printing",
    shortDesc: "Custom printed letterhead envelopes in DL, C5, and C4 sizes with peel-and-seal strips.",
    fullDesc: "Complete your corporate stationery with custom printed business envelopes. Featuring official company branding, logo, and return address on crisp bond paper.",
    price: "₦20,000",
    isStartingPrice: true,
    specification: "Pack of 100 Pcs | DL / C5 Size | Self-Seal",
    features: ["Peel & Seal Adhesive Strip", "Full Color Logo Print", "DL, C5, C4 Sizes Available", "Window or Non-Window"],
    imageUrl: envelopesImages[0] ?? "",
    cardImages: pick(envelopesImages, 0, 1, 2),
    galleryImages: envelopesImages,
    turnaround: "2-3 Days"
  },
  {
    id: "print-invitation-cards",
    name: "General Invitation Cards",
    category: "printing",
    shortDesc: "Stylish general invitation cards for birthdays, product launches, galas, and VIP parties.",
    fullDesc: "Make your event stand out from the invitation stage. Printed on premium 350gsm card stock with custom envelopes and decorative foil accents.",
    price: "₦25,000",
    isStartingPrice: true,
    specification: "Pack of 50 Pcs | 350gsm Textured Card | Envelope Included",
    features: ["Textured Specialty Card Stock", "Gold / Silver Foil Accent", "Matching Branded Envelope", "Custom Die-Cut Inserts"],
    imageUrl: generalInvImages[0] ?? "",
    cardImages: pick(generalInvImages, 0, 1, 2),
    galleryImages: generalInvImages,
    turnaround: "2-3 Days"
  },
  {
    id: "print-wedding-invitations",
    name: "Luxury Wedding Invitations",
    category: "printing",
    shortDesc: "Exquisite wedding invitation suites with acrylic cards, wax seals, and velvet envelopes.",
    fullDesc: "Bespoke wedding stationery crafted to reflect luxury and romantic elegance. Available in laser-cut cardstock, transparent acrylic glass, gold foil, and ribbon closures.",
    price: "₦50,000",
    isStartingPrice: true,
    specification: "Pack of 50 Sets | Acrylic or Laser-Cut Card | Wax Seal",
    features: ["Custom Wax Seal & Ribbon", "Clear Acrylic or Gold Foil Printing", "RSVP Card & Access Pass Included", "Luxury Envelope Sleeve"],
    imageUrl: weddingInvImages[0] ?? "",
    cardImages: pick(weddingInvImages, 0, 1, 2),
    galleryImages: weddingInvImages,
    badge: "Luxury",
    turnaround: "4-7 Days"
  },
  {
    id: "print-burial-invitations",
    name: "Wedding and Burial Program",
    category: "printing",
    shortDesc: "Elegant wedding programs and dignified funeral program booklets, tribute cards, and memorial invitation programs.",
    fullDesc: "Honor loved ones with tastefully designed memorial program booklets and tribute invitation cards. Printed with reverence on premium silk cardstock.",
    price: "₦35,000",
    isStartingPrice: true,
    specification: "Pack of 50 Copies | 8-16 Pages | A5 Booklet",
    features: ["Full Color Tribute Layout", "Glossy Photo Covers", "Fast Turnaround Support", "Matching Memorial Cards"],
    imageUrl: programsImages[0] ?? "",
    cardImages: pick(programsImages, 0, 1, 2),
    galleryImages: programsImages,
    turnaround: "1-3 Days"
  },
  {
    id: "print-child-dedication",
    name: "Child Dedication Cards",
    category: "printing",
    shortDesc: "Adorable baby shower, child dedication, and christening invitation cards & souvenirs.",
    fullDesc: "Celebrate your newborn with cute, colorful custom dedication invitations. Features soft pastel colors, custom baby photography layout, and matching envelopes.",
    price: "₦20,000",
    isStartingPrice: true,
    specification: "Pack of 50 Pcs | Glossy Card | Matching Envelope",
    features: ["Custom Baby Photo Layout", "Vibrant Pastel Designs", "Envelopes Included", "Express Production Available"],
    imageUrl: childDedicationImages[0] ?? "",
    cardImages: first(childDedicationImages, 3),
    galleryImages: childDedicationImages,
    turnaround: "2-3 Days"
  },
  {
    id: "print-document-printing",
    name: "Document & Report Printing",
    category: "printing",
    shortDesc: "Fast black & white and full-color document printing with binding services.",
    fullDesc: "High-volume printing for business proposals, legal briefs, training manuals, and academic projects. Spiral binding, comb binding, or hardback binding available.",
    price: "₦5,000",
    isStartingPrice: true,
    specification: "Per Document Pack | A4 Bond Paper | Spiral Binding",
    features: ["Clean Crisp Text", "Spiral / Comb / Hard Cover Binding", "A4 & A3 Formats", "Same-Day Dispatch Option"],
    imageUrl: documentImages[0] ?? "",
    cardImages: first(documentImages, 3),
    galleryImages: documentImages,
    turnaround: "Same Day / 24hrs"
  },
  {
    id: "print-photo-printing",
    name: "Photo Printing & Enlargement",
    category: "printing",
    shortDesc: "High-definition photo lab prints on archival Fuji/Kodak photo paper.",
    fullDesc: "Turn digital memories into physical photo prints. Available in 4x6, 5x7, 8x10, 12x18, and large format wall poster enlargements with anti-UV coating.",
    price: "₦8,000",
    isStartingPrice: true,
    specification: "Set of 20 Prints | 4x6 or 8x10 HD Photo Paper",
    features: ["True HD Color Reproduction", "Glossy or Lustre Silk Finish", "100+ Year Anti-Fade Guarantee", "Fast Processing"],
    imageUrl: photoCardImages[0] ?? "",
    cardImages: pick(photoCardImages, 0, 1, 2),
    galleryImages: photoCardImages,
    turnaround: "24 Hours"
  },
  {
    id: "print-awards",
    name: "Custom Award Plaques",
    category: "printing",
    shortDesc: "Crystal, wooden, and acrylic recognition award plaques with laser engraving.",
    fullDesc: "Honor excellence, employee achievements, and event winners with luxury recognition awards. Custom UV printed and precision laser etched.",
    price: "₦30,000",
    isStartingPrice: true,
    specification: "Per Unit | Crystal / Wooden / Acrylic Base",
    features: ["Precision Laser Engraving", "Full Color UV Logo Print", "Velvet Gift Box Included", "Heavy Weight Premium Feel"],
    imageUrl: awardImages[0] ?? "",
    cardImages: pick(awardImages, 0, 1, 2),
    galleryImages: awardImages,
    badge: "Recognition",
    turnaround: "3-5 Days"
  },
  {
    id: "print-billboard",
    name: "Billboard Printing",
    category: "printing",
    shortDesc: "Large-format outdoor billboard banner printing with high-density UV inks on heavy-duty materials.",
    fullDesc: "High-resolution large-format billboard printing designed for maximum outdoor durability and vivid color retention. Printed on heavy 550gsm vinyl flex banner material with UV-resistant inks that resist sun fading and weather elements.",
    price: "₦75,000",
    isStartingPrice: true,
    specification: "Custom Large Format Size | 550gsm Flex Banner",
    features: [
      "Heavy-Duty Weatherproof Flex Material",
      "UV Anti-Fade Vibrant Ink Printing",
      "Reinforced Edges & Pocket / Eyelet Finishing",
      "High DPI Large-Format Visual Clarity",
      "Fast Express Delivery Options"
    ],
    imageUrl: outdoorImages[0] ?? "",
    cardImages: pick(outdoorImages, 0, 1, 2),
    galleryImages: outdoorImages,
    badge: "Large Format",
    turnaround: "2-4 Days"
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
    imageUrl: webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 0, 1, 2),
    galleryImages: webDevImages,
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
    imageUrl: weddingInvImages[3] ?? weddingInvImages[0] ?? "",
    cardImages: pick(weddingInvImages, 3, 5, 7),
    galleryImages: weddingInvImages,
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
    imageUrl: programsImages[0] ?? "",
    cardImages: pick(programsImages, 0, 1, 2),
    galleryImages: programsImages,
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
    imageUrl: programsImages[1] ?? programsImages[0] ?? "",
    cardImages: pick(programsImages, 1, 2, 0),
    galleryImages: programsImages,
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
    imageUrl: webDevImages[1] ?? webDevImages[0] ?? "",
    cardImages: pick(webDevImages, 1, 2, 3),
    galleryImages: webDevImages,
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
  { id: "printing", label: "Printing", iconName: "FaPrint", count: servicesData.filter(s => s.category === "printing").length },
  { id: "branding", label: "Branding", iconName: "FaGem", count: servicesData.filter(s => s.category === "branding").length },
  { id: "design", label: "Graphic Design", iconName: "FaPalette", count: servicesData.filter(s => s.category === "design").length },
  { id: "video", label: "Video Editing", iconName: "FaVideo", count: servicesData.filter(s => s.category === "video").length },
  { id: "web", label: "Web Development", iconName: "FaCode", count: servicesData.filter(s => s.category === "web").length },
  { id: "marketing", label: "Digital Marketing", iconName: "FaBullhorn", count: servicesData.filter(s => s.category === "marketing").length }
];
