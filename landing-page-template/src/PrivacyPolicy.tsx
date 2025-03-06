import { Link } from "react-router";

export default function PrivacyPolicy() {
    return (
        <section className="max-w-3xl mx-auto py-10 px-6 text-gray-800">
            {/* Main Heading */}
            <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
            <p className="mb-4">Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website.</p>

            {/* Section: Information We Collect */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h3>
            <p>We collect information you provide to us directly, such as when you make a purchase or sign up for our newsletter. Additionally, we may collect data automatically through cookies and analytics tools.</p>

            {/* Section: How We Use Your Information */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h3>
            <p>Your information is used to provide and improve our services, process transactions, and communicate with you. We do not sell or share your personal data with third parties for marketing purposes.</p>

            {/* Section: Cookies and Tracking */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Cookies and Tracking</h3>
            <p>We use cookies to enhance your browsing experience. You can manage or disable cookies through your browser settings. For more details, visit our
                <Link to="/cookie-policy" className="underline text-blue-600">Cookie Policy</Link>.
            </p>

            {/* Section: Data Security */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">4. Data Security</h3>
            <p>We implement security measures to protect your personal data, but no method of transmission over the Internet is 100% secure.</p>

            {/* Section: Your Rights */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">5. Your Rights</h3>
            <p>You have the right to access, correct, or delete your personal data. To make a request, please contact us at
                <a href="mailto:support@prodronesolutions.com" className="underline text-blue-600">support@prodronesolutions.com</a>.
            </p>

            {/* Section: Changes to This Policy */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">6. Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Please review this page periodically for any changes.</p>

            {/* Section: Contact Us */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">7. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at
                <a href="mailto:support@prodronesolutions.com" className="underline text-blue-600">support@prodronesolutions.com</a>.
            </p>
        </section>
    );
}
