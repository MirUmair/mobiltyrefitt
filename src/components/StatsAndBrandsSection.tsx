import React from "react";
import { motion, useInView, animate } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import {
    blogo1, blogo2, blogo3, blogo4, blogo5, blogo6,
    blogo7, blogo8, blogo9, blogo10,
} from "@/assets";

/**
 * StatsAndBrandsSection.tsx — React (TypeScript) component WITH COUNT-UP NUMBERS
 *
 * - Headline: "Numbers That Keep Us Rolling"
 * - Count-up stats (start at 0 ➜ target)
 * - Brands grid
 * - Sticky CTA bar + WhatsApp bubble
 */

// Reusable counter that animates from 0 to `to` when it scrolls into view
function Counter({ to, suffix = "", duration = 2, decimals = 0 }: { to: number; suffix?: string; duration?: number; decimals?: number }) {
    const ref = React.useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const [val, setVal] = React.useState(0);

    React.useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, to, {
            duration,
            ease: "easeOut",
            onUpdate: (v) => setVal(v),
        });
        return () => controls.stop();
    }, [isInView, to, duration]);

    return (
        <span ref={ref}>
            {val.toFixed(decimals)}{suffix}
        </span>
    );
}

const stats = [
    { value: 5000, suffix: "+", label: "Satisfied Customers", decimals: 0 }, // ➜ counts 0 → 5000+
    { value: 90, suffix: "%", label: "Customer Satisfaction", decimals: 0 }, // ➜ counts 0 → 90%
    { value: 10, suffix: "+", label: "Mobile Tyre Vans", decimals: 0 },
    { value: 25, suffix: "+", label: "Tyre Brands", decimals: 0 },
];

const brands = [
    blogo1, blogo2, blogo3, blogo4, blogo5, blogo6,
    blogo7, blogo8, blogo9, blogo10,
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { stiffness: 150, damping: 18 } },
};

export default function StatsAndBrandsSection() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Top stats */}
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
                <motion.h2
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="text-center text-3xl sm:text-4xl font-extrabold text-neutral-900"
                >
                    Numbers That Keep <span className="text-rose-600">Us Rolling</span>
                </motion.h2>

                <p className="mt-3 text-center text-neutral-600 max-w-2xl mx-auto">
                    From thousands of happy drivers to a fleet of mobile vans, our track record speaks louder than words.
                </p>

                {/* Stats grid */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-10 grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-gray-300"
                >
                    {stats.map((s) => (
                        <motion.div key={s.label} variants={fadeUp} className="px-4">
                            <h3 className="text-4xl sm:text-5xl font-extrabold text-neutral-900">
                                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
                            </h3>
                            <p className="mt-2 text-sm sm:text-base text-neutral-600">{s.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Brands section */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <motion.h3
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        className="text-center text-2xl sm:text-3xl font-bold italic text-neutral-900"
                    >
                        Tyres for All Car Brands Available <br /> at Mobil Tyre Fitt
                    </motion.h3>

                    <p className="mt-3 text-center text-neutral-600 max-w-3xl mx-auto">
                        We stock a wide range of premium, mid-range, and budget tyres to suit every vehicle and budget. Whether you
                        need performance tyres, all-season tyres, or economical options, we have the perfect fit for your car.
                    </p>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
                    >
                        {brands.map((src, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex items-center justify-center hover:shadow-lg transition-all"
                            >
                                <img src={src} alt="brand logo" className="max-h-14 sm:max-h-16 object-contain" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom CTA bar */}
                    <div className="sticky bottom-4 mt-12">
                        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-center">
                            <a
                                href="tel:+447868258333"
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
            </div>

            {/* Floating WhatsApp bubble */}
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
