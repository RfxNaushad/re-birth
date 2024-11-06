import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import avocadoo from '../assets/icon/gessier.svg';
import nanowise from '../assets/icon/framepad.svg';
import gessler from '../assets/icon/avocado.svg';
import g from '../assets/icon/nanowise.svg';
import netflix from '../assets/icon/netflix.svg';
import snapple from '../assets/icon/snapple.svg';
import projectImage from '../assets/images/Image3.jpg';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { src: avocadoo, alt: 'Avocadoo' },
  { src: nanowise, alt: 'Nanowise' },
  { src: gessler, alt: 'Gessler' },
  { src: g, alt: 'g' },
  { src: netflix, alt: 'netflix' },
  { src: snapple, alt: 'snapple' },
];

const FeaturedProject = () => {
  const projectRef = useRef(null);
  const textRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  useEffect(() => {
    // Pin and shrink the image section when it reaches the top of the viewport
    const PTL = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: 'top top',
        end: '+=500',
        pin: true,
        // markers: true,
      }
    })
    PTL.fromTo(textRef.current, {y: 200}, {y: 0})
  }, []);

  return (
    <>
      <section ref={projectRef} className="flex feature-project-section flex-col items-center justify-center py-16 bg-white">
        <h2 className="text-center text-zinc-800 text-[1.7rem] font-semibold uppercase mb-16">Featured Project</h2>
        
        {/* Project Image with Pin and Scroll Effects */}
        <div className="relative w-[1120px] rounded-lg overflow-hidden shadow-lg">
          <img src={projectImage} alt="Featured Project" className="w-full h-auto object-cover z-50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
            <p className="uppercase text-sm tracking-widest mb-2">Nebula Production</p>
            <h3 className="text-3xl font-bold">Stellar Odyssey</h3>
          </div>
        </div>
      </section>

      {/* Brand Logos and Text Section */}
      <section ref={textRef} className="flex flex-col gap-24 items-center justify-center h-[600px] w-full bg-white py-16">
        <div className="text-center w-[1120px] mb-16 px-16">
          <p className="text-[3.12rem] font-bold">
            I&apos;ve had the privilege of collaborating with renowned brands, 
            bringing innovative ideas to life and creating impactful designs.
          </p>
        </div>

        <div className="w-[1120px]">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img src={logo.src} alt={logo.alt} className="w-[12.5rem] h-[2.8rem] opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default FeaturedProject;
