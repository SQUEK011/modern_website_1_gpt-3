import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import "./navbar.css"
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
        <p className="navbar__p"><a href="#home">Home</a></p>
        <p className="navbar__p"><a href="#whatGPT3">What is GPT-3?</a></p>
        <p className="navbar__p"><a href="#possibility">OpenAI</a></p>
        <p className="navbar__p"><a href="#features">Features</a></p>
        <p className="navbar__p"><a href="#blog">Blogs</a></p>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar flex justify-between items-center py-[2rem] px-[6rem] ss:py-[2rem] ss:px-[4rem] xs:p-[2rem]">
            <div className="navbar-links flex flex-1 justify-start items-center">
                <div className="navbar-links_logo mr-[2rem]">
                    <a href="#home"><img src={logo} alt={"GPT-3"}/></a>
                </div>
                <div className="navbar-links_container flex flex-row md:hidden m-auto">
                    <Menu/>
                </div>
            </div>
            <div className="navbar-sign flex justify-end items-center md:hidden">
                <button className="navbar__button bg-[#FF4820]" type="button">Get Started</button>
            </div>
            <div className="navbar-menu ml-[1rem] hidden relative md:flex">
                {toggleMenu
                    ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)}/>
                        : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)}/>

                }
                {toggleMenu && (
                    <div className="navbar-menu_container flex justify-end items-end flex-col text-end bg-footer p-[2rem] absolute top-[40px] right-0 mt-[1rem] min-w-[210px] border-r-[5px] shadow-[0_0_5px_rgba(0,0,0,0.2)] xs:t-[20px]">
                        <div className="navbar-menu_container-links">
                            <Menu/>
                            <div className="navbar-menu_container-links-sign hidden md:block">
                                <button className="navbar__button bg-[#FF4820]" type="button">Get Started</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;