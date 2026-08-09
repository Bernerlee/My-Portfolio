import imageOne from "../../../assets/images/about-2.png";
import imageTwo from "../../../assets/images/blog-2.png";
import imageThree from "../../../assets/images/about-stat-1.png";

const features = [
  {
    number: "01",
    title: "Opening in Guangzhou",
    description:
      "Book online or call us to choose a time that works best for you. We offer flexible hours & scheduling convenience.",
    image: imageOne,
  },
  {
    number: "02",
    title: "Opening in Shanghai",
    description:
      "Meet with our dental experts to your needs. We'll listen, assess, and create a custom care plan just for you.",
    image: imageTwo,
  },
  {
    number: "03",
    title: "Opening in Beijing",
    description:
      "Get the treatment a comfortable, caring environment. From checkups to full restorations, with every step.",
    image: imageThree,
  },
];

const AboutFeatures = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F1E8] py-24 md:py-32">
      {/* Vertical guide lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto grid h-full max-w-[1200px] grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="border-l border-dashed border-black/10 last:border-r"
            />
          ))}
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <span className="text-[10px] font-medium uppercase">
          ⊙ About Features
        </span>

        <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
          Our Commitment to Excellence
          <br />
          and <span className="font-serif italic">Future Growth.</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative z-10 mx-auto mt-14 min-h-[430px] max-w-[1200px] px-6">
        {/* Numbers */}
        <div className="absolute left-0 right-0 top-0 grid grid-cols-6">
          {["01", "02", "03", "04", "05", "06"].map((number) => (
            <span
              key={number}
              className="border-l border-dashed border-black/10 px-3 text-[8px] text-black/20 last:border-r"
            >
              {number}
            </span>
          ))}
        </div>

        {/* Feature 1 */}
        <article className="absolute left-[4%] top-8 flex h-[110px] w-[345px] overflow-hidden rounded-[12px] bg-white">
          <div className="flex flex-1 flex-col justify-center px-4">
            <h3 className="font-serif text-sm italic">{features[0].title}</h3>

            <p className="mt-3 text-[10px] leading-[1.4] text-[#222]">
              {features[0].description}
            </p>
          </div>

          <img
            src={features[0].image}
            alt=""
            className="h-full w-[145px] object-cover"
          />
        </article>

        {/* Feature 2 */}
        <article className="absolute left-[27%] top-[145px] flex h-[110px] w-[345px] overflow-hidden rounded-[12px] bg-white">
          <div className="flex flex-1 flex-col justify-center px-4">
            <h3 className="font-serif text-sm italic">{features[1].title}</h3>

            <p className="mt-3 text-[10px] leading-[1.4] text-[#222]">
              {features[1].description}
            </p>
          </div>

          <img
            src={features[1].image}
            alt=""
            className="h-full w-[145px] object-cover"
          />
        </article>

        {/* Feature 3 */}
        <article className="absolute right-[4%] top-[260px] flex h-[110px] w-[345px] overflow-hidden rounded-[12px] bg-white">
          <div className="flex flex-1 flex-col justify-center px-4">
            <h3 className="font-serif text-sm italic">{features[2].title}</h3>

            <p className="mt-3 text-[10px] leading-[1.4] text-[#222]">
              {features[2].description}
            </p>
          </div>

          <img
            src={features[2].image}
            alt=""
            className="h-full w-[145px] object-cover"
          />
        </article>
      </div>
    </section>
  );
};

export default AboutFeatures;
