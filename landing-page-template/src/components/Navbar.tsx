import React from 'react';

const Navbar: React.FC = () => {
    // Handle the smooth scroll when a link is clicked
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string): void => {
        event.preventDefault(); // Prevent the default anchor link behavior
        const targetElement = document.querySelector(target) as HTMLElement; // Type assertion for HTMLElement
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start', // Scroll to the top of the target element
            });
        }
    };

    return (
        <nav className="flex items-center justify-between py-4 px-6 h-16 bg-white shadow">
            <div>
                <h1 className="text-xl font-bold">ProDrone Solutions</h1>
            </div>
            <ul className="flex items-center">
                <li className="ml-6">
                    <a
                        href="#Drones"
                        onClick={(e) => handleLinkClick(e, '#Drones')}
                        className='group transition duration-300 hover:text-blue-600'
                    >
                        Drones
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                    </a>
                </li>
                <li className="ml-6">
                    <a
                        href="#Features"
                        onClick={(e) => handleLinkClick(e, '#Features')}
                        className='group transition duration-300 hover:text-blue-600'
                    >
                        Features
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                    </a>
                </li>
                <li className="ml-6">
                    <a
                        href="#Testimonials"
                        onClick={(e) => handleLinkClick(e, '#Testimonials')}
                        className='group transition duration-300 hover:text-blue-600'
                    >
                        Testimonials
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                    </a>
                </li>
                <li className="ml-6">
                    <a
                        href="#FAQ"
                        onClick={(e) => handleLinkClick(e, '#FAQ')}
                        className='group transition duration-300 hover:text-blue-600'
                    >
                        FAQ
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                    </a>
                </li>
                <li className="ml-6">
                    <a
                        href="#Contact"
                        onClick={(e) => handleLinkClick(e, '#Contact')}
                        className='group transition duration-300 hover:text-blue-600'
                    >
                        Contact
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
