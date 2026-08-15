import { ChevronDown, CalendarDays } from "lucide-react";

// Change this import to the actual name/path of your exported image
import reservationImage from "../assets/images/reservation.jpg";

const Book = () => {
  return (
    <main className="min-h-screen bg-[#fff7ef]">
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        {/* Soft background */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -left-20 top-24 h-64 w-96 rounded-full bg-[#fff0d8] blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-96 rounded-full bg-[#fff0d8] blur-3xl" />
          <div className="absolute left-1/3 top-40 h-64 w-96 rounded-full bg-[#fff5e5] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[860px]">
          {/* Breadcrumb */}
          <div className="mb-3 flex items-center justify-center gap-1 text-[9px] uppercase text-[#222]">
            <span className="text-[#CA2F06]">●</span>
            <span>HOME / MAKE RESERVATION</span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-[600px] text-center text-[30px] font-bold leading-[1.15] tracking-[-1.5px] text-[#111] md:text-[34px]">
            Reserve Your Table for an Amazing
            <br />
            Dining Experience.
          </h1>

          {/* Reservation Image */}
          <div className="mt-10 overflow-hidden rounded-md">
            <img
              src={reservationImage}
              alt="Friends enjoying pizza together"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Reservation Form */}
          <form className="mx-auto mt-9 max-w-[368px] space-y-3">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="h-7 w-full rounded-full bg-white px-3 text-[9px] outline-none placeholder:text-[#222]"
            />

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-7 w-full rounded-full bg-white px-3 text-[9px] outline-none placeholder:text-[#222]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="h-7 w-full rounded-full bg-white px-3 text-[9px] outline-none placeholder:text-[#222]"
              />
            </div>

            {/* Guests */}
            <div className="relative">
              <select
                name="guests"
                defaultValue=""
                className="h-7 w-full appearance-none rounded-full bg-white px-3 text-[9px] outline-none"
              >
                <option value="" disabled>
                  Guest
                </option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
              </select>

              <ChevronDown
                size={12}
                strokeWidth={1.5}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
              />
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  className="h-7 w-full rounded-full bg-white px-3 text-[9px] outline-none"
                />

                <CalendarDays
                  size={11}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                />
              </div>

              <div className="relative">
                <select
                  name="time"
                  defaultValue=""
                  className="h-7 w-full appearance-none rounded-full bg-white px-3 text-[9px] outline-none"
                >
                  <option value="" disabled>
                    Time
                  </option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>

                <ChevronDown
                  size={12}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows="7"
              className="w-full resize-none rounded-md bg-white px-3 py-3 text-[9px] outline-none placeholder:text-[#222]"
            />

            {/* Book Now */}
            <button
              type="submit"
              className="h-7 w-full rounded-full bg-[#CA2F06] text-[9px] font-semibold uppercase text-white transition-opacity hover:opacity-90"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Book;
