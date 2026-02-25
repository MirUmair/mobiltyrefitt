import React from "react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

type MobileTyreHeroProps = {
    // Array of logo image URLs (imported or remote)
    brands?: string[];
    heading: string;
};

const MobileTyreHero: React.FC<MobileTyreHeroProps> = ({ brands = [], heading }) => {
    const safeBrands = Array.isArray(brands) ? brands : [];

    return (
        <section className="w-full py-20 bg-white">
            {/* ========================= */}
            {/* ⭐ TOP BRAND SLIDER ⭐ */}
            {/* ========================= */}

            <div className="max-w-5xl mx-auto px-4 mb-4">
                <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-10">
                    {heading}
                </h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 1700 }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={40}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="pb-10"
                >
                    {safeBrands.map((logo, idx) => (
                        <SwiperSlide key={idx} className="flex justify-center">
                            <div className="bg-white rounded-xl shadow-md p-3 hover:shadow-xl transition border border-gray-100 h-20 flex items-center justify-center">
                                <img
                                    src={logo}
                                    className="h-12 w-auto object-contain"
                                    alt={`tyre brand ${idx + 1}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Styling */}
                <style>{`
          .swiper-pagination {
            position: static !important;
            margin-top: 24px;
            display: flex;
            justify-content: center;
          }

          .swiper-pagination-bullet {
            background: #c8c8c8 !important;
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 6px !important;
          }

          .swiper-pagination-bullet-active {
            background: #007bff !important;
          }
        `}</style>
            </div>
        </section>
    );
};

export default MobileTyreHero;
