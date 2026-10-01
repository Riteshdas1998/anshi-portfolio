import desktopBg from '../assets/hero-bg.png';
import mobileBg from '../assets/hero-mobile.jpeg'; 

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center">
      
      {/* ডেস্কটপ ব্যাকগ্রাউন্ড ইমেজ */}
      <img
        src={desktopBg}
        alt="Anshi Heritage Desktop Background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* মোবাইল ব্যাকগ্রাউন্ড ইমেজ */}
      <img
        src={mobileBg}
        alt="Anshi Heritage Mobile Background"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ওভারলে: মোবাইলে হালকা সাদা (white/70), ডেস্কটপে হালকা কালো (black/60) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/ to-transparent md:bg-gradient-to-r md:from-black/60 md:via-black/35 md:to-black/5"></div>

      {/* কন্টেন্ট অংশ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* মোবাইলে কন্টেন্ট সেন্টারে (mx-auto, text-center) এবং ডেস্কটপে বামে (md:mx-0, md:text-left) থাকবে */}
        <div className="max-w-2xl mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* ছোট লেখা: মোবাইলে গাঢ় কমলা, ডেস্কটপে হালকা কমলা */}
          <p className="text-orange-200 md:text-orange-200 text-sm font-bold tracking-widest uppercase mb-4">
            Handcrafted in Bangladesh
          </p>
          
          {/* মূল হেডিং: মোবাইলে কালো, ডেস্কটপে সাদা */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white md:text-white leading-tight mb-6" style={{ fontFamily: 'serif' }}>
            Tracing the threads of Bengal's heritage
          </h1>
          
          {/* প্যারাগ্রাফ: মোবাইলে গাঢ় ধূসর, ডেস্কটপে হালকা ধূসর */}
          <p className="text-white md:text-gray-200 text-lg md:text-xl font-semibold md:font-normal mb-8 leading-relaxed">
            A curated collection of hand-woven jute, terracotta crafts, and block-printed textiles, direct from artisan clusters across Bangladesh.
          </p>
          
          {/* বাটন */}
          <button className="bg-[#0056b3] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full text-base font-medium transition-colors shadow-lg flex items-center gap-2">
            Shop Collection
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>
      </div>
      
    </div>
  );
};

export default Hero;