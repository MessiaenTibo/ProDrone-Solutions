import React from 'react'; // Importing React

const Navbar: React.FC = () => {
    // Handle the smooth scroll when a link is clicked
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string): void => {
        event.preventDefault(); // Prevent the default anchor link behavior (which is to jump directly to the section)

        // Select the target section element using the target string (e.g., '#Drones') as a selector
        const targetElement = document.querySelector(target) as HTMLElement; // Type assertion for HTMLElement

        // If the target element exists, perform smooth scrolling
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling effect
                block: 'start', // Align the target element to the top of the viewport
            });
        }
    };

    return (
        // Navbar container with flexbox for layout, padding, height, background color, and shadow
        <nav className="flex items-center justify-between py-4 px-6 h-16 bg-white shadow">
            {/* Logo or Brand Name */}
            <div>
                <h1 className="text-xl font-bold">ProDrone Solutions</h1> {/* Displaying the company name with bold and large text */}
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center">
                {/* Each list item represents a navigation link */}
                {/* Using 'ml-6' (margin-left) to space out the links evenly */}

                <li className="ml-6">
                    <a
                        href="#Drones" // Link to the 'Drones' section of the page
                        onClick={(e) => handleLinkClick(e, '#Drones')} // Prevent default and call smooth scroll function
                        className='group transition duration-300 hover:text-blue-600' // Tailwind CSS classes for transition and hover effects
                    >
                        Drones
                        {/* Underline effect on hover */}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                    </a>
                </li>

                <li className="ml-6">
                    <a
                        href="#Features" // Link to the 'Features' section of the page
                        onClick={(e) => handleLinkClick(e, '#Features')} // Prevent default and call smooth scroll function
                        className='group transition duration-300 hover:text-blue-600'
                    >
                        Features
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                    </a>
                </li>

                <li className="ml-6">
                    <a
                        href="#Testimonials" // Link to the 'Testimonials' section of the page
                        onClick={(e) => handleLinkClick(e, '#Testimonials')} // Prevent default and call smooth scroll function
                        className='group transition duration-300 hover:text-blue-600'
                    >
                        Testimonials
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                    </a>
                </li>

                <li className="ml-6">
                    <a
                        href="#FAQ" // Link to the 'FAQ' section of the page
                        onClick={(e) => handleLinkClick(e, '#FAQ')} // Prevent default and call smooth scroll function
                        className='group transition duration-300 hover:text-blue-600'
                    >
                        FAQ
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                    </a>
                </li>

                <li className="ml-6">
                    <a
                        href="#Contact" // Link to the 'Contact' section of the page
                        onClick={(e) => handleLinkClick(e, '#Contact')} // Prevent default and call smooth scroll function
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

export default Navbar; // Exporting the Navbar component for use in other parts of the application
