export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image Area */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 relative">
            <div className="relative z-10 max-w-lg mx-auto md:mx-0">
              <img
                src="https://cdn.pixabay.com/photo/2020/06/08/09/01/hair-5273705_1280.jpg"
                alt="Students learning together"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              {/* Purple paint splash */}
              <div className="absolute -bottom-10 -left-10 z-[-1]">
                <svg
                  width="150"
                  height="100"
                  viewBox="0 0 150 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5 8.5C49.5 -9.5 112 4 128.5 32.5C145 61 108 91.5 73 91.5C38 91.5 1.5 26.5 25.5 8.5Z"
                    fill="#7e66f9"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-1/2 md:pl-16">
            <div className="max-w-lg">
              <span className="text-[#7e66f9] font-semibold mb-4 block">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Creating A Community Of Life Long Learners
              </h2>
              <p className="text-gray-600 mb-8">
                We believe education is the foundation for a better future. Our
                platform connects students with resources, expert instructors,
                and a community of peers to foster continuous learning and
                growth.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#f3f0ff] p-2 rounded-full mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#7e66f9]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Learn From Anywhere
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Access all courses from any device, anytime, anywhere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f3f0ff] p-2 rounded-full mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#7e66f9]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Flexible Classes
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Choose from live sessions or recorded content at your own
                      pace.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f3f0ff] p-2 rounded-full mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#7e66f9]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Find the right instructor for you
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our instructors are experts in their fields with years of
                      experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#f3f0ff] p-2 rounded-full mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#7e66f9]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Popular topics to learn now
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Stay current with the most in-demand skills and knowledge
                      areas.
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-[#7e66f9] text-white px-6 py-3 rounded-md font-medium hover:bg-[#6a57cf] transition-colors flex items-center">
                Know About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
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
