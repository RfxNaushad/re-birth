
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const expertiseItems = [
  {
    id: '01',
    title: 'Digital Strategy',
    description: 'Creating a comprehensive digital strategy tailored to your business goals and user needs. From industry analysis to goal setting, I construct a roadmap to guide your online ventures to success.',
    services: ['Strategic Planning', 'Market Analysis', 'Campaign Development', 'Analytics and Insights'],
  },
  {
    id: '02',
    title: 'Market Research',
    description: 'Conducting thorough market research to understand your audience, competitors, and trends, providing actionable insights that inform your strategy and boost your brand’s positioning.',
    services: ['Competitor Analysis', 'Consumer Behavior', 'Trend Identification', 'Data Insights'],
  },
  {
    id: '03',
    title: 'Creative Direction',
    description: 'Defining a unique and effective creative direction that aligns with your brand identity, ensuring consistency and appeal across all channels.',
    services: ['Brand Identity', 'Visual Consistency', 'Audience Engagement', 'Content Strategy'],
  },
  {
    id: '04',
    title: 'Content Strategy',
    description: 'Developing a compelling content strategy that attracts, engages, and converts your target audience through various platforms and formats.',
    services: ['Content Planning', 'SEO Optimization', 'Platform Strategy', 'Performance Analysis'],
  },
  {
    id: '05',
    title: 'Framer Development',
    description: 'Framer enables the creation of ready-to-publish websites and web apps with dynamic, visually stunning, and fully functional experiences. Your digital product isn’t just a prototype – it’s production-ready to impress and engage users.',
    services: ['Responsive Design', 'Advanced Custom Animation', 'No-Code Development', 'Performance Optimization'],
  },
];

const ExpertiseSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const EXTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#expertiseContainer',
        start: 'top 20%',
        end: '+=1000', // Adjust as needed for scroll length
        pin: true,
        scrub: true,
      },
    });
    // description animation
    gsap.timeline({
      scrollTrigger: {
        trigger: '#expertiseContainer',
        start: 'top 70%',
        scrub: true,
      }
    }).fromTo('#expertiseDes', { y: 100, opacity: 0 }, { y: 0, opacity: 1, }, '-=1.5')
    // Show the first card initially
    gsap.set(cardsRef.current[0], { opacity: 1 });
    // Animate each additional card to stack on top of the previous one
    cardsRef.current.slice(1).forEach((card, index) => {
      EXTL.fromTo(
        card,
        { y: 100, opacity: 0, zIndex: index + 2 },
        { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
        (index + 1) * 0.5 // Stagger animation for each card
      );
    });
  }, []);

  return (
    <section id="expertiseContainer" className="relative flex flex-col items-center justify-center w-full py-16 px-8 bg-white">
      <h2 className="text-center text-[1.75rem] font-semibold uppercase tracking-widest text-gray-500 mb-4">
        Creative Expertise
      </h2>
      <p id="expertiseDes" className="text-center text-[3.5rem] font-semibold max-w-6xl mb-16 px-4">
        &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
      </p>

      <div className="relative w-full max-w-[1440px] p-[2.5rem] h-[400px]">
        {expertiseItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute top-0 left-0 w-full card flex flex-col justify-between lg:flex-row bg-white shadow-md p-8"
            style={{ zIndex: index + 1, opacity: index === 0 ? 1 : 0 }} // Show first card initially
          >
            <div className="flex w-[80%]">
              <div className="flex flex-col gap-4 w-[70%]">
                <p className="text-gray-400 text-[1rem] uppercase">{item.id} —</p>
                <h3 className="text-[2rem] font-semibold">{item.title}</h3>
                <p className="text-[1rem] text-gray-600">{item.description}</p>
              </div>
            </div>

            <div className="flex flex-col w-[20%] space-y-2 text-gray-600 text-sm uppercase lg:w-1/3">
              {item.services.map((service, serviceIndex) => (
                <p key={serviceIndex} className="pb-2 text-[1rem] font-semibold border-b border-gray-300">
                  {service}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
