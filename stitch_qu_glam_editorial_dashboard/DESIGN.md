# Design System Strategy: Luminous Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Luminous Editorial."** 

This isn't just a functional interface; it is a high-end digital atelier. We are moving away from the "SaaS-standard" layout—characterized by rigid grids and heavy borders—toward a fluid, breathable, and layered experience. The "Clean Girl Aesthetic" demands a focus on health, light, and effortless luxury. We achieve this through **intentional asymmetry**, where high-resolution imagery of hair textures overlaps with sophisticated typography, and **tonal depth**, where surfaces feel like stacked sheets of fine vellum rather than flat digital boxes.

To break the "template" look, designers should utilize white space as a structural element. Avoid centering everything; use off-grid placements for headings and imagery to mimic the layout of a premium fashion magazine like *Vogue* or *Harper’s Bazaar*.

---

## 2. Colors: Tonal Luxury
Our palette is rooted in the "Clean Girl" signature: high-contrast neutrals warmed by a prestigious gold.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Traditional dividers create a "boxed-in" feeling that contradicts our aesthetic of effortless flow. Boundaries must be defined through:
- **Background Color Shifts:** Use a transition from `surface` (#f9f9f9) to `surface_container_low` (#f3f3f3) to signal a new content block.
- **Negative Space:** Use the Spacing Scale (specifically `16` to `24`) to create a psychological break between sections.

### Surface Hierarchy & Nesting
Treat the UI as a physical space. Use the surface-container tiers to create a "nested" depth. 
- **Base Level:** `surface` (#f9f9f9).
- **Secondary Content:** `surface_container_low` (#f3f3f3).
- **Interactive Elements/Cards:** `surface_container_lowest` (#ffffff).
By placing a pure white card on a light gray background, you create a soft, natural lift that feels premium and clean.

### The "Glass & Gold" Rule
- **Glassmorphism:** For navigation bars and floating action elements, use `surface_container_lowest` with an 80% opacity and a `backdrop-filter: blur(20px)`. This keeps the "luminous" feel by allowing the background textures to peek through.
- **Signature Textures:** For main CTAs, do not use flat hex codes. Apply a subtle linear gradient from `primary` (#735c00) to `primary_container` (#d4af37) at a 135-degree angle. This gives the gold a "metallic sheen" that flat color cannot replicate.

---

## 3. Typography: The Editorial Voice
Typography is the primary vehicle for our high-end brand identity. We utilize two families: **Manrope** for dramatic impact and **Inter** for functional clarity.

- **Display & Headlines (Manrope):** These should be treated as design elements. Use `display-lg` for hero sections with tight letter-spacing (-0.02em) to create an authoritative, editorial feel. 
- **Body & Titles (Inter):** Inter provides a modern, neutral balance. It ensures that while the headlines are "fashion," the information remains "service." 
- **The Contrast Ratio:** Create tension by pairing a `display-sm` headline in bold with a `label-md` in all-caps with increased letter-spacing (0.1em). This "Big and Small" approach is a hallmark of premium design.

---

## 4. Elevation & Depth: Tonal Layering
We move beyond the 1990s drop-shadow by using light and tone to convey hierarchy.

- **The Layering Principle:** Depth is achieved by stacking. A `surface_container_highest` element should never sit directly on a `surface` background; it should transition through the hierarchy to feel "organic."
- **Ambient Shadows:** When a shadow is necessary (e.g., a floating booking card), use a tinted shadow. Instead of `#000000`, use a shadow based on `on_surface` at 5% opacity with a `40px` blur and `10px` Y-offset. This mimics natural light filtered through a salon window.
- **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in high-contrast modes), use the `outline_variant` token at **15% opacity**. It should be felt, not seen.
- **Rounding:** Strictly adhere to the `md` (0.75rem / 12px) for cards and `full` for buttons. This creates a "soft-touch" interface that feels approachable yet professional.

---

## 5. Components: Refined Primitives

### Buttons
- **Primary:** Gradient (`primary` to `primary_container`), `rounded-full`, white text (`on_primary`). No border.
- **Secondary:** `surface_container_lowest` background, `primary` text, with a `Ghost Border`.
- **Tertiary:** Text-only in `primary`, using `label-md` styling (all-caps, spaced letter-spacing).

### Cards & Lists
- **Forbid Dividers:** Do not use lines between list items. Use a 12px vertical gap (`spacing-3`) or an alternating background of `surface_container_lowest` and `surface_container_low`.
- **Image-Heavy Cards:** For hair extension galleries, images should have a `md` corner radius and no border. The text should sit below in `title-sm`.

### Input Fields
- Avoid white boxes with black outlines. Use `surface_container_high` as the background with a `rounded-md` shape. On focus, the background shifts to `surface_container_lowest` and a subtle `primary` (Gold) ghost border appears.

### Signature Component: The "Product Spotlight"
A specific layout for this system: A large, off-center image (60% width) with a `surface_container_lowest` card overlapping the image by 40px. This creates the "Editorial" depth that distinguishes the brand from a standard salon site.

---

## 6. Do's and Don'ts

### Do:
- **Use "Hair-Inspired" Motion:** Transitions should be soft and fluid (ease-in-out, 400ms), mimicking the movement of hair.
- **Embrace White Space:** If a layout feels "busy," increase the spacing between the headline and the body.
- **High-Quality Imagery:** The system relies on photography. Ensure all images have a warm, luminous color grade to match the `#D4AF37` gold.

### Don't:
- **Don't use pure black text on pure white:** Use `on_surface` (#1a1c1c) for body text to reduce eye strain and maintain a "soft" luxury feel.
- **Don't use 100% opaque borders:** They break the "Luminous" effect. 
- **Don't use standard blue for links:** All interactive highlights must use the `primary` (Gold) or `secondary` (Soft Gray) tokens.
- **Don't crowd the edges:** Maintain a minimum 24px (1.5rem) margin on all containers to preserve the "Clean Girl" breathing room.