import Container from "../../common/Container";

import pizzaroLogo from "../../../assets/images/pizzaro-banner.png";

const BrandBanner = () => {
  return (
    <section className="bg-[#F8F1E8] py-28">
      <Container>
        <div className="flex justify-center">
          <img
            src={pizzaroLogo}
            alt="Pizzaro"
            className="w-full max-w-6xl object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default BrandBanner;
