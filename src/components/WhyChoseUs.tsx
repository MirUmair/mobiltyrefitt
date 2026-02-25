import { Scale, Timer, PhoneCall } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="w-full py-20 bg-gray-50">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-14">
                WHY CHOOSE MOBIL TYRE FITT?
            </h2>

            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* CARD 1 */}
                <Card
                    icon={<Scale size={50} className="text-red-500" />}
                    title="Fair Pricing"
                    description="You'll always know what you're paying — no hidden fees, no surprise charges. Honest pricing every time."
                />

                {/* CARD 2 — Highlighted */}
                <Card
                    highlight
                    icon={<Timer size={50} className="text-white" />}
                    title="30-Minute Response Time"
                    description="We're built for emergencies. Our mobile tyre team reaches most locations within 30 minutes – fast and reliable."
                />

                {/* CARD 3 */}
                <Card
                    icon={<PhoneCall size={50} className="text-red-500" />}
                    title="24/7 Tyre Callout Service"
                    description="Flat tyre at night or during rush hour? We're available 24/7 for emergency tyre callouts across London & beyond."
                />

            </div>
        </section>
    );
}

/* CARD COMPONENT */
function Card({
    icon,
    title,
    description,
    highlight = false,
}: {
    icon: any;
    title: string;
    description: string;
    highlight?: boolean;
}) {
    return (
        <div
            className={`rounded-3xl p-10 shadow-lg border transition ${highlight
                ? "bg-red-600 text-white shadow-xl scale-[1.03]"
                : "bg-white text-gray-800 hover:shadow-xl"
                }`}
        >
            <div className={`mb-5 ${highlight ? "text-white" : "text-red-600"}`}>
                {icon}
            </div>
            <h3
                className={`font-bold text-xl mb-3 ${highlight ? "text-white" : "text-gray-900"
                    }`}
            >
                {title}
            </h3>
            <p
                className={`leading-relaxed ${highlight ? "text-red-50" : "text-gray-600"
                    }`}
            >
                {description}
            </p>
        </div>
    );
}
