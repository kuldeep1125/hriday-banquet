# Hriday Hall (हृदय हॉल) — Official Website

Official production web application for **Hriday Hall (Hriday Banquet Hall)**, an air-conditioned banquet hall and celebration venue situated on Spine Road, Sant Nagar, Moshi, Pimpri-Chinchwad, Pune, Maharashtra 412105.

Designed and engineered to elite hospitality standards with zero stock/AI fabrication, real photographic assets, verified business data, and conversion-focused UX.

---

## 🏛️ Venue Specifications

- **Location:** Plot No. 188, Spine Road, Sant Nagar, Sector Number 4, Moshi, Pimpri-Chinchwad, Pune, Maharashtra 412105
- **Capacity:** 180–200 Theatre Seating | Up to 300 Floating Guests | 80–100 Dining Batch
- **Key Features:**
  - 100% Uninterrupted Generator Power Backup
  - Dedicated On-Site Parking for ~90 Vehicles + Valet Support
  - Separate Air-Conditioned Dining Floor
  - Elevated Ceremony Stage with Acoustic Panelling
  - Private Air-Conditioned Bridal & Green Rooms
- **Verified Public Ratings:**
  - **Google Business Profile:** 4.1★ (979+ Reviews)
  - **Justdial Verified Listing:** 4.0★ (980+ Reviews)
- **Timings:** Monday – Sunday (9:00 AM – 11:00 PM)
- **Verified Hotlines:** `+91 91450 83945` · `+91 96045 40084`

---

## 🚀 Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom luxury palette (charcoal dark `brand-dark` and warm metallic `brand-gold`)
- **Icons:** Lucide React
- **Build Tool:** Vite 6
- **Performance:** Multi-tier responsive `<picture>` tags with WebP format, lazy loading, and modern typography
- **Accessibility:** Skip-to-content links, ARIA labels, semantic landmark markup, full keyboard navigation

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/kuldeep1125/hriday-banquet.git

# Navigate to project directory
cd hriday-banquet

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
hriday-banquet/
├── public/
│   └── images/               # Curated multi-resolution HD & 2K authentic venue photographs
├── src/
│   ├── components/           # Modular UI components
│   │   ├── AboutSection.tsx
│   │   ├── AmenitiesSection.tsx
│   │   ├── BrandLogo.tsx
│   │   ├── EventsSection.tsx
│   │   ├── FloatingContactBar.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Hero.tsx
│   │   ├── InquirySection.tsx
│   │   ├── LocationSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ReviewsSection.tsx
│   │   └── SpacesSection.tsx
│   ├── data/
│   │   └── businessData.ts   # Single Source of Truth for verified venue specifications
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 📄 License

Proprietary — All rights reserved for Hriday Hall (हृदय हॉल).
