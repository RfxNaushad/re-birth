import React from 'react';
import image from '../assets/images/Image2.webp';

const HeroSection = () => {
  return (

<div className="relative h-screen w-full text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Header */}
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
      <div className="absolute top-8 left-8">
        <h1 className="text-[10rem] font-bold tracking-wide leading-none">MARK</h1>
      </div>

      {/* Other Hero Content */}

      <div className='absolute px-8 flex  justify-between  bottom-8 text-center w-full'>
        <div className=" flex flex-col justify-end ">
           <p className="mt-4 text-3xl text-start tracking-widest">
             Timeless Visual Stories <br></br> for Legendary Brands
            </p>
           <div className="animate-bounce text-start text-4xl mt-4">↓</div>
        </div>
        <h1 className="text-[10rem] font-bold tracking-wide">ASHTON</h1>
      </div>

      {/* Portfolio Navigation */}
      <div className="flex absolute  bottom-[50%] -rotate-90 text-sm">
        <span className='absolute top-[2.5rem] -left-20 leading-4 text-2xl'>Portfolio</span>
        <div className="absolute top-16 left-20 leading-4 rotate-90 text-3xl">2k24</div>
      </div>
    </div>
  );
};

export default HeroSection;