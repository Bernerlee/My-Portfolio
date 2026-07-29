import Container from "../../common/Container";

import checker from "../../../assets/images/checker.svg";
import statsImage from "../../../assets/images/about-stats.png";

const AboutSection = () => {
  return (
    <>
      {/* Checker */}
      <img src={checker} alt="" className="block w-full -mb-1" />

      {/* About Section */}
      <section className="bg-primary py-24">
        <Container>
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              ABOUT US
            </span>

            <h2 className="max-w-4xl text-6xl font-black uppercase leading-tight text-white">
              Serving Delicious
              <br />
              Moments With Every Slice
            </h2>

            <img
              src={statsImage}
              alt="Restaurant statistics"
              className="mt-16 w-full max-w-4xl"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutSection;
