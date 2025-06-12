const CallForPapers = () => {
  return (
    <section className="px-6 py-16 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black-700 mb-8 underline underline-offset-8 decoration-4 decoration-red-600">Call for Papers</h2>

        <p className="text-lg text-justify mb-8">
          We cordially invite you to submit your research papers and abstracts related to IoT and its applications.
          Your contributions will play a vital role in enriching the conference's academic content and fostering
          innovation in this dynamic field. Submissions should align with the conference's themes and scope, which
          encompass a wide range of IoT-related topics.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">Important Dates</h3>
          <ul className="space-y-2 text-base">
            <li><strong>Paper Submission Deadline:</strong> 31/03/2024</li>
            <li><strong>Notification of Acceptance:</strong> 30/04/2024 &rarr; <span className="text-red-500 font-medium">20/05/2024 (Updated)</span></li>
            <li><strong>Camera Ready Paper Submission:</strong> 30/05/2024</li>
            <li><strong>Conference Dates:</strong> 21–22 June 2024</li>
            <li><strong>Registration Dates:</strong> 15th May – 5th June 2024</li>
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Templates & Guidelines</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Author Guideline</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Download LaTeX Template</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Download Word Template</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Submission Portal</h3>
            <a
              href="#"
              className="relative inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg overflow-hidden border border-red-600 shadow-2xl transition-all
    before:absolute before:right-0 before:top-0 before:h-full before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700
    hover:shadow-red-500 hover:before:-translate-x-80"
            >
              <span className="relative z-10">Microsoft CMT Submission Portal</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
