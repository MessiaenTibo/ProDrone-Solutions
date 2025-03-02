import { useEffect, useState } from "react";

// Define the Drone interface
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

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedDrone, setSelectedDrone] = useState<Drone | null>(null);
    const [showAnimation, setShowAnimation] = useState<boolean>(false);

    const handleBuyDrone = (drone: Drone) => {
        setSelectedDrone(drone);
        setIsModalOpen(true);
    };

    useEffect(() => {
        if (isModalOpen) {
            setTimeout(() => setShowAnimation(true), 10); // Small delay to trigger animation
        } else {
            setShowAnimation(false);
        }
    }, [isModalOpen]);

    return (
        <section id="Drones" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-center">Drones</h2>
            <div className="grid w-fit m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
                {drones.map((drone, index) => (
                    <DroneCard key={index} drone={drone} onBuy={handleBuyDrone} />
                ))}
            </div>

            {isModalOpen && selectedDrone && (
                <CartModal
                    drone={selectedDrone}
                    isOpen={isModalOpen}
                    showAnimation={showAnimation}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </section>
    );
}

// DroneCard component
interface DroneCardProps {
    drone: Drone;
    onBuy: (drone: Drone) => void;
}

function DroneCard({ drone, onBuy }: DroneCardProps) {
    return (
        <div className="shadow rounded-lg bg-white max-w-sm mx-auto overflow-hidden">
            <div className="overflow-hidden">
                <img
                    draggable="false"
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
                    <button
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
                        onClick={() => onBuy(drone)}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

// CartModal component
interface CartModalProps {
    drone: Drone;
    isOpen: boolean;
    showAnimation: boolean;
    onClose: () => void;
}

function CartModal({ drone, showAnimation, onClose }: CartModalProps) {
    return (
        <div
            className={`fixed z-100 inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300 
                ${showAnimation ? "opacity-100" : "opacity-0"}`}
            onClick={onClose}
        >
            <div
                className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-center transform transition-transform duration-300 
                    ${showAnimation ? "scale-100" : "scale-95"}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <h2 className="text-2xl font-bold">Added to Cart</h2>
                <p className="text-gray-600 mt-2">
                    <strong>{drone.name}</strong> has been added to your cart.
                </p>
                <div className="mt-6 flex justify-between gap-4">
                    <button
                        className="w-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                        onClick={() => (window.location.href = "/cart")}
                    >
                        Go to Cart
                    </button>
                    <button
                        className="w-1/2 px-4 py-2 bg-gray-300 rounded-lg"
                        onClick={onClose}
                    >
                        Keep Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}
