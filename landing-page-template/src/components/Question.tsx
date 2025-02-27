import { useState } from "react";

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        }
                    </span>
                </div>
                {isOpen && <p className="pt-2 text-gray-700">{answer}</p>}
            </button>
        </div>
    );
}
