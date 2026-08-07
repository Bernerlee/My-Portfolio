import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "../../common/Container";

import pizza from "../../../assets/images/hero-pizza.png";
import tomato from "../../../assets/images/tomato.png";
import basil from "../../../assets/images/basil.png";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-primary text-white">
      {/* Top Banner */}
      <div className="relative border-b border-white/20">
        <h2
          className="overflow-hidden whitespace-nowrap text-center leading-none text-white"
          style={{
            fontFamily: "'Masking Renta', serif",
            fontSize: "17rem",
          }}
        >
          REAL FLAME
        </h2>

        <img
          src={pizza}
          alt=""
          className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Footer Content */}
      <Container>
        <div className="grid border-b border-white/20 lg:grid-cols-[1.6fr_0.7fr_0.8fr_0.9fr]">
          {/* Contact */}
          <div className="relative border-r border-white/20 px-10 py-14">
            <img
              src={tomato}
              alt=""
              className="absolute left-0 top-10 w-14 -translate-x-1/2"
            />

            <h3 className="mb-5 text-4xl font-semibold">Have Questions?</h3>

            <p className="max-w-sm text-lg leading-8">
              Email us on{" "}
              <a href="mailto:demo.pizzaro@gmail.com" className="underline">
                demo.pizzaro@gmail.com
              </a>
              <br />
              or submit a{" "}
              <Link className="underline" to="/contact">
                contact form.
              </Link>
            </p>

            <div className="mt-10 flex gap-4">
              {[
                <FaXTwitter />,
                <FaInstagram />,
                <FaFacebookF />,
                <FaLinkedinIn />,
              ].map((icon, index) => (
                <button
                  key={index}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition hover:bg-white hover:text-primary"
                >
                  {icon}
                </button>
              ))}
            </div>

            <img src="/logo.svg" alt="Pizzaro" className="mt-24 w-64" />
          </div>

          {/* Main Pages */}
          <div className="border-r border-white/20 px-10 py-14">
            <h4 className="mb-8 text-xs uppercase tracking-[0.25em]">
              Main Pages
            </h4>

            <div className="space-y-4">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blogs</Link>
            </div>
          </div>

          {/* Template */}
          <div className="border-r border-white/20 px-10 py-14">
            <h4 className="mb-8 text-xs uppercase tracking-[0.25em]">
              Template
            </h4>

            <div className="space-y-4">
              <Link to="/password-protected">Password Protected</Link>

              <Link to="/changelog">Changelog</Link>

              <Link to="/404">404 Not Found</Link>

              <Link to="/licenses">Style Guide</Link>

              <Link to="/licenses">License</Link>
            </div>
          </div>

          {/* Hours */}
          <div className="relative px-10 py-14">
            <h4 className="mb-8 text-xs uppercase tracking-[0.25em]">
              Opening Hours
            </h4>

            <div className="space-y-3 leading-8">
              <p>Mon: CLOSED</p>
              <p>Tue To Thu: 11 AM – 10 PM</p>
              <p>Fri: Closed</p>
              <p>Sat To Sun: 12 PM – 7 PM</p>
            </div>

            <div className="mt-16 text-sm leading-7">
              <p>Phone: (808) 555-0111</p>
              <p>3891 Ranchview Dr.</p>
              <p>Richardson, California 62639</p>
            </div>

            <p className="mt-16 text-sm leading-7">
              © 2025 Copyright - Pizzaro
              <br />
              Designed By "Name"
              <br />
              Powered By Framer
            </p>

            <img
              src={basil}
              alt=""
              className="absolute bottom-20 right-8 w-24"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
