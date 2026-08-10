import { Link } from "react-router-dom";

import backgroundImage from "../../../assets/images/cta-bg.png";

const AboutCTA = () => {
  return (
    <section
      className="relative min-h-[650px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Center CTA */}
      <div className="flex min-h-[650px] items-center justify-center px-6">
        <div className="w-full max-w-[430px] overflow-hidden bg-white text-center">
          {/* Card top */}
          <div className="px-8 pb-8 pt-9">
            <h2 className="text-3xl font-medium leading-[1.05] tracking-tight text-[#171717] md:text-4xl">
              Order Now Before
              <br />
              Your <span className="font-serif italic">Favorite</span> Sells
              Out.
            </h2>

            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-full bg-[#CA2F06] px-7 py-3 text-sm font-bold uppercase text-white transition hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
