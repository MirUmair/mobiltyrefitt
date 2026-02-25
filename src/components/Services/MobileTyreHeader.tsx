import React from "react";
import { headerLogo } from "@/assets";
import {
    PhoneCall,
    ArrowRight,
    MessageCircle,
    Car,
    Truck,
} from "lucide-react";
import { useLocation } from "react-router-dom";

export default function MobileTyreFittingHero() {
    const location = useLocation();
    const { selectedService, } = location.state || {};
    const selectedLocation = location.state?.selectedLocation;
    return (
        <div className="w-full font-sans">
            <section className="relative overflow-hidden bg-red-600">
                <div className="absolute -top-[40%] right-0 w-[130%] h-[180%] bg-red-700 rounded-b-[50%] opacity-70"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 text-white">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
                            Fast • Reliable • 24/7
                            <span className="block text-yellow-300">
                                {selectedService} Service {selectedLocation && 'at'} {selectedLocation}
                            </span>
                        </h1>
                        <p className="text-xl mt-4 text-red-100 leading-relaxed">
                            Emergency callouts, roadside rescue, home or workplace — wherever you are,
                            our certified technicians come to you within <b>30–60 minutes</b>.
                        </p>
                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="tel:+447868258333"
                                className="px-7 py-3 bg-black/80 hover:bg-black text-white rounded-full flex items-center gap-3 text-lg font-semibold transition shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                            >
                                <PhoneCall size={22} />
                                Call Us Now
                                <ArrowRight size={20} className="opacity-70" />
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
                    {/* Floating van image */}
                    <img
                        src={headerLogo}
                        alt="Mobile Tyre Van"
                        className="absolute right-4 bottom-0 w-[420px] md:w-[520px] drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]"
                    />
                </div>
            </section>
            {/* FLOAT ANIMATION */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>


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
