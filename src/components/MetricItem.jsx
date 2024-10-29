import React from 'react';

// eslint-disable-next-line react/prop-types
const MetricItem = ({ icon, title, metric, details }) => {
    return (
        <div className="flex justify-between w-[767px] m-auto ">
            {/* Left Side: Icon, Title, and Metric Number */}
            <div className="flex flex-col items-start space-y-2">
                <div className='flex gap-4 justify-start items-center'>
                    <div className="text-3xl text-gray-500">{icon}</div>
                    <p className="text-xs uppercase font-semibold tracking-wider text-gray-500 text-center">
                        {title}
                    </p>
                </div>
                <p className="text-5xl font-bold text-gray-800">{metric}</p>
            </div>

            {/* Right Side: Details List */}
            <div className="space-y-2 text-gray-500">
                {details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-gray-700">{detail.count}</span>
                        <span className="text-gray-400">{detail.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetricItem;
