import { useState, useRef, useEffect } from "react"; // Importing React hooks for state, refs, and side effects

export default function Contact() {
    // State to track whether the form has entered the viewport (for fade-in effect)
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Reference to the form element to observe its visibility within the viewport
    const formRef = useRef<HTMLFormElement | null>(null);

    // Handler for the form submission
    const handlesubmit = (e: any) => {
        e.preventDefault(); // Prevent the default form submit action which would reload the page

        /* Placeholder logic: Replace with real submission logic (e.g., sending data to a server) */
        alert(
            "Form Submitted" +
            "\nFirstName: " + e.target.firstName.value +
            "\nLastName: " + e.target.lastName.value +
            "\nEmail: " + e.target.email.value +
            "\nMessage: " + e.target.message.value
        );

        // Clear the form fields after submission
        e.target.reset();
    };

    // Using the IntersectionObserver API to detect when the form enters the viewport
    useEffect(() => {
        // Initialize the IntersectionObserver to observe the visibility of the form
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger fade-in effect when the form is visible in the viewport
                }
            },
            { threshold: 0.4 } // Trigger when 40% of the form element is visible in the viewport
        );

        // Start observing the form element for visibility
        if (formRef.current) {
            observer.observe(formRef.current);
        }

        // Cleanup the observer when the component is unmounted or formRef changes
        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <section id="Contact" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>

            <form
                ref={formRef} // Attach the ref to the form to observe its visibility
                onSubmit={handlesubmit} // Handle form submission
                className={`flex flex-col p-6 gap-4 shadow-md mx-auto rounded-md bg-white max-w-md md:max-w-xl lg:max-w-4xl lg:gap-8 lg:p-8 transition-opacity ease-in duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
                {/* First Name & Last Name Input */}
                <div className="flex flex-col md:flex-row justify-between items-center md:gap-4">
                    {/* First Name Input */}
                    <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0">
                        <label htmlFor="firstName" className="mb-2 font-medium">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            className="p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    {/* Last Name Input */}
                    <div className="flex flex-col w-full md:w-1/2">
                        <label htmlFor="lastName" className="mb-2 font-medium">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            className="p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div className="flex flex-col w-full">
                    <label htmlFor="email" className="mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="John.Doe@Gmail.com"
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                {/* Message Input */}
                <div className="flex flex-col w-full">
                    <label htmlFor="message" className="mb-2 font-medium">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Hey, I got some extra questions about the drones."
                        className="p-2 border border-gray-300 rounded min-h-20 md:min-h-40"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">Submit</button>
            </form>
        </section>
    );
}
