import React from 'react';
import {Feature} from "../../components";

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
        title: 'Message or am nothing',
        text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
        title: 'Really boy law county',
        text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
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