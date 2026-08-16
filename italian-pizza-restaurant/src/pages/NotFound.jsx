import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen bg-[#FFF6ED] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        {/* 404 */}
        <h1 className="text-[140px] md:text-[180px] font-bold leading-none text-[#CA2F06]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          OOPS! PAGE NOT FOUND.
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-md mx-auto text-sm leading-relaxed">
          The page you are looking for may have been removed, renamed or never
          existed. Let's help you get back to the Sprintex experience.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="
            inline-flex
            items-center
            justify-center
            mt-7
            px-8
            py-3
            rounded-full
            bg-[#CA2F06]
            text-white
            text-sm
            font-semibold
            hover:bg-[#a92505]
            transition
          "
        >
          BACK TO HOMEPAGE
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
