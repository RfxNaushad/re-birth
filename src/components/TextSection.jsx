// import { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ProfileSection from './ProfileSection';

// gsap.registerPlugin(ScrollTrigger);

// function TextSection() {
//   const textRef = useRef(null);
//   const profileRef = useRef(null);

//   useEffect(() => {
//     const sentences = textRef.current?.querySelectorAll('.sentence');

//     // Animate each sentence with sequential pinning and fading
//     if (sentences && sentences.length > 0) {
//       sentences.forEach((sentence, index) => {
//         gsap.to(sentence, {
//           opacity: 1,
//           color: '#ffffff',
//           scrollTrigger: {
//             trigger: sentence,
//             start: `top+=${index * 100} center`,
//             end: `top+=${(index + 1) * 100} center`,
//             scrub: true,
//             pin: index === 0 ? "#text-image" : false, // pin entire section at start
//             onEnter: () => gsap.to(sentence, { color: '#ffffff', opacity: 1 }),
//             onLeave: () => gsap.to(sentence, { color: '#b3b3b3', opacity: 0.2 }),
//             onEnterBack: () => gsap.to(sentence, { color: '#ffffff', opacity: 1 }),
//             onLeaveBack: () => gsap.to(sentence, { color: '#b3b3b3', opacity: 0.2 }),
//           },
//         });
//       });

//       // Profile section animation after last sentence finishes
//       const lastSentence = sentences[sentences.length - 1];
//       gsap.fromTo(
//         profileRef.current,
//         { y: 0, opacity: 1 },
//         {
//           y: -800,
//           opacity: 1,
//           scrollTrigger: {
//             trigger: lastSentence,
//             start: "bottom center",
//             end: "+=300",
//             scrub: true,
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <section id="text-image" className="bg-black overflow-hidden">
//       <div className="text-section h-screen flex items-center justify-center" ref={textRef}>
//         <div className="inner w-[1120px] text-start">
//           <h1 className="text-[4rem] leading-[4.5rem] font-semibold text-gray-400">
//             <span className="sentence block mb-4">As a former Creative Director at Oglebee London and a four-time judge for Cannes Lynx,</span>
//             <span className="sentence block mb-4">I have had the opportunity to collaborate with tech giants like Giggle, Snapple, and Beta,</span>
//             <span className="sentence block mb-4">as well as iconic brands such as Netflux and Microshaft.</span>
//           </h1>
//         </div>
//       </div>

//       <div
//         ref={profileRef}
//         className="profileSection bg-black h-screen flex items-center justify-center transition-opacity duration-1000 ease-in-out"
//       >
//         <ProfileSection />
//       </div>
//     </section>
//   );
// }

// export default TextSection;

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProfileSection from './ProfileSection';

gsap.registerPlugin(ScrollTrigger);

function TextSection() {
  const textRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const sentences = textRef.current?.querySelectorAll('.sentence');

    if (sentences && sentences.length > 0) {
      gsap.to("#text-image", {
        scrollTrigger: {
          trigger: "#text-image",
          start: "top top",
          end: () => `+=${sentences.length * 150}`,
          markers:true,
          pin: true,
          scrub: true,
        }
      });

      sentences.forEach((sentence, index) => {
        gsap.to(sentence, {
          opacity: 1,
          color: '#ffffff',
          scrollTrigger: {
            trigger: sentence,
            start: `top+=${index * 100} center`,
            end: `top+=${(index + 1) * 100} center`,
            scrub: true,
            onEnter: () => gsap.to(sentence, { color: '#ffffff', opacity: 1 }),
            onLeave: () => gsap.to(sentence, { color: '#b3b3b3', opacity: 0.2 }),
            onEnterBack: () => gsap.to(sentence, { color: '#ffffff', opacity: 1 }),
            onLeaveBack: () => gsap.to(sentence, { color: '#b3b3b3', opacity: 0.2 }),
          },
        });
      });

      const lastSentence = sentences[sentences.length - 1];
      gsap.fromTo(
        profileRef.current,
        { y: 0, opacity: 1 },
        {
          y: -800,
          opacity: 1,
          scrollTrigger: {
            trigger: lastSentence,
            start: "bottom center",
            end: "+=300",
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section id="text-image" className="bg-black overflow-hidden">
      <div className="text-section  flex items-center justify-center" ref={textRef}>
        <div className="inner w-[1120px] text-start">
          <h1 className="text-[4rem] leading-[4.5rem] font-semibold text-gray-400">
            <span className="sentence block mb-4">As a former Creative Director at Oglebee London and a four-time judge for Cannes Lynx,</span>
            <span className="sentence block mb-4">I have had the opportunity to collaborate with tech giants like Giggle, Snapple, and Beta,</span>
            <span className="sentence block mb-4">as well as iconic brands such as Netflux and Microshaft.</span>
          </h1>
        </div>
      </div>

      <div
        ref={profileRef}
        className="profileSection bg-black  flex items-center justify-center transition-opacity duration-1000 ease-in-out"
      >
        <ProfileSection />
      </div>
    </section>
  );
}

export default TextSection;

