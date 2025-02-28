import { useState, useRef, useEffect } from "react";

export default function Contact() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    const handlesubmit = (e: any) => {
        // Prevent the default submit action, which is to reload the page
        e.preventDefault();

        /* Replace with your own logic */
        alert("Form Submitted" + "\nFirstName: " + e.target.firstName.value + "\nLastName: " + e.target.lastName.value + "\nEmail: " + e.target.email.value + "\nMessage: " + e.target.message.value);

        // Clear the form
        e.target.reset();
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger fade-in when the form is in view
                }
            },
            { threshold: 0.4 } // Trigger when 40% of the element is visible
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

    return (
        <section id="Contact" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
            <form
                ref={formRef}
                onSubmit={handlesubmit}
                className={`flex flex-col p-6 gap-4 shadow-md mx-auto rounded-md bg-white max-w-md md:max-w-xl lg:max-w-4xl lg:gap-8 lg:p-8 transition-opacity ease-in duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
            >
                <div className="flex flex-col md:flex-row justify-between items-center md:gap-4">
                    <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0">
                        <label htmlFor="firstName" className="mb-2 font-medium">FirstName</label>
                        <input type="text" id="firstName" name="firstName" placeholder="John" className="p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label htmlFor="lastName" className="mb-2 font-medium">LastName</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Doe" className="p-2 border border-gray-300 rounded" required />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email" className="mb-2 font-medium">Email</label>
                    <input type="email" id="email" name="email" placeholder="John.Doe@Gmail.com" className="p-2 border border-gray-300 rounded" required />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="message" className="mb-2 font-medium">Message</label>
                    <textarea name="message" id="message" placeholder="Hey, I got some extra questions about the drones." className="p-2 border border-gray-300 rounded min-h-20 md:min-h-40" required></textarea>
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">Submit</button>
            </form>
        </section>
    );
}
