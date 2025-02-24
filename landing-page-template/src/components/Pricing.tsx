export default function Pricing() {
    return (
        <section id="Pricing" className="py-20 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-6">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div className="p-6 shadow rounded-lg bg-white">
                    <h3 className="text-xl font-semibold">Basic</h3>
                    <p className="text-gray-600">For small projects.</p>
                    <p className="text-2xl font-bold mt-4">$9</p>
                    <button className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg">Buy Now</button>
                </div>
                <div className="p-6 shadow rounded-lg bg-white">
                    <h3 className="text-xl font-semibold">Standard</h3>
                    <p className="text-gray-600">For medium projects.</p>
                    <p className="text-2xl font-bold mt-4">$19</p>
                    <button className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg">Buy Now</button>
                </div>
                <div className="p-6 shadow rounded-lg bg-white">
                    <h3 className="text-xl font-semibold">Premium</h3>
                    <p className="text-gray-600">For large projects.</p>
                    <p className="text-2xl font-bold mt-4">$29</p>
                    <button className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg">Buy Now</button>
                </div>
            </div>
        </section>
    );
}
