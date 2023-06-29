import React from 'react';


const Feature = ({title, text}) => (
    <div className="gpt3__features-container__feature w-full flex flex-1 min-w-[210px]  flex-row justify-between items-start m-[1rem] ss:m-[1rem_0] ">

        <div className="gpt3__features-container__feature-title flex-1 max-w-[180px] mr-2[rem] displ">
            <div className="w-[38px] h-[3px] gradient-bar shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] mb-[0.25rem]"/>
            <h1 className="font-manRope font-[800] text-[18px] leading-[24px] -tracking-[0.04rem] text-white ss:text-[14px] ss:leading-[22px]">{title}</h1>
        </div>
        <div className="gpt3__features-container_feature-text flex flex-[2] max-w-[700px] mt-[0.5rem]">
            <p className="font-manRope font-[500] text-[14px] leading-[24px] text-text ss:text-[12px] ss:leading-[20px]">{text}</p>
        </div>
    </div>
);

export default Feature;