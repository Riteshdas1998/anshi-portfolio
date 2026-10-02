import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// ১. Ekhane assets folder theke apnar image gulo import korun
import desktopImg1 from '../assets/desktop-bg-1.png';
import mobileImg1 from '../assets/mobile-bg-1.jpeg';
// Jodi aro image thake tahole evabe import kore niben:
import desktopImg2 from '../assets/desktop-bg-2.jpeg';
import mobileImg2 from '../assets/mobile-bg-2.jpeg';

import desktopImg3 from '../assets/desktop-bg-3.jpeg';
import mobileImg3 from '../assets/mobile-bg-3.jpeg';

const Hero = () => {
  // ২. Import kora nam gulo ekhane src er jaygay bosano holo (Quotation chara)
  const heroMedia = [
    {
      id: 1,
      type: 'image',
      desktopSrc: desktopImg1, // Variable nam use kora hoyeche
      mobileSrc: mobileImg1,   
    },
    // Aro image thakle nicher moto kore array te add korben:
     {
       id: 2,
       type: 'image',
       desktopSrc: desktopImg2,
       mobileSrc: mobileImg2,
     },

    {
       id: 3,
       type: 'image',
       desktopSrc: desktopImg3,
       mobileSrc: mobileImg3,
     }
  ];

  return (
    <section id="home" className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000, 
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {heroMedia.map((media) => (
          <SwiperSlide key={media.id}>
            {media.type === 'image' ? (
              <>
                <img
                  src={media.desktopSrc}
                  alt={`Hero slider desktop ${media.id}`}
                  className="hidden md:block w-full h-full object-cover"
                />
                <img
                  src={media.mobileSrc}
                  alt={`Hero slider mobile ${media.id}`}
                  className="block md:hidden w-full h-full object-cover object-center"
                />
              </>
            ) : (
              <>
                <video
                  src={media.desktopSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="hidden md:block w-full h-full object-cover"
                />
                <video
                  src={media.mobileSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="block md:hidden w-full h-full object-cover object-center"
                />
              </>
            )}
            
            <div className="absolute inset-0 bg-black/20"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-10 flex items-end justify-center pb-16 md:pb-20 pointer-events-none">
        <button className="bg-[#0056b3] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full text-base font-medium transition-colors shadow-lg flex items-center gap-2 pointer-events-auto cursor-pointer">
          Shop Collection
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default Hero;