// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  { name: "Home", to: "/" },
  { name: "Committee", to: "/committee" },
  { name: "Call for Papers", to: "/call-for-papers" },
  { name: "Schedule", to: "/schedule" },
  { name: "Venue", to: "/venue" },
  { name: "FAQ", to: "/faq" },
  { name: "Contact", to: "/contact" },
  { name: "Registration", to: "/registration" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-black z-40 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map((section) => (
            <li key={section.to}>
              <Link
                to={section.to}
                className="text-white hover:text-red-500 transition duration-200"
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          {sections.map((section) => (
            <li key={section.to}>
              <Link
                to={section.to}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-red-600 transition block"
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
