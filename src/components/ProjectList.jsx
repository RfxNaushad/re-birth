import React from 'react';
import projectImage1 from '../assets/images/Image1.webp'; // Replace with actual image paths
import projectImage2 from '../assets/images/Image2.webp';
import projectImage3 from '../assets/images/Image3.jpg';

const projects = [
  {
    title: 'Last Journey to Mars',
    image: projectImage1,
    description: 'Redefine. Reposition. Revitalize.',
    subtitle: 'BLANC4  UK',
  },
  {
    title: 'Supra Home',
    image: projectImage2,
    description: 'Redefine. Reposition. Revitalize.',
    subtitle: 'BLANC4  UK',
  },
  {
    title: 'Blanc 4',
    image: projectImage3,
    description: 'Redefine. Reposition. Revitalize.',
    subtitle: 'BLANC4  UK',
  },
];

const ProjectsList = () => {
  return (
    <section className="bg-white py-16">
      {projects.map((project, index) => (
        <div
          className='flex group flex-col items-center w-full border-b border-gray-300 '
          key={index}>
          <div
            className=" max-w-screen-lg mx-auto w-full"
          >
            <div className=' flex flex-col lg:flex-row items-center justify-between w-full py-8'>
              {/* Project Title and Description */}
              <div className="w-full text-center lg:text-left mb-4 lg:mb-0">
                {project.subtitle && (
                  <p className="text-sm font-semibold uppercase text-gray-500 md:text-lg group opacity-0 group-hover:opacity-100 group-hover:-translate-x-5 transform transition-all duration-500">
                    {project.subtitle}
                  </p>
                )}
                <h3 className="text-[2rem] font-bold group group-hover:-translate-x-5 transform transition-all duration-300">{project.title}</h3>
                {project.description && (
                  <p className="text-gray-500 text-lg mt-2 group opacity-0 group-hover:opacity-100 group-hover:-translate-x-5 transform transition-all duration-500">{project.description}</p>
                )}
              </div>

              {/* Project Image */}
              <div className="w-full flex justify-center lg:justify-end group group-hover:scale-110 transform transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[22rem] h-[12.5rem] rounded-lg object-cover shadow-lg "
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsList;
