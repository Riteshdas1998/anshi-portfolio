// ১. আইকনগুলো ইমপোর্ট করা হচ্ছে (আপনার ফাইলের এক্সটেনশন .png এর জায়গায় .svg বা .jpg হলে এখানে পরিবর্তন করে নিবেন)
import iconHandmade from '../assets/icon-handmade.png';
import iconCrochet from '../assets/icon-crochet.png';
import iconStyle from '../assets/icon-style.png';
import iconDesign from '../assets/icon-design.png';

const Banner = () => {
  return (
    // ব্যানারের মূল ব্যাকগ্রাউন্ড (হালকা অফ-হোয়াইট কালার দেওয়া হয়েছে যা দেখতে প্রিমিয়াম লাগবে)
    <div className="bg-[#fcfaf8] py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* গ্রিড লেআউট: মোবাইলে ১টা করে নিচে নিচে দেখাবে, আর ডেস্কটপে ৩টা পাশাপাশি দেখাবে */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {/* পয়েন্ট ১: 100% Handmade */}
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <img src={iconHandmade} alt="100% Handmade" className="w-12 h-12 mb-3 object-contain" />
            <h3 className="text-lg font-medium text-gray-800 tracking-wide">100% Handmade</h3>
          </div>

          {/* পয়েন্ট ২: Crochet craft */}
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <img src={iconCrochet} alt="Crochet craft" className="w-12 h-12 mb-3 object-contain" />
            <h3 className="text-lg font-medium text-gray-800 tracking-wide">Crochet craft</h3>
          </div>

          {/* পয়েন্ট ৩: Everyday style */}
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <img src={iconStyle} alt="Everyday style" className="w-12 h-12 mb-3 object-contain" />
            <h3 className="text-lg font-medium text-gray-800 tracking-wide">Everyday style</h3>
          </div>

          {/* পয়েন্ট ৪: Timeless Design */}
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <img src={iconDesign} alt="Timeless Design" className="w-12 h-12 mb-3 object-contain" />
            <h3 className="text-lg font-medium text-gray-800 tracking-wide">Timeless Design</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;