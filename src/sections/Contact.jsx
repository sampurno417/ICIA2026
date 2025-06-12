export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black-700 mb-12 underline decoration-red-500 underline-offset-8">
          Contact Us
        </h2>

        <div className="bg-white shadow-xl rounded-xl p-8 space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">📍 Address</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Department of CSE, National Institute of Technology Jamshedpur,<br />
              831014, Jharkhand, India
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">📞 Phone Number</h3>
            <div className="space-y-4 text-base text-gray-700">
              <div>
                <p className="font-medium text-gray-900">Mr. Saptarshi Roychoudhury</p>
                <p>Research Scholar, Dept. of CSE, NIT Jamshedpur</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+917980213723" className="text-blue-500 underline hover:text-blue-700">
                    +91 7980 213 723
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Dr. Amit Majumder</p>
                <p>Assistant Professor, Dept. of CSE, NIT Jamshedpur</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+918296564414" className="text-blue-500 underline hover:text-blue-700">
                    +91 8296 564 414
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2">📧 Email</h3>
            <p className="text-base text-gray-700">
              <a href="mailto:icia.communication2@gmail.com" className="text-blue-500 underline hover:text-blue-700">
                icia.communication2@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
