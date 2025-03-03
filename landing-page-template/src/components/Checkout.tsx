import { useState, useEffect, use } from "react";

export default function Checkout({ price }: { price: number }) {
    const [promoCodeInputText, setPromoCodeInputText] = useState<string>(""); // The value of the promo code input field (not yet entered by the user)
    const [promoCode, setPromoCode] = useState<string>(""); // The promo code entered by the user

    const [chippingCost, setChippingCost] = useState<number>(); // Replace with your own chipping cost

    const [flatDiscount, setFlatDiscount] = useState<number>(0); // The discount amount ($)
    const [percentageDiscount, setPercentageDiscount] = useState<number>(0); // The discount amount (%)
    const [discount, setDiscount] = useState<number>(0); // The discount amount ($)

    const [total, setTotal] = useState<number>(price);

    // Calculate the total price each time the price, promoCode, or chippingCost changes
    useEffect(() => {
        /* Replace the following section with your own logic to calculate the chipping cost */
        // Check if the promo code is valid and set the discount
        if (promoCode.toLowerCase() === "welcome10") {
            setPercentageDiscount(10);
        }

        // Calculate the discount (percentage + flat)
        setDiscount((price * percentageDiscount) / 100 + flatDiscount);

        // Calculate the total price
        setTotal(price + (chippingCost || 0) - discount);
    }, [promoCode, price, chippingCost, percentageDiscount, flatDiscount, discount]); // Add all relevant dependencies here

    // Clear promo code input when promoCode changes
    useEffect(() => {
        setPromoCodeInputText("");
    }, [promoCode]);


    const handleCheckout = () => {
        // Reset the local storage and state
        localStorage.removeItem("cartItems");

        /* Replace this with your own checkout logic */
        alert(`Checkout successful! Total amount: $${total}`);

        // Redirect to the home page
        window.location.href = "/";
    };

    return (
        <div className="flex flex-col gap-2 text-gray-700 mb-20">
            <div className="mb-4">
                <label
                    htmlFor="discount"
                    className="block text-sm pb-1 font-medium text-gray-700"
                >Enter promo code:</label>
                <div className="flex">
                    <input
                        id="discount"
                        type="text"
                        value={promoCodeInputText}
                        onChange={(e) => setPromoCodeInputText(e.currentTarget.value)}
                        placeholder="welcome10"
                        onKeyDown={(e) => e.key === "Enter" && setPromoCode(promoCodeInputText)} // Set promoCode when Enter is pressed
                        className="w-40 h-10 px-3 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out"
                    />
                    <button
                        className="h-10 w-30 px-3 py-2 bg-gray-900 border-gray-900 text-white"
                        onClick={() => setPromoCode(promoCodeInputText)} // Set promoCode when Apply is clicked
                    >Apply</button>
                </div>
            </div>
            <div className="flex justify-between">
                <p>Shipping cost</p>
                {/* Display the chippingCost or TBD if they are not set yet */}
                <p>{chippingCost ? ("$" + chippingCost) : "TBD"}</p>
            </div>
            <div>
                <div className="flex justify-between">
                    <p>Discount {flatDiscount != 0 && (`($${flatDiscount})`)} {percentageDiscount != 0 && (`(${percentageDiscount}%)`)}</p>
                    <p>- ${discount}</p>
                </div>
                <p className=" text-xs">Promo code: <b>{promoCode}</b> is applied!</p>
            </div>
            <div className="flex justify-between text-black font-bold">
                <p>Total</p>
                <p>${total}</p>
            </div>
            <button
                className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
                onClick={handleCheckout}
            >Checkout</button>
        </div>
    );
}
