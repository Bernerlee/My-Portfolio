import Communities from "../components/Communities/Communities";
import CTA from "../components/CTA/CTA";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Privacy from "../components/Privacy/Privacy";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import Showcase from "../components/ShowCase/Showcase";
import Stats from "../components/Stats/Stats";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Privacy />
      <Stats />
      <Showcase />
      <Communities />
      <Testimonials />
      <CTA />
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default Home;
