import About from "../section/About";
import Contact from "../section/Contact";
import Footer from "../section/Footer";
import Hero from "../section/Hero";
import Portfolio from "../section/Portfolio";
import Pricing from "../section/Pricing";
import Services from "../section/Services";
import Testimonials from "../section/Testimonials";
import WhyChoose from "../section/WhyChoose";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <WhyChoose />
            <Portfolio />
            <Pricing />
            <Testimonials />
            <Contact />
        </>
    );
}