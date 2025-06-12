import { useState } from 'react';

const trackData = [
  {
    title: 'Track 1: IoT Edge and Cloud Architectures',
    chair: 'Prof. A. B. C. - Track Chair',
    topics: [
      'Internet of Things (IoT)',
      'Cloud Computing',
      'Cloud and Grid Computing for Big Data',
      'IoT Edge and Cloud Architectures',
      'Security and Privacy for IoT',
      'Machine Learning and IoT',
      'Big Data Infrastructure and Platform',
      'Fog Computing',
    ],
  },
  {
    title: 'Track 2: Smart Systems and Industry 4.0',
    chair: 'Prof. X. Y. Z. - Track Chair',
    topics: [
      'Cyber-Physical Systems',
      'Smart Healthcare',
      'Industrial IoT',
      'Digital Twins',
      'Smart Manufacturing',
      'Predictive Maintenance',
      'AI for Industry 4.0',
      'Edge Analytics',
    ],
  },
  {
    title: 'Track 3: AI & ML in Cloud and IoT',
    chair: 'Dr. John Doe - Track Chair',
    topics: [
      'AI at the Edge',
      'Federated Learning',
      'Reinforcement Learning in IoT',
      'Data-driven Decision Systems',
      'AI Models for Fog Computing',
      'Deep Learning for Sensor Data',
      'ML Infrastructure for Big Data',
      'Explainable AI (XAI)',
    ],
  },
  {
    title: 'Track 4: Security, Privacy & Blockchain',
    chair: 'Dr. Jane Smith - Track Chair',
    topics: [
      'IoT Security and Privacy',
      'Blockchain for Cloud and IoT',
      'Cryptographic Protocols',
      'Secure Cloud Architecture',
      'Authentication in IoT Devices',
      'Zero Trust Architecture',
      'Data Provenance & Integrity',
      'Trust Models and Identity',
    ],
  },
];

export default function Schedule() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-white to-slate-100 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black-800 mb-14 underline underline-offset-8 decoration-red-500">
          Event Schedule
        </h2>

        {/* Track Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {trackData.map((track, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 text-base sm:text-lg font-semibold sm:px-8 py-3 rounded-full shadow-md 
                ${
                  activeIndex === index
                    ? 'bg-red-700 text-white scale-105'
                    : 'bg-white text-red-700 border border-red-300 hover:bg-red-50 hover:shadow-lg'
                }`}
            >
              <div className=" px-10"> {track.title.split(':')[0]}</div>
            </button>
          ))}
        </div>

        {/* Track Content */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-12 transition-all duration-300 border border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-2">
            {trackData[activeIndex].title}
          </h3>
          <p className="mb-6 text-gray-700 font-medium italic">
            {trackData[activeIndex].chair}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base leading-relaxed">
            {trackData[activeIndex].topics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
