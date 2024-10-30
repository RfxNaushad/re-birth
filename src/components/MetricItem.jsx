import React from 'react';

// eslint-disable-next-line react/prop-types
const MetricItem = ({ icon, title, metric, details }) => {
    return (
        <div className="flex justify-between items-start gap-48 m-auto ">
            {/* Left Side: Icon, Title, and Metric Number */}
            <div className="flex w-[50%] flex-col items-start space-y-2">
                <div className='flex gap-4 justify-start items-center'>
                    <div className="text-3xl text-gray-500 text-[3rem]">{icon}</div>
                    <p className="text-start w-[60%] text-[1.25rem] uppercase font-semibold tracking-wider text-[#4D4D4D]">
                        {title}
                    </p>
                </div>
                <p className="text-5xl font-bold text-[#4D4D4D] text-[6rem]">{metric}</p>
            </div>

            {/* Right Side: Details List */}
            <div className="w-[50%]">
                {details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <span className="font-bold w-[10%] text-gray-700 text-[2rem]">{detail.count}</span>
                        <span className="text-[#B3B3B3] w-[90%] font-bold text-[2rem]">{detail.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetricItem;
