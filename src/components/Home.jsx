import React from 'react';
import HeroImage from "../assest/Herophoto.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (

    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
      h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full mt-40'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hi, I am Abhishek Verma </h2>
            <p className='text-gray-500 py-4 max-w-md'>
            As a software engineer and web developer, I am deeply enthusiastic about creating effective and intuitive applications that cater to the needs of the end-user. My unwavering commitment to knowledge acquisition and consistent delivery of top-tier solutions are the hallmarks of my professional life. I derive immense pleasure from working on web applications using cutting-edge technologies such as React,MongoDb, Express.js, Tailwind, Next JS and CSS.
            </p>
            <div>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3
                my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-700 to-blue-950  cursor-pointer'>
                    Portfolio  
                    <span className=' group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardDoubleArrowRight size={25}
                    className='ml-1' />
                    </span>
                </Link>
            </div>
        </div>
        <div >
          <img src={HeroImage} alt="my profile 
            " className=" rounded-2xl mx-auto w-1/2 md:w-96" />
        </div>
      </div>
    </div>
  )
};

export default Home;
