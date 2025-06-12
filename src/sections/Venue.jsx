// src/sections/Venue.jsx

const Venue = () => {
  return (
    <section id="venue" className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-black-700 mb-4 underline decoration-4 decoration-red-600 underline-offset-8">Event Venue</h2>
          <p className="text-lg font-medium text-gray-800">
            Dept. of Computer Science & Engineering, NIT Jamshedpur, Jharkhand, India
          </p>
          <p className="text-sm text-gray-600 mb-4">Friday to Saturday, 21-22nd June 2026</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">How to Reach</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
            <li>Nearest Airport: Birsa Munda Airport, Ranchi (~130 km)</li>
            <li>Railway Station: Tatanagar Junction (~10 km)</li>
            <li>Well-connected by road via NH33</li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="rounded-xl overflow-hidden shadow-md border">
          <iframe
            title="NIT Jamshedpur Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114154.82462141957!2d86.05069374631025!3d22.7862837534646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e2a03255c679%3A0x5b0c11f5739c6f55!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1718097659475!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Venue;
