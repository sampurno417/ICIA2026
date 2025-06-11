// export default function Home() {
//   return (
//     <section className="bg-gray-100 py-12 md:py-20">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
//         {/* Text Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
//             International Conference on <br />
//             <span className="text-blue-600">IoT and its Applications (ICIA-2026)</span>
//           </h1>
//           <p className="text-lg text-gray-700 mb-4">
//             📍 Dept. of CSE, NIT Jamshedpur, Jharkhand, India <br />
//             📅 21-22nd June 2026 <br />
//             🌐 Hybrid Mode
//           </p>

//           <p className="text-sm text-gray-600 mb-6">
//             ‘It is planned to publish the peer reviewed and selected papers of conference as proceedings with Springer in their prestigious “Lecture Notes in Electrical Engineering” series (https://www.springer.com/series/7818). For detailed instructions for author and editors of conference proceedings, kindly visit the following link: https://www.springer.com/us/authors-editors/conference-proceedings. Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published. Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.’
//           </p>

//           <a
//             href="#registration"
//             className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Register Now
//           </a>
//         </div>

//         {/* Hero Image */}
//         <div className="flex-1">
//           <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg shadow-inner flex items-center justify-center text-gray-600">
//             Hero Image Placeholder
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




export default function Home() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-20 px-4 text-center text-white"
      style={{
        backgroundImage: `url('https://images.shiksha.com/mediadata/images/1714986883phpiQcdtZ.jpeg')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto mt-40">
        {/* Placeholder for Logo */}
        {/* <div className="mb-6">
          <img
            src="/logo-placeholder.png"
            alt="Conference Logo"
            className="mx-auto w-40 h-40 object-contain"
          />
        </div> */}

        {/* Conference Name */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          International Conference on IoT and its Applications <span className="text-red-600"> (ICIA-2026)</span>
        </h1>

        {/* Date and Location */}
        <p className="text-lg mb-2">21–22 June 2026</p>
        <p className="text-md mb-4">
          Dept. of CSE, NIT Jamshedpur, Jharkhand, India<br />
          (Hybrid Mode)
        </p>

        {/* Tagline / Publication Info */}
        <div className="max-w-3xl mx-auto text-sm text-gray-200 italic mb-6">
          ‘It is planned to publish the peer-reviewed and selected papers of the conference as proceedings with Springer in their prestigious “Lecture Notes in Electrical Engineering” series...'
        </div>

        {/* Call to Action */}
       <a
  href="#registration"
  className="relative inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg overflow-hidden border border-red-600 shadow-2xl transition-all
    before:absolute before:right-0 before:top-0 before:h-full before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700
    hover:shadow-red-500 hover:before:-translate-x-40"
>
  <span className="relative z-10">Register Now</span>
</a>

      </div>
    </section>
  );
}

