import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from "../context/CartContext"; // Import useCart

const Navbar: React.FC = () => {
    const location = useLocation();
    const isCartPage = location.pathname === '/cart';
    const { cartCount } = useCart(); // Get cart count from context

    return (
        <nav className="flex items-center justify-between py-4 px-6 h-16 bg-white shadow">
            <div className='flex w-full'>
                <h1 className="text-xl font-bold">
                    <Link to="/">ProDrone Solutions</Link>
                </h1>
            </div>
            <ul className="flex items-center text-xs md:text-base font-medium">
                {!isCartPage && (
                    <>
                        <li className="ml-6 hidden sm:block">
                            <a href="#Drones" className='group transition duration-300 hover:text-blue-600'>
                                Drones
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="ml-6 hidden sm:block">
                            <a href="#Features" className='group transition duration-300 hover:text-blue-600'>
                                Features
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="ml-6 hidden sm:block">
                            <a href="#Testimonials" className='group transition duration-300 hover:text-blue-600'>
                                Testimonials
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                    </>
                )}
                <li className="ml-6 relative">
                    <Link to="/cart" className='group transition duration-300 hover:text-blue-600 relative'>
                        <ShoppingCart />
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
