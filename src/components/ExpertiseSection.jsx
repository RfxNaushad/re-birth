import React from 'react';

// Data for expertise items
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
  return (
    <section className="flex flex-col items-center justify-center w-full py-16 px-8 bg-white">
      {/* Section Header */}
      <h2 className="text-center text-[1.75rem] font-semibold uppercase tracking-widest text-gray-500 mb-4">
        Creative Expertise
      </h2>
      <p className="text-center text-[3.5rem] font-semibold max-w-6xl mb-16 px-4">
        "Design is not just what it looks like and feels like. Design is how it works."
      </p>

      <div className="flex flex-col  w-full max-w-[1440px] p-[2.5rem] space-y-12">
        {expertiseItems.map((item) => (
          <div key={item.id} className="flex flex-col justify-between lg:flex-row space-y-4 lg:space-y-0 lg:items-start">
            {/* Expertise Item Content */}
            <div className="flex flex-col w-[80%] space-y-2">
              <p className="text-gray-400 text-[1rem] uppercase">{item.id} —</p>
              <h3 className="text-[2rem] font-semibold">{item.title}</h3>
              <p className="text-[1rem] text-gray-600">{item.description}</p>
            </div>

            {/* Right Side Services List */}
            <div className="flex flex-col w-[20%] space-y-2 text-gray-600 text-sm uppercase lg:w-1/3">
              {item.services.map((service, index) => (
                <p key={index} className="pb-2 text-[1rem] border-b border-gray-300">
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
