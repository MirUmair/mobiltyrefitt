import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FAQSection.tsx — Full FAQ accordion component
 *
 * Layout:
 *  - Title + subtitle
 *  - Accordion list of 5 questions
 *  - Smooth expand/collapse animation
 *  - Floating WhatsApp bubble (bottom-right)
 *
 * Dependencies: tailwindcss, framer-motion, lucide-react
 */

const faqs = [
    {
        q: "Can you replace tyres at my home or workplace?",
        a: "Yes, we offer mobile tyre fitting at your home, office, or any suitable location, making tyre replacement quick and stress-free.",
    },
    {
        q: "Do you offer same-day mobile tyre fitting?",
        a: "Absolutely. Our mobile tyre fitting vans are available 24/7 for same-day or emergency services anywhere in London and surrounding areas.",
    },
    {
        q: "How much does mobile tyre fitting cost in the UK?",
        a: "Our pricing depends on your tyre size, brand, and service area. We always provide upfront quotes — no hidden fees.",
    },
    {
        q: "Which areas do you cover in the UK?",
        a: "We cover London, Kent, Essex, Surrey, and nearby regions within a 60-mile radius. Contact us to confirm your area.",
    },
    {
        q: "Is mobile tyre fitting safe and reliable?",
        a: "Yes. Our technicians are fully insured and trained to industry standards. All equipment and tyres meet UK safety regulations.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="relative bg-white py-14 sm:py-20 overflow-hidden">
            {/* Decorative tyre track background */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://i.imgur.com/kZLkU7L.png')] bg-cover bg-center" />

            <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-neutral-900">
                    Frequently Asked Questions
                </h2>
                <p className="mt-2 text-center text-neutral-600">
                    Find quick answers to the most common questions our customers ask.
                </p>

                <div className="mt-10 space-y-4">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all ${openIndex === i ? "shadow-lg bg-gradient-to-r from-white to-blue-50" : "bg-white"
                                }`}
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between text-left px-5 py-4 font-semibold text-neutral-900"
                            >
                                <span>
                                    {String(i + 1).padStart(2, "0")} {item.q}
                                </span>
                                {openIndex === i ? (
                                    <ChevronUp className="w-5 h-5 text-rose-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-neutral-400" />
                                )}
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-5 pb-5 text-neutral-700 text-sm sm:text-base leading-relaxed"
                                    >
                                        {item.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
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
