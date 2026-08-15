import { Link } from "react-router-dom";

// Replace these filenames with the exact names of your exported assets
import pizza1 from "../assets/images/menu-1.png";
import pizza2 from "../assets/images/menu-2.png";
import pizza3 from "../assets/images/menu-3.png";
import pizza4 from "../assets/images/menu-4.png";
import pizza5 from "../assets/images/menu-5.png";
import pizza6 from "../assets/images/menu-6.png";
import menuCtaImage from "../assets/images/cta-bg.png";

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

const Menu = () => {
  return (
    <main className="min-h-screen bg-[#fff7ef]">
      {/* Menu section */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        {/* Soft cloud background */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -left-20 top-20 h-72 w-96 rounded-full bg-[#fff0d8] blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-96 rounded-full bg-[#fff0d8] blur-3xl" />
          <div className="absolute left-1/3 top-32 h-72 w-96 rounded-full bg-[#fff5e5] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[760px]">
          {/* Breadcrumb */}
          <div className="mb-3 flex items-center justify-center gap-1 text-[9px] uppercase text-[#222]">
            <span className="text-[#CA2F06]">●</span>
            <span>HOME / MENU</span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-[500px] text-center text-[30px] font-bold leading-[1.1] tracking-[-1.5px] text-[#111] md:text-[34px]">
            Discover the Perfect Slice
            <br />
            Crafted Just for You.
          </h1>

          {/* Menu grid */}
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={`/menu/${item.id}`}
                className="group block"
              >
                {/* Pizza card image */}
                <div className="overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Name + price */}
                <div className="mt-2 flex items-center justify-between gap-2">
                  <h2 className="text-[10px] font-medium text-[#111]">
                    {item.name}
                  </h2>

                  <span className="whitespace-nowrap text-[9px] font-semibold text-[#111]">
                    {item.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="relative overflow-hidden">
        <img
          src={menuCtaImage}
          alt="Friends enjoying pizza"
          className="h-[390px] w-full object-cover md:h-[500px]"
        />

        {/* CTA card */}
        <div className="absolute left-1/2 top-1/2 w-[185px] -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-8 text-center md:w-[260px] md:px-8 md:py-10">
          <h2 className="text-[18px] font-medium leading-[1.15] tracking-[-0.5px] text-[#111] md:text-[22px]">
            Order Now Before
            <br />
            Your <span className="font-serif italic">Favorite</span> Sells Out.
          </h2>

          <Link
            to="/book"
            className="mt-5 inline-flex rounded-full bg-[#CA2F06] px-5 py-2 text-[8px] font-semibold uppercase text-white transition-opacity hover:opacity-90"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Menu;
