import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ProfileSectiion from './ProfileSection'

gsap.registerPlugin(ScrollTrigger);

function TextSection() {
  const textRef = useRef(null);

  useEffect(() => {
    const sentences = textRef.current.querySelectorAll('.sentence');

    sentences.forEach((sentence, index) => {
      gsap.to(sentence, {
        color: '#ffffff',
        opacity: 1, // Full opacity when highlighted
        scrollTrigger: {
          trigger: textRef.current,
          start: `top+=${index * 100} center`,
          end: `top+=${(index + 1) * 100} center`,
          scrub: true,
          toggleActions: 'play reverse play reverse',
          onEnter: () => gsap.to(sentence, { color: '#ffffff', opacity: 1 }), // Make white and opaque
          onLeave: () => gsap.to(sentence, { color: '#b3b3b3', opacity: 0.2 }), // Revert to gray and faded
          onEnterBack: () => gsap.to(sentence, { color: '#ffffff', opacity: 1 }),
          onLeaveBack: () => gsap.to(sentence, { color: '#b3b3b3', opacity: 0.2 }),
        },
      });
    });
  }, []);

  return (
    <section>
      <div className='text-section bg-black flex h-screen justify-center items-center'>
        <div className='inner w-[1120px]'>
          <h1 ref={textRef} className='text-[4rem] leading-[4.5rem] font-semibold text-gray-400'>
            <span className="sentence inline-block">As a former Creative Director at Oglebee London and a four-time judge for Cannes Lynx,</span>
            <span className="sentence inline-block">I have had the opportunity to collaborate with tech giants like Giggle, Snapple, and Beta,</span>
            <span className="sentence inline-block">as well as iconic brands such as Netflux and Microshaft.</span>
          </h1>
        </div>
      </div>

      {/* <ProfileSectiion /> */}
    </section>
  );
}

export default TextSection;













