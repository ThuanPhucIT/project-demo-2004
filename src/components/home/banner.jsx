import React from 'react'
import BGHome from  '../../assets/BGHome.png';
import {AiOutlineArrowDown} from 'react-icons/ai';
const Banner = () => {
  return (
    <div className='flex flex-col content-center items-center mb-28 mt-36 md:flex-row'>
        <div className='flex flex-col content-center items-center md:w-8/12 md:block'>
            <p className="hidden text-blue-600 text-3xl animate-pulse md:text-8xl md:block">
              <div className=' font-rubik mr-3'>NĂNG ĐỘNG</div>
              <div className='flex'>
                <div className='block font-rubik '>&</div>
                <div className='ml-3 font-rubik md:ml-10'>SÁNG TẠO</div>
              </div>
            </p>
            <p className=" text-blue-600 text-3xl flex animate-pulse md:hidden font-rubik ">NĂNG ĐỘNG & SÁNG TẠO</p>
            <p className='my-3 text-xl content-center font-zen md:text-3xl'>Chúng tôi là 9TH-CODERS</p>
            <p className=" my-5 text-center md:text-justify md:w-2/3">Điều khiến bạn hạnh phúc không phải là đạt được mục tiêu mà là nỗ lực của cả nhóm và tinh thần đồng đội để đạt được chúng.
           </p>
           <div className='flex'>
           <button className='flex items-center content-center rounded-3xl border-2 border-blue-400 py-2 px-6 hover:text-white hover:border-black hover:bg-blue-400 hover:rounded-3xl hover:shadow-2xl hover:shadow-gray-600 mr-9 dark:hover:border-white dark:shadow-white'>
            <button className='mr-2 text-xl'><AiOutlineArrowDown/></button>
            <p><a href="#about" className="font-zen">CHI TIẾT</a></p>
           </button>
           
           </div>
        </div>
        <div className="block content-center ">
            <img className=" w-full " src={BGHome} alt="" />
        </div>
    </div>
    
  )
}

export default Banner
