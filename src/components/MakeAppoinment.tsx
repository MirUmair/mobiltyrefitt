import React from "react";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

/* ---------------------- COUNTER ---------------------- */

type CounterProps = {
    end: number;
    duration?: number;
};

function Counter({ end, duration = 1.5 }: CounterProps) {
    const [value, setValue] = React.useState(0);
    const { ref, inView } = useInView({ triggerOnce: false });

    React.useEffect(() => {
        if (!inView) return;

        let start = 0;
        const step = end / (duration * 60);

        const interval = setInterval(() => {
            start += step;

            if (start >= end) {
                start = end;
                clearInterval(interval);
            }

            setValue(Math.floor(start));
        }, 16);

        return () => clearInterval(interval);
    }, [inView, end, duration]);

    return <span ref={ref}>{value.toLocaleString()}</span>;
}

/* ---------------------- MAIN COMPONENT ---------------------- */

export default function EmergencyBanner() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selectedService = params.get("selectedService") || "Mobile Tyre Fitting";
    const selectedLocation = params.get("selectedLocation") || "London";

    return (
        <div className="w-full">

            {/* -------------------- TOP (24/7 Header + Button) -------------------- */}
            <div className="text-center py-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                    WE ARE ALWAYS READY 24/7 FOR EMERGENCY {selectedService}
                </h1>

                <motion.button
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl
                               font-semibold text-lg flex items-center gap-3 mx-auto shadow-lg"
                >
                    <Phone size={22} />
                    Make An Appointment
                </motion.button>
            </div>

            {/* -------------------- HERO RED SECTION -------------------- */}
            <div className="bg-cover bg-center text-white py-20 relative bg-red-100">
                <div className="max-w-4xl mx-auto text-center px-4">

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Get The Fastest {selectedService} Service In {selectedLocation}
                    </h2>

                    <p className="mt-4 text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
                        JUST 30 MINUTES AWAY
                    </p>

                    <p className="mt-6 text-lg leading-relaxed opacity-90 text-gray-900">
                        Don’t wait around. Our experts come to you in 30 minutes or less —
                        anywhere in London or within 60 miles. Call now and get back on the road today.
                    </p>

                    {/* -------------------- CALL + WHATSAPP BUTTONS -------------------- */}
                    <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">

                        {/* Call Button */}
                        <motion.a
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false }}
                            href="tel:+447868258333"
                            className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-full
                                       shadow-xl w-full md:w-1/2 flex justify-center items-center gap-3
                                       hover:bg-gray-900 transition"
                        >
                            Call Us Now <ArrowRight size={20} />
                        </motion.a>

                        {/* WhatsApp Button */}
                        <motion.a
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false }}
                            href="https://wa.me/447868258333"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base
                                     font-semibold bg-[#25D366] text-white hover:bg-[#1EBE5A] transition
                                     shadow-md hover:shadow-lg border border-[#1EBE5A] w-full sm:w-auto"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" /> Connect on WhatsApp
                        </motion.a>

                    </div>
                </div>
            </div>

            {/* -------------------- COUNTERS SECTION -------------------- */}
            <div className="text-gray-900 py-20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">

                    <div>
                        <p className="text-5xl font-extrabold">
                            <Counter end={5000} />+
                        </p>
                        <p className="mt-3 text-lg opacity-90">Satisfied Customers</p>
                    </div>

                    <div>
                        <p className="text-5xl font-extrabold">
                            <Counter end={99} />%
                        </p>
                        <p className="mt-3 text-lg opacity-90">Customer Satisfaction</p>
                    </div>

                    <div>
                        <p className="text-5xl font-extrabold">
                            <Counter end={10} />+
                        </p>
                        <p className="mt-3 text-lg opacity-90">Mobile Tyre Vans</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
