import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Drones";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}
