import Container from "../../common/Container";
import Button from "../../common/Button";

import heroCard from "../../../assets/images/hero-card.png";
import { useNavigate } from "react-router-dom";

const HeroBottom = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="flex flex-col items-center gap-12 py-20 lg:flex-row lg:justify-between">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroCard}
            alt="Freshly baked pizza"
            className="w-full max-w-[540px] rounded-3xl"
          />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/3 space-y-6 justify-self-end">
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
            EST. 1996
          </span>

          <h2 className="font-[var(--font-display)] text-6xl leading-none">
            Freshly
            <br />
            Baked Pizza
          </h2>

          <p className="max-w-md text-gray-600 leading-8">
            Discover authentic Italian flavors crafted with fresh ingredients
            and baked to perfection every single day.
          </p>

          <Button className="px-8 py-4" onClick={() => navigate("/menu")}>
            Explore Menu
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroBottom;
