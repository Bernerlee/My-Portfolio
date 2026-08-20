import { NavLink } from "react-router-dom";

import Container from "../../common/Container";
import Button from "../../common/Button";

import { navLinks } from "../../../data/navigation";
import logo from "../../../assets/images/logo.svg";

const Navbar = () => {
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
            <Button className="hidden px-6 py-3 lg:inline-flex">
              Explore Menu
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition hover:opacity-90"
              aria-label="Open menu"
            >
              <div className="space-y-1">
                <span className="block h-0.5 w-5 bg-white"></span>
                <span className="block h-0.5 w-5 bg-white"></span>
              </div>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
