export default function CookiePolicy() {
    return (
        <section className="max-w-3xl mx-auto py-10 px-6 text-gray-800">
            {/* Main Heading */}
            <h2 className="text-3xl font-bold mb-6">Cookie Policy</h2>
            <p className="mb-4">This Cookie Policy explains how we use cookies and similar technologies on our website.</p>

            {/* Section: What Are Cookies? */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. What Are Cookies?</h3>
            <p>Cookies are small text files stored on your device when you visit a website. They help improve your experience by remembering preferences and enabling website functionality.</p>

            {/* Section: Types of Cookies We Use */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">2. Types of Cookies We Use</h3>
            <ul className="list-disc pl-6">
                {/* List of cookie types */}
                <li><strong>Essential Cookies:</strong> Required for core functionality, such as security and accessibility.</li>
                <li><strong>Performance Cookies:</strong> Help us analyze website usage to improve performance.</li>
                <li><strong>Functional Cookies:</strong> Remember user preferences to enhance the browsing experience.</li>
                <li><strong>Advertising Cookies:</strong> Used to provide relevant advertisements and track marketing effectiveness.</li>
            </ul>

            {/* Section: Managing Cookies */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Managing Cookies</h3>
            <p>You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect website functionality.</p>

            {/* Section: Third-Party Cookies */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">4. Third-Party Cookies</h3>
            <p>We may use third-party services, such as analytics or advertising providers, that place cookies on your device. These third parties have their own cookie policies.</p>

            {/* Section: Updates to This Policy */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">5. Updates to This Policy</h3>
            <p>We may update our Cookie Policy from time to time. Please check this page periodically for any changes.</p>

            {/* Section: Contact Us */}
            <h3 className="text-2xl font-semibold mt-6 mb-3">6. Contact Us</h3>
            <p>If you have any questions about our Cookie Policy, please contact us at
                <a href="mailto:support@prodronesolutions.com" className="underline text-blue-600">support@example.com</a>.
            </p>
        </section>
    );
}
