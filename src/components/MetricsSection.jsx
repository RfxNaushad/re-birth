import React from 'react';
import MetricItem from './MetricItem';
import { FaCrown, FaProjectDiagram, FaSmile } from 'react-icons/fa';

const metricsData = [
  {
    icon: <FaCrown />,
    title: 'Awards & Recognition',
    metric: '40',
    details: [
      { count: '6', label: 'Cannes Lynx' },
      { count: '4', label: 'Wobbly Award' },
      { count: '7', label: 'Ouuuuch Award' },
      { count: '23', label: 'PWA Awards' },
    ],
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Projects Completed',
    metric: '119',
    details: [
      { count: '65', label: 'Webdesign' },
      { count: '36', label: 'Mobile App' },
      { count: '12', label: 'E-Commerce' },
      { count: '6', label: 'Charity, Pro Bono' },
    ],
  },
  // {
  //   icon: <FaSmile />,
  //   title: 'Client Satisfaction Rate',
  //   metric: '99%',
  //   details: [
  //     { count: <FaProjectDiagram  className='text-[3.12rem]'/>, label: 'Worked with Mental Clients' },
  //   ],
  // }
];

const MetricsSection = () => {
  return (
    <section className="flex flex-col items-center w-full py-16 px-8 bg-white space-y-12">
      <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">
        Metric Marvels
      </h2>

      {/* Metric Items */}
      <div className="flex flex-col gap-12 justify-center items-center w-full">
        {metricsData.map((metric, index) => (
          <MetricItem
            key={index}
            icon={metric.icon}
            title={metric.title}
            metric={metric.metric}
            details={metric.details}
          />
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
