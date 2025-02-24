import { useEffect, useState } from 'react';

const Hero: React.FC = () => {
    const [scale, setScale] = useState(1);

    // Update the video scale based on the window size
    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            const height = window.innerHeight - 64; // Adjust for navbar height
            const aspectRatio = 16 / 9;
            const scaleValue = Math.max(width / (height * aspectRatio), height / (width / aspectRatio));
            setScale(scaleValue);
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    // Handle smooth scroll on anchor link click
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
        <section className="relative flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center px-6 overflow-hidden">
            {/* Video Background */}
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
                        onLoad={() => console.log('Video loaded')}
                    ></iframe>
                </div>
            </div>

            {/* Dark Overlay with soft box-shadow effect */}
            <div className="absolute inset-0 bg-black opacity-40 z-0 shadow-lg"></div>

            {/* Content Overlay */}
            <div className="relative z-20 p-8 rounded-lg">
                {/* Content - Text and Button */}
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-white mb-4">Flying drones creates memories</h1>
                    <p className="text-lg text-white mb-6">We sell and repair drones all over the world to make dreams come true</p>
                    <a
                        href="#Pricing"
                        onClick={(e) => handleLinkClick(e, '#Pricing')}
                        className="px-6 py-3 text-lg bg-blue-600 text-white rounded-lg"
                    >
                        Drones
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;