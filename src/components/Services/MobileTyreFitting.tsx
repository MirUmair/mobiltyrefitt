import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import MobileTyreFittingHero from "./MobileTyreFittingHero";
import Features from "../Features";
import Features1 from "../Features1";

import WhyChoseUs from "../WhyChoseUs";
import ReviewsSlider from "../ReviewsSlider";
import MakeAppoinment from "../MakeAppoinment";
import FittingService from "../FittingService";

import {
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12, logo13,
  blogo1, blogo2, blogo3, blogo4, blogo5, blogo6,
  blogo7, blogo8, blogo9, blogo10,
} from "@/assets";


export default function App() {
  const location = useLocation();

  // Detect if we are on the homepage ("/")
  const isHome = location.pathname === "/";
  const tyrebrands = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12, logo13
  ];
  const carbrands = [
    blogo1, blogo2, blogo3, blogo4, blogo5, blogo6,
    blogo7, blogo8, blogo9, blogo10,
  ];
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-accent-50 to-brand-50">
      <MobileTyreFittingHero />
      <Features brands={tyrebrands} heading={"Certified & Trusted Tyre Brands"} />
      <Features1 />
      <WhyChoseUs />
      <FittingService />
      <ReviewsSlider />
      <MakeAppoinment />
      <Features brands={carbrands} heading={"Tyres for All Car Brands Available"} />
    </div>
  );
}
