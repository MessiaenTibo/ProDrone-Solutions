import { useEffect, useState, useRef } from "react";

interface Drone {
    name: string;
    price: string;
    image: string;
    category: string;
}

export default function Drones() {
    const drones: Drone[] = [
        { name: "ShadowViper", price: "$699", image: "/src/assets/images/ShadowViper.webp", category: "Beginner" },
        { name: "NightOwl", price: "$1299", image: "/src/assets/images/NightOwl.webp", category: "Advanced" },
        { name: "NanoFalcon", price: "$499", image: "/src/assets/images/NanoFalcon.webp", category: "Beginner" }
    ];

    return (
        <section id="Drones" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-center">Drones</h2>
            <div className="grid w-fit m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
                {drones.map((drone, index) => (
                    <DroneCard key={index} drone={drone} index={index} />
                ))}
            </div>
        </section>
    );
}

function DroneCard({ drone, index }: { drone: Drone; index: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 300); // Stagger effect (300ms delay per item)
                }
            },
            { threshold: 0.8 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [index]);

    return (
        <div
            ref={ref}
            className={`shadow rounded-lg bg-white max-w-sm mx-auto overflow-hidden 
                transition-all duration-[1000ms] ease-out transform
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
        >
            <div className="overflow-hidden">
                <img
                    src={drone.image}
                    alt={`Picture of the ${drone.name} drone`}
                    className="hover:scale-110 transition-transform duration-500 ease-out"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
            <div className="p-2 md:p-4">
                <p className="text-gray-600 pb-2">{drone.category}</p>
                <h3 className="text-xl font-semibold">{drone.name}</h3>
                <div className="flex justify-between items-center mt-5">
                    <p className="text-2xl font-bold">{drone.price}</p>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
