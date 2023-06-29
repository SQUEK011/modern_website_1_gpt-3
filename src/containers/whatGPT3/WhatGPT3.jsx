import React from 'react';
import "./whatgpt3.css"
import {Feature} from "../../components";

const WhatGpt3 = () => {
    return (
        <div className="gpt3__whatgpt3 flex flex-col p-[2rem] bg-footer feature__gradient section__margin" id="whatGPT3">
            <div className="gpt3__whatgpt3-feature flex">
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>
            <div className="gpt3__whatgpt3-heading flex flex-row justify-between items-center m-[4rem_0rem_2rem] sm:flex-col sm:items-start sm:mb-0">
                <h1 className="gradient__text text-[34px] leading-[45px] font-[800] font-manRope max-w-[510px] ss:text-[28px] ss:leading-[40px]">The possibilities are beyond your imagination</h1>
                <p className="font-manRope font-[500] text-[16px] leading-[30px] text-subtext cursor-pointer sm:mt-[1rem]">Explore the Library</p>
            </div>
            <div className="gpt3__whatgpt3-container flex flex-wrap flex-row mt-[2rem]">
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
        </div>
    );
};

export default WhatGpt3;