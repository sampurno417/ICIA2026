import React from 'react';

const membersWithImage = [
  {
    role: 'Chief Patron',
    people: [
      {
        name: 'Prof. (Dr.) Goutam Sutradhar',
        title: 'Hon’ble Director, NIT, Jamshedpur',
      },
    ],
  },
  {
    role: 'Patron',
    people: [
      {
        name: 'Prof. (Dr.) Danish Ali Khan',
        title: 'HoD, Dept. of CSE, NIT, Jamshedpur',
      },
    ],
  },
  {
    role: 'General Chair',
    people: [
      {
        name: 'Dr. Binod Kumar Singh',
        title: 'Associate Professor, Dept. of CSE',
      },
      {
        name: 'Prof. (Dr.) Dilip Kumar Yadav',
        title: 'Dept. of CSE, NIT, Jamshedpur',
      },
    ],
  },
  {
    role: 'Committee Chairman',
    people: [
      {
        name: 'Dr. Sanjay Kumar',
        title: 'Associate Professor, Dept. of CSE',
      },
    ],
  },
  {
    role: 'Joint Conveners',
    people: [
      {
        name: 'Dr. Dilip Kumar Shaw',
        title: 'Associate Professor, Dept. of CSE',
      },
      {
        name: 'Dr. Dilip Kumar',
        title: 'Assistant Professor, Dept. of CSE',
      },
    ],
  },
  {
    role: 'Organizing Secretary',
    people: [
      {
        name: 'Dr. Subrata Dutta',
        title: 'Assistant Professor, Dept. of CSE',
      },
      {
        name: 'Dr. Chandrashekhar Azad',
        title: 'Assistant Professor, Dept. of CSE',
      },
      {
        name: 'Dr. Amit Majumder',
        title: 'Assistant Professor, Dept. of CSE',
      },
      {
        name: 'Dr. Mayukh Sarkar',
        title: 'Assistant Professor, Dept. of CSE',
      },
      {
        name: 'Dr. B. K. Singh',
        title: 'Associate Professor, Dept. of CSE',
      },
    ],
  },
];

const otherCommittees = [
  {
    title: 'Organizing Committee Members',
    members: [
      'Dr. Rajiv Ranjan Suman, NIT Jamshedpur, India',
      'Dr. Alekha Kumar Mishra, NIT Jamshedpur, India',
      'Dr. Koushlendra Kumar Singh, NIT Jamshedpur, India',
      'Dr. Dinesh Kumar, NIT Jamshedpur, India',
      'Dr. Gopa Bhaumik, NIT Jamshedpur, India',
      'Dr. Mayukh Sarkar, NIT Jamshedpur, India',
      'Dr. Ashish Kumar Sahu, NIT Jamshedpur, India',
      'Dr. B Ramachandra Reddy, NIT Jamshedpur, India',
      'Dr. Jitesh Pradhan, NIT Jamshedpur, India',
    ],
  },
  {
    title: 'Website Chair',
    members: [
      'Dr. Subrata Dutta, NIT Jamshedpur, India',
      'Mr. Kailash Chandra Mishra, NIT Jamshedpur, India',
      'Mr. Sandeep Mahato, NIT Jamshedpur, India',
    ],
  },
  {
    title: 'Publicity Chair',
    members: [
      'Dr. Subrata Dutta, NIT Jamshedpur, India',
      'Dr. Swalpa Kumar Roy, Jalpaiguri Government Engineering College, India',
      'Dr. Pradip Dhal, KIIT University, India',
      'Dr. Arindam Giri, Haldia Institute of Technology, India',
      'Mr. Aditya Narayan Hati, NIT Jamshedpur, India',
      'Mr. Ravishankar Mehta, NIT Jamshedpur, India',
      'Mr. Saptarshi Roychowdhury, NIT Jamshedpur, India',
      'Ms. Anwesa Das, NIT Jamshedpur, India',
    ],
  },
  {
    title: 'Local Organizing Committee – Presentation & Publication',
    members: [
      'Dr. Subrata Dutta, NIT Jamshedpur, India',
      'Dr. Chadrashekhar Azad, NIT Jamshedpur, India',
      'Dr. Amit Majumder, NIT Jamshedpur, India',
    ],
  },
  {
    title: 'Advisory Committee',
    members: [
      'Dr. Chintalacheruvu Madhusudana Rao, NIT Jamshedpur, India',
      'Prof. Mrityunjay Kumar Sinha, NIT Jamshedpur, India',
      'Dr. Md Ashique Hassan, NIT Jamshedpur, India',
      'Dr. Mrutyunjay Rout, NIT Jamshedpur, India',
      'Dr. Om Hari Gupta, NIT Jamshedpur, India',
      'Colonel Dr. Nisheeth Kumar Rai, NIT Jamshedpur, India',
    ],
  },
  {
    title: 'Technical Program Committee',
    members: [
      'Dr. Showmik Bhowmik, G K Choudhuri Institute of Engineering & Technology, India',
      'Dr. Palash Das, IIT Jodhpur, India',
      'Dr. Ruchira Naskar, IIEST Shibpur, India',
      'Dr. Rabindra Kumar Barik, KIIT University, India',
      'Dr. Shreya Banerjee, Manipal Institute of Technology Bengaluru, India',
      'Dr. Mainak Chakraborty, KIIT University, India',
      'Dr. Sanjay Kumar, SRM University AP, Andhra Pradesh, India',
      'Dr. Swagata Samanta, SRM University AP, Andhra Pradesh, India',
      'Dr. Juin Acharjee, St. Thomas\' College of Engineering & Technology, India',
      'Dr. Partha Barma, Solverminds Solutions And Technologies Pvt Ltd, India',
      'Dr. Sheuli Chakraborty, Asansol Engineering College, India',
      'Mr. Debarshi Mazumder, Eastern International University Vietnam, Vietnam',
    ],
  },
];

const placeholderImage =
  'https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg';

export default function Committee() {
  return (
    <section id="committee" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14 tracking-tight underline decoration-4 decoration-red-700">
        Organizing Committee
      </h2>
      <div className="space-y-20">
        {membersWithImage.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold text-red-700 mb-6 border-b pb-1 border-black-200 text-center w-full">
              {group.role}
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {group.people.map((person, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg p-6 w-64 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={placeholderImage}
                    alt={person.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-red-500"
                  />
                  <p className="font-semibold text-lg text-gray-900">{person.name}</p>
                  <p className="text-sm text-gray-600">{person.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Other Committees */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCommittees.map((section, idx) => (
            <div
              key={idx}
              className="bg-blue-50 border-l-4 border-red-500 p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-semibold text-red-700 mb-3 border-b border-blue-300 pb-1">
                {section.title}
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                {section.members.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
