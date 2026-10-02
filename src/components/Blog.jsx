import { useState } from 'react';

// ৬টি ডেমো ব্লগের ডেটা
const blogData = [
  {
    id: 1,
    title: "The Art of Handwoven Jute: A Generational Tale",
    excerpt: "Discover the intricate process and the skilled artisans behind our signature jute products. A journey from raw fiber to everyday fashion.",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=600&q=80",
    date: "Oct 12, 2026",
    category: "Craftsmanship"
  },
  {
    id: 2,
    title: "Reviving Terracotta: Earthy Elegance for Modern Homes",
    excerpt: "How traditional clay molding techniques are making a stunning comeback in contemporary interior design and decor.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80",
    date: "Sep 28, 2026",
    category: "Heritage"
  },
  {
    id: 3,
    title: "Block Printing 101: The Magic of Wooden Stamps",
    excerpt: "Explore the timeless beauty of block printing, where every handcrafted motif tells a story of patience and extreme precision.",
    image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=600&q=80",
    date: "Sep 15, 2026",
    category: "Design"
  },
  {
    id: 4,
    title: "Sustainable Fashion: Why Natural Dyes Matter",
    excerpt: "Learn how the shift to natural dyes is protecting our rivers and bringing authentic, vibrant colors back into our wardrobes.",
    image: "https://images.unsplash.com/photo-1605645604130-9eb965a31a98?auto=format&fit=crop&w=600&q=80",
    date: "Aug 22, 2026",
    category: "Sustainability"
  },
  {
    id: 5,
    title: "The Bamboo Revival: Eco-friendly Living Spaces",
    excerpt: "Bamboo isn't just for pandas. See how local craftsmen are turning this sustainable grass into durable, beautiful home decor.",
    image: "https://images.unsplash.com/photo-1591871922570-5b51a56114ec?auto=format&fit=crop&w=600&q=80",
    date: "Jul 10, 2026",
    category: "Eco-living"
  },
  {
    id: 6,
    title: "Weaving Tales: The Women Behind the Looms",
    excerpt: "Meet the incredible women of rural Bangladesh who are keeping the ancient tradition of hand-loomed textiles alive.",
    image: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&w=600&q=80",
    date: "Jun 05, 2026",
    category: "Community"
  }
];

const Blog = () => {
  // শুরুতে ৩টি ব্লগ দেখানোর জন্য state সেট করা হলো
  const [visibleCount, setVisibleCount] = useState(3);

  // Load More বাটনে ক্লিক করলে আরও ৩টি ব্লগ লোড হবে
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section id="blog" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশনের হেডার */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[#c25934] text-sm font-bold tracking-widest uppercase mb-2">
              Our Journal
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0056b3]" style={{ fontFamily: 'serif' }}>
              Stories of Heritage
            </h2>
          </div>
        </div>

        {/* ব্লগ গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* slice() ব্যবহার করে নির্দিষ্ট সংখ্যক ব্লগ দেখানো হচ্ছে */}
          {blogData.slice(0, visibleCount).map((post) => (
            <div key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-100 flex flex-col">
              
              <div className="absolute top-4 left-4 z-10 bg-white text-[#c25934] text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                {post.category}
              </div>

              <div className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-3 font-medium">{post.date}</p>
                <h3 className="text-xl font-bold text-[#0056b3] mb-3 group-hover:text-[#c25934] transition-colors cursor-pointer leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-left font-bold text-[#0056b3] hover:text-[#c25934] transition-colors inline-flex items-center gap-2 w-max">
                  Read More 
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
            </div>
          ))}

        </div>

        {/* Load More Button */}
        {visibleCount < blogData.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="border-2 border-[#0056b3] text-[#0056b3] px-10 py-3 rounded-full font-bold hover:bg-[#0056b3] hover:text-white transition-colors"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;