import { Link } from "react-router-dom";

export default function AboutHero({ head }) {
  return (
    <section className=" font-mono relative py-20 bg-light-blue text-black overflow-hidden bg-gradient-to-r from-fuchsia-100 to-red-200">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-up"
          >
            {head}
          </h1>
        </div>
      </div>

      {/* Background Elements/Shapes */}
    </section>
  );
}
