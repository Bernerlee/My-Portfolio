import Container from "../../common/Container";

import pizzaBg from "../../../assets/images/newest-pizza-bg.png";
import pizzaImage from "../../../assets/images/newest-pizza.png";

const pizzas = [
  {
    id: 1,
    name: "Truffle Fire Pizza",
    description:
      "A rich combination of creamy mozzarella, roasted mushrooms, spicy beef slices, and truffle.",
    price: "$18.90",
    active: false,
  },
  {
    id: 2,
    name: "Smoky Ranch Chicken",
    description:
      "Loaded with grilled chicken, smoky BBQ sauce, caramelized onions, ranch drizzle, and melted cheddar.",
    price: "$16.50",
    active: true,
  },
  {
    id: 3,
    name: "Mediterranean Veggie Burst",
    description:
      "A colorful mix of olives, cherry tomatoes, feta cheese, bell peppers, red onions, and basil.",
    price: "$16.50",
    active: false,
  },
];

const NewestPizza = () => {
  return (
    <section className="bg-[#F8F1E8]">
      <Container className="max-w-none px-0">
        <div className="grid min-h-[850px] lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex items-center bg-[#F8F1E8] px-16 py-24">
            <div className="w-full max-w-xl">
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.3em]">
                ⊛ Newly Added
              </span>

              <h2 className="mb-12 text-6xl font-black uppercase leading-none">
                Explore Our
                <br />
                Newest Pizza
              </h2>

              <div className="space-y-5">
                {pizzas.map((pizza) => (
                  <div
                    key={pizza.id}
                    className={`rounded-[28px] border p-8 transition-all ${
                      pizza.active
                        ? "border-primary bg-primary text-white"
                        : "border-[#E9D9CC] bg-transparent"
                    }`}
                  >
                    <h3
                      className={`mb-3 text-2xl font-bold uppercase ${
                        pizza.active ? "text-white" : "text-primary"
                      }`}
                    >
                      🍕 {pizza.name}
                    </h3>

                    <p
                      className={`mb-5 leading-7 ${
                        pizza.active ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {pizza.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-semibold">
                        {pizza.price}
                      </span>

                      {pizza.active && (
                        <button className="font-semibold uppercase">
                          Order Now →
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="relative flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${pizzaBg})`,
            }}
          >
            <img
              src={pizzaImage}
              alt="Newest Pizza"
              className="w-[80%] max-w-[650px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewestPizza;
