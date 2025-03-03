import Hero from "./components/Hero";
import Features from "./components/Features";
import Drones from "./components/Drones";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div>
            <Hero />
            <Drones />
            <Features />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}
