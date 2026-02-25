import React from "react";
import { heroImg } from "@/assets";
import { PhoneCall, ArrowRight, Check, MessageCircle } from "lucide-react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useLocation } from "react-router-dom";

type MobileTyreHeroProps = {
    brands?: string[]; // array of logo URLs
};

export default function MobileTyreHero({ brands = [] }: MobileTyreHeroProps) {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selectedService = params.get("selectedService") || "Mobile Tyre Fitting";
    const selectedLocation = params.get("selectedLocation") || "London";
    return (
        <section className="w-full py-20 bg-white">


            <div className="w-[90vw] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
                {/* LEFT CONTENT */}
                <div className="xl:pr-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-red-600 leading-tight">
                        Fast, Reliable, and Insured
                        <br />
                        <span className="text-gray-900">{selectedService}</span>
                    </h2>

                    <p className="mt-6 text-gray-700 text-xl leading-relaxed max-w-[1200px]">
                        Stuck with a flat tyre at home, office, or on the roadside? Mobile
                        Tyre Giant gets you back on the road fast. We provide expert 24/7
                        {selectedService} across the UK, with a rapid 30–60 minute
                        response time.
                    </p>

                    <p className="mt-4 text-gray-700 text-xl leading-relaxed max-w-[1200px]">
                        Whether it's your commute, a long trip, or an urgent delivery, our
                        fully insured team arrives at your location to repair or replace
                        your tyres—no garage visit needed.
                    </p>

                    {/* Call Highlight */}
                    <div className="mt-6 flex items-center gap-3 text-red-600 font-semibold text-xl">
                        <PhoneCall size={26} />
                        <span>Call us for immediate tyre assistance!</span>
                    </div>

                    {/* Features */}
                    <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-gray-800 text-lg">
                        <Feature label={`24/7 ${selectedService}`} />
                        <Feature label="Locking Wheel Nut Removal" />
                        <Feature label="Any Size Tyre & Brand" />
                        <Feature label="Emergency Callouts" />
                    </div>

                    {/* CTA BUTTONS */}
                    <div className="mt-12 flex flex-wrap gap-6">
                        <a
                            href="tel:+447868258333"
                            className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center gap-4 text-xl font-semibold shadow-xl transition"
                        >
                            Call Us Now
                            <ArrowRight size={26} />
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

                {/* RIGHT IMAGE */}
                <div className="flex justify-center xl:justify-end">
                    <img
                        src={heroImg}
                        alt="Mobile Tyre Van"
                        className="w-full max-w-[900px] rounded-3xl shadow-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

function Feature({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-2">
            <Check size={22} className="text-green-600" />
            <span>{label}</span>
        </div>
    );
}
