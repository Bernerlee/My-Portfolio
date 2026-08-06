import { ArrowLeft, ArrowRight } from "lucide-react";

import bgImage from "../../../assets/images/testimonial-bg.png";
import customerImage from "../../../assets/images/customer.png";

const Testimonials = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-center gap-8 px-6">
        {/* Left Arrow */}
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#CA2F06] text-white transition hover:scale-105">
          <ArrowLeft size={28} />
        </button>

        {/* Card */}
        <div className="grid overflow-hidden rounded-[28px] lg:grid-cols-2">
          {/* Image Side */}
          <div className="flex items-center justify-center bg-[#CA2F06] p-6">
            <div className="h-[500px] w-[460px] overflow-hidden rounded-[22px]">
              <img
                src={customerImage}
                alt="Customer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex h-[560px] flex-col items-center justify-center bg-white px-16 text-center">
            <span className="mb-1 text-8xl font-bold leading-none text-[#CA2F06]">
              “
            </span>

            <p
              className="max-w-md text-[32px] leading-[1.5] text-[#333]"
              style={{ fontFamily: "Instrument Serif" }}
            >
              The ambiance is perfect, and the dishes are truly a work of art.
              This is my go-to spot for date nights and special occasions.
              Highly recommend!
            </p>

            <div className="mt-12 text-[#CA2F06] text-xl tracking-[6px]">
              ★★★★★
            </div>

            <h4 className="mt-5 text-xl font-bold uppercase">Fuchsia Dunlop</h4>

            <p className="text-gray-500">Shanghai</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#CA2F06] transition hover:scale-105">
          <ArrowRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
