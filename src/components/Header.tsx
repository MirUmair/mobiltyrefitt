import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store";
import { motion, useAnimation } from "framer-motion";

/* ======================================================
   🔥 Animated Phone Component (Fixed + Proper Typing)
====================================================== */
type AnimatedPhoneProps = {
  children: React.ReactNode;
  small?: boolean;
};

function AnimatedPhoneNumber({ children, small = false }: AnimatedPhoneProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.06, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <motion.span
      animate={controls}
      initial={{ scale: 1 }}
      className={`inline-flex ${small ? "text-sm" : "text-base"
        } tracking-wide`}
    >
      {children}
    </motion.span>
  );
}

/* ======================================================
   🔧 CONSTANTS
====================================================== */
const SERVICES = [
  "Mobile Tyre Fitting",
  "Tyre Repair",
  "Tyre Replacement",
  "Mobile Wheel Balancing",
  "Locking Wheel Nut Removal",
  "Fleet Tyre Checks",
  "TPMS Valve & Sensor Replacement",
];

const LOCATIONS = [
  "London",
  "Hackney",
  "Chelsea",
  "Richmond",
  "Kensington",
  "Uxbridge",
  "Hillingdon",
  "Ruislip",
  "High Wycombe",
  "Slough",
  "Greenwich",
];

/* ======================================================
   🔥 HEADER COMPONENT
====================================================== */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);

  const count = useSelector((s: RootState) =>
    s.cart.items.reduce((a, b) => a + b.qty, 0)
  );
  const dispatch = useDispatch();

  const navLink =
    "px-3 py-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100";
  const active = "bg-blue-50 text-blue-700 font-semibold";

  /* ------------ Routing / Query Params ------------ */
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedService = searchParams.get("selectedService");
  const selectedLocation = searchParams.get("selectedLocation");

  const isServicesPage = location.pathname === "/mobile-tyre-fitting";
  const isLocationsPage =
    location.pathname === "/areas" ||
    location.pathname === "/allareas";

  const isAllAreasSelected = selectedLocation === "All Areas";

  /* ======================================================
     🔥 UNIVERSAL CLICK HANDLER (RELOAD + PARAMS)
  ====================================================== */
  const goWithReload = (path: string, params: Record<string, string>) => {
    const urlParams = new URLSearchParams(params).toString();

    window.scrollTo(0, 0);
    const finalUrl = urlParams ? `${path}?${urlParams}` : path;
    window.location.assign(finalUrl);

    setOpen(false);
    setServicesOpen(false);
    setLocOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-20 w-50" />
        </Link>

        {/* ====================== DESKTOP NAV ====================== */}
        <nav className="ml-auto hidden md:flex items-center gap-2">
          {/* HOME */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : ""}`
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </NavLink>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`${navLink} flex items-center gap-1 ${isServicesPage ? active : ""
                }`}
            >
              Mobile Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-1 w-64 rounded-xl border bg-white shadow-lg p-2 z-50">
                {SERVICES.map((item) => {
                  const isSelected = selectedService === item;
                  return (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-50 ${isSelected
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : ""
                        }`}
                      onClick={() =>
                        goWithReload("/mobile-tyre-fitting", {
                          selectedService: item,
                        })
                      }
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* LOCATIONS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setLocOpen(true)}
            onMouseLeave={() => setLocOpen(false)}
          >
            <button
              className={`${navLink} flex items-center gap-1 ${isLocationsPage ? active : ""
                }`}
            >
              Our Locations ▾
            </button>

            {locOpen && (
              <div className="absolute left-0 mt-1 w-56 rounded-xl border bg-white shadow-lg p-2 z-50">
                {LOCATIONS.map((city) => {
                  const isSelected = selectedLocation === city;
                  return (
                    <div
                      key={city}
                      className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-50 ${isSelected
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : ""
                        }`}
                      onClick={() =>
                        goWithReload("/areas", {
                          selectedLocation: city,
                        })
                      }
                    >
                      {city}
                    </div>
                  );
                })}

                <div
                  className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-50 ${isAllAreasSelected
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : ""
                    }`}
                  onClick={() =>
                    goWithReload("/allareas", {
                      selectedLocation: "All Areas",
                    })
                  }
                >
                  See All
                </div>
              </div>
            )}
          </div>

          {/* CONTACT */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : ""}`
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact Us
          </NavLink>

          {/* CART BUTTON (USES REDUX) */}


          {/* CALL CTA */}
          <a
            href="tel:+447868258333"
            className="ml-3 rounded-full bg-rose-500 text-white font-bold px-5 py-2 shadow hover:bg-rose-600 inline-flex items-center gap-2"
          >
            <span className="hidden sm:inline">Call</span>
            <AnimatedPhoneNumber>+44 7868 258333</AnimatedPhoneNumber>
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="ml-auto md:hidden flex items-center gap-2">
          {/* CART (MOBILE) */}



          {/* MENU TOGGLE */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border px-3 py-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ======================= MOBILE MENU ======================= */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-3 space-y-2">
            {/* HOME */}
            <NavLink
              to="/"
              className={navLink}
              onClick={() => goWithReload("/", {})}
            >
              Home
            </NavLink>

            {/* MOBILE SERVICES (MOBILE) */}
            <details
              className="rounded-lg"
              open={isServicesPage}
            >
              <summary
                className={`${navLink} cursor-pointer ${isServicesPage ? active : ""
                  }`}
              >
                Mobile Services
              </summary>

              <div className="pl-2 py-1">
                {SERVICES.map((item) => {
                  const isSelected = selectedService === item;
                  return (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100 ${isSelected
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : ""
                        }`}
                      onClick={() =>
                        goWithReload("/mobile-tyre-fitting", {
                          selectedService: item,
                        })
                      }
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </details>

            {/* OUR LOCATIONS (MOBILE) */}
            <details
              className="rounded-lg"
              open={isLocationsPage}
            >
              <summary
                className={`${navLink} cursor-pointer ${isLocationsPage ? active : ""
                  }`}
              >
                Our Locations
              </summary>

              <div className="pl-2 py-1">
                {LOCATIONS.map((city) => {
                  const isSelected = selectedLocation === city;
                  return (
                    <div
                      key={city}
                      className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100 ${isSelected
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : ""
                        }`}
                      onClick={() =>
                        goWithReload("/areas", {
                          selectedLocation: city,
                        })
                      }
                    >
                      {city}
                    </div>
                  );
                })}

                <div
                  className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100 ${isAllAreasSelected
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : ""
                    }`}
                  onClick={() =>
                    goWithReload("/allareas", {
                      selectedLocation: "All Areas",
                    })
                  }
                >
                  See All
                </div>
              </div>
            </details>

            {/* CONTACT (MOBILE) */}
            <NavLink
              to="/contact"
              className={navLink}
              onClick={() => goWithReload("/contact", {})}
            >
              Contact Us
            </NavLink>

            {/* CALL CTA (MOBILE) */}
            <a
              href="tel:+447868258333"
              className="inline-flex items-center gap-2 rounded-full bg-rose-500 text-white font-bold px-5 py-2 shadow hover:bg-rose-600"
            >
              <span>Call</span>
              <AnimatedPhoneNumber small>
                +44 7868 258333
              </AnimatedPhoneNumber>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
