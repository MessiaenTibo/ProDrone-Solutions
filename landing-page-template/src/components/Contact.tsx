export default function Contact() {
    return (
        <section id="Contact" className="py-20 bg-white  text-center">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-600">Send us an email at
                        <a href="mailto:
                    [email protected]"> [email protected]</a>
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-gray-600">Call us at 123-456-7890.</p>
                </div>
            </div>
        </section>
    );
}
