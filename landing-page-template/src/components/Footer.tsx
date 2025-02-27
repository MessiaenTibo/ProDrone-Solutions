export default function Footer() {
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
        <footer className="py-6 bg-gray-900 text-center text-white">
            <div className="flex justify-center gap-20 flex-wrap">
                <div className="flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        <a
                            href="tel:8886026756"
                            className="flex gap-2  transition duration-300 hover:text-blue-600"
                        >
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                            <div>(888) 602-6756</div>
                        </a>
                        <a
                            href="mailto:sales@prodronesolutions.com"
                            className="flex gap-2  transition duration-300 hover:text-blue-600"
                        >
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></div>
                            <div>sales@prodronesolutions.com</div>
                        </a>
                    </div>
                    <div className="text-start">
                        <p className=" font-medium">ProDrone Solutions</p>
                        <a
                            target="_blank"
                            href="http://googlemaps.com"
                            className="no-underline hover:underline transition duration-150 hover:text-blue-600"
                        >
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                <div>
                                    <p>1234 Drone Street</p>
                                    <p>Drone City, DC 20001</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div>
                    <ul className="flex flex-col gap-2 text-start">
                        <li className="w-fit">
                            <a
                                href="#Drones"
                                onClick={(e) => handleLinkClick(e, '#Drones')}
                                className='group transition duration-300 hover:text-blue-600'
                            >
                                Drones
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="w-fit">
                            <a
                                href="#Features"
                                onClick={(e) => handleLinkClick(e, '#Features')}
                                className='group transition duration-300 hover:text-blue-600'
                            >
                                Features
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="w-fit">
                            <a
                                href="#Testimonials"
                                onClick={(e) => handleLinkClick(e, '#Testimonials')}
                                className='group transition duration-300 hover:text-blue-600'
                            >
                                Testimonials
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="w-fit">
                            <a
                                href="#FAQ"
                                onClick={(e) => handleLinkClick(e, '#FAQ')}
                                className='group transition duration-300 hover:text-blue-600'
                            >
                                FAQ
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
                            </a>
                        </li>
                        <li className="w-fit">
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
                </div>
                <div>
                    <ul className="flex flex-col text-start gap-2">
                        <li className=" transition duration-150 hover:text-blue-600">
                            <a
                                target="_blank"
                                href="https://www.facebook.com/"
                                className="flex items-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                Facebook
                            </a>
                        </li>
                        <li className=" transition duration-150 hover:text-blue-600">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com"
                                className="flex items-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                LinkedIn
                            </a>
                        </li>
                        <li className=" transition duration-150 hover:text-blue-600">
                            <a
                                target="_blank"
                                href="https://x.com/"
                                className="flex items-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                Twitter
                            </a>
                        </li>
                        <li className=" transition duration-150 hover:text-blue-600">
                            <a
                                target="_blank"
                                href="https://www.instagram.com/"
                                className="flex items-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                Instagram
                            </a>
                        </li>
                        <li className=" transition duration-150 hover:text-blue-600">
                            <a
                                target="_blank"
                                href="https://www.youtube.com/"
                                className="flex items-center gap-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                                Youtube
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="border-t border-gray-200 pt-6 mt-6">&copy; {new Date().getFullYear()} ProDrone Solutions. All rights reserved.</p>
        </footer>
    );
}
