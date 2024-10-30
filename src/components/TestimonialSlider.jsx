import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the updated CSS
import { FaQuoteLeft } from 'react-icons/fa';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// Install modules
// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Navigation, Autoplay]);

const testimonials = [
  {
    quote: "Mark’s creative vision and design skills took our digital product to the next level. His work brought fresh energy and clarity to our brand, making a significant impact.",
    name: "Rick Bellante",
    title: "Product Manager, Nexusgate",
    image: "https://via.placeholder.com/50",
  },
  {
    quote: "Mark transformed Microshaft's brand with his visionary design. His creativity and attention to detail brought our ideas to life, exceeding all expectations.",
    name: "Timothy Rodgers",
    title: "Head of Projects, Microshaft",
    image: "https://via.placeholder.com/50",
  },
  {
    quote: "Mark was a game-changer for Giggle. His creativity and professionalism perfectly captured our brand's essence, delivering outstanding results for our campaign.",
    name: "Anna Korhonen",
    title: "Design Director, Giggle",
    image: "https://via.placeholder.com/50",
  },
];

const TestimonialSlider = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.multiple-slide-carousel', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.multiple-slide-carousel .swiper-button-next',
        prevEl: '.multiple-slide-carousel .swiper-button-prev',
      },
      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });

    // Clean up Swiper instance on unmount
    return () => {
      if (swiper) {
        swiper.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="w-full relative">
      <Swiper
        className="multiple-slide-carousel swiper-container relative"
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        navigation
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
              <div className="text-center">
                <FaQuoteLeft className="text-gray-200 text-4xl mb-4" />
                <span className="text-2xl font-semibold text-indigo-600">{testimonial.quote}</span>
                <div className="flex justify-center items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute flex justify-center items-center m-auto left-0 right-0 w-fit bottom-12">
        <button className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !-translate-x-16">
          <svg className="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !translate-x-16">
          <svg className="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
