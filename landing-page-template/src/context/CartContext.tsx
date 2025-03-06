import { createContext, useContext, useState, ReactNode } from "react";

// Define the structure of a Drone object
interface Drone {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    count?: number; // Number of times added to the cart
}

// Define the shape of the CartContext
interface CartContextType {
    cart: Drone[];
    addToCart: (drone: Drone) => void;
    removeFromCart: (droneName: string) => void;
    cartCount: number;
}

// Create the context with a default empty value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider component
export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Drone[]>(() => {
        // Load cart from localStorage if available
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Function to add a drone to the cart
    const addToCart = (drone: Drone) => {
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex((item) => item.name === drone.name);
            let updatedCart;

            if (existingIndex !== -1) {
                // If drone is already in cart, increase count
                updatedCart = [...prevCart];
                updatedCart[existingIndex].count = (updatedCart[existingIndex].count || 1) + 1;
            } else {
                // Add new drone with count = 1
                updatedCart = [...prevCart, { ...drone, count: 1 }];
            }

            // Save updated cart to localStorage
            localStorage.setItem("cartItems", JSON.stringify(updatedCart));

            return updatedCart;
        });
    };

    // Function to remove a drone from the cart
    const removeFromCart = (droneName: string) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.name !== droneName);
            localStorage.setItem("cartItems", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Total cart count (sum of all drone counts)
    const cartCount = cart.reduce((total, drone) => total + (drone.count || 1), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook to use the cart context
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
