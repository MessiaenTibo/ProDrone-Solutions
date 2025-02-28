import { useEffect, useRef, useState } from "react";

interface ReviewCardProps {
    name: string;
    image: string;
    rating: string;
    title: string;
    text: string;
    rowSpan: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, image, rating, title, text, rowSpan }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [titleVisible, setTitleVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Trigger title and text animations with a slight delay
                    setTimeout(() => setTitleVisible(true), 100);  // Delay for title
                    setTimeout(() => setTextVisible(true), 300);   // Delay for text
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the card is visible
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`p-6 shadow-lg rounded-sm max-w-sm bg-white mx-auto`}
            style={{ gridRow: `span ${rowSpan} / span ${rowSpan}` }}
        >
            <img src={image} alt={name} className={`w-16 h-16 mx-auto rounded-full mb-3 opacity-0 transition-opacity duration-700 delay-50 ease-in ${titleVisible ? "opacity-100" : ""}`} />
            <h4
                className={`text-lg font-semibold text-blue-600 text-center opacity-0 transition-opacity duration-700 delay-50 ease-in ${titleVisible ? "opacity-100" : ""}`}
            >
                {name}
            </h4>
            <div className={`flex justify-center text-2xl lg:text-3xl text-yellow-300 border-b border-gray-100 mb-2 pb-2 lg:mb-3 lg:pb-3 opacity-0 transition-opacity duration-700 ease-in ${titleVisible ? "opacity-100" : ""}`}
            >
                {rating}
            </div>
            <p
                className={`font-semibold md:text-lg lg:text-xl opacity-0 transition-opacity duration-700 ease-in ${titleVisible ? "opacity-100" : ""}`}
            >
                {title}
            </p>
            <p
                className={`text-gray-600 text-sm mt-2 lg:text-lg opacity-0 transition-opacity duration-700 ease-in ${textVisible ? "opacity-100" : ""}`}
            >
                {text}
            </p>
        </div>
    );
};

export default ReviewCard;
