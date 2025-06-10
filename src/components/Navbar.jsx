import { useState } from 'react';

const sections = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Committee', href: '#committee' },
  { name: 'Call for Papers', href: '#call-for-papers' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Venue', href: '#venue' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
  { name: 'Registration', href: '#registration' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Conference 2025</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map(section => (
            <li key={section.href}>
              <a
                href={section.href}
                className="hover:text-blue-600 transition-colors duration-200"
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
          {sections.map(section => (
            <li key={section.href}>
              <a
                href={section.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 border-b hover:text-blue-600 transition-colors"
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
