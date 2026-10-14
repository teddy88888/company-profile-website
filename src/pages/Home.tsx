import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import Results from "../components/sections/Results";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import Industries from "../components/sections/Industries";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials"; 
import FAQ from "../components/sections/FAQ"
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Results />
        <Process />
        <Services />
        <Industries />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
