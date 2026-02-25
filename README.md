
# Mobile Tyre Shop — React + Vite + Redux Toolkit + Tailwind

A complete starter that mirrors the core UX of a mobile tyre retailer (like VRN/size search, list, filters, cart, booking modal, and checkout) with a distinct emerald × indigo design.

## Quick start

```bash
pnpm i   # or: npm i / yarn
pnpm dev # or: npm run dev
```

Your app runs on http://localhost:5173

## Tech

- React 18 + Vite + TypeScript
- Redux Toolkit (catalogue, cart, booking slices)
- React Router (Home, Tyres, Checkout)
- Tailwind CSS (custom brand + accent palette)

## Where to integrate real features

- **VRN/Size lookup**: Replace mock data in `src/utils/mockData.ts` and wire a real API inside a thunk in `tyresSlice`.
- **Payments**: Replace the alert in `src/pages/Checkout.tsx` with Stripe/PayPal integration.
- **Address/Postcode autocomplete**: Hook your provider (e.g., Google Places) inside `BookingModal` step 1.
- **Slots/Technician routing**: Replace static times in `BookingModal` step 2 and call your scheduling backend.
- **SEO**: Add meta tags and structured data to `index.html` or a framework that supports SSR.

## Project Structure

```
src/
  app/store.ts
  components/...
  features/
    tyres/tyresSlice.ts
    cart/cartSlice.ts
    booking/bookingSlice.ts
  pages/ (Home, Tyres, Checkout, NotFound)
  utils/ (types, mockData)
  styles/index.css
```

## Branding & Styling

- Primary: `brand-600` (emerald-ish) · Accent: `accent-600` (indigo)
- Utility classes: `.glass`, `.btn`, `.btn-primary`, `.btn-ghost`, `.chip`

## License

MIT — replace with your own terms if needed.


## Reviews system

- Redux slice at `features/reviews/reviewsSlice.ts` with localStorage persistence
- Components: `ReviewsBlock` (list + form), `StarRatingInput`
- Page: `/reviews` with on-site reviews and a Trustpilot CTA button
