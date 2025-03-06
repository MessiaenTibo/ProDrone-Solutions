import { useEffect, useState } from 'react';
import CartItem from './components/CartItem';
import Checkout from './components/Checkout';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';

// Interface defining the structure of a cart item
interface CartItemProps {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    count: number;
}

export default function Cart() {
    // State to store cart items and the total price
    const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
    const [total, setTotal] = useState<number>(0);

    // Accessing updateItemCount function from CartContext
    const { updateItemCount } = useCart();

    // useEffect hook to load cart items from localStorage and calculate total
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setCartItems(cart); // Update cart items state
        calculateTotal(cart); // Calculate and set the total price
    }, []);

    // Function to calculate the total price of items in the cart
    const calculateTotal = (cart: CartItemProps[]) => {
        const cartTotal = cart.reduce((sum, item) => sum + item.price * item.count, 0);
        setTotal(cartTotal); // Update the total state with the calculated value
    };

    // Function to handle updates to the item count in the cart
    const handleUpdateItemCount = (updatedItem: CartItemProps) => {
        // Update the item count in the CartContext
        updateItemCount(updatedItem.name, updatedItem.count);

        // Update the cartItems state with the updated item
        setCartItems((prevCart) =>
            prevCart.map((item) => (item.name === updatedItem.name ? updatedItem : item))
        );

        // Recalculate the total price after updating the item count
        calculateTotal([...cartItems]);
    };

    return (
        <div className="p-2 sm:p-4 md:p-8">
            {/* Main header for the cart page */}
            <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>
            <div className="flex flex-wrap justify-center items-center gap-x-40 gap-y-8">
                <div>
                    <div className="p-4 border-y border-gray-400">
                        {/* Conditional rendering for cart items */}
                        {cartItems.length ? (
                            <div className="flex flex-col gap-8 justify-start items-start">
                                {/* Rendering each cart item */}
                                {cartItems.map((item, index) => (
                                    <CartItem
                                        key={index}
                                        {...item} // Pass down all item props
                                        updateItemCount={handleUpdateItemCount} // Pass the update handler
                                    />
                                ))}
                            </div>
                        ) : (
                            // Message displayed when cart is empty
                            <div className="text-center py-20 max-w-[80vw] w-3xl">
                                <p className="text-lg font-bold">Your cart is empty</p>
                                {/* Link to go shopping */}
                                <Link to="/#Drones" className="text-blue-600">Go shopping</Link>
                            </div>
                        )}
                    </div>
                    {/* Displaying the total price */}
                    <p className="text-xl text-end p-2"><b>${total}</b></p>
                </div>
                {/* Checkout component, passing the total price as a prop */}
                <Checkout price={total} />
            </div>
        </div>
    );
}
