import { Link } from "react-router-dom";

import aboutImage1 from "../../../assets/images/about-1.png";
import aboutImage2 from "../../../assets/images/about-2.png";
import aboutImage3 from "../../../assets/images/about-3.png";
import aboutImage4 from "../../../assets/images/about-4.png";
import aboutImage5 from "../../../assets/images/about-5.png";
import aboutImage6 from "../../../assets/images/about-6.png";

const AboutHero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#F8F1E8]">
      {/* Floating image - left */}
      <img
        src={aboutImage1}
        alt=""
        className="absolute left-[6%] top-[30%] h-[165px] w-[140px] rounded-[20px] object-cover"
      />

      {/* Floating image - top left */}
      <img
        src={aboutImage2}
        alt=""
        className="absolute left-[27%] top-[18%] h-[78px] w-[126px] rounded-[18px] object-cover"
      />

      {/* Floating image - top right */}
      <img
        src={aboutImage3}
        alt=""
        className="absolute right-[11%] top-[20%] h-[115px] w-[165px] rounded-[20px] object-cover"
      />

      {/* Floating image - middle right */}
      <img
        src={aboutImage4}
        alt=""
        className="absolute right-[6%] top-[42%] h-[75px] w-[115px] rounded-[18px] object-cover"
      />

      {/* Floating image - bottom left */}
      <img
        src={aboutImage5}
        alt=""
        className="absolute bottom-[15%] left-[16%] h-[75px] w-[115px] rounded-[18px] object-cover"
      />

      {/* Floating image - bottom right */}
      <img
        src={aboutImage6}
        alt=""
        className="absolute bottom-[12%] right-[22%] h-[115px] w-[90px] rounded-[18px] object-cover"
      />

      {/* Center Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
        <div className="mx-auto max-w-[650px] text-center">
          <span className="text-xs font-medium uppercase text-gray-600">
            <span className="text-[#CA2F06]">⊙</span> Home / About
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#171717] md:text-6xl">
            Experience the Art of
            <br />
            test True Italian Pizza
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm text-[#333]">
            Smart, secure, and seamless property solutions for everyone.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-full bg-[#CA2F06] px-8 py-4 text-sm font-bold uppercase text-white transition hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
