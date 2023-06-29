import React from 'react';
import "./blog.css";
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className="gpt3__blog flex flex-col section__padding" id="blog">
            <div className="gpt3__blog-heading w-full text-left mb-[5rem]">
                <h1 className="gradient__text text-[62px] leading-[75px] font-manRope font-[800] sm:text-[46px] sm:leading-[52px] sw:text-[34px] sw:leading-[42px]">A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container flex flex-row md:flex-col-reverse">
                <div className="gpt3__blog-container_groupA flex-[0.75] mr-[2rem] md:m-[2rem_0]">
                    <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className="gpt3__blog-container_groupB flex-1 grid grid-cols-2 gap-[2rem] sm:grid-cols-1">
                    <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    );
};

export default Blog;