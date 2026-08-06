import Container from "../../common/Container";
import Button from "../../common/Button";

import backgroundImage from "../../../assets/images/cta-bg.png";
import ctaCard from "../../../assets/images/cta-card.png";

const CTASection = () => {
  return (
    <section
      className="relative h-[650px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container className="flex h-full items-center justify-center">
        <div className="relative">
          {/* White Card */}
          <img src={ctaCard} alt="Order Now" className="w-full max-w-[420px]" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
            <h2 className="text-[42px] font-black uppercase leading-tight text-[#1D1D1D]">
              Order Now Before
              <br />
              All Sells Out.
            </h2>

            <Button className="mt-8 px-8 py-4">Explore Menu</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
