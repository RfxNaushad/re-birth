// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import image from '../assets/images/Image2.webp';

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {

//   const markRef = useRef(null); // Create a ref for the MARK text

//   useEffect(() => {
//     const markElement = markRef.current;

//     // Create the animation using GSAP
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: markElement,
//         start: 'top top', // When the top of MARK reaches the top of the viewport
//         end: 'bottom+=200 top', // When the bottom of MARK is 200px from the top of the viewport
//         scrub: true, // Smoothly animates the progress as you scroll
//         markers: true, // Enable markers for debugging (remove this in production)
//         onEnterBack: () => {
//           // Optional: add a callback when scrolling back up
//           gsap.to(markElement, { y: 0, duration: 0.5 });
//         },
//         onLeave: () => {
//           // Optional: add a callback when leaving the trigger
//           gsap.to(markElement, { y: '+=200', duration: 0.5 }); // Adjust this value based on your design
//         }
//       },
//     });

//     // Initial position of MARK
//     gsap.set(markElement, { y: 0 });

//     return () => {
//       tl.kill(); // Cleanup the animation on unmount
//     };
//   }, []);

//   return (

// <div className="relative h-screen w-full text-white">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${image})`,
//         }}
//       ></div>

//       {/* Header */}
//       <header className="absolute top-4 w-full flex justify-between px-10 text-md uppercase">
//         <div>Work</div>
//         <div className="flex space-x-4">
//           <a href="#mail" className="hover:text-gray-400">Mail</a>
//           <a href="#twitter" className="hover:text-gray-400">Tw</a>
//           <a href="#instagram" className="hover:text-gray-400">Ig</a>
//           <a href="#linkedin" className="hover:text-gray-400">Li</a>
//         </div>
//       </header>

//       {/* "MARK" Word */}
//       <div className="absolute top-8 left-8" ref={markRef}>
//         <h1 className="text-[10rem] font-bold tracking-wide leading-none">MARK</h1>
//       </div>

//       {/* Other Hero Content */}

//       <div className='absolute px-8 flex  justify-between  bottom-8 text-center w-full'>
//         <div className=" flex flex-col justify-end ">
//            <p className="mt-4 text-3xl text-start tracking-widest">
//              Timeless Visual Stories <br></br> for Legendary Brands
//             </p>
//            <div className="animate-bounce text-start text-4xl mt-4">↓</div>
//         </div>
//         <h1 className="text-[10rem] font-bold tracking-wide">ASHTON</h1>
//       </div>

//       {/* Portfolio Navigation */}
//       <div className="flex absolute  bottom-[50%] -rotate-90 text-sm">
//         <span className='absolute top-[2.5rem] -left-20 leading-4 text-2xl'>Portfolio</span>
//         <div className="absolute top-16 left-20 leading-4 rotate-90 text-3xl">2k24</div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React, { useEffect, useRef } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import image1 from '../assets/images/Image2.webp';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Autoplay } from 'swiper';
// import 'swiper/css'; // Import Swiper styles
// import image2 from '../assets/images/Image1.webp';
// import image3 from '../assets/images/Image3.jpg'; 
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//   const markRef = useRef(null); 
//   const containerRef = useRef(null); 
//   const slideupref = useRef(null);
//   const textRef = useRef(null);
//   const arrowRef = useRef(null);

//   useEffect(() => {
//     const markElement = markRef.current;
//     const containerElement = containerRef.current;

//     // Create the ScrollTrigger for the MARK text
//     const pinTrigger = ScrollTrigger.create({
//       trigger: containerElement,
//       start: "top top", 
//       end: () => `+=${containerElement.offsetHeight - markElement.offsetHeight - 105}`,
//       pin: markElement, 
//       scrub: true, 
//       markers: true, 
//     });

//     return () => {
//       pinTrigger.kill(); 
//     };
//   }, []);

//   useGSAP(() => {
//     const animation = gsap.to(slideupref.current, {
//       y: -50,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: slideupref.current,
//         start: 'top center',
//         end: '+=150',
//         scrub: true,
//         toggleActions: 'play reverse play reverse',
//       },
//     });

//     return () => {
//       if (animation) animation.kill();
//     };

//   });


//   return (
//     <div ref={containerRef} className="relative h-screen w-full text-white">
//       {/* Background image
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${image})`,
//         }}
//       ></div> */}

//       <Swiper
//         className="absolute inset-0 -z-10"
//         // modules={[Autoplay]} 
//         loop={true}
//         autoplay={{ delay: 1500, disableOnInteraction: false }} 
//         effect="fade" 
        
//       >
//         <SwiperSlide>
//           <div
//             className="bg-cover bg-center h-full"
//             style={{ backgroundImage: `url(${image2})` }}
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className="bg-cover bg-center h-full"
//             style={{ backgroundImage: `url(${image1})` }}
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className="bg-cover bg-center h-full"
//             style={{ backgroundImage: `url(${image3})` }}
//           ></div>
//         </SwiperSlide>
//         {/* Add more slides as needed */}
//       </Swiper>

//       {/* Header */}
//       <header className="absolute top-4 w-full flex justify-between px-10 text-md uppercase">
//         <div>Work</div>
//         <div className="flex space-x-4">
//           <a href="#mail" className="hover:text-gray-400">Mail</a>
//           <a href="#twitter" className="hover:text-gray-400">Tw</a>
//           <a href="#instagram" className="hover:text-gray-400">Ig</a>
//           <a href="#linkedin" className="hover:text-gray-400">Li</a>
//         </div>
//       </header>

//       {/* "MARK" Word */}
//       <div className="absolute top-8 left-8" ref={markRef}>
//         <h1 className="text-[10rem] font-bold tracking-wide leading-none">MARK</h1>
//       </div>

//       {/* Other Hero Content */}
//       <div className='absolute px-8 flex justify-between bottom-8 text-center w-full'>
//         <div className="flex flex-col justify-end">
//           <p ref={textRef} className="mt-4 text-3xl text-start tracking-widest">
//             Timeless Visual Stories <br /> for Legendary Brands
//           </p>
//           <div ref={arrowRef} className="animate-bounce text-start text-4xl mt-4">↓</div>
//         </div>
//         <h1 className="text-[10rem] font-bold tracking-wide">ASHTON</h1>
//       </div>

//       {/* Portfolio Navigation */}
//       <div
//       ref={slideupref}
//       className="flex absolute bottom-[50%] -rotate-90 text-sm"
//     >
//       <span className='absolute top-[2.5rem] -left-20 leading-4 text-2xl'>
//         Portfolio
//       </span>
//       <div className="absolute top-16 left-20 leading-4 rotate-90 text-3xl">
//         2k24
//       </div>
//     </div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../assets/images/Image2.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import image2 from '../assets/images/Image1.webp';
import image3 from '../assets/images/Image3.jpg'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const markRef = useRef(null); 
  const containerRef = useRef(null); 
  const slideupref = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const markElement = markRef.current;
    const containerElement = containerRef.current;

    // Create the ScrollTrigger for the MARK text
    const pinTrigger = ScrollTrigger.create({
      trigger: containerElement,
      start: "top top", 
      end: () => `+=${containerElement.offsetHeight - markElement.offsetHeight - 105}`,
      pin: markElement, 
      scrub: true, 
      markers: true, 
    });

    return () => {
      pinTrigger.kill(); 
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
      <Swiper
        className="absolute inset-0 -z-10"
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }} 
        effect="fade" 
      >
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-full"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-full"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-full"
            style={{ backgroundImage: `url(${image3})` }}
          ></div>
        </SwiperSlide>
      </Swiper>

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
