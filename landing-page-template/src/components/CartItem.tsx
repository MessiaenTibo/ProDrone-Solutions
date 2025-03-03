import { useState } from "react";
import { Trash2 } from "lucide-react";

interface CartItemProps {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    count: number;
    updateItemCount: (item: CartItemProps) => void; // Function passed from parent
}

export default function FeatureItem(item: CartItemProps) {
    const [count, setCount] = useState<number>(item.count);
    const [total, setTotal] = useState<number>(item.price * item.count);

    const handleRemoveItem = () => {
        if (window.confirm("Are you sure you want to remove this item from the cart?")) {
            const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
            const updatedCart = cart.filter((cartItem: CartItemProps) => cartItem.name !== item.name);
            localStorage.setItem("cartItems", JSON.stringify(updatedCart));
            window.location.reload();
        }
    };

    const handleCountChange = (e: any) => {
        const newCount = parseInt(e.target.value);

        if (newCount <= 0) {
            handleRemoveItem();
            return;
        }

        // Update the count and total
        setCount(newCount);
        setTotal(item.price * newCount);

        // Update the item count in the cart and notify parent to recalculate total
        const updatedItem = { ...item, count: newCount };
        item.updateItemCount(updatedItem); // Call parent function
    };

    return (
        <div className="flex flex-col items-center gap-4 justify-center text-center sm:text-start sm:flex-row sm:flex-wrap sm:items-start sm:gap-8">
            <img
                src={item.image}
                alt={item.name + " image"}
                className="w-sm max-w-[90%] sm:w-32 sm:h-32"
            />
            <div className="max-w-xs">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="font-medium">{item.category}</p>
                <p>{item.description}</p>
            </div>
            <div className="flex gap-8 flex-wrap sm:flex-nowrap">
                <div>
                    <h3 className="text-xl font-medium">Each</h3>
                    <p>${item.price}</p>
                </div>
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
                <div>
                    <h3 className="text-xl font-medium">Total</h3>
                    <p>${total}</p>
                </div>
            </div>
            <div>
                <button className="cursor-pointer hover:text-red-500" onClick={handleRemoveItem}>
                    <Trash2 size={24} />
                </button>
            </div>
        </div>
    );
}
