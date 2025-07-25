import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show title when scrolled past 100px (adjust if needed)
      setShowTitle(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 bg-black z-50 shadow transition duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Show title only when scrolled past header */}
        <Link
          to="/"
          className={`text-2xl sm:text-3xl font-bold transition duration-300 ${
            showTitle ? "text-red-500 opacity-100" : "opacity-0"
          }`}
        >
          ICIA 2026
        </Link>

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
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7 text-white" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium bg-black text-white">
          {sections.map((section) => (
            <li key={section.to}>
              <Link
                to={section.to}
                onClick={() => setMenuOpen(false)}
                className="block py-2 border-b border-gray-700 hover:text-red-600"
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
