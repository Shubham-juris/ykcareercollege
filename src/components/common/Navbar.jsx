import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-[#7e66f9] font-medium"
      : "text-gray-600 hover:text-[#7e66f9] transition-colors";

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white p-1 rounded-md mx-2">
            <img
              src={logo}
              alt="Yk Career College Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* <span className="font-bold text-2xl text-[#7e66f9]">
            Yk Career College
          </span> */}
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/courses" className={linkClasses}>
            Courses
          </NavLink>
{/*           <NavLink to="/teams" className={linkClasses}>
            Teams
          </NavLink>
          <NavLink to="/blog" className={linkClasses}>
            Blog
          </NavLink> */}
        </div>

       
        <div className="hidden md:block">
          <a
            href="tel:(403)921-4529"
            className="bg-[#7e66f9] text-white px-5 py-2 rounded-md font-medium hover:bg-[#6a57cf] transition-colors text-center mt-3 block"
          >
          (403)921-4529
          </a>
        </div>

       
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden shadow-md mt-2 py-3 px-4 bg-white">
          <div className="flex flex-col space-y-3">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/courses" className={linkClasses}>
              Courses
            </NavLink>
            <NavLink to="/teams" className={linkClasses}>
              Teams
            </NavLink>
            <NavLink to="/blog" className={linkClasses}>
              Blog
            </NavLink>
            <a
              href="tel:(403)921-4529"
              className="bg-[#7e66f9] text-white px-5 py-2 rounded-md font-medium hover:bg-[#6a57cf] transition-colors text-center mt-3 block"
            >
             (403)921-4529
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
