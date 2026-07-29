import pizza from "../../../assets/images/hero-pizza.png";

const HeroHeading = () => {
  return (
    <div className="relative flex items-center justify-center">
      <h1
        style={{ fontFamily: "Masking Renta" }}
        className="font-display text-primary text-[12rem] leading-none uppercase"
      >
        REAL
      </h1>

      <img src={pizza} alt="Fresh Pizza" className="relative z-20 mx-4 w-56" />

      <h1
        style={{ fontFamily: "Masking Renta" }}
        className="font-display text-primary text-[12rem] leading-none uppercase"
      >
        FLAVOR
      </h1>
    </div>
  );
};

export default HeroHeading;
