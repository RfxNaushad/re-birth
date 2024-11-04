import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../assets/images/Image2.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import image2 from '../assets/images/Image1.webp';
import image3 from '../assets/images/Image3.jpg'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const images = [image1, image2, image3];

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const markRef = useRef(null); 
  const containerRef = useRef(null); 
  const slideupref = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const markElement = markRef.current;
    const containerElement = containerRef.current;

    const slideImages = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    timeoutRef.current = setInterval(slideImages, 3000); // Change slide every 3 seconds

    // Create the ScrollTrigger for the MARK text
    const pinTrigger = ScrollTrigger.create({
      trigger: containerElement,
      start: "top top", 
      end: () => `+=${containerElement.offsetHeight - markElement.offsetHeight - 105}`,
      pin: markElement, 
      scrub: true, 
    });

    return () => {
      pinTrigger.kill(); 
      clearInterval(timeoutRef.current);
    };
  }, []);

  useGSAP(() => {
    // Slide-up animation for Portfolio navigation
    const slideUpAnimation = gsap.to(slideupref.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: slideupref.current,
        start: 'top center',
        end: '+=150',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    // Slide-down animation for text and arrow
    const slideDownText = gsap.fromTo(
      textRef.current,
      { y: 0, opacity: 1 },
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top center',
          end: '+=150',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    const slideDownArrow = gsap.fromTo(
      arrowRef.current,
      { y: 0, opacity: 1 },
      {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: arrowRef.current,
          start: 'top center',
          end: '+=150',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    return () => {
      if (slideUpAnimation) slideUpAnimation.kill();
      if (slideDownText) slideDownText.kill();
      if (slideDownArrow) slideDownArrow.kill();
    };
  });

  return (
    <div ref={containerRef} className="relative h-screen w-full text-white">
      <div className="absolute inset-0 flex transition-transform duration-1000" style={{
        transform: `translateX(-${currentIndex * 100}%)`
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <header className="absolute top-4 w-full flex justify-between px-10 text-md uppercase">
        <div>Work</div>
        <div className="flex space-x-4">
          <a href="#mail" className="hover:text-gray-400">Mail</a>
          <a href="#twitter" className="hover:text-gray-400">Tw</a>
          <a href="#instagram" className="hover:text-gray-400">Ig</a>
          <a href="#linkedin" className="hover:text-gray-400">Li</a>
        </div>
      </header>

      {/* "MARK" Word */}
      <div className="absolute top-8 left-8" ref={markRef}>
        <h1 className="text-[10rem] font-bold tracking-wide leading-none">MARK</h1>
      </div>

      {/* Hero Content */}
      <div className='absolute px-8 flex justify-between bottom-8 text-center w-full'>
        <div className="flex flex-col justify-end">
          <p ref={textRef} className="mt-4 text-3xl text-start tracking-widest">
            Timeless Visual Stories <br /> for Legendary Brands
          </p>
          <div ref={arrowRef} className="animate-bounce text-start text-4xl mt-4">↓</div>
        </div>
        <h1 className="text-[10rem] font-bold tracking-wide">ASHTON</h1>
      </div>

      {/* Portfolio Navigation */}
      <div
        ref={slideupref}
        className="flex absolute bottom-[50%] -rotate-90 text-sm"
      >
        <span className='absolute top-[2.5rem] -left-20 leading-4 text-2xl'>
          Portfolio
        </span>
        <div className="absolute top-16 left-20 leading-4 rotate-90 text-3xl">
          2k24
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
