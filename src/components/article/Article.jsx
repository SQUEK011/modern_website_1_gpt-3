import React from 'react';
import "./article.css"
const Article = ({ imgUrl, date, text }) => (
    <div className="gpt3__blog-container_article w-full h-full flex flex-col bg-footer">
        <div className="gpt3__blog-container_article-image w-full h-full bg-bg">
            <img src={imgUrl} alt="blog_image" className="w-full h-full"/>
        </div>
        <div className="gpt3__blog-container_article-content flex flex-col justify-between p-[1rem_1.5rem] h-full">
            <div>
                <p className="font-manRope text-[11px] font-[700] leading-[35px] text-white">{date}</p>
                <h3 className="font-manRope text-[25px] font-[800] leading-[30px] text-white mb-[5rem] cursor-pointer ss:text-[18px] ss:leading-[25px]">{text}</h3>
            </div>
            <p className="cursor-pointer text-white">Read Full Article</p>
        </div>
    </div>
);

export default Article;