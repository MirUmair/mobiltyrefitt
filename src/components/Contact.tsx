import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import MobileTyreFittingHero from "./Services/MobileTyreFittingHero";
import ReviewsSlider from "./ReviewsSlider";
import SEO from "./SEO";

export default function ContactSection() {
    const mapSrc =
        "https://www.google.com/maps?q=51.62931288925842,-0.7810530893610297&z=18&output=embed";
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <input
                            type="text"
                            placeholder="Name"
                            className="border w-full px-4 py-3 rounded-lg"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="border w-full px-4 py-3 rounded-lg"
                        />

                        <input
                            type="text"
                            placeholder="Phone No."
                            className="border w-full px-4 py-3 rounded-lg"
                        />

                        <input
                            type="text"
                            placeholder="Vehicle Reg No."
                            className="border w-full px-4 py-3 rounded-lg"
                        />

                        <input
                            type="text"
                            placeholder="Postcode"
                            className="border w-full px-4 py-3 rounded-lg"
                        />

                        {/* Select box */}
                        <select className="border w-full px-4 py-3 rounded-lg text-gray-700">
                            <option>Select Service</option>
                            <option>Mobile Tyre Fitting</option>
                            <option>Tyre Repair</option>
                            <option>Tyre Replacement</option>
                            <option>Emergency Callout</option>
                        </select>
                    </div>

                    {/* Message Field */}
                    <textarea
                        placeholder="Enter Your Message"
                        className="border w-full mt-4 px-4 py-3 rounded-lg h-28"
                    ></textarea>

                    {/* Submit Button */}
                    <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
                        Get a Quote
                    </button>
                </div>

                {/* GOOGLE MAP */}
                <div>
                    <iframe
                        className="w-full h-[420px] rounded-xl shadow-lg"
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
