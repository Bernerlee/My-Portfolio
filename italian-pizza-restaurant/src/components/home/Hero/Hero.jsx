import Container from "../../common/Container";
import HeroHeading from "./HeroHeading";
import HeroBottom from "./HeroBottom";

import heroBg from "../../../assets/images/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F1E8] pt-32 pb-24">
      {/* Background Texture */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
      />

      <Container className="relative z-10">
        <HeroHeading />

        <HeroBottom />
      </Container>
    </section>
  );
};

export default Hero;
