import React, { useState } from 'react';
// আমাদের তৈরি করা নতুন মডেলটি ইমপোর্ট করা হলো
import ProductModal from './ProductModal'; 

const productsData = [
  { id: 1, name: 'Handwoven Jute Tote', price: '৳ 1,250', image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=600&q=80', badge: 'Best Seller' },
  { id: 2, name: 'Terracotta Vase Set', price: '৳ 850', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80', badge: 'New' },
  { id: 3, name: 'Block-Printed Cushion', price: '৳ 550', image: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&w=600&q=80', badge: null },
  { id: 4, name: 'Macrame Wall Hanging', price: '৳ 1,400', image: 'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&w=600&q=80', badge: 'Limited' },
  { id: 5, name: 'Handcrafted Clay Planter', price: '৳ 450', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80', badge: null },
  { id: 6, name: 'Woven Cane Basket', price: '৳ 1,100', image: 'https://images.unsplash.com/photo-1612454593121-a3f2b186b51c?auto=format&fit=crop&w=600&q=80', badge: 'Popular' },
  { id: 7, name: 'Embroidered Table Runner', price: '৳ 950', image: 'https://images.unsplash.com/photo-1605645604130-9eb965a31a98?auto=format&fit=crop&w=600&q=80', badge: null },
  { id: 8, name: 'Bamboo Desk Organizer', price: '৳ 600', image: 'https://images.unsplash.com/photo-1591871922570-5b51a56114ec?auto=format&fit=crop&w=600&q=80', badge: 'New' }
];

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  
  // ১. মডেল কন্ট্রোল করার জন্য নতুন State যুক্ত করা হলো
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  // ২. প্রোডাক্টে ক্লিক করলে মডেল ওপেন করার ফাংশন
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // ৩. মডেল ক্লোজ করার ফাংশন
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[#c25934] text-sm font-bold tracking-widest uppercase mb-2">
              The Collection
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
              Bazaar Favorites
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.slice(0, visibleCount).map((product) => (
            // ৪. এখানে onClick ইভেন্ট যুক্ত করা হয়েছে, যাতে কার্ডে ক্লিক করলেই মডেল ওপেন হয়
            <div 
              key={product.id} 
              onClick={() => handleOpenModal(product)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-100 cursor-pointer"
            >
             
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-white text-[#0056b3] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {product.badge}
                </div>
              )}
              
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#0056b3] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#c25934] font-semibold text-lg">{product.price}</p>
              </div>
             
            </div>
          ))}
        </div>

        {visibleCount < productsData.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="border-2 border-[#0056b3] text-[#0056b3] px-10 py-3 rounded-full font-bold hover:bg-[#0056b3] hover:text-white transition-colors cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* ৫. মডেল কম্পোনেন্টটি এখানে কল করা হয়েছে */}
      <ProductModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        product={selectedProduct} 
      />

    </section>
  );
};

export default Products;