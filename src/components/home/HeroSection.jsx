export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f3f0ff] to-[#fef7f1] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
          <span className="text-xs uppercase tracking-widest text-[#7e66f9] font-semibold mb-4 block">
            EXCELLENCE IN EDUCATION
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Start Better <br />
            Learning Future <br />
            From Here
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            Discover a new way of learning with our innovative platform. Join
            thousands of students from around the world in a journey of
            knowledge and personal growth.
          </p>
          <button className="bg-[#7e66f9] text-white px-6 py-3 rounded-md font-medium hover:bg-[#6a57cf] transition-colors flex items-center">
            Get Started Today
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

        {/* Right Image with Elements */}
        <div className="w-full md:w-1/2 relative z-10">
          <div className="relative">
            {/* Main Image */}
            <div className="bg-white p-4 rounded-2xl shadow-xl max-w-md mx-auto relative z-10">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://ext.same-assets.com/2333005974/1316595101.png"
                  alt="Online Education Platform"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7e66f9] rounded-full opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>

            {/* Floating Elements */}
            <div className="absolute -left-10 top-1/2 bg-white p-2 rounded-lg shadow-md">
              <div className="bg-[#7e66f9] h-10 w-10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-white p-2 rounded-lg shadow-md">
              <div className="bg-[#6a57cf] h-10 w-10 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-[#6a57cf] rounded-full opacity-10"></div>
      <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-[#7e66f9] rounded-full opacity-10"></div>
      <div className="absolute left-1/4 bottom-0 w-16 h-16 bg-[#6a57cf] rounded-full opacity-20"></div>
    </section>
  );
}
