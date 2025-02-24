export default function Testimonials() {
    return (
        <section id="Testimonials" className="py-20 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                <div className="p-6 shadow rounded-lg bg-gray-50">
                    <p className="text-gray-600 italic">"This template saved me so much time! Highly recommended."</p>
                    <h4 className="text-lg font-semibold mt-4">- Alex Doe</h4>
                </div>
                <div className="p-6 shadow rounded-lg bg-gray-50">
                    <p className="text-gray-600 italic">"The design is stunning and very easy to customize."</p>
                    <h4 className="text-lg font-semibold mt-4">- Jane Smith</h4>
                </div>
            </div>
        </section>
    );
}
