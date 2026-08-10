/**
 * imageRegistry.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Central registry for all service image assets.
 *
 * Uses Vite's import.meta.glob to statically import images from each folder.
 * Each glob call is a compile-time literal — Vite resolves them during build.
 *
 * HOW TO UPDATE IMAGES FOR A CARD:
 *   1. Add/remove images in the relevant folder under src/assets/images/
 *   2. The gallery images update automatically.
 *   3. To change the 3 card slideshow images, update the cardImages arrays
 *      in servicesData.ts (they reference entries from this file by index).
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Helper ──────────────────────────────────────────────────────────────────
function sortedValues(
  glob: Record<string, { default: string }>
): string[] {
  return Object.keys(glob)
    .sort()
    .map((k) => glob[k].default);
}

// ─── PRINTING ────────────────────────────────────────────────────────────────

const _flexRaw = import.meta.glob(
  "../assets/images/flex banner/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const flexImages = sortedValues(_flexRaw);

const _posterRaw = import.meta.glob(
  "../assets/images/poster/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const posterImages = sortedValues(_posterRaw);

const _flyersRaw = import.meta.glob(
  "../assets/images/flyers/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const flyersImages = sortedValues(_flyersRaw);

const _framesRaw = import.meta.glob(
  "../assets/images/frames/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const framesImages = sortedValues(_framesRaw);

const _stickersRaw = import.meta.glob(
  "../assets/images/stickers/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const stickersImages = sortedValues(_stickersRaw);

const _bagsRaw = import.meta.glob(
  "../assets/images/papper bag and box customize and nylon bag and customize bages/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const bagsImages = sortedValues(_bagsRaw);

const _brochuresRaw = import.meta.glob(
  "../assets/images/brochures/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const brochuresImages = sortedValues(_brochuresRaw);

const _jottersRaw = import.meta.glob(
  "../assets/images/jotters/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const jottersImages = sortedValues(_jottersRaw);

const _exerciseBookRaw = import.meta.glob(
  "../assets/images/exercise book/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const exerciseBookImages = sortedValues(_exerciseBookRaw);

const _magazinesRaw = import.meta.glob(
  "../assets/images/magazines/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const magazinesImages = sortedValues(_magazinesRaw);

const _newspapersRaw = import.meta.glob(
  "../assets/images/news papers/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const newspapersImages = sortedValues(_newspapersRaw);

const _envelopesRaw = import.meta.glob(
  "../assets/images/envelops/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const envelopesImages = sortedValues(_envelopesRaw);

const _generalInvRaw = import.meta.glob(
  "../assets/images/general iv card/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const generalInvImages = sortedValues(_generalInvRaw);

const _weddingInvRaw = import.meta.glob(
  "../assets/images/wedding iv card/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const weddingInvImages = sortedValues(_weddingInvRaw);

const _documentRaw = import.meta.glob(
  "../assets/images/document printing/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const documentImages = sortedValues(_documentRaw);

const _photoCardRaw = import.meta.glob(
  "../assets/images/photo card/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const photoCardImages = sortedValues(_photoCardRaw);

const _childDedicationRaw = import.meta.glob(
  "../assets/images/child dedication/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const childDedicationImages = sortedValues(_childDedicationRaw);


const _awardRaw = import.meta.glob(
  "../assets/images/award/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const awardImages = sortedValues(_awardRaw);

// ─── BRANDING ────────────────────────────────────────────────────────────────

const _fullBrandingRaw = import.meta.glob(
  "../assets/images/full branding/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const fullBrandingImages = sortedValues(_fullBrandingRaw);

const _monogramingRaw = import.meta.glob(
  "../assets/images/monograming/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const monogramingImages = sortedValues(_monogramingRaw);

const _clothBrandingRaw = import.meta.glob(
  "../assets/images/cloth branding/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const clothBrandingImages = sortedValues(_clothBrandingRaw);

const _capBrandingRaw = import.meta.glob(
  "../assets/images/capbranding/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const capBrandingImages = sortedValues(_capBrandingRaw);

const _carBrandingRaw = import.meta.glob(
  "../assets/images/car branding/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const carBrandingImages = sortedValues(_carBrandingRaw);

const _threeDFrameRaw = import.meta.glob(
  "../assets/images/3d art printing/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const threeDFrameImages = sortedValues(_threeDFrameRaw);

const _shopBrandingRaw = import.meta.glob(
  "../assets/images/customized item branding for any event/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const shopBrandingImages = sortedValues(_shopBrandingRaw);

const _clothtagsRaw = import.meta.glob(
  "../assets/images/clothtage/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const clothtagsImages = sortedValues(_clothtagsRaw);

const _outdoorRaw = import.meta.glob(
  "../assets/images/bill boards/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const outdoorImages = sortedValues(_outdoorRaw);

const _indoorRaw = import.meta.glob(
  "../assets/images/indoor signage/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const indoorImages = sortedValues(_indoorRaw);

const _outdoorSignageRaw = import.meta.glob(
  "../assets/images/outdoor signage/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const outdoorSignageImages = sortedValues(_outdoorSignageRaw);

const _rollupRaw = import.meta.glob(
  "../assets/images/rollup stands/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const rollupImages = sortedValues(_rollupRaw);

// ─── GRAPHIC DESIGN ──────────────────────────────────────────────────────────

const _graphicsDesignRaw = import.meta.glob(
  "../assets/images/graphics design/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const graphicsDesignImages = sortedValues(_graphicsDesignRaw);

const _businessCardRaw = import.meta.glob(
  "../assets/images/business card/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const businessCardImages = sortedValues(_businessCardRaw);

// ─── VIDEO / PROGRAMS ────────────────────────────────────────────────────────

const _programsRaw = import.meta.glob(
  "../assets/images/programs/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const programsImages = sortedValues(_programsRaw);

// ─── WEBSITE DEVELOPMENT ─────────────────────────────────────────────────────

const _webDevRaw = import.meta.glob(
  "../assets/images/web developmet/*.{jpg,jpeg,png,webp}",
  { eager: true }
) as Record<string, { default: string }>;
export const webDevImages = sortedValues(_webDevRaw);
