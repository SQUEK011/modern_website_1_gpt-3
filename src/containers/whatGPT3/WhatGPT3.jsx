import React from 'react';
import "./whatgpt3.css"
import {Feature} from "../../components";

const WhatGpt3 = () => {
    return (
        <div className="gpt3__whatgpt3 flex flex-col p-[2rem] bg-footer feature__gradient section__margin" id="whatGPT3">
            <div className="gpt3__whatgpt3-feature flex">
                <Feature title="Discover GPT-3's Incredible Features" text="GPT-3, short for 'Generative Pre-trained Transformer 3,' represents a leap in AI language understanding and generation. It's built on a massive dataset and has 175 billion parameters, enabling it to perform a wide range of language-related tasks with remarkable accuracy and coherence." />
            </div>
            <div className="gpt3__whatgpt3-heading flex flex-row justify-between items-center m-[4rem_0rem_2rem] sm:flex-col sm:items-start sm:mb-0">
                <h1 className="gradient__text text-[34px] leading-[45px] font-[800] font-manRope max-w-[510px] ss:text-[28px] ss:leading-[40px]">The possibilities are beyond your imagination</h1>
                <p className="font-manRope font-[500] text-[16px] leading-[30px] text-subtext cursor-pointer sm:mt-[1rem]">Explore the Library</p>
            </div>
            <div className="gpt3__whatgpt3-container flex flex-wrap flex-row mt-[2rem]">
                <Feature title="Content Creation" text="Generate high-quality blog posts, articles, and marketing content effortlessly." />
                <Feature title="Virtual Assistants" text="Create intelligent virtual assistants capable of answering queries and assisting users." />
                <Feature title="Language Translation" text="Translate text between languages while preserving context and meaning." />
            </div>
        </div>
    );
};

export default WhatGpt3;