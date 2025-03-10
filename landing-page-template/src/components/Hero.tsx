import { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
    // State to track if the content is visible (for animation effect)
    const [scale, setScale] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Update the video scale based on the window size
        const updateScale = () => {
            const width = window.innerWidth;
            const height = window.innerHeight - 64; // Adjust for navbar height
            const aspectRatio = 16 / 9;
            const scaleValue = Math.max(width / (height * aspectRatio), height / (width / aspectRatio));
            setScale(scaleValue);
        };

        // Add event listener for window resize to update the scale
        window.addEventListener('resize', updateScale);

        // Initial update of the scale
        updateScale();

        // Detect when the content enters the viewport and trigger animation
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set the content to visible when it enters the viewport
                }
            },
            { threshold: 0.3 } // Start animation when 30% of the element is visible
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            // Cleanup the event listeners and observer
            window.removeEventListener('resize', updateScale);
            if (contentRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center px-6 overflow-hidden">
            {/* Video Background - You should replace the YouTube video link with your own brand video */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <iframe
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{ transform: `translate(-50%, -50%) scale(${scale})`, width: '200%', height: '200%' }}
                        src="https://www.youtube.com/embed/o_Ci_S28Xso?autoplay=1&mute=1&loop=1&playlist=o_Ci_S28Xso&controls=0&showinfo=0&modestbranding=1&start=1&vq=tiny"
                        title="Croatia Bilice - Epic Drone Footage"
                        allow="autoplay; fullscreen"
                        loading="eager"
                        referrerPolicy="no-referrer"
                        tabIndex={-1}
                    ></iframe>
                </div>
            </div>

            {/* Dark Overlay to improve text visibility - You can adjust opacity or remove it if needed */}
            <div className="absolute inset-0 bg-black opacity-40 z-0 shadow-lg"></div>

            {/* Content Overlay (Text & Button) */}
            <div
                ref={contentRef}
                className={`relative z-20 p-8 rounded-lg transition-transform duration-1000 ease-out ${isVisible ? 'animate-scaleUp' : 'opacity-0'}`}
            >
                {/* Main Heading - You should customize this with your own brand message */}
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-white mb-4">Flying drones creates memories</h1>
                    {/* Subheading - Can be modified to describe your business offering */}
                    <p className="text-lg text-white mb-6">We sell and repair drones all over the world to make dreams come true</p>
                    {/* Call-to-Action Button - You should update the link and text based on your needs */}
                    <a
                        href="#Drones"
                        onClick={(e) => handleLinkClick(e, '#Drones')}
                        className="px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg border-2 border-transparent focus:border-black focus:outline-0 hover:bg-blue-700"
                    >
                        Drones
                    </a>
                </div>
            </div>
        </section>
    );
};

// Smooth scroll function for anchor link clicks
// You can add more target elements as needed
const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string): void => {
    event.preventDefault();
    const targetElement = document.querySelector(target) as HTMLElement;
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

export default Hero;

