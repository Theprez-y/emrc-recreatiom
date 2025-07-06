import Header from '../components/Header';
import Footer from '../components/Footer';
import { LuPhone, LuMail, LuMapPin, LuClock, LuLinkedin, LuTwitter, LuSend } from 'react-icons/lu';

const ContactPage = () => {
  return (
    <>
    <Header />
    <div className="max-w-[1200px] mx-auto px-4 py-12"> 
      <div className="grid gap-8 md:grid-cols-3">
        {/* Contact Information Card */}
        <div className="rounded-lg bg-blue-600 p-8 text-white">
          <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <LuPhone className="h-6 w-6" />
                <h3 className="font-semibold">Phone</h3>
              </div>
              <p className="text-blue-100 text-[.9rem]">0903 833 0948</p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <LuMail className="h-6 w-6" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-blue-100 text-[.9rem]">info@energymrc.ng</p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <LuMapPin className="h-6 w-6" />
                <h3 className="font-semibold">Office Location</h3>
              </div>
              <p className="text-blue-100 text-[.9rem]">Suite 219, Adamawa Plaza, central area,</p>
              <p className="text-blue-100 text-[.9rem]">Abuja 900103, Federal Capital Territory</p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <LuClock className="h-6 w-6" />
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <p className="text-blue-100 text-[.9rem]">Monday - Friday: 9:00 AM - 5:30 PM WAT</p>
            </div>
          </div>
          <div className="mt-8 border-t border-blue-500 pt-8">
            <div className="flex gap-4">
              <a target="_blank" href="https://ng.linkedin.com/company/energy-market-and-rates-consultants-emrc" rel="noopener noreferrer">
                <LuLinkedin className="w-4 h-4" />
              </a>
              <a target="_blank" href="https://x.com/emrcnigeria" rel="noopener noreferrer">
                <LuTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="md:col-span-2">
          <div className="rounded-xl bg-white p-8 shadow-xl border border-gray-100">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 flex items-center">
              <LuMail className="w-6 h-6 mr-2 text-blue-600" />
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8 text-[.9rem]">
              We're here to help with your energy needs. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative">
                  <label htmlFor="firstName" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
                    First Name<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="firstName"
                    className="block w-full text-[14px] rounded-lg border px-4 py-3 focus:outline-none transition duration-200 border-gray-200 focus:border-blue-500 bg-white hover:border-gray-300"
                    placeholder="John"
                    type="text"
                    name="firstName"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="lastName" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
                    Last Name<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="lastName"
                    className="block w-full text-[14px] rounded-lg border px-4 py-3 focus:outline-none transition duration-200 border-gray-200 focus:border-blue-500 bg-white hover:border-gray-300"
                    placeholder="Doe"
                    type="text"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative">
                  <label htmlFor="email" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
                    Email Address<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="email"
                    className="block w-full text-[14px] rounded-lg border px-4 py-3 focus:outline-none transition duration-200 border-gray-200 focus:border-blue-500 bg-white hover:border-gray-300"
                    placeholder="john.doe@example.com"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="phone" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    className="block w-full text-[14px] rounded-lg border px-4 py-3 focus:outline-none transition duration-200 border-gray-200 focus:border-blue-500 bg-white hover:border-gray-300"
                    placeholder="(123) 456-7890"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="company" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
                  Company Name
                </label>
                <input
                  id="company"
                  className="block w-full text-[14px] rounded-lg border px-4 py-3 focus:outline-none transition duration-200 border-gray-200 focus:border-blue-500 bg-white hover:border-gray-300"
                  placeholder="Your Company Ltd."
                  type="text"
                  name="company"
                />
              </div>
              <div className="relative">
                <label htmlFor="inquiryType" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
                  Inquiry Type<span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  className="block w-full rounded-lg border px-4 py-3 text-gray-900 focus:outline-none transition duration-200 border-gray-200 focus:border-blue-500 bg-white hover:border-gray-300"
                >
                  <option value="">Select an inquiry type</option>
                  <option value="Energy Rate Analysis">Energy Rate Analysis</option>
                  <option value="Market Consultation">Market Consultation</option>
                  <option value="Sustainability Planning">Sustainability Planning</option>
                  <option value="Regulatory Compliance">Regulatory Compliance</option>
                  <option value="Investment Advisory">Investment Advisory</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              <div className="relative">
                <label htmlFor="message" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-500">
                  Message<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="block w-full rounded-lg border px-4 py-3 text-gray-900 focus:outline-none transition duration-200 border-gray-200 focus:border-blue-500 bg-white hover:border-gray-300"
                  placeholder="Please describe how we can help you..."
                />
              </div>
              <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-gray-500">
                  Fields marked with <span className="text-red-500">*</span> are required
                </p>
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <LuSend className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12 rounded-lg bg-white p-8">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">Our Location</h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9624231584808!2d7.491251874203166!3d9.067187888391711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bb2ec1145b7%3A0xe36ae1b2956024c9!2sAdamawa%20Plaza!5e0!3m2!1sen!2sng!4v1741078965888!5m2!1sen!2sng"
            loading="lazy"
            className="w-full h-[400px]"
            title="Suite 219, Adamawa Plaza, central area, Abuja 900103, Federal Capital Territory"
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;