import React from 'react';

import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="flex flex-row md:flex-col section__padding" id="possibility">
            <div className="flex flex-1 justify-start items-center mr-[2rem] md:m-[1rem_0]">
                <img src={possibilityImage} alt="possibility" className="w-full h-full"/>
            </div>
            <div className="flex flex-1 justify-end items-start flex-col md:mt-[2rem]">
                <h4 className="text-[#71E5FF] font-manRope font-[500] text-[16px] leading-[30px]">Request Early Access
                    to Get Started</h4>
                <h1 className="gradient__text font-manRope font-[800] text-[34px] leading-[45px] m-[1rem_0]">The
                    possibilities are <br/> beyond your imagination</h1>
                <p className="font-manRope font-[400] text-[16px] leading-[30px] mb-[2rem] text-text">Ready to integrate the power of GPT-3 into your projects? Join the AI revolution and experience unparalleled language capabilities.</p>
                <h4 className="text-subtext font-manRope font-[500] text-[16px] leading-[30px]">Request Early Access to
                    Get Started</h4>
            </div>
        </div>
    );
};

export default Possibility;