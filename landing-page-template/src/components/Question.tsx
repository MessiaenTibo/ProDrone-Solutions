import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface QuestionProps {
    question: string;
    answer: string;
}

export default function Question({ question, answer }: QuestionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full text-left p-4 md:p-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex w-full justify-between items-center ">
                    <h3 className="font-medium md:text-lg lg:text-xl">{question}</h3>
                    <span>
                        {isOpen ?
                            <ChevronUp />
                            :
                            <ChevronDown />
                        }
                    </span>
                </div>
                {isOpen && <p className="pt-2 text-gray-700">{answer}</p>}
            </button>
        </div>
    );
}
