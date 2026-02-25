import React from "react";
import { motion } from "framer-motion";
import { call1, call2, call3 } from "@/assets";

const cards = [
    {
        title: "30-Minute Response Time",
        body: "We’re built for emergencies. Our mobile tyre team reaches most locations within 30 minutes – fast and reliable.",
        img: call1,
        offset: -60,
    },
    {
        title: "Fair Pricing",
        body: "You’ll always know what you’re paying — no hidden fees, no surprises. Honest pricing every time.",
        img: call2,
        offset: 0,
    },
    {
        title: "24/7 Tyre Callout Service",
        body: "Flat tyre at night or during rush hour? We’re available 24/7 for emergency tyre callouts across London.",
        img: call3,
        offset: 60,
    },
];

export default function CallUsSection() {
    return (
        <section className="relative bg-white overflow-hidden py-20">

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl font-extrabold text-neutral-900">
                    Simply Call Us & We'll Handle The Rest
                </h2>

                {/* Cards */}
                <div className="
                    mt-14 
                    grid grid-cols-1 md:grid-cols-3 
                    gap-12 
                    w-full
                ">
                    {cards.map((c) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 40, x: c.offset }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",

                                stiffness: 140,
                                damping: 20,
                            }}
                            className="
                                bg-white 
                                rounded-3xl 
                                overflow-hidden 
                                border border-gray-200
                                shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
                                hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                                transition-all
                                w-full
                                mx-auto
                                max-w-[480px]   /* 🔥 wider card */
                            "
                        >

                            {/* FIXED IMAGE — NO CROPPING */}
                            <div className="w-full bg-white flex justify-center items-center p-4">
                                <img
                                    src={c.img}
                                    alt={c.title}
                                    className="
                                        w-full
                                        h-72 md:h-80 
                                        object-contain   /* 🔥 No crop */
                                        rounded-2xl
                                    "
                                />
                            </div>

                            {/* TEXT */}
                            <div className="p-7">
                                <h3 className="text-2xl font-semibold text-neutral-900">
                                    {c.title}
                                </h3>
                                <p className="mt-3 text-neutral-700 text-lg leading-relaxed">
                                    {c.body}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
