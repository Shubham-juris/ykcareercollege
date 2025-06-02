
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#303d55] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white p-1 rounded-md mx-2">
                <img
                  src={logo}
                  alt="Yk Career College Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <span className="font-bold text-xl">Yk Career College</span>
            </div>
            <p className="text-gray-300 mb-6">
              We're dedicated to providing high-quality education to everyone.
              Our online platform makes learning accessible, flexible, and
              enjoyable.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100095249027209"
                className="h-10 w-10 bg-[#4b5675] flex items-center justify-center rounded-full hover:bg-[#7e66f9] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-facebook"
                >
                  <path d="M8.94 8.57H7.64v5.34H5.56V8.57H4.64V6.72h.92V5.81c0-1.21.53-3.11 3.12-3.11l2.29.01v2.07h-1.66c-.16 0-.4.08-.4.43v.9h2.03l-.26 1.85H8.94v5.34z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/p/DJ48Wz8zP0S/"
                className="h-10 w-10 bg-[#4b5675] flex items-center justify-center rounded-full hover:bg-[#7e66f9] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="bi bi-instagram"
                >
                  <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5C18.32 20 20 18.32 20 16.25v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.25-2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://ca.linkedin.com/in/s-jassal"
                className="h-10 w-10 bg-[#4b5675] flex items-center justify-center rounded-full hover:bg-[#7e66f9] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-linkedin"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.354-.554 1.354-1.248-.015-.708-.517-1.248-1.339-1.248C3.243 2.685 2.71 3.225 2.71 3.932c0 .694.502 1.248 1.316 1.248h.016zm4.908 8.212V9.359c0-.215.016-.43.08-.584.176-.43.576-.875 1.248-.875.88 0 1.233.66 1.233 1.63v3.864h2.401V9.266c0-2.22-1.183-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.19v.025h-.016a5.35 5.35 0 01.016-.025V6.169h-2.4c.03.684 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-white hover:underline transition-colors">About Us</a></li>
              <li><a href="/courses" className="text-gray-300 hover:text-white hover:underline transition-colors">All Courses</a></li>
              <li><a href="/instructors" className="text-gray-300 hover:text-white hover:underline transition-colors">Instructors</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-white hover:underline transition-colors">Testimonials</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white hover:underline transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white hover:underline transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="/help" className="text-gray-300 hover:text-white hover:underline transition-colors">Help Center</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white hover:underline transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white hover:underline transition-colors">Terms & Conditions</a></li>
              <li><a href="/sitemap" className="text-gray-300 hover:text-white hover:underline transition-colors">Site Map</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-white hover:underline transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7e66f9] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-300">
                  215-213 Main Street, <br />
                  Slave Lake AB, T0G 2A2<br /><br />
                  311 32 WESTWINDS CRES NE, #110, CALGARY, Alberta, T3J5L3
                </div>
              </div>

              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7e66f9] mr-3 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-gray-300">
                  <a href="tel:(403)921-4529" className="block hover:text-[#7e66f9] transition-colors">(403) 921-4529</a>
                </div>
              </div>

              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7e66f9] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:ykcareercollege@gmail.com" className="text-gray-300 hover:text-[#7e66f9] transition-colors">
                  ykcareercollege@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-[#4b5675] text-center">
          <p className="text-gray-400">O/A as Northern Career Education College</p>
        </div>
      </div>
    </footer>
  );
}

