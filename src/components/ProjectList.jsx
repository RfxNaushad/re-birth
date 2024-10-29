import React from 'react';
import projectImage1 from '../assets/images/Image1.webp'; // Replace with actual image paths
import projectImage2 from '../assets/images/Image2.webp';
import projectImage3 from '../assets/images/Image3.jpg';

const projects = [
  {
    title: 'Last Journey to Mars',
    image: projectImage1,
  },
  {
    title: 'Supra Home',
    image: projectImage2,
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
    <section className="flex flex-col items-center w-full max-w-screen-lg mx-auto py-16">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center justify-between w-full py-8 border-b border-gray-300"
        >
          {/* Project Title and Description */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
            {project.subtitle && (
              <p className="text-sm font-semibold uppercase text-gray-500">
                {project.subtitle}
              </p>
            )}
            <h3 className="text-[2rem] font-bold">{project.title}</h3>
            {project.description && (
              <p className="text-gray-500 mt-2">{project.description}</p>
            )}
          </div>

          {/* Project Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={project.image}
              alt={project.title}
              className="w-[22rem] h-[12.5rem] rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsList;
