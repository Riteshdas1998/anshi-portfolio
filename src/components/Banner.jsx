import React from 'react';
// react-icons theke amra amader dorkari SVG icon gulo import korchi
import { TbHandStop, TbNeedleThread, TbShoppingBag, TbInfinity } from "react-icons/tb";

const Banner = () => {
  return (
    // ব্যানারের মূল ব্যাকগ্রাউন্ডে ব্র্যান্ড কালার (গাঢ় নীল) দেওয়া হয়েছে
    <div className="bg-[#0056b3] py-8 shadow-inner border-y border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* গ্রিড লেআউট: মোবাইলে ১টা করে নিচে নিচে এবং ডেস্কটপে ৪টা পাশাপাশি */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-blue-400/30">
         
          {/* পয়েন্ট ১: 100% Handmade */}
          <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
            {/* SVG Icon: ekhane w-12 h-12 diye size boro kora hoyeche ebong text-white diye rong sada kora hoyeche */}
            <TbHandStop className="w-12 h-12 text-white mb-3" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-white tracking-wide">100% Handmade</h3>
          </div>

          {/* পয়েন্ট ২: Crochet craft */}
          <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
            <TbNeedleThread className="w-12 h-12 text-white mb-3" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-white tracking-wide">Crochet craft</h3>
          </div>

          {/* পয়েন্ট ৩: Everyday style */}
          <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
            <TbShoppingBag className="w-12 h-12 text-white mb-3" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-white tracking-wide">Everyday style</h3>
          </div>

          {/* পয়েন্ট ৪: Timeless Design */}
          <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
            <TbInfinity className="w-12 h-12 text-white mb-3" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-white tracking-wide">Timeless Design</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;