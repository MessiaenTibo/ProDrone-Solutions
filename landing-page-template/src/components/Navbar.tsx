export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-6 bg-white shadow">
            <div>
                <h1 className="text-xl font-bold">YourBrand</h1>
            </div>
            <ul className="flex items-center">
                <li className="ml-6"><a href="#Features">Features</a></li>
                <li className="ml-6"><a href="#Pricing">Pricing</a></li>
                <li className="ml-6"><a href="#Testimonials">Testimonials</a></li>
                <li className="ml-6"><a href="#FAQ">FAQ</a></li>
                <li className="ml-6"><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
}
