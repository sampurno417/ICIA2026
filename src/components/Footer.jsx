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

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Conference Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">ICIA 2026</h3>
          <p className="text-sm">
            Department of CSE,<br />
            NIT Jamshedpur,<br />
            Jharkhand, India - 831014
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
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
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm hover:text-red-500 transition duration-200">
            Email: <a href="mailto:icia.communication2@gmail.com" className="underline">icia.communication2@gmail.com</a><br />
            Phone: +91 7980 213 723
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-300 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} ICIA 2026 | All rights reserved.
      </div>
    </footer>
  );
}
