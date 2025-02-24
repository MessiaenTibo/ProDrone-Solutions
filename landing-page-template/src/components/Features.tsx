export default function Features() {
    return (
        <section id="Features" className="py-20 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div className="p-6 shadow rounded-lg bg-gray-50">
                    <h3 className="text-xl font-semibold">Modern Design</h3>
                    <p className="text-gray-600">Crafted with the latest UI/UX trends.</p>
                </div>
                <div className="p-6 shadow rounded-lg bg-gray-50">
                    <h3 className="text-xl font-semibold">Fully Responsive</h3>
                    <p className="text-gray-600">Looks great on any device.</p>
                </div>
                <div className="p-6 shadow rounded-lg bg-gray-50">
                    <h3 className="text-xl font-semibold">Easy Customization</h3>
                    <p className="text-gray-600">Modify with just a few clicks.</p>
                </div>
            </div>
        </section>
    );
}
