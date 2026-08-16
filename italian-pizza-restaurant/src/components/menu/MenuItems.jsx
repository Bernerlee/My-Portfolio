import { Link } from "react-router-dom";

// Replace these filenames with the exact names of your exported assets
import pizza1 from "../../assets/images/menu-1.png";
import pizza2 from "../../assets/images/menu-2.png";
import pizza3 from "../../assets/images/menu-3.png";
import pizza4 from "../../assets/images/menu-4.png";
import pizza5 from "../../assets/images/menu-5.png";
import pizza6 from "../../assets/images/menu-6.png";
import menuCtaImage from "../../assets/images/cta-bg.png";

const menuItems = [
  {
    id: "sassy-greens",
    name: "Sassy Greens",
    price: "$20.00",
    image: pizza1,
  },
  {
    id: "mapo-tofu",
    name: "Mapo Tofu",
    price: "$120.00",
    image: pizza2,
  },
  {
    id: "peking-duck",
    name: "Peking Duck",
    price: "$80.00",
    image: pizza3,
  },
  {
    id: "cheesy-chuckle",
    name: "Cheesy Chuckle",
    price: "$50.00",
    image: pizza4,
  },
  {
    id: "punny-pepperoni",
    name: "Punny Pepperoni",
    price: "$90.00",
    image: pizza5,
  },
  {
    id: "crispy-crust",
    name: "Crispy Crust",
    price: "$30.00",
    image: pizza6,
  },
];

const MenuItems = () => {
  return (
    <main className="min-h-screen bg-[#fff7ef]">
      {/* Menu section */}
      <section className="bg-[#FFF6ED] min-h-screen py-30 px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[10px] mb-4">
            <span className="text-[#CA2F06]">●</span> HOME / MENU
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover the Perfect Slice
            <br />
            Crafted Just for You.
          </h1>
        </div>

        {/* Menu Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {menuItems.map((item) => (
            <div key={item.id} className="group">
              {/* Card */}
              <Link
                to={`/menu/${item.id}`}
                className="
                block
                bg-[#FFF6ED]
                border-[3px]
                border-[#CA2F06]
                rounded-[14px]
                p-2
                transition-transform
                duration-300
                hover:-translate-y-1
              "
              >
                {/* Pizza Image */}
                <div className="w-full aspect-square overflow-hidden rounded-[10px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                  />
                </div>
              </Link>

              {/* Name + Price */}
              <div className="flex items-center justify-between mt-3 px-1">
                <h3 className="text-sm font-medium">{item.name}</h3>

                <span className="text-sm font-medium">${item.price}</span>
              </div>

              {/* Add to Cart */}
              <button
                type="button"
                onClick={() => console.log("Added to cart:", item.name)}
                className="
                block
                mx-auto
                mt-3
                text-[10px]
                font-medium
                text-[#CA2F06]
                uppercase
                tracking-wide
                hover:underline
              "
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section className="relative w-full min-h-[650px] lg:min-h-[750px] overflow-hidden">
        {/* Background Image */}
        <img
          src={menuCtaImage}
          alt=""
          className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      object-center
    "
        />

        {/* Overlay Card */}
        <div
          className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      z-10
      rounded-[24px]

      w-[320px]
      min-h-[300px]

      sm:w-[400px]
      sm:min-h-[360px]

      lg:w-[520px]
      lg:min-h-[420px]

      bg-white
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-8
      py-12
    "
        >
          <h2
            className="
        text-3xl
        sm:text-4xl
        lg:text-5xl
        leading-tight
        font-medium
        max-w-[420px]
      "
          >
            Order Now Before
            <br />
            Your <span className="font-serif italic">Favorite</span> Sells Out.
          </h2>

          <button
            className="
        mt-8
        bg-[#CA2F06]
        text-white
        px-8
        py-3
        rounded-full
        text-sm
        font-semibold
      "
          >
            GET A QUOTE
          </button>
        </div>
      </section>
    </main>
  );
};

export default MenuItems;
