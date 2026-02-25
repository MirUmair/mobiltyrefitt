import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, MessageCircle, Snowflake } from "lucide-react";
import { service1, service2, service3, service4, service5, service6 } from "@/assets";

/**
 * ServicesGrid.tsx — Full, drop‑in React (TypeScript) component
 *
 * Matches the shared design:
 *  - Title: "24/7 Mobile Tyre Fitting Service"
 *  - 3‑column card grid (responsive)
 *  - Each card has: title, paragraph, rounded image with an icon badge and a floating CTA button
 *  - Sticky CTA bar at the bottom with Call + WhatsApp
 *  - Soft background and subtle borders/shadows
 *
 * Dependencies: tailwindcss, framer-motion, lucide-react
 * Usage: import ServicesGrid from "./ServicesGrid"; <ServicesGrid />
 */

// Safe placeholder images (Unsplash). Replace with your own URLs.
const IMGS = [
  service1,
  service4,
  service2,
  service5,
  service3,
  service6];

const services = [
  {
    title: "Mobile Tyre Fitting",
    body:
      "On-site tyre fitting across London for cars, SUVs, vans, and EVs. Includes professional wheel balancing for smoother handling and extended tyre life.",
    img: IMGS[0],
  },
  {
    title: "Mobile Tyre Repair",
    body:
      "Got a slow puncture or a nail in the tyre?   \t            Our technicians repair most tyre issues on-site, saving you time and the cost of a replacement.",
    img: IMGS[1],
  },
  {
    title: "Mobile Tyre Replacement",
    body:
      "We supply and fit premium, mid-range, and budget tyres on the spot. From Michelin and Pirelli to Continental and Bridgestone, we carry tyres for every vehicle type.",
    img: IMGS[2],
  },
  {
    title: "24‑Hour Emergency Callouts",
    body:
      "Available day & night for tyre emergencies in North, South, East, West, & Central London. We respond fast to motorway & roadside breakdowns, and urgent replacements.",
    img: IMGS[3],
  },
  {
    title: "Mobile Puncture Repair",
    body:
      "Lost your locking nut key? Our technicians remove wheel nuts safely without damaging your alloys. Call us now for Mobile Puncture Repair.",
    img: IMGS[4],
  },
  {
    title: "Tyres at Home",
    body:
      "Enjoy hassle-free tyre fitting right on your driveway. Our Tyres at Home service brings expert fitting, repair, or replacement to your doorstep — no waiting rooms, no wasted time.",
    img: IMGS[5],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { stiffness: 130, damping: 18 } },
};

export default function ServicesGrid() {
  return (
    <section className="relative bg-gradient-to-b from-slate-100 to-indigo-50/30">
      {/* Top tyre corners (optional): add your own png/svg if desired */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-800">
          24/7 Our Mobile Tyre Services
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              variants={card}
              className="relative bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6"
            >
              <h3 className="text-xl font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-neutral-700 leading-relaxed">{s.body}</p>

              {/* image block */}
              <div className="mt-5 relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-56 object-cover"
                  />

                  {/* small frosted icon badge */}
                  <div className="absolute left-3 bottom-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 shadow-sm">
                    <Snowflake className="w-6 h-6 text-white drop-shadow" />
                  </div>
                </div>

                {/* floating CTA button */}
                <button
                  aria-label="Open service"
                  className="absolute -right-2 -bottom-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-400 text-white shadow-xl border-4 border-white"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA bar */}
        <div className="sticky bottom-4 mt-10">
          <div className="mx-auto max-w-4xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-center">
            <a
              href="tel:+44 7868 258333"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 shadow-lg w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" /> Call Us Now
            </a>

            <a
              href="https://wa.me/447868258333"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold 
             bg-[#25D366] text-white hover:bg-[#1EBE5A] transition shadow-md hover:shadow-lg 
             border border-[#1EBE5A] w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Connect on WhatsApp
            </a>


          </div>
        </div>
      </div>

      {/* Floating WhatsApp bubble */}
      <a
        href="https://wa.me/447868258333"
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 shadow-lg"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-white h-7 w-7" />
      </a>
    </section>
  );
}
