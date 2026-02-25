import React from "react";
import { headerLogo } from "@/assets";
import {
    PhoneCall,
    ArrowRight,
    MessageCircle,
    Car,
    Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function MobileTyreFittingHero() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const selectedService = params.get("selectedService") || "Mobile Tyre Fitting";
    const selectedLocation = params.get("selectedLocation") || "London";

    return (
        <div className="w-full font-sans">

            {/* ====================== HERO SECTION ====================== */}
            <section className="relative w-full overflow-hidden bg-red-600">

                {/* 🔴 FULL-WIDTH RED ARC BG */}
                <div className="absolute inset-0">
                    <div className="absolute -top-[40%] right-[-10%] w-[160%] h-[200%] bg-red-700 rounded-b-[50%] opacity-60"></div>
                </div>

                {/* MAIN FULL-WIDTH CONTAINER */}
                <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 pt-24 pb-16 text-white">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* ================= LEFT TEXT ================= */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-[55%]"
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
                                Fast • Reliable • 24/7
                                <span className="block text-yellow-300 mt-2">
                                    {selectedService} Service{" "}
                                    {selectedLocation && `at ${selectedLocation}`}
                                </span>
                            </h1>

                            <p className="text-xl mt-6 text-red-100 leading-relaxed">
                                Emergency callouts, roadside rescue, home or workplace —
                                wherever you are, our certified technicians reach you within{" "}
                                <b>30–60 minutes</b>.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="tel:+447868258333"
                                    className="px-7 py-3 bg-black/80 hover:bg-black text-white rounded-full flex items-center gap-3 text-lg font-semibold shadow-xl transition"
                                >
                                    <PhoneCall size={22} />
                                    Call Us Now
                                </a>

                                <a
                                    href="https://wa.me/447868258333"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-[#25D366] hover:bg-[#1EBE5A] text-white
                                    rounded-2xl flex items-center gap-3 text-lg font-semibold shadow-lg
                                    border border-[#1EBE5A] transition"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    WhatsApp Us
                                </a>
                            </div>
                        </motion.div>

                        {/* ================= RIGHT IMAGE ================= */}
                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            className="w-full lg:w-[50%] flex justify-end relative"
                        >
                            <motion.img
                                src={headerLogo}
                                alt="Mobile Tyre Van"
                                className="
                                    w-full
                                    lg:w-[95%]
                                    xl:w-[100%]
                                    2xl:w-[110%]
                                    max-w-[900px]
                                    aspect-[16/10]
                                    object-cover
                                    rounded-3xl
                                    drop-shadow-2xl
                                "
                                animate={{ y: [0, -12, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* FLOAT ANIMATION */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }
            `}</style>


            {/* ================== 4 STEP PROCESS ================== */}
            <section className="py-20 bg-gray-50">
                <h2 className="text-center text-4xl font-extrabold text-gray-900">
                    How Our Mobile Tyre Service Works
                </h2>
                <p className="text-center text-gray-600 mt-2 text-lg">
                    Easy • Fast • Professional • Reliable
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14 max-w-7xl mx-auto px-6">

                    <StepCard
                        icon={<PhoneCall size={45} className="text-red-600" />}
                        title="1. Call or Book Online"
                        desc="Tell us your tyre size and location — we respond instantly."
                    />

                    <StepCard
                        icon={<Car size={45} className="text-red-600" />}
                        title="2. Choose a Tyre"
                        desc="Pick from premium, mid-range or budget tyres."
                    />

                    <StepCard
                        icon={<Truck size={45} className="text-red-600" />}
                        title="3. Technician Arrives"
                        desc="A mobile van arrives fully equipped within 30–60 minutes."
                    />

                    <StepCard
                        icon={<Car size={45} className="text-red-600" />}
                        title="4. You're Back on the Road"
                        desc="Tyre fitted, balanced & pressure checked. No hidden charges."
                    />

                </div>
            </section>

        </div>
    );
}

/* --- Step Card Component --- */
function StepCard({ icon, title, desc }: any) {
    return (
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-8 text-center border border-gray-200">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
