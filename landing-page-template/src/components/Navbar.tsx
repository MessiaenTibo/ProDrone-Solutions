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
                        href="#Features"
                        onClick={(e) => handleLinkClick(e, '#Features')}
                    >
                        Features
                    </a>
                </li>
                <li className="ml-6">
                    <a
                        href="#Drones"
                        onClick={(e) => handleLinkClick(e, '#Drones')}
                    >
                        Drones
                    </a>
                </li>
                <li className="ml-6">
                    <a
                        href="#Testimonials"
                        onClick={(e) => handleLinkClick(e, '#Testimonials')}
                    >
                        Testimonials
                    </a>
                </li>
                <li className="ml-6">
                    <a
                        href="#FAQ"
                        onClick={(e) => handleLinkClick(e, '#FAQ')}
                    >
                        FAQ
                    </a>
                </li>
                <li className="ml-6">
                    <a
                        href="#Contact"
                        onClick={(e) => handleLinkClick(e, '#Contact')}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
