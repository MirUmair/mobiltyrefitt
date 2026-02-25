import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
    area1,
    area2,
    area3,
    area4,
    area5,
    area6,
    area7,
    area8,
    area9,
    area10,
    area11,
    area12,
} from "@/assets"; // if you exported by name

type Area = { name: string; img: string; href?: string };

const AREAS: Area[] = [
    { name: "Central London", img: area1 },
    { name: "Chelsea", img: area2 },
    { name: "Kingston", img: area3 },
    { name: "Southall", img: area4 },
    { name: "Hounslow", img: area5 },
    { name: "Wembley", img: area6 },
    { name: "Woking", img: area7 },
    { name: "Guildford", img: area8 },
    { name: "High Wycombe", img: area9 },
    { name: "Beaconsfield", img: area10 },
    { name: "Sutton", img: area11 },
    { name: "Sunbury", img: area12 },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const card = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { stiffness: 140, damping: 18 },
    },
};

export default function ServiceAreasGrid() {
    return (
        <section className="relative bg-white py-8 sm:py-12">
            <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900">
                    Our Service Areas
                </h2>

                <p className="mt-3 text-center text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
                    Fast, reliable mobile tyre fitting and emergency tyre services across
                    London and surrounding areas.
                </p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                >
                    {AREAS.map((area) => {
                        const href =
                            area.href ??
                            `/areas?selectedLocation=${encodeURIComponent(area.name)}`;

                        return (
                            <motion.article
                                key={area.name}
                                variants={card}
                                className="flex flex-col rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden"
                            >
                                <a href={href} className="group flex flex-col h-full">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={area.img}
                                            alt={area.name}
                                            className="block w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="px-4 pb-3 pt-2 sm:pb-4 sm:pt-3 flex-1 flex items-center">
                                        <div className="flex items-center gap-2 text-neutral-900 font-semibold text-sm sm:text-base">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
                                            <span>{area.name}</span>
                                        </div>
                                    </div>
                                </a>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA button */}
                <div className="mt-8 sm:mt-10 flex justify-center">
                    <a
                        href="/allareas"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-semibold text-sm sm:text-base shadow-lg"
                    >
                        See All Locations
                    </a>
                </div>
            </div>
        </section>
    );
}
