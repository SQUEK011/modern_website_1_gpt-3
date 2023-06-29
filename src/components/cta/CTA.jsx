import React from 'react';

const CTA = () => {
    return (
        <div
            className="flex flex-row justify-between items-center p-[2rem] m-[4rem] rounded-[1rem] gradient-bar sm:flex-col ss:flex-col ss:m-[4rem_2rem]">
            <div className="flex flex-col text-left text-white">
                <p className="font-manRope text-[12px] leading-[30px] font-[500]">Request Early Access to Get
                    Started</p>
                <h3 className="font-manRope text-[24px] leading-[45px] font-[800] ss:text-[18px] ss:leading-[32px]">Register Today & start exploring the
                    endless possibilities.</h3>
            </div>
            <div className="flex justify-center items-center ml-[2rem] sm:m-[2rem_0_0]">
                <button type="button"
                        className="bg-black text-white font-manRope text-[18px] leading-[30px] font-[700] p-[0.5rem_1rem] rounded-[2rem] border-none outline-none cursor-pointer min-w-[150px] ss:text-[14px] ss:leading-[28px]">Get
                    Started
                </button>
            </div>
        </div>
    );
};

export default CTA;