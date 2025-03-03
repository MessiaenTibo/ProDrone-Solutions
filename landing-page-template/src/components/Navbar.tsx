import React from 'react'; // Importing React
import { Link, useLocation } from 'react-router-dom'; // Importing Link for navigation and useLocation to check current route
import { ShoppingCart } from 'lucide-react'; // Importing shopping cart icon

const Navbar: React.FC = () => {
    const location = useLocation(); // Get current route location
    const isCartPage = location.pathname === '/cart'; // Check if user is on the cart page

    // Handle smooth scrolling when a link is clicked
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string): void => {
        event.preventDefault(); // Prevent default anchor link behavior
        const targetElement = document.querySelector(target) as HTMLElement; // Select target section element
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to target
        }
    };

    return (
        // Navbar container with flexbox for layout, padding, height, background color, and shadow
        <nav className="flex items-center justify-between py-4 px-6 h-16 bg-white shadow">
            {/* Logo or Brand Name */}
            <div>
                <h1 className="text-xl font-bold">
                    <Link to="/">ProDrone Solutions</Link> {/* Displaying company name as a link */}
                </h1>
            </div>
            {/* Navigation Links */}
            <ul className="flex items-center">
                {!isCartPage ? (
                    // Display these links when NOT on the cart page
                    <>
                        <li className="ml-6">
                            <a href="#Drones" onClick={(e) => handleLinkClick(e, '#Drones')} className='group transition duration-300 hover:text-blue-600'>
                                Drones
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="ml-6">
                            <a href="#Features" onClick={(e) => handleLinkClick(e, '#Features')} className='group transition duration-300 hover:text-blue-600'>
                                Features
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="ml-6">
                            <a href="#Testimonials" onClick={(e) => handleLinkClick(e, '#Testimonials')} className='group transition duration-300 hover:text-blue-600'>
                                Testimonials
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="ml-6">
                            <a href="#FAQ" onClick={(e) => handleLinkClick(e, '#FAQ')} className='group transition duration-300 hover:text-blue-600'>
                                FAQ
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="ml-6">
                            <a href="#Contact" onClick={(e) => handleLinkClick(e, '#Contact')} className='group transition duration-300 hover:text-blue-600'>
                                Contact
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                    </>
                ) : (
                    // Display home link instead when on the cart page
                    <li className="ml-6">
                        <Link to="/" className='group transition duration-300 hover:text-blue-600'>
                            Home
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                        </Link>
                    </li>
                )}
                {/* Shopping Cart Icon - Always Visible */}
                <li className="ml-6">
                    <Link to="/cart" className='group transition duration-300 hover:text-blue-600'>
                        <ShoppingCart />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar; // Exporting Navbar component for use in other parts of the application
