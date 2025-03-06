import { useEffect, useState, useRef } from "react";
import { useCart } from "../context/CartContext"; // Import global cart context to manage cart state

// Define the Drone interface to ensure type safety for drone objects
interface Drone {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

// Main Drones Component
export default function Drones() {
    // Extract 'addToCart' function from global CartContext to add items to the cart
    const { addToCart } = useCart();

    // State to manage modal visibility and drone selection for purchase
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDrone, setSelectedDrone] = useState<Drone | null>(null);

    // State for controlling modal animation
    const [showAnimation, setShowAnimation] = useState(false);

    // State to manage drone card visibility for animation effects
    const [allVisible, setAllVisible] = useState(false);

    // Sample drone data (you can replace or extend this array)
    const drones: Drone[] = [
        { name: "ShadowViper", price: 699, image: "ShadowViper.webp", category: "Beginner", description: "The perfect drone for professional results and still beginner friendly." },
        { name: "NightOwl", price: 1299, image: "NightOwl.webp", category: "Advanced", description: "The ultimate drone for day and night photography." },
        { name: "NanoFalcon", price: 499, image: "NanoFalcon.webp", category: "Beginner", description: "A perfect drone for traveling because of its small size and low weight." },
    ];

    // Function to handle the purchase action (adds to cart and opens modal)
    const handleBuyDrone = (drone: Drone) => {
        addToCart(drone);  // Add drone to cart
        setSelectedDrone(drone);  // Set selected drone
        setIsModalOpen(true);  // Open modal
    };

    // Effect to trigger modal animation when it's opened/closed
    useEffect(() => {
        if (isModalOpen) {
            setTimeout(() => setShowAnimation(true), 10); // Delayed animation for smooth effect
        } else {
            setShowAnimation(false); // Reset animation when modal is closed
        }
    }, [isModalOpen]);

    return (
        <section id="Drones" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-center">Drones</h2>
            {/* Display drone cards with animations when in view */}
            <div className="grid w-fit m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
                {drones.map((drone, index) => (
                    // Pass down visibility state and function to control visibility animations
                    <DroneCard
                        key={index}
                        index={index}
                        drone={drone}
                        onBuy={handleBuyDrone}
                        setAllVisible={setAllVisible}
                        allVisible={allVisible}
                    />
                ))}
            </div>

            {/* Render Cart Modal if it's open */}
            {isModalOpen && selectedDrone && (
                <CartModal
                    drone={selectedDrone}
                    isOpen={isModalOpen}
                    showAnimation={showAnimation}
                    onClose={() => setIsModalOpen(false)}  // Close modal handler
                />
            )}
        </section>
    );
}

// DroneCard Component: Renders individual drone cards with animation and buy button
interface DroneCardProps {
    drone: Drone;
    index: number;
    onBuy: (drone: Drone) => void;
    setAllVisible: (visible: boolean) => void;
    allVisible: boolean;
}

function DroneCard({ drone, index, onBuy, setAllVisible, allVisible }: DroneCardProps) {
    const ref = useRef<HTMLDivElement | null>(null);  // Ref for IntersectionObserver

    // Effect to trigger animation when card enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAllVisible(true);  // Trigger visibility update when card enters view
                }
            },
            { threshold: 0.2 }  // Trigger animation when 20% of the card is visible
        );

        if (ref.current) observer.observe(ref.current);  // Observe the card
        return () => observer.disconnect();  // Cleanup observer on unmount
    }, [setAllVisible]);

    return (
        <div
            ref={ref}  // Attach the ref for visibility observation
            className={`shadow rounded-lg bg-white max-w-sm mx-auto overflow-hidden 
            transition-all duration-[1000ms] ease-out transform
            ${allVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
            style={{
                transitionDelay: allVisible ? `${index * 200}ms` : "0ms", // Stagger animation
            }}
        >
            <div className="overflow-hidden">
                {/* Drone image with hover effect */}
                <img
                    draggable="false"  // Prevent image dragging
                    src={drone.image}
                    alt={`Picture of the ${drone.name} drone`}
                    className="hover:scale-110 transition-transform duration-500 ease-out cursor-pointer"
                    style={{ width: "100%", height: "auto" }}
                    onClick={() => onBuy(drone)}  // Trigger buy when image is clicked
                />
            </div>
            <div className="p-2 md:p-4">
                <p className="text-gray-600 pb-2">{drone.category}</p>
                <h3 className="text-xl font-semibold">{drone.name}</h3>
                <div className="flex justify-between items-center mt-5">
                    <p className="text-2xl font-bold">${drone.price}</p>
                    {/* Buy Now button */}
                    <button
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg border-2 border-transparent focus:border-black focus:outline-0 hover:bg-blue-700 transition-colors duration-100"
                        onClick={() => onBuy(drone)}  // Trigger buy action
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

// CartModal Component: Shows modal with selected drone details when added to cart
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
            onClick={onClose}  // Close modal when clicking outside
        >
            <div
                className={`bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-center transform transition-transform duration-300 
                    ${showAnimation ? "scale-100" : "scale-95"}`}
                onClick={(e) => e.stopPropagation()}  // Prevent modal from closing when clicking inside
            >
                <h2 className="text-2xl font-bold">Item added to shopping cart!</h2>
                <img className=" w-40 h-40 mx-auto my-4 shadow-md" src={drone.image} alt={drone.name + " image"} />
                <p className="text-gray-600">
                    <strong>{drone.name}</strong> has been added to your shopping cart. You can view and edit your cart from the cart page.
                </p>
                <div className="mt-6 flex justify-between gap-4">
                    {/* Buttons to navigate to the cart or keep shopping */}
                    <button
                        className="w-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                        onClick={() => (window.location.href = "/cart")}  // Redirect to cart page
                    >
                        Go to Cart
                    </button>
                    <button
                        className="w-1/2 px-4 py-2 bg-gray-300 rounded-lg"
                        onClick={onClose}  // Close modal to continue shopping
                    >
                        Keep Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}
