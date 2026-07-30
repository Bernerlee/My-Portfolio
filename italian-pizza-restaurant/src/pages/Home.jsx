import AboutSection from "../components/home/AboutSection/AboutSection";
import BrandBanner from "../components/home/BrandBanner/BrandBanner";
import ExplorePizza from "../components/home/ExplorePizza/ExplorePizza";
import Hero from "../components/home/Hero/Hero";
import NewestPizza from "../components/home/NewestPizza/NewestPizza";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <NewestPizza />
      <ExplorePizza />
      <BrandBanner />
    </>
  );
};

export default Home;
