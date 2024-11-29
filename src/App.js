import About from "./components/About";
import Blog from "./components/Blog";
import FAQ from "./components/common/FAQ";
import CTAForm from "./components/CTAForm";
import ExpertsBanner from "./components/ExpertsBanner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Palette from "./components/Palette";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import logo from "./logo.svg";

function App() {
    return (
        <div className="selection:bg-primary-200">
            <Navbar />
            <div className="isolate">
                <Hero />
                <About />
            </div>
            <Services />
            <ExpertsBanner />
            <Projects />
            <Testimonials />
            <Blog />
            <CTAForm />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
