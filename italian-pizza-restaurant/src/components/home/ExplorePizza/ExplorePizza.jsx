import Container from "../../common/Container";
import checker from "../../../assets/images/checker.svg";

import pizzaOne from "../../../assets/images/pizza-1.png";
import pizzaTwo from "../../../assets/images/pizza-2.png";
import pizzaThree from "../../../assets/images/pizza-3.png";

const categories = [
  "🍕 Classic Pizzas",
  "🔥 Signature Pizzas",
  "🥩 Meat Lovers",
  "🥬 Veggie Pizzas",
];

const pizzas = [
  {
    id: 1,
    image: pizzaOne,
    name: "Sassy Greens",
    description: "Secure, and seamless property.",
    price: "₦20.00",
  },
  {
    id: 2,
    image: pizzaTwo,
    name: "Mapo Tofu",
    description: "Secure and seamless property.",
    price: "₦120.00",
  },
  {
    id: 3,
    image: pizzaThree,
    name: "Peking Duck",
    description: "Smart seamless property.",
    price: "₦80.00",
  },
];

const ExplorePizza = () => {
  return (
    <>
      <section className="bg-primary py-28">
        <Container>
          {/* Heading */}
          <div className="text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-white">
              ⊛ Explore Pizza
            </span>

            <h2 className="mt-5 text-6xl font-black uppercase leading-tight text-white">
              Discover The Perfect Slice
              <br />
              Crafted Just For You.
            </h2>
          </div>

          {/* Categories */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full px-8 py-4 text-sm font-semibold uppercase transition ${
                  index === 2
                    ? "bg-[#1E1E1E] text-white"
                    : "bg-white text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-white/20" />

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {pizzas.map((pizza) => (
              <article key={pizza.id}>
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="h-[420px] w-full rounded-3xl object-cover"
                />

                <div className="mt-5 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">
                    {pizza.name}
                  </h3>

                  <span className="text-white">{pizza.price}</span>
                </div>

                <p className="mt-2 text-white/80">{pizza.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <img src={checker} alt="" className="block w-full -mb-1" />
    </>
  );
};

export default ExplorePizza;
