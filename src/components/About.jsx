import React from 'react';
// import personPic from '../assets/about-person.png'; // Ekhonকার মতো এটি কমেন্ট করে রাখছি

// আপতত একটি ডামি স্টক ইমেজ ব্যবহার করা হচ্ছে। পরে আপনি আপনার 'perfect image' দিয়ে এটি বদলে নেবেন।
const aboutImage = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop";

const About = () => {
  return (
    // ব্যাকগ্রাউন্ড সাদা (bg-white) করা হয়েছে এবং প্যাডিং অ্যাডজাস্ট করা হয়েছে (py-12 lg:py-16)
    <section id="about" className="bg-white py-12 lg:py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* কন্টেইনার - ডেস্কটপে পাশাপাশি, মোবাইলে নিচে নিচে */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
         
          {/* লেফট কন্টেইনার - লেখা এবং বাটন */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* ব্র্যান্ড কালার টেক্সট */}
            <h2 className="text-[#c25934] text-sm font-bold tracking-widest uppercase mb-3">
              Our Story
            </h2>
           
            {/* ডার্ক কালার হেডিং */}
            <h3 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'serif' }}>
              More than a marketplace, we are a bridge for local craftsmanship.
            </h3>
           
            {/* প্যারাগ্রাফ */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Anshi was born from a desire to preserve the tactile wisdom of our village elders. Every jute fiber, every clay mold, and every block-print stamp tells a story of patience and generational skill.
            </p>
           
            {/* ব্র্যান্ড কালার বাটন */}
            <button className="bg-[#0056b3] hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-colors shadow-lg">
              Explore Now
            </button>
          </div>

          {/* রাইট কন্টেইনার - ইমেজ */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* ইমেজে শ্যাডো এবং রাউন্ডেড কর্নার দেওয়া হয়েছে যাতে সাদা ব্যাকগ্রাউন্ডে প্রিমিয়াম লাগে */}
            <div className="relative p-2 rounded-2xl bg-gray-50 shadow-xl w-full max-w-lg">
               <img
                  src={aboutImage}
                  alt="Our Story - Anshi"
                  className="w-full h-auto rounded-xl object-cover"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;