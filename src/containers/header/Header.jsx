import React from 'react';
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
    return (
        <div className="section__padding flex md:flex-col" id="home">
            <div className="flex flex-1 justify-center align-baseline flex-col mr-[5rem] md:mb-[3rem]">
                <h1 className="gradient__text font-family font-extrabold text-[62px] leading-[75px] tracking-tighter ss:text-[48px] ss:leading-[60px] xs:text-[36px] xs:leading-[48px]">Empower Your Vision with GPT-3: Redefine Possibilities</h1>
                <p className="font-manRope text-[20px] leading-[27px] mt-[1.5rem] text-text ss:text-[16px] ss:leading-[24px] xs:text-[14px] xs:leading-[24px]">Unleash GPT-3's Power: Elevate your applications with 175 billion-parameter AI. Create human-like content, understand context, and solve challenges with ease. Join the future of technology today.</p>
                <div className="w-full mt-[2rem] mb-[1rem] flex">
                    <input type="email" placeholder="Your Email Address"
                           className="bg-footer rounded-r flex-2 w-full min-w-[50px] font-manRope text-[20px] leading-[27px] text-white outline-none px-[1rem] border-footer border-solid ss:text-[16px] ss:leading-[24px] xs:text-[12px] xs:leading-[16px]"/>
                    <button type="button"
                            className="flex-[0.6] w-full min-h-[50px] bg-[#ff4820] rounded-r font-manRope font-bold text-[20px] leading-[27px] text-white cursor-pointer outline-none px-[2rem] border-none ss:text-[16px] ss:leading-[24px] xs:text-[12px] xs:leading-[16px]">Get
                        Started
                    </button>
                </div>
                <div className="w-full flex justify-start items-center mt-[2rem] ss:flex-col">
                    <img src={people} alt="people" className="w-[181px] h-[38px]"/>
                    <p className="ss:m-0 ml-[1rem] font-manRope font-medium text-[12px] leading-[38px] text-white align-middle">1,600
                        people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img src={ai} alt="ai" className="w-full h-full"/>
            </div>
        </div>
    );
};

export default Header;