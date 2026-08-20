import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Container from "../../common/Container";
import Button from "../../common/Button";

import { navLinks } from "../../../data/navigation";
import logo from "../../../assets/images/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-white py-6">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="Pizzaro Logo" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Explore Menu - Desktop */}
            <Button
              onClick={() => navigate("/menu")}
              className="hidden px-6 py-3 lg:inline-flex"
            >
              Explore Menu
            </Button>

            {/* Hamburger - Mobile & Tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition hover:opacity-90 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <div className="space-y-1">
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-6 border-t border-black/10 pt-6 lg:hidden">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-medium uppercase tracking-wide ${
                        isActive ? "text-primary" : "text-black"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Explore Menu */}
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/menu");
              }}
              className="mt-6 w-full justify-center"
            >
              Explore Menu
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
