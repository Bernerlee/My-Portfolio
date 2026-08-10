import AboutCTA from "../components/about/aboutCTA/aboutCTA";
import AboutFeatures from "../components/about/AboutFeatures/AboutFeatures";
import AboutHero from "../components/about/AboutHero/AboutHero";
import AboutStats from "../components/about/AboutStats/AboutStats";
import AboutTeam from "../components/about/AboutTeam/AboutTeam";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutFeatures />
      <AboutTeam />
      <AboutCTA />
    </>
  );
};

export default About;
