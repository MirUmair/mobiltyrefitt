import React from "react";
import { motion, Variants } from "framer-motion";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { heroImg } from "@/assets";

/* ---------------------------------------------
   POPUPS ON IMAGE 
----------------------------------------------*/
const popups = [
  { id: 1, text: "30–60 min arrival", className: "top-4 left-4" },
  { id: 2, text: "24/7 Callouts", className: "bottom-5 left-4" },
  { id: 3, text: "Pay by Card on-site", className: "top-1/2 -translate-y-1/2 right-4" },
];

/* ---------------------------------------------
   ANIMATION TIMING
----------------------------------------------*/
const t0 = 0.1, t1 = 0.25, t2 = 0.40, t3 = 0.55, t4 = 0.80, t6 = 1.20;

/* ---------------------------------------------
   SAFE FRAMER-MOTION VARIANTS (v11 compatible)
----------------------------------------------*/
const fadeUp = (delay = 0.2): Variants => ({
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier (ease-in-out)
    },
  },
});

const imageAnim: Variants = {
  hidden: { opacity: 0, x: 140, scale: 0.92 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: t4,
      type: "spring",
      stiffness: 140,
      damping: 20,
    },
  },
};

const popupItem: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 18,
    },
  },
};

/* ---------------------------------------------
   MAIN COMPONENT
----------------------------------------------*/
export default function HeroClean() {
  return (
    <section className="relative overflow-hidden min-h-screen w-full flex flex-col justify-center bg-white">

      <div className="relative mx-auto w-full max-w-[95%] px-4 sm:px-4 lg:px-6 py-10 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7">

            {/* Rating Text */}
            <motion.div
              variants={fadeUp(t0)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3 text-sm text-slate-700"
            >
              <span className="inline-flex items-center gap-1 text-amber-500">★★★★★</span>
              <span>
                Trusted by <span className="font-semibold text-slate-900">5,000+</span> drivers across the UK
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUp(t1)}
              initial="hidden"
              animate="show"
              className="mt-4 text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              24/7 Emergency <span className="text-amber-500">Mobile Tyre</span> Service Across{" "}
              <span className="text-blue-700">London</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp(t2)}
              initial="hidden"
              animate="show"
              className="mt-4 text-slate-700 text-lg max-w-2xl"
            >
              Fast, reliable fitting & repair at your home, office, or roadside — usually within{" "}
              <span className="font-semibold text-slate-900">30–60 minutes</span>. Our expert technicians are
              fully equipped to handle all your tyre needs with professional service you can trust.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp(t3)}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+447868258333"
                className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-5 bg-rose-600 hover:bg-rose-700 text-white text-lg font-semibold shadow-md transition flex-1 sm:flex-none"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
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
            </motion.div>

            {/* Feature List */}
            <motion.ul
              variants={fadeUp(t3 + 0.25)}
              initial="hidden"
              animate="show"
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[
                "30–60 min arrival anywhere in London",
                "Fully insured & expert technicians",
                "Pay by card on-site",
                "24/7 — home, office or roadside",
                "Free mobile callout service",
                "All major tyre brands available",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-800 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </motion.ul>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="lg:col-span-5">
            <div className="relative flex justify-center">

              {/* Soft shadow background */}
              <div className="absolute -inset-5 bg-black/10 rounded-[28px] blur-xl" />

              <motion.div
                variants={imageAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="relative"
              >
                <img
                  src={heroImg}
                  alt="Mobile Tyre Service"
                  className="w-full max-w-[720px] h-auto object-contain rounded-[28px] shadow-2xl z-10"
                />

                {/* Popups */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {popups.map((p, i) => (
                    <motion.span
                      key={p.id}
                      variants={popupItem}
                      transition={{ delay: t6 + i * 0.2 }}
                      className={`absolute ${p.className} select-none z-20`}
                    >
                      <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow">
                        {p.text}
                      </span>
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER INFO BAR */}
      <div className="bg-blue-700 text-white text-sm">
        <div className="mx-auto max-w-[95%] px-4 sm:px-4 lg:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <span>💳 Accept Major Credit Cards</span>
          <span>📍 London & Surrounding Areas</span>
          <span>⏱️ 30–60 Min Response</span>
          <span>✅ 100% Fully Insured</span>
          <span>🚗 All Vehicle Types</span>
          <span>🛠️ On-Site Repairs</span>
        </div>
      </div>

    </section>
  );
}
