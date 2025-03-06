import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // Import global cart context

// Define the Drone interface to enforce type safety
interface Drone {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

export default function Drones() {
    const { addToCart } = useCart(); // Use context to update the cart

    // Array of available drones with their properties
    const drones: Drone[] = [
        { name: "ShadowViper", price: 699, image: "ShadowViper.webp", category: "Beginner", description: "The perfect drone for professional results and still beginner friendly." },
        { name: "NightOwl", price: 1299, image: "NightOwl.webp", category: "Advanced", description: "The ultimate drone for day and night photography." },
        { name: "NanoFalcon", price: 499, image: "NanoFalcon.webp", category: "Beginner", description: "A perfect drone for traveling because of its small size and low weight." },
    ];

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedDrone, setSelectedDrone] = useState<Drone | null>(null);
    const [showAnimation, setShowAnimation] = useState<boolean>(false);

    const handleBuyDrone = (drone: Drone) => {
        addToCart(drone); // Add the drone to the global cart state

        // Set the selected drone and open the modal
        setSelectedDrone(drone);
        setIsModalOpen(true);
    };

    // Effect to handle animation when modal state changes
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

// DroneCard component for displaying individual drone details
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
                    className="hover:scale-110 transition-transform duration-500 ease-out cursor-pointer"
                    style={{ width: "100%", height: "auto" }}
                    onClick={() => onBuy(drone)}
                />
            </div>
            <div className="p-2 md:p-4">
                <p className="text-gray-600 pb-2">{drone.category}</p>
                <h3 className="text-xl font-semibold">{drone.name}</h3>
                <div className="flex justify-between items-center mt-5">
                    <p className="text-2xl font-bold">${drone.price}</p>
                    <button
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg border-black focus:border-2 focus:outline-0 hover:bg-blue-700 transition-colors duration-100"
                        onClick={() => onBuy(drone)}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

// CartModal component to display when a drone is added to the cart
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
                className={`bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-center transform transition-transform duration-300 
                    ${showAnimation ? "scale-100" : "scale-95"}`}
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
                <h2 className="text-2xl font-bold">Item added to shopping cart!</h2>
                <img className=" w-40 h-40 mx-auto my-4 shadow-md" src={drone.image} alt={drone.name + " image"} />
                <p className="text-gray-600">
                    <strong>{drone.name}</strong> has been added to your shopping cart. You can view and edit your cart from the cart page.
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
