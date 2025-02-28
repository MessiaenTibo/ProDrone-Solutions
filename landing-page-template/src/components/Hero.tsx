import { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    // Detect when the content enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set the content to visible when it enters the viewport
                }
            },
            { threshold: 0.3 } // Trigger the observer when 30% of the element is in view
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center px-6 overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <iframe
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{ transform: 'translate(-50%, -50%) scale(1)', width: '200%', height: '200%' }}
                        src="https://www.youtube.com/embed/o_Ci_S28Xso?autoplay=1&mute=1&loop=1&playlist=o_Ci_S28Xso&controls=0&showinfo=0&modestbranding=1&start=1&vq=tiny"
                        title="Croatia Bilice - Epic Drone Footage"
                        allow="autoplay; fullscreen"
                        loading="eager"
                        referrerPolicy="no-referrer"
                    ></iframe>
                </div>
            </div>

            {/* Dark Overlay with soft box-shadow effect */}
            <div className="absolute inset-0 bg-black opacity-40 z-0 shadow-lg"></div>

            {/* Content Overlay */}
            <div
                ref={contentRef}
                className={`relative z-20 p-8 rounded-lg transition-transform duration-1000 ease-out ${isVisible ? 'animate-scaleUp' : 'opacity-0'}`}
            >
                {/* Content - Text and Button */}
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-white mb-4">Flying drones creates memories</h1>
                    <p className="text-lg text-white mb-6">We sell and repair drones all over the world to make dreams come true</p>
                    <a
                        href="#Drones"
                        onClick={(e) => handleLinkClick(e, '#Drones')}
                        className="px-6 py-3 text-lg bg-blue-600 text-white rounded-lg"
                    >
                        Drones
                    </a>
                </div>
            </div>
        </section>
    );
};

// Smooth scroll on anchor link click
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