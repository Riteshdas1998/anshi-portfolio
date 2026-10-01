import { useState } from 'react';

// ১. দেশের নাম অনুযায়ী কান্ট্রি কোডের একটি লিস্ট বা অবজেক্ট তৈরি করা হলো
const countryCodes = {
  Bangladesh: '+880',
  USA: '+1',
  UK: '+44',
  Canada: '+1',
  Other: '+'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '', // ইউজার শুধু তার নাম্বার টাইপ করবে
    email: '',
    country: 'Bangladesh',
    idNumber: '', 
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // সাবমিট করার সময় কান্ট্রি কোড এবং ইউজারের দেওয়া নাম্বার একসাথে জুড়ে দেওয়া হলো
    const fullMobileNumber = `${countryCodes[formData.country]} ${formData.mobile}`;
    alert(`Thank you! Your message has been sent successfully.\n\n(For Admin Check - Phone: ${fullMobileNumber})`);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <p className="text-[#c25934] text-sm font-bold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0056b3]" style={{ fontFamily: 'serif' }}>
            We'd Love to Hear From You
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Whether you have a question about our heritage products or your order, our team is here to help.
          </p>
        </div>

        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-colors bg-white"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="USA">United States (USA)</option>
                  <option value="UK">United Kingdom (UK)</option>
                  <option value="Canada">Canada</option>
                  <option value="Other">Other</option>
                </select>
              </div>
                            {/* ২. মোবাইল নাম্বারের নতুন ডিজাইন */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                <div className="flex">
                  {/* ফিক্সড কান্ট্রি কোড বক্স (যেটি Country সিলেক্ট করার সাথে সাথে পাল্টে যাবে) */}
                  <span className="inline-flex items-center px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-200 text-gray-800 font-bold shrink-0">
                    {countryCodes[formData.country]}
                  </span>
                  {/* মোবাইল নাম্বারের ইনপুট বক্স */}
                  <input 
                    type="tel" 
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-colors"
                    placeholder={formData.country === 'Bangladesh' ? "1XXX-XXXXXX" : "Enter your number"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {formData.country === 'Bangladesh' ? 'NID Number' : 'Passport Number'}
                </label>
                <input 
                  type="text" 
                  name="idNumber"
                  required
                  value={formData.idNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-colors"
                  placeholder={formData.country === 'Bangladesh' ? "Enter your 10 or 17 digit NID" : "Enter your Passport number"}
                />
              </div>

            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message (Optional)</label>
              <textarea 
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:border-transparent transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button 
                type="submit" 
                className="bg-[#0056b3] hover:bg-blue-800 text-white px-10 py-3.5 rounded-full text-base font-bold transition-colors shadow-lg w-full md:w-auto min-w-[200px]"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;