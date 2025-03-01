import { Zap, Webcam, Rotate3D, BatteryFull, BatteryCharging, MapPinHouse } from "lucide-react";
import FeatureItem from "./FeatureItem";
import { JSX } from "react";

// Define the Feature interface to structure the feature data
interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
}

export default function Features() {
    // List of drone features - You can modify or add more as needed
    const features: Feature[] = [
        {
            title: "Return to Home",
            description: "Our drones are equipped with a smart Return to Home feature, which automatically brings your drone back to its starting point with the press of a button or in case of signal loss.",
            icon: <MapPinHouse className="w-20 h-20" />,
        },
        {
            title: "3D Gimbal Stabilization",
            description: "Capture smooth, cinematic footage with the advanced 3D gimbal stabilization. It ensures that your camera stays level and steady, even during complex maneuvers.",
            icon: <Rotate3D className="w-20 h-20" />,
        },
        {
            title: "Obstacle Avoidance",
            description: "Our drones feature intelligent obstacle avoidance technology, allowing them to detect and avoid obstacles in real-time, ensuring safe flights in challenging environments.",
            icon: <Zap className="w-20 h-20" />,
        },
        {
            title: "4K Camera Quality",
            description: "Capture breathtaking photos and videos in stunning 4K resolution. Whether you're filming a landscape or a close-up, our camera provides crystal-clear imagery.",
            icon: <Webcam className="w-20 h-20 rotate-180" />,
        },
        {
            title: "Long Battery Life",
            description: "With up to 60 minutes of flight time on a single charge, you can explore more and capture stunning content without worrying about running out of power.",
            icon: <BatteryFull className="w-20 h-20" />,
        },
        {
            title: "Fast Charging",
            description: "Charge your drone quickly with our state-of-the-art fast-charging technology, allowing you to get back in the air with minimal downtime.",
            icon: <BatteryCharging className="w-20 h-20" />,
        },
    ];

    return (
        <section id="Features" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section title - You can customize the heading */}
                <h2 className="text-3xl font-bold mb-6 text-center">Our Key Features</h2>

                {/* Display feature items in a responsive grid layout */}
                <div className="flex flex-wrap gap-8 justify-center">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
