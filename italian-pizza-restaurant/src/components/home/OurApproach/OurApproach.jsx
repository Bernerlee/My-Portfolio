import Container from "../../common/Container";
import Button from "../../common/Button";

import imageOne from "../../../assets/images/approach-1.png";
import imageTwo from "../../../assets/images/approach-2.png";
import imageThree from "../../../assets/images/approach-3.png";

const approaches = [
  {
    id: "01",
    title: "Fresh Ingredients",
    description: "We carefully select high-quality, fresh ingredients.",
    image: imageOne,
    large: false,
  },
  {
    id: "02",
    title: "Handcrafted Dough",
    description: "Our dough is made daily and prepared by hand.",
    image: imageTwo,
    large: false,
  },
  {
    id: "03",
    title: "Perfect Hello Baking",
    description:
      "A rich combination of creamy mozzarella, roasted mushrooms, spicy beef slices, and truffle. A rich combination of creamy mozzarella, roasted mushrooms, spicy beef slices, and truffle.",
    image: imageThree,
    large: true,
  },
];

const OurApproach = () => {
  return (
    <section className="bg-white py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em]">
            ⊛ Our Approach
          </span>

          <h2 className="mt-5 text-5xl font-black uppercase leading-tight">
            Our Commitment To Quality
            <br />
            In Every Slice We Make.
          </h2>
        </div>

        {/* Content */}
        <div className="mt-20 space-y-10">
          {approaches.map((item) => (
            <div
              key={item.id}
              className="grid items-center gap-8 border-t border-gray-200 pt-8 lg:grid-cols-[1fr_40px_1.7fr]"
            >
              {/* Left */}
              <div>
                <h3
                  className={`${
                    item.large ? "text-4xl font-bold" : "text-3xl font-medium"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>

              {/* Number */}
              <span className="text-sm font-semibold text-gray-500">
                {item.id}
              </span>

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className={`w-full rounded-[28px] object-cover ${
                  item.large ? "h-[360px]" : "h-[120px]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16">
          <Button className="px-8 py-4">Read More</Button>
        </div>
      </Container>
    </section>
  );
};

export default OurApproach;
