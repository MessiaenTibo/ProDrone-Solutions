export default function Drones() {
    return (
        <section id="Drones" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-center">Drones</h2>
            <div className="grid w-fit m-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
                <div className=" shadow rounded-lg bg-white max-w-sm mx-auto overflow-hidden">
                    <img src="/src/assets/images/ShadowViper.webp" alt="Picture of the ShadowViper drone" />
                    <div className="p-2 md:p-4">
                        <p className="text-gray-600 pb-2">Beginner</p>
                        <h3 className="text-xl font-semibold">ShadowViper</h3>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-2xl font-bold">$699</p>
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className=" shadow rounded-lg bg-white max-w-sm mx-auto overflow-hidden">
                    <img src="/src/assets/images/NightOwl.webp" alt="Picture of the NightOwl drone" />
                    <div className="p-2 md:p-4">
                        <p className="text-gray-600 pb-2">Advanced</p>
                        <h3 className="text-xl font-semibold">NightOwl</h3>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-2xl font-bold">$1299</p>
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className=" shadow rounded-lg bg-white max-w-sm mx-auto overflow-hidden">
                    <img src="/src/assets/images/NanoFalcon.webp" alt="Picture of the NanoFalcon drone" />
                    <div className="p-2 md:p-4">
                        <p className="text-gray-600 pb-2">Beginner</p>
                        <h3 className="text-xl font-semibold">NanoFalcon</h3>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-2xl font-bold">$499</p>
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
