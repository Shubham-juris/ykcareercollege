export default function AboutHero() {
  return (
    <section className="relative py-20 bg-light-blue text-black overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-up"
          >
            About Us One
          </h1>
          <div
            className="flex items-center justify-center space-x-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a
              href="/"
              className="text-primary hover:text-primary-light transition-colors"
            >
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span>About Us One</span>
          </div>
        </div>
      </div>

      {/* Background Elements/Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute left-0 top-10 opacity-20">
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75 0L92.5 57.5L150 75L92.5 92.5L75 150L57.5 92.5L0 75L57.5 57.5L75 0Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="absolute right-0 bottom-10 opacity-20">
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="75" cy="75" r="75" fill="black" />
          </svg>
        </div>
      </div>
    </section>
  );
}
