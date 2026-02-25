import React from "react";
import { motion } from "framer-motion";
import { Phone, CheckSquare, MessageCircle } from "lucide-react";
import { headerImg } from "@/assets";

const tyreTrackSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="620" height="820">
  <defs>
    <pattern id="t" width="200" height="200" patternUnits="userSpaceOnUse">
      <g fill="black" fill-opacity="0.06">
        <rect x="10" y="10" width="24" height="60" rx="4"/>
        <rect x="50" y="10" width="24" height="60" rx="4"/>
        <rect x="90" y="10" width="24" height="60" rx="4"/>
        <rect x="130" y="10" width="24" height="60" rx="4"/>
        <rect x="30" y="90" width="24" height="60" rx="4"/>
        <rect x="70" y="90" width="24" height="60" rx="4"/>
        <rect x="110" y="90" width="24" height="60" rx="4"/>
        <rect x="150" y="90" width="24" height="60" rx="4"/>
      </g>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#t)"/>
</svg>`;
const trackBg = `url("data:image/svg+xml;utf8,${encodeURIComponent(tyreTrackSvg)}")`;

const bullets = [
  "24/7 Mobile Tyre Fitting",
  "Locking Wheel Nut Removal",
  "Any Size Tyre & Brand",
  "Emergency Callouts",
];

export default function EmergencyHero() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* BG Pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-16 bottom-0 w-[45%] hidden lg:block"
        style={{
          backgroundImage: trackBg,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          opacity: 0.35,
          transform: "rotate(-18deg)"
        }}
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT TEXT FLOAT-IN */}
          <motion.div
            className="lg:col-span-7"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900">
              Emergency Tyre Callouts In <br /> London
            </h1>

            <p className="mt-5 text-neutral-700 leading-relaxed max-w-2xl">
              A flat tyre, puncture, or sudden blowout can ruin your day —
              but with <strong>Mobile Tyre Fitt</strong>, help is only minutes away.
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed max-w-2xl">
              Fully insured, <strong>available 24/7</strong>, with{" "}
              <strong>30–60 minute response time</strong>.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 text-neutral-800">
              <Phone className="h-5 w-5 text-rose-600" />
              Call 02080 901010 — London’s fastest tyre fitting.
            </p>

            {/* Bullet List */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-neutral-800">
              {bullets.map((b) => (
                <span key={b} className="inline-flex items-start gap-2">
                  <CheckSquare className="h-5 w-5 text-emerald-600 mt-0.5" />
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE FLOAT-IN */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative"
            initial={{ x: 120, opacity: 0, y: 30 }}
            animate={{
              x: 0,
              opacity: 1,
              y: [0, -8, 0], // float animation even during entry
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <img
              src={headerImg}
              alt="Mobile Tyre Van"
              className="w-full max-w-[500px] rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/442080901010"
        className="fixed right-5 bottom-5 w-14 h-14 rounded-full bg-green-500 
                   hover:bg-green-400 flex justify-center items-center shadow-xl"
        target="_blank"
      >
        <MessageCircle className="text-white h-7 w-7" />
      </a>
    </section>
  );
}
