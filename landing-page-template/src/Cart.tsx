import { useEffect, useState } from 'react';
import CartItem from './components/CartItem';
import Checkout from './components/Checkout';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';

interface CartItemProps {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    count: number;
}

export default function Cart() {
    const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
    const [total, setTotal] = useState<number>(0);

    const { updateItemCount } = useCart();

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setCartItems(cart);
        calculateTotal(cart);
    }, []);

    const calculateTotal = (cart: CartItemProps[]) => {
        const cartTotal = cart.reduce((sum, item) => sum + item.price * item.count, 0);
        setTotal(cartTotal);
    };

    // Update the item count in the cart
    const handleUpdateItemCount = (updatedItem: CartItemProps) => {
        updateItemCount(updatedItem.name, updatedItem.count);
        setCartItems((prevCart) =>
            prevCart.map((item) => (item.name === updatedItem.name ? updatedItem : item))
        );
        calculateTotal([...cartItems]);
    };

    return (
        <div className="p-2 sm:p-4 md:p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>
            <div className="flex flex-wrap justify-center items-center gap-x-40 gap-y-8">
                <div>
                    <div className="p-4 border-y border-gray-400">
                        {cartItems.length ? (
                            <div className="flex flex-col gap-8 justify-start items-start">
                                {cartItems.map((item, index) => (
                                    <CartItem
                                        key={index}
                                        {...item}
                                        updateItemCount={handleUpdateItemCount}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 max-w-[80vw] w-3xl">
                                <p className="text-lg font-bold">Your cart is empty</p>
                                <Link to="/#Drones" className="text-blue-600">Go shopping</Link>
                            </div>
                        )}
                    </div>
                    <p className="text-xl text-end p-2"><b>${total}</b></p>
                </div>
                <Checkout price={total} />
            </div>
        </div>
    );
}
