import React from "react";
import MobileTyreFittingHero from "../Services/MobileTyreFittingHero";
import StepsLanding from "../StepsLanding";
import ReviewsSlider from "../ReviewsSlider";
import MakeAppoinment from "../MakeAppoinment";
import SEO from "../SEO";


const areasData = {
    A: ["Amersham"],
    B: ["Brent", "Bromley", "Buckinghamshire", "Beaconsfield", "Borehamwood", "Barnet", "Briton"],
    C: ["Croydon", "Chelsea", "Chesham"],
    D: ["Dartford"],
    E: ["Ealing", "East London", "Egham"],
    F: ["F"],
    G: ["Greenwich", "Gerrards Cross", "Guildford"],
    H: ["Harrow", "Hillingdon", "Hounslow", "Hayes", "High wycombe", "Hackney"],
    I: [],
    J: [],
    K: ["Kensington", "Kent"],
    L: ["London"],
    M: ["Marlow", "Maidenhead"],
    N: ["North London"],
    O: [],
    P: [],
    Q: [],
    R: ["Ruislip", "Richmond", "Rickmansworth"],
    S: ["Southall", "Slough", "South London", "Staines", "Sunbury"],
    T: ["Twickenham"],
    U: ["Uxbridge"],
    V: [],
    W: ["Wembley", "Watford", "Windsor", "West London", "Woking"],
    X: [],
    Y: [],
    Z: [],
};

export default function AreasWeServe() {
    return (
        <section className="w-full  bg-white">
            <SEO
                title="Areas We Serve | Mobile Tyre Fitt"
                description="Explore the wide range of areas we serve across the UK for mobile tyre fitting and repair."
            />
            {/* Header */}
            <MobileTyreFittingHero />
            <h2 className="text-center text-3xl font-bold mb-14 mt-8">Areas We Serve</h2>

            {/* A-Z Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 px-6">
                {Object.entries(areasData).map(([letter, places]) => (
                    <div key={letter}>
                        <h3 className="text-xl font-semibold mb-3">{letter}</h3>

                        {places.length === 0 ? (
                            <p className="text-gray-400 text-sm"> </p> // Empty placeholder for alignment
                        ) : (
                            <ul className="space-y-1">
                                {places.map((place, index) => (
                                    <li key={index} className="text-sm text-gray-700">
                                        {place}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <StepsLanding />
            <ReviewsSlider />
            <MakeAppoinment />
        </section>
    );
}
