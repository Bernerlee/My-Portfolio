const ContactUs = () => {
  return (
    <main className="min-h-screen bg-[#fff7ef]">
      {/* Contact Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        {/* Background clouds */}
        <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
          <div className="absolute -left-20 top-20 h-64 w-96 rounded-full bg-[#fff1d9] blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-96 rounded-full bg-[#fff0d5] blur-3xl" />
          <div className="absolute left-1/3 top-40 h-64 w-96 rounded-full bg-[#fff4df] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[700px]">
          {/* Breadcrumb */}
          <div className="mb-4 flex justify-center items-center gap-1 text-[9px] uppercase text-[#222]">
            <span className="text-[#CA2F06]">●</span>
            <span>HOME / CONTACT US</span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-[600px] text-center text-[30px] font-bold leading-[1.15] tracking-[-1.5px] text-[#111] md:text-[34px]">
            Get In Touch With Us For
            <br />
            Further Information.
          </h1>

          {/* Contact information */}
          <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-md border border-black/10">
            {/* Contact Us */}
            <div className="border-r border-black/10 px-12 py-4">
              <h2 className="mb-3 text-[12px] font-semibold">Contact Us</h2>

              <div className="space-y-1 text-[10px] leading-[1.5] text-[#222]">
                <p>77 Qintai Rd, Tianjin, China</p>
                <p>1800 216 10</p>
                <p>Email@Example.com</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="px-12 py-4">
              <h2 className="mb-3 text-[12px] font-semibold">Opening Hours</h2>

              <div className="space-y-1 text-[10px] leading-[1.5] text-[#222]">
                <p>Mon: CLOSED</p>
                <p>Tue To Thu: 11 AM – 10 PM</p>
                <p>Fri: Closed</p>
                <p>Sat To Sun: 12 PM – 7 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="mt-6 space-y-3">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="h-7 w-full rounded-full border-none bg-white px-3 text-[10px] outline-none placeholder:text-[#222]"
            />

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-7 w-full rounded-full border-none bg-white px-3 text-[10px] outline-none placeholder:text-[#222]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="h-7 w-full rounded-full border-none bg-white px-3 text-[10px] outline-none placeholder:text-[#222]"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows="8"
              className="w-full resize-none rounded-md border-none bg-white px-3 py-3 text-[10px] outline-none placeholder:text-[#222]"
            />

            {/* Submit */}
            <button
              type="submit"
              className="h-8 w-full rounded-full bg-[#CA2F06] text-[10px] font-semibold uppercase text-white transition-opacity hover:opacity-90"
            >
              SEND NOW
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
