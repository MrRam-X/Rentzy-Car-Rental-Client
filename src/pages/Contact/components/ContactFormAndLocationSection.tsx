import React from "react";

const ContactFormAndLocationSection: React.FC = () => {
  return (
    <section id="contact-form-section" className="bg-gray-100 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Get in touch Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-8">
              Get in touch
            </h2>
            <form action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Your Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your Name *"
                    className="w-full bg-white rounded-full border-transparent p-4 text-brand-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                  />
                </div>
                {/* Your Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Your Email *"
                    className="w-full bg-white rounded-full border-transparent p-4 text-brand-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                  />
                </div>
                {/* Your Number */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    placeholder="Your Number *"
                    className="w-full bg-white rounded-full border-transparent p-4 text-brand-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                  />
                </div>
                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder="Subject *"
                    className="w-full bg-white rounded-full border-transparent p-4 text-brand-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                  />
                </div>
                {/* Message */}
                <div className="sm:col-span-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    placeholder="Message *"
                    className="w-full bg-white rounded-3xl border-transparent p-4 text-brand-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full lg:w-auto bg-brand-gold text-black font-light py-4 px-10 rounded-full transition-all duration-300 ease-in-out hover:bg-brand-dark hover:text-white"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Location Map */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-8">
              Location
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-lg h-[500px] w-full">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.620932332617!2d-73.98782368459395!3d40.74844097932787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9a4b2b1b5%3A0x5e7a4b0d6b6d7b1a!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2s!4v1678886456789!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndLocationSection;
