import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CookieBanner Component: Displays a banner for cookie consent
export default function CookieBanner() {
    // State to manage the visibility of the cookie banner
    const [isVisible, setIsVisible] = useState(false);

    // Effect to check if the user has already given consent, and hide the banner if consent is stored
    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);  // Show the banner if consent is not stored
        }
    }, []);

    // Function to handle user accepting the cookie consent
    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true"); // Store consent in localStorage
        setIsVisible(false); // Hide the banner after acceptance
    };

    // Function to handle user declining the cookie consent
    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "false"); // Store decline in localStorage
        setIsVisible(false); // Hide the banner after decline
    };

    // If the banner is not visible, render nothing
    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-gray-900 text-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center z-50 animate-fadeIn">
            {/* Banner Message */}
            <p className="text-sm md:text-base text-center md:text-left">
                We use cookies to improve your experience. By accepting, you agree to our{" "}
                <Link to="/privacy-policy" className="underline">
                    Privacy Policy
                </Link>
                .
            </p>

            {/* Button Section for Accept and Decline actions */}
            <div className="flex gap-3 mt-3 md:mt-0">
                {/* Accept Button */}
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={handleAccept}
                >
                    Accept
                </button>

                {/* Decline Button */}
                <button
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                    onClick={handleDecline}
                >
                    Decline
                </button>
            </div>
        </div>
    );
}
