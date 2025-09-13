const Footer = () => {
  return (
    <footer id="footer" className="bg-brand-dark text-gray-400">
      <div className="container pt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* <!-- Top Contact Bar --> */}
        <div className="py-10 md:px-6 lg:px-10 border rounded-3xl md:mx-20 lg:mx-0 border-gray-900">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center md:text-left">
            {/* <!-- Call Us --> */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-md">Call us</p>
                <p className="text-sm">+91 752-333-4444</p>
              </div>
            </div>

            {/* <!-- Write to us --> */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-md">Write to us</p>
                <p className="text-sm">hello@rentzy.com</p>
              </div>
            </div>

            {/* <!-- Address --> */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-md">Address</p>
                <p className="text-sm">123 Random St, Random City, Random State, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main Footer Content --> */}
        <div className="py-16 md:px-20 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* <!-- Column 1: Brand Info --> */}
          <div className="col-span-3">
            <h3 className="text-3xl font-bold text-white mb-4">
              RENT<span className="text-brand-gold">ZY</span>
            </h3>
            <p className="mb-6">
              Rent a car imperdiet sapien porttitor to the bibendum ellentesue
              the commodo erat nesuen.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-700 rounded-full text-white hover:bg-brand-gold hover:border-brand-gold hover:text-black transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.2-97.2-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-700 rounded-full text-white hover:bg-brand-gold hover:border-brand-gold hover:text-black transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-700 rounded-full text-white hover:bg-brand-gold hover:border-brand-gold hover:text-black transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM232.615 354.708V157.292l157.154 98.708-157.154 98.708z" />
                </svg>
              </a>
            </div>
          </div>

          {/* <!-- Column 2: Quick Links --> */}
          <div className="col-span-3 lg:col-start-6">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  Cars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  Car Types
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 3: Subscribe --> */}
          <div className="col-span-3 lg:col-start-10">
            <h3 className="text-xl font-bold text-white mb-6">Subscribe</h3>
            <p className="mb-6">
              Want to be notified about our services. Just sign up and we'll
              send you a notification by email.
            </p>
            <form action="#" className="relative">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border-2 border-gray-700 rounded-full py-4 pl-6 pr-20 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-black hover:bg-yellow-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Bottom Bar --> */}
        <div className="py-6 border-t border-gray-900 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-center sm:text-left">
            ©2025{" "}
            <a href="#" className="text-white hover:text-brand-gold underline">
              Rentzy by Ram Prasad Baidya
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
