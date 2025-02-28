import { useEffect, useState, useRef } from "react";
import { JSX } from "react";

interface FeatureItemProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

export default function FeatureItem({ title, description, icon }: FeatureItemProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.8 } // Trigger animation when 20% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`flex flex-col justify-center items-center gap-2 max-w-2xs text-center 
                transition-all duration-[1500ms] ease-out transform 
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
        >
            <div className="p-4 h-32 w-32 flex justify-center items-center">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
