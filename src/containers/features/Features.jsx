import React from 'react';
import {Feature} from "../../components";

const featuresData = [
    {
        title: 'Human-like Text Generation',
        text: 'Create natural, coherent text that seamlessly mimics human language, making it ideal for content creation and communication.',
    },
    {
        title: 'Multi-lingual Capabilities',
        text: 'Communicate and understand multiple languages effortlessly, expanding your global reach and engagement.',
    },
    {
        title: 'Contextual Understanding',
        text: 'GPT-3 comprehends context within conversations, providing more meaningful and accurate responses.',
    },
    {
        title: 'Code Writing and Problem Solving',
        text: 'Generate code snippets, solve complex problems, and assist in software development tasks with ease.',
    },
];

const Features = () => (
    <div className="gpt3__features w-full flex flex-row justify-between section__padding md:flex-col" id="features">
        <div className="gpt3__features-heading flex flex-1 justify-start items-start flex-col text-left mr-[5rem] md:m-[0_0_2rem_0]">
            <h1 className="gradient__text text-[34px] leading-[45px] font-[800] font-manRope ss:text-[28px] ss:leading-[38px]">The Future is Now and You Just Need to Realize It. Step into Future Today. &
                Make it Happen.</h1>
            <p className="text-subtext text-[16px] leading-[30px] font-[500] font-manRope mt-[2rem]">Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container flex flex-[1.5] justify-start items-center flex-col">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index}/>
            ))}
        </div>
    </div>
);

export default Features;