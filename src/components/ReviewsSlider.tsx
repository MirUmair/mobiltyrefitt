import React, { useEffect, useRef } from "react";

type Review = {
    name: string;
    when: string;
    stars: number;
    text: string;
    avatarBg?: string; // optional: background color for initials circle
};

const reviews: Review[] = [
    { name: "Libbie Grizzly Kids", when: "2 months ago", stars: 5, text: "Great service – fast polite highly recommend. Hassan was great!", avatarBg: "#8b5cf6" },
    { name: "Natacha Derian Schmidt", when: "2 months ago", stars: 5, text: "Absolute life savers! Flat tyre the night before a trip and they rescued us quickly.", avatarBg: "#22c55e" },
    { name: "Raj Parmar", when: "2 months ago", stars: 5, text: "Met me in Finchley road and sorted the tyre very quickly. Night-time callout.", avatarBg: "#f59e0b" },
    { name: "Julie Downie", when: "2 months ago", stars: 5, text: "Arrived quickly and did the job we couldn't do. Friendly guy. Highly recommend.", avatarBg: "#0ea5e9" },
    { name: "Belinda", when: "2 months ago", stars: 5, text: "Super friendly, fast response. Very efficient and did a fantastic job.", avatarBg: "#ef4444" },
    { name: "Giulia", when: "2 months ago", stars: 5, text: "Very quick, and very helpful.", avatarBg: "#14b8a6" },
    { name: "Michael T.", when: "1 month ago", stars: 5, text: "Saved me during rush hour! Incredible service and professional team.", avatarBg: "#a855f7" },
    { name: "Sarah Johnson", when: "3 weeks ago", stars: 5, text: "24/7 service is a game changer. Thank you for the quick response!", avatarBg: "#84cc16" },
];

export default function ReviewsSlider() {
    const scroller = useRef<HTMLDivElement | null>(null);
    const autoplay = useRef<number | null>(null);

    const scrollByCards = (dir: 1 | -1) => {
        if (!scroller.current) return;
        const container = scroller.current;
        const step = Math.min(500, container.clientWidth * 0.8);
        container.scrollBy({ left: dir * step, behavior: "smooth" });
    };

    useEffect(() => {
        autoplay.current = window.setInterval(() => scrollByCards(1), 5000);
        const stop = () => {
            if (autoplay.current) window.clearInterval(autoplay.current);
            autoplay.current = null;
        };
        const el = scroller.current;
        el?.addEventListener("mouseenter", stop);
        el?.addEventListener("touchstart", stop);
        return () => {
            if (autoplay.current) window.clearInterval(autoplay.current);
            el?.removeEventListener("mouseenter", stop);
            el?.removeEventListener("touchstart", stop);
        };
    }, []);

    return (
        <section className="relative py-20 mt-10 bg-gradient-to-br from-slate-900 via-blue-400 to-slate-700 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Animated gradient orbs */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px),
                                         linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}>
                </div>
            </div>

            <div className="w-full relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-6xl mx-auto px-4">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-lg mb-6">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <span className="text-sm font-semibold text-white uppercase tracking-wider">
                            Trusted by Thousands
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-3xl font-black leading-tight text-white mb-6">
                        <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-white">
                            What Our Happy Customers Say About Us
                        </span>
                        <br />
                    </h2>

                    <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                        Don't just take our word for it. Hear from drivers we've helped across London
                        with our 24/7 emergency tyre service.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative w-full">
                    {/* Navigation Arrows */}
                    <div className="flex justify-center gap-4 mb-8 px-4">
                        <button
                            onClick={() => scrollByCards(-1)}
                            className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center hover:scale-110"
                            aria-label="Previous reviews"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollByCards(1)}
                            className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center hover:scale-110"
                            aria-label="Next reviews"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>


                    {/* Reviews Scroller - Full width */}
                    <div
                        ref={scroller}
                        className="flex gap-8 overflow-x-auto scroll-smooth pb-12 scrollbar-hide w-full px-8"
                    >
                        {reviews.map((r, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[300px] transform hover:scale-105 transition-transform duration-300"
                            >
                                <article className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full">

                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className="h-12 w-12 rounded-xl grid place-items-center text-white font-bold text-lg shadow-md"
                                            style={{ background: r.avatarBg }}
                                        >
                                            {r.name[0]}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-900 text-lg truncate">{r.name}</h3>
                                                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921..." />
                                                    </svg>
                                                    <span className="text-gray-700 text-sm font-semibold">5.0</span>
                                                </div>
                                            </div>
                                            <div className="text-gray-500 text-sm">{r.when}</div>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg
                                                key={star}
                                                className="w-5 h-5 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921..." />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-gray-700 leading-relaxed text-base mb-4 line-clamp-4">
                                        {r.text}
                                    </p>

                                    {/* Platform Badge */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 bg-gray-200 rounded-md flex items-center justify-center">
                                                <span className="text-sm font-bold text-gray-800">G</span>
                                            </div>
                                            <span className="text-gray-600 text-sm">Google Review</span>
                                        </div>
                                        <span className="text-gray-400 text-xs">Verified</span>
                                    </div>
                                </article>
                            </div>

                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="text-center mt-4">
                        <div className="inline-flex items-center gap-4 text-white/60 text-lg">
                            <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Scroll to see more reviews</span>
                            <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-10 text-center px-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-300 rounded-3xl p-12 shadow-2xl max-w-6xl mx-auto">
                        <h3 className="text-3xl md:text-3xl font-black text-white mb-6">
                            Join Our Happy Customers
                        </h3>
                        <p className="text-white/90 text-xl mb-4 max-w-3xl mx-auto">
                            Experience the same fast, reliable service that thousands of drivers trust
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="tel:+442080901010"
                                className="inline-flex items-center justify-center gap-4 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl px-10 py-5 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 min-w-[240px]"
                            >
                                <span className="text-2xl">📞</span>
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/442080901010"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-4 bg-slate-900 hover:bg-black text-white rounded-2xl px-10 py-5 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 min-w-[240px]"
                            >
                                <span className="text-2xl">💬</span>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom scrollbar hiding */}
            <style >{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .animate-bounce-x {
                    animation: bounce-x 1s infinite;
                }
                @keyframes bounce-x {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(6px); }
                }
            `}</style>
        </section>
    );
}