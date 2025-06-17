// src/sections/Registration.jsx
export default function Registration() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <h2 className="text-3xl font-bold text-center text-red-600">
        Registration Information
      </h2>

      <p className="text-center text-gray-700 text-lg">
        Participate in ICIA 2026 and connect with global researchers, industry experts, and thought leaders in the field of IoT.
      </p>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Categories & Fees</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Students (UG/PG):</strong> ₹1000</li>
          <li><strong>Research Scholars:</strong> ₹1500</li>
          <li><strong>Academicians:</strong> ₹2000</li>
          <li><strong>Industry Professionals:</strong> ₹3000</li>
          <li><strong>International Participants:</strong> $100</li>
        </ul>
      </div>

      <div className="text-center">
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
