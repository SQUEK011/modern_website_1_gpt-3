import React from 'react';
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <div className="gpt3__footer flex flex-col justify-center items-center bg-footer section__padding">
            <div className="gpt3__footer-heading w-full text-center mb-[3rem]">
                <h1 className="gradient__text font-manRope font-[800] text-[64px] leading-[75px] md:text-[44px] md:leading-[50px] ss:text-[34px] ss:leading-[42px] xs:text-[27px] xs:leading-[38px]">Do you want to step in
                    to the future before others</h1>
            </div>

            <div
                className="gpt3__footer-btn flex justify-center items-center p-[1rem] border-solid border-[1px] border-white text-center mb-[10rem] cursor-pointer">
                <p className="text-[18px] font-manRope leading-[21px] text-white tracking-[4px] ss:text-[14px] ss:leading-[20px]">Request Early
                    Access</p>
            </div>

            <div className="gpt3__footer-links flex justify-between items-start flex-row flex-wrap w-full text-left">
                <div className="gpt3__footer-links_logo w-[250px] m-[1rem] flex flex-col">
                    <img src={gpt3Logo} alt="gpt3_logo" className="w-[118px] h-[30px] mb-[1rem]"/>
                    <p className="font-manRope text-[12px] leading-[15px] text-white">Crechterwoord K12 182 DK
                        Alknjkcb, <br/> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div w-[250px] m-[1rem] flex justify-start flex-col ss:m-[1rem_0]">
                    <h4 className="text-[14px] leading-[17px] font-manRope text-white mb-[0.9rem]">Links</h4>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">Overons</p>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">Social
                        Media</p>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">Counters</p>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">Contact</p>
                </div>
                <div className="gpt3__footer-links_div w-[250px] m-[1rem] flex justify-start flex-col">
                    <h4 className="text-[14px] leading-[17px] font-manRope text-white mb-[0.9rem]">Company</h4>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">Terms
                        & Conditions </p>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">Privacy
                        Policy</p>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">Contact</p>
                </div>
                <div className="gpt3__footer-links_div w-[250px] m-[1rem] flex justify-start flex-col">
                    <h4 className="text-[14px] leading-[17px] font-manRope text-white mb-[0.9rem]">Get in touch</h4>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">Crechterwoord
                        K12 182 DK Alknjkcb</p>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">085-132567</p>
                    <p className="text-[12px] leading-[15px] font-manRope text-white m-[0.5rem_0] cursor-pointer">info@payme.net</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright mt-[2rem] text-center w-full">
                <p className="text-[12px] font-manRope leading-[15px] text-white">@2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;