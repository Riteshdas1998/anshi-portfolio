// ১. রিয়্যাক্ট থেকে useRef ইমপোর্ট করা হলো, যা স্ক্রল করতে সাহায্য করবে
import { useRef } from 'react';

const reviewsData = [
  {
    id: 1,
    name: "Sadia Rahman",
    location: "Dhaka, BD",
    text: "The handwoven jute tote I received is absolutely gorgeous. You can feel the love and effort the artisans put into every weave. The quality is truly premium.",
    rating: 5,
    platform: "facebook"
  },
  {
    id: 2,
    name: "Tanjina Akter",
    location: "Chattogram, BD",
    text: "I bought the terracotta vase set for my living room, and it completely changed the vibe of the space. It's so earthy and beautiful. Will definitely shop again!",
    rating: 5,
    platform: "instagram"
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    location: "Sylhet, BD",
    text: "Anshi is doing a great job bridging the gap between local artisans and us. The block-printed cushion covers are timeless and soft. Very happy with my purchase.",
    rating: 5,
    platform: "facebook"
  },
  {
    id: 4,
    name: "Farhana Islam",
    location: "Rajshahi, BD",
    text: "Absolutely in love with my new macrame wall hanging. The packaging was eco-friendly and the handwritten note made my day. Highly recommended!",
    rating: 5,
    platform: "instagram"
  }
];

const FacebookIcon = () => (
  <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const Testimonials = () => {
  // ২. স্ক্রল কন্টেইনারকে টার্গেট করার জন্য scrollRef তৈরি করা হলো
  const scrollRef = useRef(null);

  // বামে স্ক্রল করার ফাংশন
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  // ডানে স্ক্রল করার ফাংশন
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    // ৩. ব্যাকগ্রাউন্ড bg-white করে দেওয়া হয়েছে
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* হেডার এবং অ্যারো বাটন */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#c25934] text-sm font-bold tracking-widest uppercase mb-3">
              Customer Stories
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0056b3]" style={{ fontFamily: 'serif' }}>
              Loved by Our Patrons
            </h2>
          </div>
          
          {/* ৪. Left এবং Right অ্যারো বাটন */}
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white transition-colors"
            >
              {/* Left Arrow Icon */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white transition-colors"
            >
              {/* Right Arrow Icon */}
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ক্যারোজেল কন্টেইনার (scrollRef যুক্ত করা হয়েছে) */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {reviewsData.map((review) => (
            // ৫. কার্ডের নির্দিষ্ট মাপ (w-[85vw] sm:w-[350px] md:w-[400px]) দেওয়া হয়েছে
            <div 
              key={review.id} 
              className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  {/* ৫-স্টার রেটিং */}
                  <div className="flex gap-1 text-[#c25934]">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* প্ল্যাটফর্ম আইকন */}
                  <div className="shrink-0 ml-4">
                    {review.platform === 'facebook' ? <FacebookIcon /> : <InstagramIcon />}
                  </div>
                </div>
                
                {/* রিভিউ টেক্সট */}
                <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              
              {/* কাস্টমারের নাম ও লোকেশন */}
              <div>
                <h4 className="font-bold text-[#0056b3] text-lg">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;