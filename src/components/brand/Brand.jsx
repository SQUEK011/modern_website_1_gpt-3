import React from 'react';
import {google, slack, atlassian, dropbox, shopify} from "./imports"

const Brand = () => {
    return (
        <div className="section__padding flex flex-wrap justify-center items-center">
            <div className="flex flex-1 max-w-[150px] min-w-[120px] m-[1rem] justify-center items-center">
                <img src={google} alt="google"/>
            </div>
            <div className="flex flex-1 max-w-[150px] min-w-[120px] m-[1rem] justify-center items-center">
                <img src={slack} alt="slack"/>
            </div>
            <div className="flex flex-1 max-w-[150px] min-w-[120px] m-[1rem] justify-center items-center">
                <img src={atlassian} alt="atlassian"/>
            </div>
            <div className="flex flex-1 max-w-[150px] min-w-[120px] m-[1rem] justify-center items-center">
                <img src={dropbox} alt="dropbox"/>
            </div>
            <div className="flex flex-1 max-w-[150px] min-w-[120px] m-[1rem] justify-center items-center">
                <img src={shopify} alt="shopify"/>
            </div>
        </div>
    );
};

export default Brand;