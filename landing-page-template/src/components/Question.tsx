import { useState, useRef, useEffect, useState as useVisibilityState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface QuestionProps {
    question: string;
    answer: string;
}

export default function Question({ question, answer }: QuestionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useVisibilityState(false);
    const questionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger fade-in when the question is in view
                }
            },
            { threshold: 0.8 } // Trigger when 80% of the element is visible
        );

        if (questionRef.current) {
            observer.observe(questionRef.current);
        }

        return () => {
            if (questionRef.current) {
                observer.unobserve(questionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={questionRef}
            className={`border-b border-gray-200 transition-opacity duration-500 ease-in ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <button
                className="w-full text-left p-4 md:p-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex w-full justify-between items-center">
                    <h3 className="font-medium md:text-lg lg:text-xl">{question}</h3>
                    <span>
                        {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </span>
                </div>
                <div
                    className={`overflow-hidden transition-all  ${isOpen
                        ? "max-h-96 opacity-100 duration-500 ease-in-out"
                        : "max-h-0 opacity-0 "
                        }`}
                >
                    <p className="pt-2 text-gray-700">{answer}</p>
                </div>
            </button>
        </div>
    );
}
