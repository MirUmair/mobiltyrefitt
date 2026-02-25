import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import BrandSlider from "./components/BrandSlider";
import ReviewsSlider from "./components/ReviewsSlider";
import InstaGallery from "./components/InstaGallery";
import StepsLanding from "./components/StepsLanding";
import EmergencySection from "./components/EmergencySection";
import FittingService from "./components/FittingService";
import CallUs from "./components/CallUs";
import AlwaysReady from "./components/AlwaysReady";
import StatsAndBrandsSection from "./components/StatsAndBrandsSection";
import FAQSection from "./components/FAQSection";
import ServiceAreasGrid from "./components/ServiceAreasGrid";
import Hero from "./components/Hero";

export default function App() {
  const location = useLocation();

  // Detect if we are on the homepage ("/")
  const isHome = location.pathname === "/";

  const insta = [
    { src: "https://picsum.photos/seed/ig1/900/1125", href: "#" },
    { src: "https://picsum.photos/seed/ig2/900/1125", href: "#" },
    { src: "https://picsum.photos/seed/ig3/900/1125", href: "#" },
    { src: "https://picsum.photos/seed/ig4/900/1125", href: "#" },
    { src: "https://picsum.photos/seed/ig5/900/1125", href: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-accent-50 to-brand-50">
      <Header />

      {/* If NOT home page → render routed page */}
      {!isHome && <Outlet />}

      {/* If home page → render full homepage layout */}
      {isHome && (
        <>
          <Hero />
          <BrandSlider />
          <ReviewsSlider />
          <InstaGallery items={insta} />
          <StepsLanding />
          <EmergencySection />
          <FittingService />
          <CallUs />
          <AlwaysReady />
          <StatsAndBrandsSection />
          <FAQSection />
          <ServiceAreasGrid />
        </>
      )}

      <Footer />
      <CartDrawer />
    </div>
  );
}
