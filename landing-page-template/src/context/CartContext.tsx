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
    updateItemCount: (droneName: string, count: number) => void;
    cartCount: number;
}

// Create the context with a default empty value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider component
export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Drone[]>(() => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Function to add a drone to the cart
    const addToCart = (drone: Drone) => {
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex((item) => item.name === drone.name);
            let updatedCart;

            if (existingIndex !== -1) {
                updatedCart = [...prevCart];
                updatedCart[existingIndex].count = (updatedCart[existingIndex].count || 1) + 1;
            } else {
                updatedCart = [...prevCart, { ...drone, count: 1 }];
            }

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

    // Function to update the count of an item in the cart
    const updateItemCount = (droneName: string, count: number) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) =>
                item.name === droneName ? { ...item, count } : item
            );

            localStorage.setItem("cartItems", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Calculate total cart count
    const cartCount = cart.reduce((total, drone) => total + (drone.count || 1), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateItemCount, cartCount }}>
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
