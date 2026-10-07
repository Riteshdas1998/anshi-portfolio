import React, { useState, useEffect } from 'react';
import { TbX, TbPhone, TbBrandWhatsapp } from 'react-icons/tb';

const ProductModal = ({ isOpen, onClose, product }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowMoreDetails(false);
      setShowContact(false);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
        
        {/* Top Right Corner X (Close) Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors cursor-pointer"
        >
          <TbX className="w-6 h-6" />
        </button>

        {/* Bam diker onsho: Product er Chobi */}
        <div className="w-full md:w-1/2 h-72 md:h-auto relative bg-gray-100 flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <div className="absolute top-4 left-4 bg-white text-[#0056b3] text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {product.badge}
            </div>
          )}
        </div>

        {/* Dan diker onsho: Details */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-start">
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'serif' }}>
            {product.name}
          </h2>
          <p className="text-[#c25934] text-xl font-bold mb-6">{product.price}</p>
          
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Description</h4>
            <p className="text-gray-600 leading-relaxed">
              This beautiful handcrafted <strong>{product.name.toLowerCase()}</strong> is made with authentic local materials. 
              Perfect for adding a touch of traditional Bengal heritage to your everyday life.
            </p>
          </div>

          {/* Show More Details Section */}
          {showMoreDetails && (
            <div className="mb-6 animate-fade-in border-t border-gray-100 pt-4">
              <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">More Information</h4>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Here you can write long detailed information about the materials, dimensions, making process, and care instructions for this specific product.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <img src={product.image} alt="detail 1" className="w-full h-24 object-cover rounded-lg border border-gray-200" />
                <img src={product.image} alt="detail 2" className="w-full h-24 object-cover rounded-lg border border-gray-200" />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-auto flex flex-col gap-3 pt-6">
            
            <button 
              onClick={() => setShowMoreDetails(!showMoreDetails)}
              className="w-full bg-white border-2 border-[#0056b3] text-[#0056b3] hover:bg-blue-50 font-bold py-3 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              {showMoreDetails ? 'Show Less' : 'Show More'}
            </button>

            {showContact ? (
              <div className="flex gap-3">
                <a href="tel:+8801700000000" className="flex-1 bg-[#0056b3] hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                  <TbPhone className="w-5 h-5" /> Call Now
                </a>
                <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer" className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                  <TbBrandWhatsapp className="w-5 h-5" /> Chat Now
                </a>
              </div>
            ) : (
              <button 
                onClick={() => setShowContact(true)}
                className="w-full bg-[#0056b3] hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg cursor-pointer"
              >
                Contact Now
              </button>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;