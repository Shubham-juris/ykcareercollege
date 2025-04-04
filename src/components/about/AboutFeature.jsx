import React from "react";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaCertificate,
  FaRoad,
} from "react-icons/fa";

const FeatureCard = ({ title, description, icon, delay }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-dark">{title}</h3>
        <p className="text-gray-text">{description}</p>
      </div>
    </div>
  );
};

export default function AboutFeature() {
  return (
    <section className="py-16 md:py-24 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h5 className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
            WHAT WE OFFER
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">
            Learn New Skills When And
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Where You Like
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Remote Learning"
            description="Lorem Ipsum is simply dummy text of the printing and industry. typesetting industry."
            icon={<FaLaptopCode />}
            delay={100}
          />
          <FeatureCard
            title="Awesome Tutors"
            description="Lorem Ipsum is simply dummy text of the printing and industry. typesetting industry."
            icon={<FaChalkboardTeacher />}
            delay={200}
          />
          <FeatureCard
            title="Global Certificate"
            description="Lorem Ipsum is simply dummy text of the printing and industry. typesetting industry."
            icon={<FaCertificate />}
            delay={300}
          />
          <FeatureCard
            title="Carrier Guideline"
            description="Lorem Ipsum is simply dummy text of the printing and industry. typesetting industry."
            icon={<FaRoad />}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}
