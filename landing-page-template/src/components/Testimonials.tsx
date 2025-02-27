import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

interface Review {
    name: string;
    image: string;
    rating: string;
    title: string;
    text: string;
    rowSpan: number;
}

const reviews: Review[] = [
    {
        name: "Liam H.",
        image: "/src/assets/images/Liam.jpg",
        rating: "★★★★★",
        title: "ShadowViper is the best mid-range drone!",
        text: "The ShadowViper exceeded my expectations! The camera quality is fantastic, the flight is stable, and the battery life is impressive for the price. It's perfect for outdoor adventures and captures stunning footage. Highly recommend for hobbyists!",
        rowSpan: 5
    },
    {
        name: "Sophia R.",
        image: "/src/assets/images/Sophia.jpg",
        rating: "★★★★☆",
        title: "NanoFalcon is great for beginners!",
        text: "As a first-time drone user, the NanoFalcon was super easy to fly. But the battery could last a bit longer.",
        rowSpan: 4
    },
    {
        name: "Daniel K.",
        image: "/src/assets/images/Daniel.jpg",
        rating: "★★★★★",
        title: "ShadowViper is a solid performer!",
        text: "I’ve used many drones in this price range, and the ShadowViper is by far the best! It handles well even in mild wind conditions and produces smooth, high-quality videos. Great value for the money!",
        rowSpan: 5
    },
    {
        name: "Emma W.",
        image: "/src/assets/images/Emma.jpg",
        rating: "★★★★☆",
        title: "NightOwl is worth every euro!",
        text: "I was hesitant about the price, but the NightOwl is absolutely worth it. The night vision mode is a game-changer, allowing me to capture stunning footage even in low light. The stabilization and GPS tracking are top-tier. Battery life is solid, and the drone is incredibly responsive. If you're serious about drone photography, this is the one to get! Worth every euro!",
        rowSpan: 6
    },
    {
        name: "Noah P.",
        image: "/src/assets/images/Noah.jpg",
        rating: "★★★★★",
        title: "NanoFalcon is my go-to travel drone!",
        text: "I take the NanoFalcon everywhere! It’s small enough to fit in my backpack and easy to launch. Perfect for quick aerial shots while traveling. A bit more flight time would be nice, but overall, I love it!",
        rowSpan: 5
    },
    {
        name: "Olivia M.",
        image: "/src/assets/images/Olivia.jpg",
        rating: "★★★★★",
        title: "NightOwl is a beast at night!",
        text: "I mainly use my drone for nighttime landscape photography, and the NightOwl delivers in every way! The night vision is crystal clear, the controls are smooth, and the battery life is more than enough for long sessions. Worth the investment!",
        rowSpan: 5
    }
];


/**
 * Reorders the review with rowSpan: 6 to appear after the next review on md screens.
 */
const reorderReviewsForMd = (reviews: Review[]): Review[] => {
    const updatedReviews = [...reviews];
    const index = updatedReviews.findIndex(r => r.rowSpan === 6);

    if (index > 0 && index < updatedReviews.length - 1) {
        const [movedReview] = updatedReviews.splice(index, 1);
        updatedReviews.splice(index + 1, 0, movedReview);
    }

    return updatedReviews;
};

const Testimonials: React.FC = () => {
    const [sortedReviews, setSortedReviews] = useState(reviews);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 768 && screenWidth < 1024) {
                setSortedReviews(reorderReviewsForMd(reviews));
            } else {
                setSortedReviews(reviews); // Reset to default order
            }
        };

        handleResize(); // Run once on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="Testimonials" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
            <div className="grid gap-8 px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-10 md:max-w-3xl lg:max-w-6xl mx-auto">
                {sortedReviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
