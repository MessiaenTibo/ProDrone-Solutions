import { useState, useEffect } from "react";

export default function Checkout({ price }: { price: number }) {
    // State to manage the promo code input and applied promo code
    const [promoCodeInputText, setPromoCodeInputText] = useState<string>(""); // The value of the promo code input field (not yet entered by the user)
    const [promoCode, setPromoCode] = useState<string>(""); // The promo code entered by the user
    const [isValidPromoCode, setIsValidPromoCode] = useState<boolean>(false); // Status to track if a valid promo code is applied
    const [isInvalidPromoCode, setIsInvalidPromoCode] = useState<boolean>(false); // Status to track if an invalid promo code is applied

    // States for shipping cost, discount amounts, and total
    const [chippingCost] = useState<number>(); // Shipping cost, can be adjusted as needed
    const [flatDiscount, setFlatDiscount] = useState<number>(0); // Flat discount amount ($)
    const [percentageDiscount, setPercentageDiscount] = useState<number>(0); // Percentage discount amount (%)
    const [discount, setDiscount] = useState<number>(0); // Final discount amount ($)

    const [total, setTotal] = useState<number>(price); // The final total price after discounts and shipping

    // Effect to calculate the total price whenever promoCode, price, shipping cost, or discounts change
    useEffect(() => {
        // Promo code validation logic
        if (promoCode.toLowerCase() === "welcome10") {
            setPercentageDiscount(10); // Apply 10% discount for the valid promo code
            setIsValidPromoCode(true);
            setIsInvalidPromoCode(false); // Reset invalid promo code status
        } else {
            // Reset promo code-related states if the promo code is invalid
            setIsValidPromoCode(false);
            setPercentageDiscount(0);
            setFlatDiscount(0);
            if (promoCode) {
                setIsInvalidPromoCode(true); // Set invalid promo code status if a code is entered
            }
        }

        // Calculate the total discount based on percentage and flat discounts
        setDiscount((price * percentageDiscount) / 100 + flatDiscount);

        // Calculate the total price after applying discounts and adding shipping cost
        setTotal(price + (chippingCost || 0) - discount);
    }, [promoCode, price, chippingCost, percentageDiscount, flatDiscount, discount]);

    // Clear promo code input field whenever the promo code changes
    useEffect(() => {
        setPromoCodeInputText("");
    }, [promoCode]);

    // Handle promo code input changes and remove error message if typing starts again
    const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPromoCodeInputText(e.currentTarget.value);
        if (isInvalidPromoCode) {
            setIsInvalidPromoCode(false); // Hide error message if user starts typing again
        }
    };

    // Handle the checkout process, resetting local storage and redirecting
    const handleCheckout = () => {
        // Reset the local storage (clear cart items)
        localStorage.removeItem("cartItems");

        // Replace with your own checkout logic, e.g., API call to complete payment
        alert(`Checkout successful! Total amount: $${total}`);

        // Redirect to the home page after checkout
        window.location.href = "/";
    };

    return (
        <div className="flex flex-col gap-2 text-gray-700 mb-20">
            {/* Promo Code Section */}
            <div className="mb-4">
                <label
                    htmlFor="discount"
                    className="block text-sm pb-1 font-medium text-gray-700"
                >
                    Enter promo code:
                </label>
                <div className="flex">
                    <input
                        id="discount"
                        type="text"
                        value={promoCodeInputText}
                        onChange={handlePromoCodeChange}
                        placeholder="welcome10"
                        onKeyDown={(e) => e.key === "Enter" && setPromoCode(promoCodeInputText)} // Set promoCode when Enter is pressed
                        className="w-40 h-10 px-3 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out"
                    />
                    <button
                        className="h-10 w-30 px-3 py-2 bg-gray-900 border-gray-900 text-white cursor-pointer"
                        onClick={() => setPromoCode(promoCodeInputText)} // Set promoCode when Apply is clicked
                    >
                        Apply
                    </button>
                </div>
                {/* Display error message if promo code is invalid */}
                <div className="mt-1 h-1">
                    {isInvalidPromoCode && (
                        <p className="text-xs text-red-600">Invalid promo code! Please try again.</p>
                    )}
                </div>
            </div>

            {/* Shipping Cost Section */}
            <div className="flex justify-between">
                <p>Shipping cost</p>
                <p>{chippingCost ? ("$" + chippingCost) : "TBD"}</p>
            </div>

            {/* Discount Section */}
            <div>
                <div className="flex justify-between">
                    <p>
                        Discount {flatDiscount !== 0 && (`($${flatDiscount})`)} {percentageDiscount !== 0 && (`(${percentageDiscount}%)`)}
                    </p>
                    <p>- ${discount}</p>
                </div>
                {isValidPromoCode && <p className=" text-xs">Promo code: <b>{promoCode}</b> is applied!</p>}
            </div>

            {/* Total Price Section */}
            <div className="flex justify-between text-black font-bold">
                <p>Total</p>
                <p>${total}</p>
            </div>

            {/* Checkout Button */}
            <button
                className="px-6 py-3 mt-4 bg-blue-600 text-white font-medium rounded-lg cursor-pointer border-2 border-transparent focus:border-black focus:outline-0 hover:bg-blue-700 transition-colors duration-100"
                onClick={handleCheckout}
            >
                Checkout
            </button>
        </div>
    );
}
