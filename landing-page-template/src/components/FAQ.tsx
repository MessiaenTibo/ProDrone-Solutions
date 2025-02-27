import Question from "./Question";

export default function FAQ() {
    const faqs = [
        { question: "What is the flight time of your drones?", answer: "Our drones offer a flight time of 30-45 minutes, depending on the model and weather conditions." },
        { question: "Do your drones come with a warranty?", answer: "Yes, all our drones come with a 12-month manufacturer warranty covering defects and malfunctions." },
        { question: "Are your drones beginner-friendly?", answer: "Yes! We offer drones with beginner-friendly features such as GPS-assisted flight and one-touch takeoff/landing." },
        { question: "Do I need to register my drone?", answer: "Drone registration requirements vary by country. Please check with your local aviation authority for regulations." },
        { question: "Can I use your drones for commercial purposes?", answer: "Absolutely! Our drones are perfect for photography, videography, mapping, and industrial inspections." },
        { question: "What is the maximum range of your drones?", answer: "Depending on the model, our drones have a range of up to 10 kilometers with real-time video transmission." },
        { question: "Do your drones support live streaming?", answer: "Yes, most of our drones support HD live streaming directly to your smartphone or remote controller." },
        { question: "What safety features do your drones have?", answer: "Our drones include obstacle avoidance, return-to-home, and automatic landing to ensure safe operation." },
        { question: "Are extra batteries available for purchase?", answer: "Yes, we offer extra batteries and accessories to extend your flight time and improve your experience." },
        { question: "Do you offer worldwide shipping?", answer: "Yes, we ship globally! Shipping times and costs vary depending on your location." },
    ];

    return (
        <section id="FAQ" className="py-20 bg-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="flex flex-col max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <Question key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
}