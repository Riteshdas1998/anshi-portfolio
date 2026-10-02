import { useState, useEffect, useRef } from 'react';
import logo from '../assets/anshi-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const dropdownRef = useRef(null);

  // বাইরে ক্লিক করলে ডেস্কটপে পপ-আপ বন্ধ করার লজিক
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // কল করার ফাংশন (মোবাইল এবং ডেস্কটপ উভয় জায়গায় কাজ করবে)
  const handleCall = () => {
    window.location.href = "tel:+8801841490071";
    setIsContactOpen(false);
  };

  // হোয়াটসঅ্যাপ চ্যাট ওপেন করার ফাংশন
  const handleWhatsApp = () => {
    window.open("https://wa.me/8801841490071", "_blank");
    setIsContactOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="flex items-center h-20 w-full">
         
          {/* Logo */}
          <div className="w-1/2 flex justify-start items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <img src={logo} alt="Anshi Logo" className="h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Right Container */}
          <div className="w-1/2 flex justify-end items-center">
           
            {/* Desktop View */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-gray-500 hover:text-[#0056b3] text-base font-medium transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Contact Us Button with Popup (Desktop) */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="bg-[#0056b3] hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Contact Us
                </button>

                {isContactOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <button
                      onClick={handleCall}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0056b3] font-medium transition-colors border-b border-gray-100 cursor-pointer"
                    >
                      📞 Call Now
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0056b3] font-medium transition-colors cursor-pointer"
                    >
                      💬 Chat Now
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile View Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
           
          </div>
         
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg pb-4 px-4 pt-2">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#0056b3] hover:bg-blue-50 rounded-md"
              >
                {link.name}
              </a>
            ))}

            {/* Contact Us Button inside Mobile Menu */}
            <div className="pt-2">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="w-full bg-[#0056b3] text-white px-6 py-2.5 rounded-full font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Contact Us
              </button>

              {isContactOpen && (
                <div className="mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  <button
                    onClick={() => {
                      handleCall();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0056b3] font-medium transition-colors border-b border-gray-100 cursor-pointer"
                  >
                    📞 Call Now
                  </button>
                  <button
                    onClick={() => {
                      handleWhatsApp();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0056b3] font-medium transition-colors cursor-pointer"
                  >
                    💬 Chat Now
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;