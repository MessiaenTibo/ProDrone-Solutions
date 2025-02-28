import { useState } from "react";

interface Drone {
    name: string;
    price: string;
    image: string;
    category: string;
}

export default function Drones() {
    const [selectedDrone, setSelectedDrone] = useState<Drone | null>(null);

    const drones: Drone[] = [
        { name: "ShadowViper", price: "$699", image: "/src/assets/images/ShadowViper.webp", category: "Beginner" },
        { name: "NightOwl", price: "$1299", image: "/src/assets/images/NightOwl.webp", category: "Advanced" },
        { name: "NanoFalcon", price: "$499", image: "/src/assets/images/NanoFalcon.webp", category: "Beginner" }
    ];

    const handleBuyDrone = (drone: Drone) => {
        setSelectedDrone(drone);
        if (selectedDrone) {
            /* Replace with your own logic */
            alert(`You bought the ${selectedDrone.name} drone for ${selectedDrone.price}!`);
        }
    }

    return (
        <section id="Drones" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-center">Drones</h2>
            <div className="grid w-fit m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
                {drones.map((drone) => (
                    <div key={drone.name} className="shadow rounded-lg bg-white max-w-sm mx-auto overflow-hidden">
                        <img src={drone.image} alt={`Picture of the ${drone.name} drone`} />
                        <div className="p-2 md:p-4">
                            <p className="text-gray-600 pb-2">{drone.category}</p>
                            <h3 className="text-xl font-semibold">{drone.name}</h3>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-2xl font-bold">{drone.price}</p>
                                <button
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg"
                                    onClick={() => handleBuyDrone(drone)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}