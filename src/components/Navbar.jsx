import { useState } from 'react';
// Apnar logo file er nam onujayi ekhane logo import korben
import logo from '../assets/anshi-logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mul Container: 100% jayga nibe (w-full) */}
        <div className="flex items-center h-20 w-full">
          
          {/* ১. Left Container (50% Width) - Logo ekdom left-e thakbe */}
          <div className="w-1/2 flex justify-start items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <img src={logo} alt="Anshi Logo" className="h-40 w-auto object-contain" />
            </div>
          </div>

          {/* ২. Right Container (50% Width) - Menu & Button ekdom right-e thakbe */}
          <div className="w-1/2 flex justify-end items-center">
            
            {/* Desktop View (Menu & Button eksathe) */}
            <div className="hidden md:flex items-center gap-8">
              {/* Menu Links */}
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-gray-500 hover:text-[#0056b3] text-sm font-medium transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>

              {/* contact */}
              <button className="bg-[#0056b3] hover:bg-blue-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-md">
                Contact Us
              </button>
            </div>

            {/* Mobile View (Hamburger Menu Button) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
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

      {/* Mobile Menu Dropdown (Ekhane kono change kora hoyni) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg pb-4">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#0056b3] hover:bg-blue-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-[#0056b3] hover:bg-blue-800 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;