import personPic from '../assets/about-person.png'; // আপনার ছবির নাম ও এক্সটেনশন অনুযায়ী মিলিয়ে নিন

const About = () => {
  return (
    // সেকশনের প্যাডিং কমানো হয়েছে (py-6 lg:py-8)
    <section id="about" className="bg-[#0056b3] py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          
          {/* লেফট কন্টেইনার - লেখা এবং বাটন */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-3 text-blue-200">
              Our Story
            </h2>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'serif' }}>
              More than a marketplace, we are a bridge for local craftsmanship.
            </h3>
            
            <p className="text-blue-50 text-lg mb-8 leading-relaxed">
              Anshi was born from a desire to preserve the tactile wisdom of our village elders. Every jute fiber, every clay mold, and every block-print stamp tells a story of patience and generational skill.
            </p>
            
            <button className="bg-white hover:bg-gray-100 text-[#0056b3] px-8 py-3.5 rounded-full text-base font-bold transition-colors shadow-lg">
              Explore Now
            </button>
          </div>

          {/* রাইট কন্টেইনার - ব্যক্তির ছবি */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* শ্যাডো এবং ফিক্সড হাইট সরিয়ে h-auto এবং object-contain দেওয়া হয়েছে */}
            <img 
              src={personPic} 
              alt="About Anshi" 
              className="w-full max-w-xl h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;