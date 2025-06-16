// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black py-6 shadow z-50 text-white">
      {/* Top Row: Logo and Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://res.cloudinary.com/dhibutmbe/image/upload/5c9f9252-73a7-4bd4-8854-00b18f3d44de_lq1gkx.png"
            alt="ICIA Logo"
            className="h-12 sm:h-14 w-auto"
          />
          <h1 className="text-3xl sm:text-4xl text-red-500 font-bold">
            ICIA 2026
          </h1>
        </Link>
      </div>

      {/* Bottom Row: Conference Details */}
      <div className="mt-6 text-center max-w-4xl mx-auto space-y-2 px-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400">
          International Conference on IoT and its Applications (ICIA-2026)
        </h2>
        <p className="text-sm sm:text-base">
          <strong>21–22 June 2026</strong>
        </p>
        <p className="text-sm sm:text-base">
          Dept. of CSE, NIT Jamshedpur, Jharkhand, India{" "}
          <span className="italic text-gray-300">(Hybrid Mode)</span>
        </p>
        <p className="text-sm sm:text-base italic text-gray-300">
          ‘It is planned to publish the peer-reviewed and selected papers of the conference as proceedings with Springer in their prestigious “Lecture Notes in Electrical Engineering” series...’
        </p>
      </div>
    </div>
  );
}
