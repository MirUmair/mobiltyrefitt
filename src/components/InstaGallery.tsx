import { MessageCircle } from "lucide-react";
import React from "react";

type InstaItem = {
    src: string;
    href: string;
    alt?: string;
};

type Props = {
    items: InstaItem[];
    title?: string;
    subtitle?: string;
};

export default function InstaGallery({
    items,
    title = "Real Stories From Real Customers",
    subtitle = "See the difference our mobile tyre service makes",
}: Props) {
    return (
        <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50 overflow-hidden">
            {/* Background circles */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse delay-500"></div>
            </div>

            {/* Tyre Track Pattern */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: "url('/tyre-track.svg')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "400px",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
                        <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                            Customer Stories
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-900 mb-6">
                        <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                            Real Results
                        </span>
                        <br />
                        <span className="text-slate-800">On The Road</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Don’t just take our word for it — see real results from drivers across London.
                    </p>
                </div>

                {/* Horizontal Scroll Gallery */}
                <div className="relative">
                    {/* Gradient edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-amber-50 to-transparent z-10 pointer-events-none"></div>

                    {/* Scrollable Cards */}
                    <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide scroll-smooth">
                        {items.map((it, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-80 transform hover:scale-105 transition-transform duration-300"
                            >
                                <a
                                    href={it.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block rounded-3xl overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 group"
                                >
                                    {/* Image Container */}
                                    <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 h-96">
                                        <img
                                            src={it.src}
                                            alt={it.alt ?? `Instagram post ${i + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Instagram Icon */}
                                        <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                                            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-3 shadow-2xl">
                                                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Hover bottom text */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                                        ❤️
                                                    </div>
                                                    <span className="text-white font-semibold text-sm">1.2k</span>
                                                </div>
                                                <span className="text-white text-sm bg-black/30 px-3 py-1 rounded-full">
                                                    View Post
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="p-5 bg-white">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                Story #{i + 1}
                                            </span>
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <svg key={s} width="12" height="12" fill="#FACC15" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27..." />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                                            "Amazing service! They arrived in 25 minutes!"
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Hint */}
                    <div className="text-center mt-4 text-slate-500">
                        ← Scroll to see more stories →
                    </div>
                </div>
            </div>
        </section>
    );
}
