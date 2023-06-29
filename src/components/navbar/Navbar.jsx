import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import "./navbar.css"
import logo from "../../assets/logo.svg"

const Menu = () => (
    <>
        <p className="navbar__p"><a href="#home">Home</a></p>
        <p className="navbar__p"><a href="#whatGPT3">What is GPT?</a></p>
        <p className="navbar__p"><a href="#possibility">Open AI</a></p>
        <p className="navbar__p"><a href="#features">Case Studies</a></p>
        <p className="navbar__p"><a href="#blog">Library</a></p>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="gpt3__navbar flex justify-between items-center py-[2rem] px-[6rem] ss:py-[2rem] ss:px-[4rem] xs:p-[2rem]">
            <div className="gpt3__navbar-links flex flex-1 justify-start items-center">
                <div className="gpt3__navbar-links_logo mr-[2rem]">
                    <img src={logo} alt="logo" className="w-[62px] h-[16px]"/>
                </div>
                <div className="gpt3__navbar-links_container flex flex-row md:hidden">
                    <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign flex justify-end items-center md:hidden">
                <p className="navbar__p">Sign In</p>
                <button className="navbar__button bg-[#FF4820]" type="button">Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu ml-[1rem] hidden relative md:flex">
                {toggleMenu
                    ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)}/>
                        : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)}/>

                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container flex justify-end items-end flex-col text-end bg-footer p-[2rem] absolute top-[40px] right-0 mt-[1rem] min-w-[210px] border-r-[5px] shadow-[0_0_5px_rgba(0,0,0,0.2)] xs:t-[20px]">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu/>
                            <div className="gpt3__navbar-menu_container-links-sign hidden md:block">
                                <p className="navbar__p">Sign in</p>
                                <button className="navbar__button bg-[#FF4820]" type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;