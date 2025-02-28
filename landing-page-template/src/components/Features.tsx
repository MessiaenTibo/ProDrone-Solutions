import FeatureItem from "./FeatureItem";

interface Feature {
    title: string;
    description: string;
    image: string;
}

export default function Features() {
    const features: Feature[] = [
        {
            title: "Return to Home",
            description: "Our drones are equipped with a smart Return to Home feature, which automatically brings your drone back to its starting point with the press of a button or in case of signal loss.",
            image: "/src/assets/images/feature_return_to_home.webp",
        },
        {
            title: "3D Gimbal Stabilization",
            description: "Capture smooth, cinematic footage with the advanced 3D gimbal stabilization. It ensures that your camera stays level and steady, even during complex maneuvers.",
            image: "/src/assets/images/feature_gimbal.webp",
        },
        {
            title: "Obstacle Avoidance",
            description: "Our drones feature intelligent obstacle avoidance technology, allowing them to detect and avoid obstacles in real-time, ensuring safe flights in challenging environments.",
            image: "/src/assets/images/feature_obstacle_avoidance.webp",
        },
        {
            title: "4K Camera Quality",
            description: "Capture breathtaking photos and videos in stunning 4K resolution. Whether you're filming a landscape or a close-up, our camera provides crystal-clear imagery.",
            image: "/src/assets/images/feature_4k_camera.webp",
        },
        {
            title: "Long Battery Life",
            description: "With up to 60 minutes of flight time on a single charge, you can explore more and capture stunning content without worrying about running out of power.",
            image: "/src/assets/images/feature_battery_life.webp",
        },
        {
            title: "Fast Charging",
            description: "Charge your drone quickly with our state-of-the-art fast-charging technology, allowing you to get back in the air with minimal downtime.",
            image: "/src/assets/images/feature_fast_charging.webp",
        },
    ];

    return (
        <section id="Features" className="py-20 bg-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Key Features</h2>
            <p className="mb-12 text-lg text-gray-500 text-center">
                Discover what makes our product stand out. From long battery life to seamless user experience, we’ve got you covered.
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
                {features.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                    />
                ))}
            </div>
        </section>
    );
}
