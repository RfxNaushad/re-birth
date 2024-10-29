import React from 'react';
import projectImage from '../assets/images/Image3.jpg'; // Replace with your actual image path

const FeaturedProject = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white">
      {/* Section Title */}
      <h2 className="text-center text-zinc-800  text-[1.7rem] font-semibold uppercase mb-8">Featured Project</h2>

      {/* Project Container */}
      <div className="relative w-[1120px] rounded-lg overflow-hidden shadow-lg">
        {/* Project Image */}
        <img src={projectImage} alt="Featured Project" className="w-full object-cover" />

        {/* Overlay with Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <p className="uppercase text-sm tracking-widest mb-2">Nebula Production</p>
          <h3 className="text-3xl font-bold">Stellar Odyssey</h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
