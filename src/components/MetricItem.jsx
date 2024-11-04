import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const MetricItem = ({ icon, title, metric, details }) => {
    const metricRef = useRef(null);
    const detailsRefs = useRef([]);

    useEffect(() => {
        // Create a GSAP timeline for the metric number and details
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: metricRef.current,
                start: "top 90%",
                scrub: 1.2,
                mark: true
            }
        });

        // Animate the metric number coming from the right
        tl.fromTo(
            metricRef.current,
            { y: -20, opacity: 0 }, // Start off-screen to the right
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );

        // Animate the details text sliding from the center
        details.forEach((detail, index) => {
            const leftDetail = detailsRefs.current[index].left;
            const rightDetail = detailsRefs.current[index].right;

            // Animate left detail moving to the left
            tl.fromTo(
                leftDetail,
                { x: 0, opacity: 0 },
                { x: -10, opacity: 1, duration: 0.5, ease: "power2.out" },
                "<" 
            );

            // Animate right detail moving to the right
            tl.fromTo(
                rightDetail,
                { x: 0, opacity: 0 },
                { x: 10, opacity: 1, duration: 0.5, ease: "power2.out" },
                "<" 
            );
        });

        // Clean up the ScrollTrigger
        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [details]);

    return (
        <div className="flex justify-between items-start gap-48 m-auto">
            {/* Left Side: Icon, Title, and Metric Number */}
            <div className="flex w-[50%] flex-col items-start space-y-2">
                <div className='flex gap-4 justify-start items-center'>
                    <div className="text-3xl text-gray-500 text-[3rem]">{icon}</div>
                    <p  ref={metricRef} className="text-start w-[60%] text-[1.25rem] uppercase font-semibold tracking-wider text-[#4D4D4D]">
                        {title}
                    </p>
                </div>
                <p className="text-5xl font-bold text-[#4D4D4D] text-[6rem]">{metric}</p>
            </div>

            {/* Right Side: Details List */}
            <div className="w-[50%]">
                {details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <span
                            ref={(el) => {
                                if (!detailsRefs.current[index]) {
                                    detailsRefs.current[index] = {};
                                }
                                detailsRefs.current[index].left = el; // Save left span reference
                            }}
                            className="font-bold w-[10%] text-gray-700 text-[2rem]"
                        >
                            {detail.count}
                        </span>
                        <span
                            ref={(el) => {
                                if (!detailsRefs.current[index]) {
                                    detailsRefs.current[index] = {};
                                }
                                detailsRefs.current[index].right = el; // Save right span reference
                            }}
                            className="text-[#B3B3B3] w-[90%] font-bold text-[2rem]"
                        >
                            {detail.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetricItem;
