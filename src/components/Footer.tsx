import React from "react";
import { Mail, Facebook, Instagram, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * FooterSection.tsx — Full-width footer with Newsletter + Mega columns
 *
 * - Left column: Newsletter, social icons, rating badges
 * - Right area: Four mega columns with headings and links
 * - Each column has a "Show More" that reveals extra links
 * - Bottom row: payment icons, legal links, small note
 * - Floating WhatsApp bubble (optional)
 *
 * Dependencies: tailwindcss, framer-motion, lucide-react
 */

// Simple helper component for a column with optional expandable list
function Column({ title, items }: { title: string; items: string[] }) {
  const [expanded, setExpanded] = React.useState(false);
  const preview = items.slice(0, 8);
  const rest = items.slice(8);

  return (
    <div>
      <h4 className="text-white font-semibold text-base mb-4">{title}</h4>
      <ul className="space-y-3">
        {(expanded ? items : preview).map((t) => (
          <li key={t}>
            <a href="/mobile-tyre-fitting" className="text-gray-300 hover:text-white text-sm">
              {t}
            </a>
          </li>
        ))}
      </ul>
      {rest.length > 0 && (
        <button
          className="mt-4 text-gray-200 hover:text-white text-sm inline-flex items-center gap-1"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show Less" : "Show More"}
          <ArrowRight className={`w-4 h-4 transition-transform ${expanded ? "rotate-90" : ""}`} />
        </button>
      )}
    </div>
  );
}

const helpAdvice = [
  "Call Now 02080901010",
  "Find Your Nearby Tyre Fitter",
  "Same Day Appointments",
  "Next Day Appointments",
  "Send Us An Email",
  "Chat With Us On WhatsApp",
  "Emergency Tyre Callout",
  "Mobile Tyre Near Me",
  "24/7 Support",
];

const services = [
  "Mobile Tyre Fitting",
  "Mobile Tyre Repair",
  "Mobile Tyre Replacement",
  "Fleet Tyre Check",
  "Mobile Wheel Balancing",
  "Locking Wheel Nut Removal",
  "TPMS Valve Replacement",
  "Tyres at Home",
  "Emergency Callouts",
];

const manufacturers = [
  "Michelin Tyres",
  "Pirelli Tyres",
  "Continental Tyres",
  "Bridgestone Tyres",
  "Hankook Tyres",
  "Kumho Tyres",
  "Nexen Tyres",
  "Yokohama Tyres",
  "Goodyear Tyres",
  "Dunlop Tyres",
];

const sizes = [
  "195/55 R16",
  "205/45 R17",
  "205/55 R16",
  "215/55 R17",
  "225/45 R17",
  "225/50 R17",
  "225/40 R18",
  "225/45 R18",
  "235/35 R19",
  "255/55 R19",
];

const areasColA = [
  "Central London",
  "Hackney",
  "Finsbury",
  "Chelsea",
  "Richmond",
  "Kensington",
  "Notting Hill",
  "Uxbridge",
  "Hillingdon",
  "Ruislip",
  "Greenford",
  "Slough",
  "Beaconsfield",
  "Amersham",
  "Chesham",
  "Windsor",
  "High Wycombe",
];

const areasColB = [
  "City Of London",
  "Westminster",
  "Kensington And Chelsea",
  "Kingston Upon Thames",
  "Richmond Upon Thames",
  "Hillingdon",
  "Hounslow",
  "Islington",
  "Lambeth",
  "Lewisham",
  "Sutton",
  "Barnet",
  "Brent",
  "Bromley",
  "Camden",
  "Ealing",
  "Hammersmith And Fulham",
];

const vehicles = [
  "Ferrari Mobile Tyre Fitting",
  "Aston Martin Mobile Tyre Fitting",
  "Bentley Mobile Tyre Fitting",
  "McLaren Mobile Tyre Fitting",
  "Rolls Royce Mobile Tyre Fitting",
  "BMW Mobile Tyre Fitting",
  "Mercedes Mobile Tyre Fitting",
  "G Wagon Mobile Tyre Fitting",
  "Audi Mobile Tyre Fitting",
  "Ford Mobile Tyre Fitting",
  "Tesla Mobile Tyre Fitting",
];

const otherServices = [
  "EV Mobile Tyre Fitting",
  "Electric Vehicle Tyres",
  "Vehicle Recovery",
  "Vehicle Battery",
  "Mobile Mechanic",
  "Mechanical Repairs At Home",
  "Roadside Recovery",
];

// Simple badges (Google & Trustpilot) via logo images
const GOOGLE_BADGE = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";
const TRUSTPILOT_BADGE = "https://upload.wikimedia.org/wikipedia/commons/6/69/Trustpilot_logo_2022.svg";

// Payment icons (wiki svgs)
const payments = [
  { alt: "Visa", src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
  { alt: "Mastercard", src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  { alt: "American Express", src: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" },
  // { alt: "Apple Pay", src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" },
  // { alt: "Google Pay", src: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg" },
];

export default function FooterSection() {
  return (
    <footer className="bg-neutral-900 text-gray-300">
      {/* Top strip: Newsletter left, columns right */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Newsletter */}
        <div className="lg:col-span-4">
          <h3 className="text-white text-2xl font-extrabold">Newsletter</h3>
          <p className="mt-2 text-sm text-gray-300">
            Sign up to keep up-to-date on everything happening in the amazing journey of Mobil Tyre Fitt.
          </p>

          <form
            className="mt-5 flex gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll keep you posted.");
            }}
          >
            <div className="flex-1">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-xl bg-white text-neutral-900 placeholder-gray-500 pl-10 pr-3 py-3 outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold px-5 py-3"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6">
            <p className="text-white font-semibold">Follow Us On:</p>
            <div className="mt-3 flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* <div className="mt-6">
            <p className="text-white font-semibold">Top Rated On:</p>
            <div className="mt-3 flex items-center gap-6">
              <img src={GOOGLE_BADGE} alt="Google" className="h-6" />
              <img src={TRUSTPILOT_BADGE} alt="Trustpilot" className="h-6" />
            </div>
          </div> */}
        </div>

        {/* Mega columns */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Column title="Help & Advice" items={helpAdvice} />
          <Column title="Mobile Tyre Services" items={services} />
          <Column title="Tyre Manufacturers" items={manufacturers} />
          <Column title="Popular sizes" items={sizes} />
        </div>
      </div>

      {/* Middle mega-list rows */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <Column title="Areas We Serve in and Around London" items={areasColA} />
        <Column title="London Boroughs & Nearby Counties" items={areasColB} />
        <Column title="Popular Vehicles" items={vehicles} />
        <Column title="Other Services" items={otherServices} />
      </div>

      {/* Bottom row */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 flex-wrap">
            {payments.map((p) => (
              <img key={p.alt} src={p.src} alt={p.alt} className="h-8 opacity-90" />
            ))}
          </div>

          <div className="text-sm text-gray-400 flex items-center gap-5 flex-wrap">
            <a href="/contact" className="hover:text-white">Privacy Policy</a>
            <a href="/contact" className="hover:text-white">Terms & Conditions</a>
            <span className="opacity-70">© {new Date().getFullYear()} Mobil Tyre Fitt</span>
          </div>
        </div>
      </div>

      {/* Optional floating WhatsApp bubble */}
      <a
        href="https://wa.me/442080901010"
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 shadow-lg"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white h-7 w-7" />
      </a>
    </footer>
  );
}
