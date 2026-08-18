import { useParams } from "react-router-dom";
import { Star, ChevronDown } from "lucide-react";
import menuData from "../../data/menuData";

function MenuSingle() {
  const { id } = useParams();

  const menu = menuData.find((item) => item.id === id);

  if (!menu) {
    return (
      <section className="min-h-screen bg-[#fff6ed] px-6 py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <h1 className="text-5xl font-bold text-[#d92d06]">404</h1>

          <h2 className="mt-4 text-3xl font-bold">Menu Item Not Found</h2>

          <p className="mt-4">
            The menu item you are looking for does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#fff6ed] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* TOP SECTION */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Pizza Image */}
          <div className="overflow-hidden rounded-[12px] border-2 border-white bg-white p-6">
            <img
              src={menu.image}
              alt={menu.name}
              className="mx-auto w-full max-w-[520px] object-contain"
            />
          </div>

          {/* Product Information */}
          <div>
            {/* Rating */}
            <div className="mb-3 flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="#d92d06" strokeWidth={0} />
                ))}
              </div>

              <span className="text-xs">
                {menu.rating} Stars, ({menu.reviews} reviews)
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl font-medium md:text-5xl">{menu.name}</h1>

            {/* Price */}
            <p className="mt-4 text-lg">¥ {menu.price.toFixed(2)}</p>

            {/* Description */}
            <p className="mt-8 max-w-[600px] text-sm leading-6">
              {menu.description}
            </p>

            {/* Quantity */}
            <div className="mt-10">
              <label className="mb-2 block text-xs uppercase">Quantity</label>

              <div className="flex h-12 items-center justify-between rounded-full border border-gray-300 bg-white px-5">
                <span className="text-sm">01</span>

                <ChevronDown size={18} />
              </div>
            </div>

            {/* Add To Cart */}
            <button className="mt-4 h-12 w-full rounded-full bg-[#d92d06] text-sm font-semibold uppercase text-white transition hover:bg-[#b92d06]">
              Add to Cart
            </button>
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-20 border-t border-black/10 pt-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr]">
            {/* About */}
            <div>
              <h2 className="text-2xl font-medium">About {menu.name}</h2>

              <p className="mt-6 max-w-[700px] text-sm leading-6">
                {menu.about}
              </p>

              {/* Sections */}
              <div className="mt-8 space-y-8">
                {menu.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-medium">{section.title}</h3>

                    <p className="mt-4 max-w-[700px] text-sm leading-6">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Order Now */}
              <button className="mt-8 rounded-full bg-[#d92d06] px-7 py-3 text-xs font-semibold uppercase text-white">
                Order Now
              </button>
            </div>

            {/* Additional Details */}
            <div className="rounded-[12px] bg-[#d92d06] p-8 text-white">
              <h2 className="text-xl font-medium">Additional Details</h2>

              <p className="mt-4 text-sm leading-6">
                {menu.additionalDetails.description}
              </p>

              <div className="mt-6 space-y-3">
                {menu.additionalDetails.items.map((item, index) => (
                  <p key={index} className="text-sm">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSingle;
