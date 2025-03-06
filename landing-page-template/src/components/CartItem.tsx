import { useState } from "react";
import { Trash2 } from "lucide-react";

// Define the interface for CartItemProps to type-check the item prop
interface CartItemProps {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    count: number;
    updateItemCount: (item: CartItemProps) => void; // Function passed from parent to update item count
}

export default function FeatureItem(item: CartItemProps) {
    // Local state for count and total
    const [count, setCount] = useState<number>(item.count);
    const [total, setTotal] = useState<number>(item.price * item.count);

    // Function to handle item removal from cart
    const handleRemoveItem = () => {
        // Confirm before removing the item from the cart
        if (window.confirm("Are you sure you want to remove this item from the cart?")) {
            // Get the current cart from localStorage
            const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");

            // Filter out the item from the cart based on item name
            const updatedCart = cart.filter((cartItem: CartItemProps) => cartItem.name !== item.name);

            // Save the updated cart back to localStorage
            localStorage.setItem("cartItems", JSON.stringify(updatedCart));

            // Reload the page to reflect the updated cart (could be improved by re-rendering instead of reload)
            window.location.reload();
        }
    };

    // Function to handle changes in item count
    const handleCountChange = (e: any) => {
        const newCount = parseInt(e.target.value);

        // If new count is 0 or less, remove the item from the cart
        if (newCount <= 0) {
            handleRemoveItem();
            return;
        }

        // Update local state for count and total
        setCount(newCount);
        setTotal(item.price * newCount);

        // Create an updated item object with the new count
        const updatedItem = { ...item, count: newCount };

        // Notify the parent component to recalculate the total by updating the item count
        item.updateItemCount(updatedItem); // Call the parent's updateItemCount function
    };

    return (
        <div className="flex flex-col items-center gap-4 justify-center text-center sm:text-start sm:flex-row sm:flex-wrap sm:items-start sm:gap-8">
            {/* Display item image */}
            <img
                src={item.image}
                alt={item.name + " image"}
                className="w-sm max-w-[90%] sm:w-32 sm:h-32"
            />
            <div className="max-w-xs">
                {/* Display item name, category, and description */}
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="font-medium">{item.category}</p>
                <p>{item.description}</p>
            </div>
            <div className="flex gap-8 flex-wrap sm:flex-nowrap">
                {/* Display price per item */}
                <div>
                    <h3 className="text-xl font-medium">Each</h3>
                    <p>${item.price}</p>
                </div>
                {/* Input field for changing the quantity */}
                <div>
                    <h3 className="text-xl font-medium">Quantity</h3>
                    <input
                        type="number"
                        value={count}
                        max={10}
                        min={0}
                        onChange={handleCountChange}
                        className="w-16 h-10 px-3 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out"
                    />
                </div>
                {/* Display the total price for the item (quantity * price) */}
                <div>
                    <h3 className="text-xl font-medium">Total</h3>
                    <p>${total}</p>
                </div>
            </div>
            <div>
                {/* Remove item button with Trash icon */}
                <button className="cursor-pointer hover:text-red-500" onClick={handleRemoveItem}>
                    <Trash2 size={24} />
                </button>
            </div>
        </div>
    );
}
