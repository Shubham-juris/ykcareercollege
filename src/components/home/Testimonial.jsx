import { useState } from "react";

export default function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      content:
        "Client-centric potentialities. Intrinsically redefine resource-leveling meta services via fully tested action items. Appropriately brand open source e-tailers through one-to-one communities. Conveniently empower functionalized through technically sound quality vectors Uniquely embrace high standards.",
      author: {
        name: "David Alexon",
        position: "JavaScript Developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    },
    {
      id: 2,
      content:
        "The instructors at Edu-vice are incredible. The courses are well-structured and the community support is phenomenal. I was able to land a new job within weeks of completing my certification.",
      author: {
        name: "Sarah Johnson",
        position: "Data Scientist",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
      },
    },
    {
      id: 3,
      content:
        "I've tried many online learning platforms, but Edu-vice stands out with its practical, hands-on approach. The project-based learning helped me build a portfolio that impressed my employers.",
      author: {
        name: "Michael Chen",
        position: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#f3f0ff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image Area */}
          <div className="w-full md:w-2/5 mb-10 md:mb-0">
            <div className="max-w-md mx-auto md:mx-0 relative">
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <img
                  src="https://media.istockphoto.com/id/1289977253/photo/young-business-person-stock-photo.jpg?s=1024x1024&w=is&k=20&c=3qmPj3KzgNyFZogd3iiWhQ5rFwO7r4C6JvTkcybNeD4="
                  alt="Student testimonial"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#7e66f9] rounded-full opacity-15 z-[-1]"></div>
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-[#6a57cf] rounded-full opacity-15 z-[-1]"></div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-3/5 md:pl-16">
            <span className="text-[#7e66f9] font-semibold mb-4 block">
              Testimonial
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              What Our Student Says
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-[#7e66f9] opacity-20 absolute -top-6 -left-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-gray-600 mb-6 relative z-10">
                  {testimonials[currentTestimonial].content}
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonials[currentTestimonial].author.image}
                    alt={testimonials[currentTestimonial].author.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonials[currentTestimonial].author.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].author.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6 justify-end">
              <button
                onClick={prevTestimonial}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-[#7e66f9] hover:text-white hover:border-[#7e66f9] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-[#7e66f9] hover:text-white hover:border-[#7e66f9] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
