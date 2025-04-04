export default function AboutWorkshop() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="relative" data-aos="fade-right">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://s39613.pcdn.co/wp-content/uploads/2021/02/Five-Tips-to-Creating-a-More-Engaging-Online-Course-for-Adult-Learners.jpg"
                alt="Student participating in a workshop"
                className="w-full h-auto object-cover"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://youtu.be/BS4TUd7FJSg"
                  className="w-16 h-16 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div data-aos="fade-left">
            <div className="mb-4">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                FREE WORKSHOP
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
              Join Our Free Workshops
            </h2>
            <p className="text-gray-text mb-8">
              Join us at our Free Workshop event to expand your knowledge, gain
              new insights, and connect with like-minded individuals. Our expert
              speakers will provide valuable insights on a range of topics. Join
              us at our Free Workshop event to expand your knowledge, gain new
              insights, and topics.
            </p>

            <button className="bg-[#6f42c1] text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition duration-300 flex items-center space-x-2">
              <span>More Upcoming Workshop</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
    </section>
  );
}
