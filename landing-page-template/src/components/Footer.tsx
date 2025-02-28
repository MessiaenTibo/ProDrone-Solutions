import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string): void => {
        event.preventDefault();
        const targetElement = document.querySelector(target) as HTMLElement;
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="py-6 bg-gray-900 text-center text-white">
            <div className="flex justify-center gap-20 flex-wrap">
                {/* Contact Info */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <a href="tel:8886026756" className="flex gap-2 hover:text-blue-600 transition">
                            <Phone className="w-5 h-5" />
                            (888) 602-6756
                        </a>
                        <a href="mailto:sales@prodronesolutions.com" className="flex gap-2 hover:text-blue-600 transition">
                            <Mail className="w-5 h-5" />
                            sales@prodronesolutions.com
                        </a>
                    </div>
                    <div className="text-start">
                        <p className="font-medium">ProDrone Solutions</p>
                        <a
                            target="_blank"
                            href="http://googlemaps.com"
                            className="flex gap-2 items-center hover:text-blue-600 transition"
                        >
                            <MapPin className="w-5 h-5" />
                            <div>
                                <p>1234 Drone Street</p>
                                <p>Drone City, DC 20001</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div>
                    <ul className="flex flex-col gap-2 text-start">
                        {["Drones", "Features", "Testimonials", "FAQ", "Contact"].map((label, index) => (
                            <li key={index} className="w-fit">
                                <a
                                    href={`#${label}`}
                                    onClick={(e) => handleLinkClick(e, `#${label}`)}
                                    className="group transition hover:text-blue-600"
                                >
                                    {label}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <ul className="flex flex-col text-start gap-2">
                        {[
                            { platform: "Facebook", url: "https://www.facebook.com/", icon: <Facebook className="w-5 h-5" /> },
                            { platform: "Twitter", url: "https://x.com/", icon: <Twitter className="w-5 h-5" /> },
                            { platform: "Instagram", url: "https://www.instagram.com/", icon: <Instagram className="w-5 h-5" /> },
                            { platform: "LinkedIn", url: "https://www.linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
                            { platform: "YouTube", url: "https://www.youtube.com/", icon: <Youtube className="w-5 h-5" /> },
                        ].map(({ platform, url, icon }, index) => (
                            <li key={index} className="hover:text-blue-600 transition">
                                <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                    {icon}
                                    {platform}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="border-t border-gray-200 pt-6 mt-6">
                &copy; {new Date().getFullYear()} ProDrone Solutions. All rights reserved.
            </p>
        </footer>
    );
}