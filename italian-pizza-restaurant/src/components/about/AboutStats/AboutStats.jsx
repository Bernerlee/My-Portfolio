import Container from "../../common/Container";

import checker from "../../../assets/images/checker.svg";
import imageOne from "../../../assets/images/about-stat-1.png";
import imageTwo from "../../../assets/images/about-stat-2.png";
import statsImage from "../../../assets/images/about-statss.png";

const AboutStats = () => {
  return (
    <>
      {/* Checker */}
      <img src={checker} alt="" className="block w-full -mb-1" />
      <section className="overflow-hidden bg-[#CA2F06]">
        <Container>
          <div className="py-16 md:py-24">
            {/* Heading */}
            <div className="mx-auto max-w-2xl text-center text-white">
              <span className="text-[10px] font-medium uppercase">
                ⊙ About Us
              </span>

              <h2 className="mt-4 text-3xl font-medium leading-tight md:text-4xl">
                Serving Delicious Moments
                <br />
                with{" "}
                <span className="font-serif italic">Every Slice We Make.</span>
              </h2>
            </div>

            {/* Images + Stats Image */}
            <div className="mx-auto mt-10 grid max-w-5xl items-center gap-5 md:grid-cols-[1fr_1.05fr_1fr]">
              {/* Left image */}
              <div className="overflow-hidden rounded-[18px]">
                <img
                  src={imageOne}
                  alt=""
                  className="h-[330px] w-full object-cover"
                />
              </div>

              {/* Exported statistics image */}
              <div className="overflow-hidden rounded-[18px]">
                <img
                  src={statsImage}
                  alt=""
                  className="h-[330px] w-full object-cover"
                />
              </div>

              {/* Right image */}
              <div className="overflow-hidden rounded-[18px]">
                <img
                  src={imageTwo}
                  alt=""
                  className="h-[330px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutStats;
