import Navbar from "../../layout/Navbar/Navbar";

import heroBackground from "../../../assets/images/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#F8F1E8]">
      {/* Background Texture */}
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10">{/* We'll build this next */}</div>
    </section>
  );
};

export default Hero;
