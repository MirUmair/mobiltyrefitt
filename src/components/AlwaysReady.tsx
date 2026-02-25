import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

/**
 * FastestServiceHero.tsx — Full React (TS) component
 *
 * Top area:
 *  - Big headline: "We Are Always Ready 24/7 for Emergency Tyre Repair & Fitting"
 *  - Centered CTA button: Make An Appointment
 *
 * Banner card:
 *  - Red rounded container with decorative outline background
 *  - Left: kicker + huge headline + paragraph + two CTAs
 *  - Right: tyre image (slides in on view)
 *
 * Dependencies: tailwindcss, framer-motion, lucide-react
 * Usage: import FastestServiceHero from "./FastestServiceHero"; <FastestServiceHero />
 */

// You can change this to your own tyre PNG with transparent background
const TYRE_IMG =
    "https://images.unsplash.com/photo-1616627453252-8a99caa12565?q=80&w=1200&auto=format&fit=crop";

// Subtle map-like pattern for the red card background
const patternSvg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'>
  <g fill='none' stroke='white' stroke-opacity='0.18' stroke-width='1.2'>
    <path d='M40 120c60 20 120 40 180 20s120-80 180-60 120 120 180 120 120-100 180-120 120 20 180 60 120 60 180 20'/>
    <path d='M0 260c80 10 160 20 220-10s100-90 160-80 120 120 180 120 120-90 180-120 120 0 180 40 120 80 200 40'/>
    <path d='M20 420c70 30 140 60 200 30s110-120 170-110 120 150 180 150 120-130 180-160 120 10 180 50 120 70 170 30'/>
  </g>
</svg>`;
const patternBg = `url("data:image/svg+xml;utf8,${encodeURIComponent(patternSvg)}")`;

export default function FastestServiceHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100">
            {/* Top headline + appointment CTA */}
            <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 pt-8 sm:pt-10">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
                    We Are Always Ready 24/7 for Emergency Tyre
                    <br className="hidden sm:block" />
                    Repair & Fitting
                </h1>

                <div className="mt-6 flex justify-center">
                    <a
                        href="#appointment"
                        className="inline-flex items-center gap-2 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-semibold px-6 sm:px-8 py-3 shadow-lg"
                    >
                        <Phone className="h-5 w-5" /> Make An Appointment
                    </a>
                </div>
            </div>

            {/* Red banner card */}
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-8 sm:py-10">
                <div
                    className="relative rounded-3xl bg-rose-600 text-white overflow-hidden"
                    style={{ boxShadow: "0 20px 60px -20px rgba(0,0,0,0.25)" }}
                >
                    {/* decorative pattern */}
                    <div
                        aria-hidden
                        className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: patternBg, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                    />

                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-6 sm:p-10">
                        {/* Left copy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ stiffness: 150, damping: 18 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="lg:col-span-7"
                        >
                            <p className="uppercase tracking-widest text-white/80 text-xs sm:text-sm font-semibold">
                                Get it now
                            </p>
                            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                                Get The Fastest Mobile Tyre
                                <br />
                                Fitting Service In London Just
                                <br />
                                30 Minutes Away
                            </h2>
                            <p className="mt-4 text-white/90 max-w-2xl">
                                Don’t wait around. Our expert mobile fitters come to you in 30 minutes or less anywhere in London or
                                within 60 miles. Call now and get back on the road today.
                            </p>

                            {/* CTA buttons */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-5">
                                <a
                                    href="tel:+44 7868 258333"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-rose-600 hover:bg-white/90 font-semibold px-6 py-3 w-full sm:w-auto"
                                >
                                    <Phone className="h-5 w-5" /> Call Us Now
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
                        </motion.div>

                        {/* Right image */}
                        <motion.div
                            initial={{ x: 80, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 160, damping: 20 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="lg:col-span-5 flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-[560px] aspect-[1/1] lg:aspect-auto lg:h-[420px]">
                                <img
                                    src={TYRE_IMG}
                                    alt="Tyre"
                                    className="absolute inset-0 w-full h-full object-contain rounded-[28px]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp bubble (optional) */}
            <a
                href="https://wa.me/442080901010"
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
