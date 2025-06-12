const faqs = [
  {
    question: "When will the conference take place? Where is it located?",
    answer: "The ICIA2024 Conference will take place online on 29-30th March 2024.",
  },
  {
    question: "How can I register? What are the registration rates?",
    answer: "Registration details are already available in conference website. Please visit the website for ICIA2024 for deadlines, rates, and other registration information.",
  },
  {
    question: "I only want to attend one day of the conference, is that possible?",
    answer: "Yes, it is possible. Please note that your registration is valid for all sessions and events on both days and it’s up to you that how many sessions you attend. Registration fee will be charged for two days.",
  },
  {
    question: "Is the conference schedule available?",
    answer: "Details will be posted on our website as they are confirmed. A full conference schedule, including conference sessions, will be available on our website.",
  },
  {
    question: "How can I reserve exhibitor space in the exhibit hall?",
    answer: "Email cianitjsr2020@gmail.com for more information.",
  },
  {
    question: "How can my organization become a conference sponsor?",
    answer: "Sponsorship opportunities are limited, so act today. Sponsorships are processed in April thru August for the conference the following year. To become a sponsor and for more information, please contact cianitjsr2020@gmail.com",
  },
  {
    question: "Can I advertise in the conference program?",
    answer: "Yes, please contact cianitjsr2020@gmail.com to make arrangements.",
  },
  {
    question: "How can I receive a list of participants or attendees?",
    answer: "The participant list is sent to registered attendees twice: once after the early bird registration deadline, then after the regular registration deadline. A full participant list will be available at the ICIA-2024 Conference.",
  },
  {
    question: "I just want to attend one session. Is that possible to do without registering for the conference?",
    answer: "Yes, it is possible. Please note that your registration is valid for all sessions and events on both days and it’s up to you that how many sessions you attend. Registration fee will be charged for two days.",
  },
  {
    question: "I'm a presenter - is there a PowerPoint template I should be using?",
    answer: "There is No specific template for PowerPoint, but contents should be visible and background must be white.",
  },
  {
    question: "Is there funding available to help with travel/registration costs?",
    answer: "There is No specific template for PowerPoint, but contents should be visible and background must be white.",
  },
  {
    question: "Will I receive a certificate of attendance?",
    answer: "A certificate of attendance is available upon request by email cianitjsr2020@gmail.com following the conference.",
  },
  {
    question: "What is the cancellation policy for the conference?",
    answer: "No refund will be issued for cancellations after registration.",
  },
  {
    question: "My question is not listed here. Whom do I contact?",
    answer: "Please contact cianitjsr2020@gmail.com for assistance.",
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 underline underline-offset-8 decoration-red-500">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-2xl px-6 py-5 bg-white shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300"
                >
                  {faq.question}
                </h3>
                <span className="text-xl text-red-500 transform transition-transform duration-300 group-hover:rotate-45">+</span>
              </div>

              <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
