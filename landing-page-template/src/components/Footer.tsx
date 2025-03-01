import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react"; // Importing icons from lucide-react

export default function Footer() {
    // Handle anchor link click to smoothly scroll to a section on the page
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string): void => {
        event.preventDefault(); // Prevent the default anchor click behavior (jumping to the section)

        // Get the target section element using the selector passed
        const targetElement = document.querySelector(target) as HTMLElement;

        // If the target element exists, scroll it into view smoothly
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="p-6 bg-gray-900 text-center text-white"> {/* Footer container with padding, dark background, and centered text */}
            <div className="flex justify-between gap-20 max-w-4xl mx-auto flex-wrap"> {/* Flex container for footer items with wrap behavior on smaller screens */}

                {/* Contact Information Section */}
                <div className="flex flex-col gap-4">
                    {/* Phone and Email */}
                    <div className="flex flex-col gap-2">
                        {/* Phone link with an icon */}
                        <a href="tel:8886026756" className="flex gap-2 hover:text-blue-600 transition">
                            <Phone className="w-5 h-5" /> {/* Phone icon */}
                            (888) 602-6756 {/* Phone number */}
                        </a>

                        {/* Email link with an icon */}
                        <a href="mailto:sales@prodronesolutions.com" className="flex gap-2 hover:text-blue-600 transition">
                            <Mail className="w-5 h-5" /> {/* Mail icon */}
                            sales@prodronesolutions.com {/* Email address */}
                        </a>
                    </div>

                    {/* Address */}
                    <div className="text-start">
                        <p className="font-medium">ProDrone Solutions</p> {/* Company name */}
                        <a
                            target="_blank"
                            href="http://googlemaps.com"
                            className="flex gap-2 items-center hover:text-blue-600 transition"
                        >
                            <MapPin className="w-5 h-5" /> {/* Map pin icon */}
                            <div>
                                <p>1234 Drone Street</p> {/* Address line 1 */}
                                <p>Drone City, DC 20001</p> {/* Address line 2 */}
                            </div>
                        </a>
                    </div>
                </div>

                {/* Navigation Links Section */}
                <div>
                    <ul className="flex flex-col gap-2 text-start">
                        {/* Mapping over the list of navigation links */}
                        {["Drones", "Features", "Testimonials", "FAQ", "Contact"].map((label, index) => (
                            <li key={index} className="w-fit">
                                <a
                                    href={`#${label}`} // Linking to the section using its id
                                    onClick={(e) => handleLinkClick(e, `#${label}`)} // Calling the handleLinkClick for smooth scrolling
                                    className="group transition hover:text-blue-600"
                                >
                                    {label} {/* The label for the link */}
                                    {/* Underline animation on hover */}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media Links Section */}
                <div>
                    <ul className="flex flex-col text-start gap-2">
                        {/* Mapping over social media links and icons */}
                        {[
                            { platform: "Facebook", url: "https://www.facebook.com/", icon: <Facebook className="w-5 h-5" /> },
                            { platform: "Twitter", url: "https://x.com/", icon: <Twitter className="w-5 h-5" /> },
                            { platform: "Instagram", url: "https://www.instagram.com/", icon: <Instagram className="w-5 h-5" /> },
                            { platform: "LinkedIn", url: "https://www.linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
                            { platform: "YouTube", url: "https://www.youtube.com/", icon: <Youtube className="w-5 h-5" /> }
                        ].map(({ platform, url, icon }, index) => (
                            <li key={index} className="hover:text-blue-600 transition">
                                <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                    {icon} {/* Social media icon */}
                                    {platform} {/* Social media platform name */}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer copyright section */}
            <p className="border-t border-gray-200 pt-6 mt-6 -mx-6">
                &copy; {new Date().getFullYear()} ProDrone Solutions. All rights reserved. {/* Display current year and company copyright */}
            </p>
        </footer>
    );
}
