import React from "react";
import { logo1, logo10, logo11, logo12, logo13, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9 } from "@/assets"; // if you exported by name

const logos = [
    // replace with your real logo image URLs (PNG/SVG)
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12, logo13
];

export default function BrandSlider() {
    // duplicate once so the track can wrap seamlessly
    const row = [...logos, ...logos];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-lg font-semibold py-5">
                    All Major Tyre Brands In-Stock
                </h3>
            </div>

            <div className="group relative overflow-hidden">
                <div className="marquee" aria-hidden>
                    {row.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt="brand"
                            className="h-10 sm:h-12 md:h-14 object-contain opacity-90 mx-8"
                            draggable={false}
                        />
                    ))}
                </div>
            </div>

            <style>{`
        .marquee {
          display: inline-flex;
          white-space: nowrap;
          will-change: transform;
          animation: marquee 28s linear infinite;
          padding: 12px 0;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); } /* because we doubled the content */
        }
        /* Pause on hover */
        .group:hover .marquee { animation-play-state: paused; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
        </section>
    );
}
