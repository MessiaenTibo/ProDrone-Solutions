import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from "../context/CartContext"; // Import useCart to get the cart count

const Navbar: React.FC = () => {
    // Using location to determine if the user is on the cart page
    const location = useLocation();
    const isHomePage = location.pathname === '/'; // Boolean to check if current page is the cart

    // Extracting the cart count from context
    const { cartCount } = useCart(); // Get the number of items in the cart

    // Function to handle smooth scroll
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault(); // Prevent the default link behavior
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling behavior
                block: 'start', // Align the element to the top of the viewport
            });
        }
    };

    return (
        <nav className="flex items-center justify-between py-4 px-6 h-16 bg-white shadow">
            <div className='flex w-full'>
                {/* Logo and main navigation link */}
                <h1 className="text-xl font-bold">
                    <Link to="/">ProDrone Solutions</Link>
                </h1>
            </div>
            <ul className="flex items-center text-xs md:text-base font-medium">
                {/* Navigation links that should only appear when the user is NOT on the cart page */}
                {isHomePage && (
                    <>
                        {/* Link to Drones section with smooth scroll */}
                        <li className="ml-6 hidden sm:block">
                            <a
                                href="#Drones"
                                onClick={(e) => handleSmoothScroll(e, 'Drones')} // Attach smooth scroll behavior
                                className='group transition duration-300 hover:text-blue-600'
                            >
                                Drones
                                {/* Hover effect underline */}
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        {/* Link to Features section with smooth scroll */}
                        <li className="ml-6 hidden sm:block">
                            <a
                                href="#Features"
                                onClick={(e) => handleSmoothScroll(e, 'Features')} // Attach smooth scroll behavior
                                className='group transition duration-300 hover:text-blue-600'
                            >
                                Features
                                {/* Hover effect underline */}
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        {/* Link to Testimonials section with smooth scroll */}
                        <li className="ml-6 hidden sm:block">
                            <a
                                href="#Testimonials"
                                onClick={(e) => handleSmoothScroll(e, 'Testimonials')} // Attach smooth scroll behavior
                                className='group transition duration-300 hover:text-blue-600'
                            >
                                Testimonials
                                {/* Hover effect underline */}
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        {/* Link to FAQ section with smooth scroll */}
                        <li className="ml-6 hidden sm:block">
                            <a
                                href="#FAQ"
                                onClick={(e) => handleSmoothScroll(e, 'FAQ')} // Attach smooth scroll behavior
                                className='group transition duration-300 hover:text-blue-600'
                            >
                                FAQ
                                {/* Hover effect underline */}
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        {/* Link to Contact section with smooth scroll */}
                        <li className="ml-6 hidden sm:block">
                            <a
                                href="#Contact"
                                onClick={(e) => handleSmoothScroll(e, 'Contact')} // Attach smooth scroll behavior
                                className='group transition duration-300 hover:text-blue-600'
                            >
                                Contact
                                {/* Hover effect underline */}
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                    </>
                )}
                {/* Cart icon with item count badge */}
                <li className="ml-6 relative">
                    <Link to="/cart" className='group transition duration-300 hover:text-blue-600 relative'>
                        <ShoppingCart />
                        {/* Display cart count if there are items in the cart */}
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
