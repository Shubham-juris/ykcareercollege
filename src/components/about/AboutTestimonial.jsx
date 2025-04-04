import { useState } from "react";
import {
  FaStar,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    content:
      "Enable goal-oriented networks after enterprise wide leadership. Objectively leverage existing dependent leadership through multidisciplinary portals. Proactively envisioneer maintainable applications parallel aligents. Quickly maximize team driven resources",
    name: "Harry Tector",
    position: "Web Developer",
    imageUrl:
      "https://cccse.org/sites/default/files/hero-photos/website_header_1600x500_Faculty_FG.jpg",
  },
  {
    content:
      "Enable goal-oriented networks after enterprise wide leadership. Objectively leverage existing dependent leadership through multidisciplinary portals. Proactively envisioneer maintainable applications parallel aligents. Quickly maximize team driven resources",
    name: "Mark Adair",
    position: "CEO Specialist",
    imageUrl:
      "https://community.pepperdine.edu/seaver/center-teaching-excellence/images/online-discussions.jpg",
  },
];

export default function AboutTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 md:py-24 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h5 className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
            TESTIMONIALS
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Our Lovely Students Feedback
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 relative">
          {/* Testimonial content */}
          <div className="relative z-10" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400 text-xl mx-0.5" />
              ))}
            </div>

            <p className="text-gray-text text-lg text-center mb-8 relative">
              <span className="absolute -top-4 -left-2 text-primary opacity-20 text-5xl">
                <FaQuoteRight />
              </span>
              {testimonials[currentIndex].content}
            </p>

            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonials[currentIndex].imageUrl}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-dark text-xl">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Background decorative elements */}
          <div className="absolute bottom-0 right-0 opacity-5 text-primary">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0C0 110.457 89.543 200 200 200V100C200 44.772 155.228 0 100 0H0Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
