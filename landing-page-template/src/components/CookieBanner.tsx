import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "false");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-gray-900 text-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center z-50 animate-fadeIn">
            <p className="text-sm md:text-base text-center md:text-left">
                We use cookies to improve your experience. By accepting, you agree to our <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
            </p>
            <div className="flex gap-3 mt-3 md:mt-0">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={handleAccept}>
                    Accept
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition" onClick={handleDecline}>
                    Decline
                </button>
            </div>
        </div>
    );
}
