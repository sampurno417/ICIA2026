import { useState } from "react";

const sections = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Committee", href: "#committee" },
  { name: "Call for Papers", href: "#call-for-papers" },
  { name: "Schedule", href: "#schedule" },
  { name: "Venue", href: "#venue" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Registration", href: "#registration" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-black shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dhibutmbe/image/upload/5c9f9252-73a7-4bd4-8854-00b18f3d44de_lq1gkx.png"
            alt="ICIA Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-3xl sm:text-4xl text-red-500 font-bold">
            ICIA 2026
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map((section) => (
            <li key={section.href}>
              <a
                href={section.href}
                className="text-white hover:text-red-600 transition-colors duration-200"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          {sections.map((section) => (
            <li key={section.href}>
              <a
                href={section.href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-red-600 transition-colors duration-200"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
