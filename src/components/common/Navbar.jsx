import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-[#7e66f9] p-2 rounded-md mr-2">
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <span className="font-bold text-xl text-gray-800">Edu Vice</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-[#7e66f9] font-medium">
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-gray-600 hover:text-[#7e66f9] transition-colors"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="text-gray-600 hover:text-[#7e66f9] transition-colors"
          >
            Courses
          </Link>
          <Link
            to="/team"
            className="text-gray-600 hover:text-[#7e66f9] transition-colors"
          >
            Teams
          </Link>
          <Link
            to="blog"
            className="text-gray-600 hover:text-[#7e66f9] transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/shop"
            className="text-gray-600 hover:text-[#7e66f9] transition-colors"
          >
            Shop
          </Link>
        </div>

        {/* Login/Register Button */}
        <div className="hidden md:block">
          <Link
            to="/"
            className="bg-[#7e66f9] text-white px-5 py-2 rounded-md font-medium hover:bg-[#6a57cf] transition-colors"
          >
            Login / Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden shadow-md mt-2 py-3 px-4 bg-white">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-[#7e66f9] font-medium">
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-[#7e66f9] transition-colors"
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-gray-600 hover:text-[#7e66f9] transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/team"
              className="text-gray-600 hover:text-[#7e66f9] transition-colors"
            >
              Teams
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-[#7e66f9] transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/shop"
              className="text-gray-600 hover:text-[#7e66f9] transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/"
              className="bg-[#7e66f9] text-white px-5 py-2 rounded-md font-medium hover:bg-[#6a57cf] transition-colors text-center mt-3"
            >
              Login | Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
