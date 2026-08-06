import AboutSection from "../components/home/AboutSection/AboutSection";
import BlogSection from "../components/home/BlogSection/BlogSection";
import BrandBanner from "../components/home/BrandBanner/BrandBanner";
import CTASection from "../components/home/CTASection/CTASection";
import ExplorePizza from "../components/home/ExplorePizza/ExplorePizza";
import Hero from "../components/home/Hero/Hero";
import NewestPizza from "../components/home/NewestPizza/NewestPizza";
import OurApproach from "../components/home/OurApproach/OurApproach";
import Testimonials from "../components/home/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <NewestPizza />
      <ExplorePizza />
      <BrandBanner />
      <OurApproach />
      <Testimonials />
      <BlogSection />
      <CTASection />
    </>
  );
};

export default Home;
