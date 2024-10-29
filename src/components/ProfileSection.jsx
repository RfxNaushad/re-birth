import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';
import profileImage from '../assets/images/man.jpg'; 

const ProfileSection = () => {
  return (
    <section className='w-full bg-black'>
      <div className="flex gap-4 flex-col lg:flex-row items-center justify-center h-screen w-[1120px] m-auto bg-black text-white">
      {/* Profile Image with Text Overlay */}
      <div className="w-[40%] flex justify-center lg:justify-end">
        <div className="relative w-full h-[37rem] rounded-lg overflow-hidden shadow-lg">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
            <img 
            src="https://framerusercontent.com/images/lWBuvAB01STRlDQPYJ5Oy31zXXw.svg" 
            alt="Signature-image" className='mt-24'  />
            <p className="text-sm uppercase text-start tracking-wide mt-2">
            Award-Winning<br/>
            Designer, <br/>Artist
            and <br/>Entrepreneur
            </p>
          </div>
        </div>
      </div>

      {/* Profile Description */}
      <div className="w-[60%] mt-8 lg:mt-0 lg:ml-12">
        <div className='flex flex-col justify-center border-b border-gray-400 pb-8 text-2xl gap-4'>
        <p className="text-gray-300 ">
          Renowned for my <span className="font-semibold">innovative approach</span> to creativity, I began my career with small boutique agencies, swiftly establishing my 
          <span className="font-semibold"> distinctive design</span> style. My creative success propelled me to <span className="font-semibold">lead teams</span> at international agencies, where I drove significant <span className="font-semibold">brand transformations</span>.
        </p>
        <p className="text-gray-300 l mt-4">
          Currently, I continue to innovate and work with brands through <span className="font-semibold">contract-based work</span>, consistently pushing the boundaries of <span className="font-semibold">digital design, 3D production</span>.
        </p>
        <p className="text-gray-300 font-semibold mt-4 flex items-center">
          Based and working in London <span className="ml-2">🇬🇧</span>
        </p>
        <p className="text-gray-300">05:33 (<span className='text-sm'>GMT</span>)</p>
        </div>


        <div className="mt-8 gap-4 flex flex-col items-center lg:items-start">
        <div className="flex space-x-16 text-gray-500 text-2xl">
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
          <FaFacebook />
          <FaYoutube />
          <FaTiktok />
        </div>
        <button className="mt-4 text-white font-semibold uppercase tracking-wider hover:underline">
          Résumé
        </button>
      </div>
      </div>
    </div>
    </section>
  );
};

export default ProfileSection;
