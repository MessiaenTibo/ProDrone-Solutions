import { useState, useRef, useEffect, useState as useVisibilityState } from "react"; // Importing React hooks
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing icons for expanding and collapsing the FAQ item

// Interface defining the props for the Question component, containing the question and answer strings
interface QuestionProps {
    question: string; // The question text
    answer: string; // The answer text
}

export default function Question({ question, answer }: QuestionProps) {
    // State to track whether the question is open (expanded) or closed (collapsed)
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // State to track the visibility of the question (for fade-in effect when it's in view)
    const [isVisible, setIsVisible] = useVisibilityState(false);

    // Reference to the question element to observe its visibility within the viewport
    const questionRef = useRef<HTMLDivElement | null>(null);

    // Using the IntersectionObserver API to detect when the question is in view (80% visible)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger fade-in effect when the question enters the viewport
                }
            },
            { threshold: 0.8 } // Trigger when 80% of the element is visible in the viewport
        );

        // Start observing the questionRef element for visibility
        if (questionRef.current) {
            observer.observe(questionRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (questionRef.current) {
                observer.unobserve(questionRef.current);
            }
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div
            ref={questionRef} // Attach the ref to the root div to observe its visibility
            className={`border-b border-gray-200 transition-opacity duration-500 ease-in ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
            <button
                className="w-full text-left p-4 md:p-6 cursor-pointer" // Button that toggles the open/close state of the answer
                onClick={() => setIsOpen(!isOpen)} // Toggle the state between open and closed on click
            >
                <div className="flex w-full justify-between items-center">
                    <h3 className="font-medium md:text-lg lg:text-xl">{question}</h3> {/* Display the question */}
                    <span>
                        {isOpen ? <ChevronUp /> : <ChevronDown />} {/* Show up/down icon based on the open state */}
                    </span>
                </div>

                <div
                    className={`overflow-hidden transition-all ${isOpen ? "max-h-96 opacity-100 duration-500 ease-in" : "max-h-0 opacity-0 duration-200 ease-out"}`}
                >
                    <p className="pt-2 text-gray-700">{answer}</p> {/* Display the answer, hidden when collapsed */}
                </div>
            </button>
        </div>
    );
}
