import Hero from "./components/Hero";
import Features from "./components/Features";
import Drones from "./components/Drones";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {

    const location = useLocation();

    useEffect(() => {
        // This will scroll to the element with the ID matching the hash in the URL
        // This makes sure the user gets scrolled to the correct section when they navigate to a URL with a hash
        const hash = location.hash;
        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        // This is a structured layout of the Home page/landing page
        // Each component is a section of the page
        <div>
            <Hero />
            <Drones />
            <Features />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
            <CookieBanner />
        </div>
    );
}
