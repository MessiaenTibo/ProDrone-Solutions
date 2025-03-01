import { useEffect, useRef, useState } from "react";

// Interface defining the properties for the ReviewCard component
interface ReviewCardProps {
    name: string;       // Name of the reviewer
    image: string;      // Path to the reviewer's image
    rating: string;     // Rating in stars (e.g., "★★★★★")
    title: string;      // Title of the review
    text: string;       // Full review text
    rowSpan: number;    // The number of rows the review spans in the grid layout (used for responsive design)
}

// ReviewCard component that displays an individual review with animations
const ReviewCard: React.FC<ReviewCardProps> = ({ name, image, rating, title, text, rowSpan }) => {
    // Reference to the card element for intersection observation (detect visibility)
    const cardRef = useRef<HTMLDivElement | null>(null);

    // State variables to track visibility for title and text animations
    const [titleVisible, setTitleVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        // Intersection observer to detect when the review card enters the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Trigger title and text animations with a slight delay
                    setTimeout(() => setTitleVisible(true), 100);  // Delay for title animation
                    setTimeout(() => setTextVisible(true), 300);   // Delay for text animation
                }
            },
            { threshold: 0.2 } // Trigger the animation when 20% of the card is visible
        );

        // Start observing the card element
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        // Cleanup the observer when the component unmounts or changes
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    return (
        <div
            ref={cardRef} // Attach the reference to the card element
            className={`p-6 shadow-lg rounded-sm max-w-sm bg-white mx-auto`}
            style={{ gridRow: `span ${rowSpan} / span ${rowSpan}` }} // Dynamically set grid row span based on the rowSpan prop
        >
            {/* Reviewer's Image */}
            <img
                src={image} // Path to the reviewer's image
                alt={name}   // Alt text for accessibility
                className={`w-16 h-16 mx-auto rounded-full mb-3 opacity-0 transition-opacity duration-700 delay-50 ease-in ${titleVisible ? "opacity-100" : ""}`}
            // Initially set image opacity to 0, then transition to 100% when the title is visible
            />

            {/* Reviewer's Name */}
            <h4
                className={`text-lg font-semibold text-blue-600 text-center opacity-0 transition-opacity duration-700 delay-50 ease-in ${titleVisible ? "opacity-100" : ""}`}
            // Initially set name opacity to 0, then transition to 100% when the title is visible
            >
                {name}
            </h4>

            {/* Review Rating */}
            <div
                className={`flex justify-center text-2xl lg:text-3xl text-yellow-300 border-b border-gray-100 mb-2 pb-2 lg:mb-3 lg:pb-3 opacity-0 transition-opacity duration-700 ease-in ${titleVisible ? "opacity-100" : ""}`}
            // Initially set rating opacity to 0, then transition to 100% when the title is visible
            >
                {rating}
            </div>

            {/* Review Title */}
            <p
                className={`font-semibold md:text-lg lg:text-xl opacity-0 transition-opacity duration-700 ease-in ${titleVisible ? "opacity-100" : ""}`}
            // Initially set title opacity to 0, then transition to 100% when the title is visible
            >
                {title}
            </p>

            {/* Full Review Text */}
            <p
                className={`text-gray-600 text-sm mt-2 lg:text-lg opacity-0 transition-opacity duration-700 ease-in ${textVisible ? "opacity-100" : ""}`}
            // Initially set text opacity to 0, then transition to 100% when the text is visible
            >
                {text}
            </p>
        </div>
    );
};

export default ReviewCard;
