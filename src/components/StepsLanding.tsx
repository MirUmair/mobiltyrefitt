import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, PhoneCall, Snowflake, Truck, Route } from "lucide-react";

// Tyre-track background
const tyreTrackSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" viewBox="0 0 800 200">
  <defs>
    <pattern id="t" width="200" height="200" patternUnits="userSpaceOnUse">
      <g fill="white" fill-opacity="0.6">
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

// Steps
const steps = [
    {
        id: 1,
        title: "Call or Book Online",
        desc: "Get in touch by phone or book online. Tell us your location, tyre size & issue.",
        icon: <PhoneCall className="w-7 h-7" />,
    },
    {
        id: 2,
        title: "Choose Your Tyres",
        desc: "Pick the right tyres from a wide range of trusted brands — premium or budget.",
        icon: <Snowflake className="w-7 h-7" />,
    },
    {
        id: 3,
        title: "We Come to You",
        desc: "Our mobile tyre experts arrive within 30–45 minutes, fully equipped.",
        icon: <Truck className="w-7 h-7" />,
    },
    {
        id: 4,
        title: "Back on the Road",
        desc: "Tyres fitted, balanced & pressure-checked. You're ready to drive!",
        icon: <Route className="w-7 h-7" />,
    },
];

// Smooth heading animation
const headingAnim = {
    hidden: { opacity: 0, y: -25, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { stiffness: 120, damping: 20, delay: 0.2 },
    },
};

// Stagger container — larger delay now
const cardContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.28,
            delayChildren: 0.35, // slower entry
        },
    },
};

// Card animation — slower, more dramatic
const cardItem = {
    hidden: { opacity: 0, y: 50, rotate: -3, scale: 0.9, filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { stiffness: 90, damping: 15 },
    },
};

// CTA animation
const ctaAnim = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: 0.9, stiffness: 110 },
    },
};

export default function StepsLanding() {
    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
            style={{
                backgroundImage:
                    "radial-gradient(80% 120% at 20% 0%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 60%), radial-gradient(60% 120% at 100% 100%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0) 60%)",
            }}
        >
            {/* Tyre Track Overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                    backgroundImage: trackBg,
                    backgroundRepeat: "repeat",
                    backgroundSize: "700px 180px",
                    transform: "rotate(-7deg) scale(1.2)",
                }}
            />

            {/* Wrapper */}
            <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 py-20">

                {/* ==================== */}
                {/*     HEADING         */}
                {/* ==================== */}

                <motion.h1
                    variants={headingAnim}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow"
                >
                    GET YOUR TYRES FITTED IN
                    <br />
                    <span className="text-white/90">4 EASY STEPS</span>
                </motion.h1>

                {/* ==================== */}
                {/*     CARDS           */}
                {/* ==================== */}

                <motion.div
                    variants={cardContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((s) => (
                        <motion.div
                            key={s.id}
                            variants={cardItem}
                            className="relative rounded-2xl p-8 
                            h-[260px]                     /* taller */
                            bg-gradient-to-br from-white/5 to-white/0 
                            border border-white/10 
                            shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] 
                            backdrop-blur-sm hover:shadow-[0_12px_55px_-10px_rgba(0,0,0,0.7)] transition"
                        >
                            {/* Step number watermark */}
                            <div className="absolute right-6 top-4 text-7xl font-black text-white/5 select-none">
                                {String(s.id).padStart(2, "0")}
                            </div>

                            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white mb-5">
                                {s.icon}
                            </div>

                            <h3 className="text-white font-semibold text-xl">{s.title}</h3>
                            <p className="mt-3 text-white/80 text-sm leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ==================== */}
                {/*     CTA BUTTONS     */}
                {/* ==================== */}

                <motion.div
                    variants={ctaAnim}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-14 flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <a
                        href="tel:+447868258333"
                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl px-10 py-5 text-lg font-semibold text-white bg-rose-600 hover:bg-rose-500 shadow-xl"
                    >
                        <Phone className="mr-2 h-6 w-6" /> Call Us Now
                    </a>

                    <a
                        href="https://wa.me/447868258333"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl px-10 py-5 text-lg font-semibold 
                        bg-[#25D366] text-white hover:bg-[#1EBE5A] shadow-xl"
                    >
                        <MessageCircle className="mr-2 h-6 w-6" /> Connect on WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
