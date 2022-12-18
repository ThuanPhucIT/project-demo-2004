import React from 'react'
import { Link } from 'react-scroll';
import { AiFillHome,AiFillProject } from 'react-icons/ai';
import {SiKnowledgebase,SiProgress} from 'react-icons/si';

const AsideNavbar = () => {
  return (
    <div className='h-screen flex flex-col justify-center fixed '>
        <ul className=' w-10 flex flex-col content-center items-center '>
          <li className="w-24 rounded hover:text-white  hover:bg-blue-400  py-2  ">
           <Link to="home" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer flex flex-col content-center items-center ">
            <button className='text-3xl mb-1'><AiFillHome/></button>
            <p>TRANG CHỦ</p> 
           </Link>
          </li>
          <li className="w-24 rounded hover:text-white  hover:bg-blue-400 py-2 ">
           <Link to="about" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer flex flex-col content-center items-center  ">
            <button className='text-3xl mb-1'><SiKnowledgebase/></button>
            <p>GIỚI THIỆU</p> 
           </Link>
          </li>
          <li className="w-24 rounded hover:text-white  hover:bg-blue-400  py-2  ">
           <Link to="progress" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer flex flex-col content-center items-center ">
            <button className='text-3xl mb-1'><SiProgress/></button>
            <p>QUÁ TRÌNH</p> 
           </Link>
          </li>
          <li className="w-24 rounded hover:text-white  hover:bg-blue-400 py-2 ">
           <Link to="project" spy={true} smooth={true} offset={-50} duration={500} className="cursor-pointer flex flex-col content-center items-center ">
            <button className='text-3xl mb-1'><AiFillProject/></button>
            <p>PROJECT</p> 
           </Link>
          </li>
        </ul> 
    </div>
  )
}

export default AsideNavbar