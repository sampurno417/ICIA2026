export default function About() {
  return (
    <section className="bg-white py-20 px-4" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black-700 mb-6 underline-offset-28 underline decoration-red-700 decoration-4 underline-offset-8 ">About The Event</h2>

        <p className="text-gray-700 text-justify leading-relaxed mb-6">
          ICIA2024 will provide a stage to research scholars, scientists and practitioners to put forward and discuss the recent innovations, concerns and trends in the region of computational intelligence. The attendees can also enlighten the challenges faced and possible solutions found in the computation of various applications of IoT. 
          <br /><br />
          Thus, the major objective of this conference is to bring various experts of the research society together and reciprocate the noble knowledge, new evolutions and key issues in the fields related to IoT. ICIA 2026 is looking forward to stow the gap between knowledge and next generation development of computational intelligence of applications of IoT. 
          <br /><br />
          ICIA 2026 invites all the partakers to exchange their learnings and knowledge. The scope of the conference is multidisciplinary and focuses on the emerging areas in the field of Wireless Sensor Networks, Security Issues in developing protocols, IoT edges and cloud architecture, and Applications of IoT, AI/ML/DL. We are looking forward to hosting you @ICIA2026 at NIT Jamshedpur.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left text-gray-800 mt-10">
          <div>
            <h3 className="text-xl font-semibold text-black-600 mb-3 underline-offset-28 underline decoration-red-700 decoration-4 underline-offset-8">Where</h3>
            <p>Dept. of CSE,<br />NIT Jamshedpur,<br />Jharkhand, India</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black-600 mb-3 underline-offset-28 underline decoration-red-700 decoration-4 underline-offset-8">When</h3>
            <p>Friday to Saturday<br />21–22 June 2026</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black-600 mb-3 underline-offset-28 underline decoration-red-700 decoration-4 underline-offset-8">Previous Edition</h3>
            <p>Proceedings of ICIA 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
}
