import React from "react";
import CountUp from "react-countup";

const StatItem = ({ count, label }) => {
  return (
    <div className="text-center" data-aos="fade-up">
      <div className="text-3xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
        <CountUp end={count} duration={2.5} enableScrollSpy />
        <span className="ml-1">+</span>
      </div>
      <p className="text-white text-sm md:text-base">{label}</p>
    </div>
  );
};

export default function AboutStatistic() {
  return (
    <section className="bg-[#806cff] text-white py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem count={336} label="Students Enrolled" />
          <StatItem count={292} label="Winning Award" />
          <StatItem count={295} label="Academic Programs" />
          <StatItem count={191} label="Online Instructor" />
        </div>
      </div>
    </section>
  );
}
