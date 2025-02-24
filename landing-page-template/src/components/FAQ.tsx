export default function FAQ() {
    return (
        <section id="FAQ" className="py-20 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-6">FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                <div>
                    <h3 className="text-xl font-semibold">How can I contact you?</h3>
                    <p className="text-gray-600">You can reach us at
                        <a href="mailto:
                    [email protected]"> [email protected]</a>
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Do you offer refunds?</h3>
                    <p className="text-gray-600">Yes, we have a 30-day money-back guarantee.</p>
                </div>
            </div>
        </section>
    );
}
