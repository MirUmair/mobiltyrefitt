import React, { useState, useRef } from "react";
import { MapPin, Phone, Clock, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import MobileTyreFittingHero from "./Services/MobileTyreFittingHero";
import ReviewsSlider from "./ReviewsSlider";
import SEO from "./SEO";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        vehicleReg: "",
        postcode: "",
        service: "Select Service",
        message: "",
    });

    const mapSrc =
        "https://www.google.com/maps?q=51.62931288925842,-0.7810530893610297&z=18&output=embed";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill in the required fields (Name, Email, Phone).");
            return;
        }

        setStatus("loading");

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS credentials are not configured in .env file.");
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    to_email: "mobiltyrefitt@hotmail.com",
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    vehicle_reg: formData.vehicleReg,
                    postcode: formData.postcode,
                    service: formData.service,
                    message: formData.message,
                },
                publicKey
            );

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                vehicleReg: "",
                postcode: "",
                service: "Select Service",
                message: "",
            });
        } catch (error) {
            console.error("Email send failed:", error);
            setStatus("error");
        }
    };

    return (
        <section className="w-full  bg-white">
            <SEO
                title="Contact Us | Mobile Tyre Fitt"
                description="Contact Mobil Tyre Fitt for expert advice, bookings, and quality car care. We are available 24/7."
            />
            <MobileTyreFittingHero />
            {/* ---------------- HEADER ---------------- */}
            <h2 className="text-center text-3xl font-bold mt-8">Get In Touch</h2>
            <p className="text-center text-gray-600 mt-2">
                Got a question or need a service? Contact Mobil Tyre Fitt for expert
                advice, bookings, and quality car care.
            </p>

            {/* ---------------- CONTACT CARDS ---------------- */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">

                {/* Address Card */}
                <div className="bg-white border rounded-xl shadow-sm p-6">
                    <MapPin size={34} className="text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-gray-700">
                        Visit Us: 18 Cross Road High Wycombe  hp123 jz, United Kingdom
                    </p>
                </div>

                {/* Contact Card (Red) */}
                <div className="bg-red-600 text-white rounded-xl shadow-lg p-6">
                    <Phone size={34} className="text-white mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>

                    <p>Call Us at: +44 7868 258333</p>
                    <p>WhatsApp: +44 7868 258333</p>
                    <p>Email: mobiltyrefitt@hotmail.com</p>
                </div>

                {/* Opening Hours */}
                <div className="bg-white border rounded-xl shadow-sm p-6">
                    <Clock size={34} className="text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Opening Hours:</h3>
                    <p>24 Hours</p>
                </div>
            </div>

            {/* ---------------- FORM + MAP ---------------- */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">

                {/* QUOTE FORM */}
                <div>
                    <h3 className="text-2xl font-bold">Get a Quote</h3>
                    <p className="text-gray-600 mb-6">
                        We will get back to you in less than 10 Minutes
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name *"
                                required
                                className="border w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email *"
                                required
                                className="border w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                            />

                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone No. *"
                                required
                                className="border w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                            />

                            <input
                                type="text"
                                name="vehicleReg"
                                value={formData.vehicleReg}
                                onChange={handleChange}
                                placeholder="Vehicle Reg No."
                                className="border w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                            />

                            <input
                                type="text"
                                name="postcode"
                                value={formData.postcode}
                                onChange={handleChange}
                                placeholder="Postcode"
                                className="border w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                            />

                            {/* Select box */}
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="border w-full px-4 py-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
                            >
                                <option disabled>Select Service</option>
                                <option>Mobile Tyre Fitting</option>
                                <option>Tyre Repair</option>
                                <option>Tyre Replacement</option>
                                <option>Emergency Callout</option>
                            </select>
                        </div>

                        {/* Message Field */}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter Your Message"
                            className="border w-full px-4 py-3 rounded-lg h-28 focus:ring-2 focus:ring-red-500 outline-none"
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="animate-spin h-5 w-5" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="h-5 w-5" />
                                    Get a Quote
                                </>
                            )}
                        </button>

                        {/* Status Messages */}
                        {status === "success" && (
                            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-4 rounded-xl font-medium animate-fade-in">
                                <CheckCircle2 className="h-5 w-5" />
                                Your request has been sent successfully! We'll contact you shortly.
                            </div>
                        )}
                        {status === "error" && (
                            <div className="flex items-center gap-2 text-rose-600 bg-rose-50 p-4 rounded-xl font-medium animate-fade-in">
                                <AlertCircle className="h-5 w-5" />
                                Failed to send. Please try calling us directly at +44 7868 258333.
                            </div>
                        )}
                    </form>
                </div>

                {/* GOOGLE MAP */}
                <div>
                    <iframe
                        className="w-full h-[420px] rounded-xl shadow-lg border"
                        src={mapSrc}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </div>
            <ReviewsSlider />
        </section>
    );
}
