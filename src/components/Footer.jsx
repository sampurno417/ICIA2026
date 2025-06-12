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
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#committee" className="hover:underline">Committee</a></li>
            <li><a href="#call-for-papers" className="hover:underline">Call for Papers</a></li>
            <li><a href="#schedule" className="hover:underline">Schedule</a></li>
            <li><a href="#venue" className="hover:underline">Venue</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">
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
