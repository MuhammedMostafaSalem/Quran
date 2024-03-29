import React, { useState } from 'react'
import logo from '.././../assets/images/logo.png'
import { Typography } from "@material-tailwind/react";
import { Cross as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='bg-[#22b3c1]
            fixed
            top-0
            left-0
            right-0
            w-full
            z-[100]
            transition-all
            duration-500
            ease-in-out'
        >
            <div className='container mx-auto flex justify-between items-center pb-[10px]'>
                <a href="#" className='w-full h-full'>
                    <img src={logo} alt='logo' className='w-[45px] md:w-[55px] lg:w-[65px]' />
                </a>

                <ul className={`flex
                    items-center
                    sm-max:flex-col
                    gap-[50px]
                    text-white
                    sm:mt-[10px]
                    nav

                    sm-max:fixed
                    sm-max:top-[60px]
                    sm-max:w-full
                    sm-max:bg-[#fff]
                    sm-max:text-[#000]
                    sm-max:duration-1000
                    sm-max:gap-[0]
                    sm-max:shadow
                    sm-max:rounded-b-[30px]
                    ${!isOpen ? "sm-max:left-[100%]" : "sm-max:left-0"}
                    `}
                >
                    <Typography
                        as="li"
                        className="font-normal text-[16px]"
                    >
                        <a href="#">Surah</a>
                    </Typography>
                    <Typography
                        as="li"
                        className="font-normal text-[16px]"
                    >
                        <Link to='/live'>
                        Live
                        </Link>
                    </Typography>
                    <Typography
                        as="li"
                        className="font-normal text-[16px]"
                    >
                        <Link to='/tafsir'>
                        Tafasir
                        </Link>
                    </Typography>
                    <Typography
                        as="li"
                        className="font-normal text-[16px]"
                    >
                        <a href="#" className=''>
                        Radio
                        </a>
                    </Typography>

                </ul>

                <div className='sm:hidden mt-3'>
                    <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} color="#fff"/>
                </div>
            </div>
        </div>
    )
}

export default Header
