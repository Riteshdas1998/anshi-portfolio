import logo from '../assets/anshi-logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* কলাম ১: ব্র্যান্ডের লোগো ও সোশ্যাল মিডিয়া */}
          <div className="flex flex-col items-start">
            {/* height এর বদলে width (w-48) ব্যবহার করে লোগো বড় করা হয়েছে এবং নিচের মার্জিন (mb-4) কমানো হয়েছে */}
            <img 
              src={logo} 
              alt="ANSHI Logo" 
              className="w-48 h-auto mb-4 object-contain" 
            />
            <p className="mb-6 leading-relaxed">
              Preserving heritage, empowering artisans. We bring the finest handcrafted treasures from rural villages straight to your modern home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#0056b3] hover:bg-[#0056b3] hover:text-white transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#0056b3] hover:bg-[#0056b3] hover:text-white transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* কলাম ২: কুইক লিংক */}
          <div>
            <h3 className="text-[#0056b3] font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#c25934] transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-[#c25934] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#c25934] transition-colors">Artisan Journal</a></li>
              <li><a href="#" className="hover:text-[#c25934] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* কলাম ৩: সাপোর্ট */}
          <div>
            <h3 className="text-[#0056b3] font-bold text-lg mb-6 tracking-wide">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#c25934] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#c25934] transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-[#c25934] transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-[#c25934] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* কলাম ৪: নিউজলেটার */}
          <div>
            <h3 className="text-[#0056b3] font-bold text-lg mb-6 tracking-wide">Stay in the Loop</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:border-[#0056b3] transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-[#0056b3] hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-bold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* ফুটারের নিচের অংশ */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2026 ANSHI. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-[#0056b3] cursor-pointer transition-colors">Terms of Service</span>
            <span>|</span>
            <span className="hover:text-[#0056b3] cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;