import React from 'react'
import MobileImg from "../assets/img/mobileimg.png";
import iphneLogo from "../assets/logo/logo3.png"
import { FaArrowRight } from "react-icons/fa";


export default function Propartycont() {
  return (
    
    <div className=''>
      <div className='text-base relative left-28 gap-x-2.5 '>
        <p className='flex gap-3 cursor-pointer hover:underline'>Woman’s Fashion <FaArrowRight className='relative top-2 ' /></p><br/>
        <p className='flex gap-3 cursor-pointer hover:underline'>Men’s Fashion<FaArrowRight className='relative top-2 ' /></p><br/>
        <p className='cursor-pointer hover:underline'>Electronics</p><br/>
        <p className='cursor-pointer hover:underline'>Home & Lifestyle</p><br/>
        <p className='cursor-pointer hover:underline'>Medicine</p><br/>
        <p className='cursor-pointer hover:underline'>Sports & Outdoor</p><br/>
        <p className='cursor-pointer hover:underline'>Baby’s & Toys</p><br/>
        <p className='cursor-pointer hover:underline'>Baby’s & Toys</p>
         </div>
      <div className='w-[892px] h-[344px] bg-black  relative left-[340px] bottom-[360px]'>
        <img src={MobileImg} alt="mobileImg"  className='flex float-right'/>
        <div className='flex justify-center items-center relative top-11 gap-6'>
            <img src={iphneLogo} alt=""  className='w-12 h-12' />
            <p className='text-white relative top-2'>iPhone 14 Series</p></div>
            <div><p className='text-white relative left-[104px] top-20 text-5xl '>Up to 10% <br/> off Voucher</p>
            <span className='text-white relative top-24 left-28 flex gap-2 hover:cursor-pointer hover:underline' >Shop Now <FaArrowRight className='relative top-2' />
            </span>
            <div className='flex gap-2'>
            <div className='bg-[#7c7878] rounded-full h-2 w-2 relative left-96 top-40'></div>
            <div className='bg-[#7c7878] rounded-full h-2 w-2 relative left-96 top-40'></div>
            <div className='bg-[#f72d2d] border-gray-500 rounded-full h-2 w-2 relative left-96 top-40'></div>
            <div className='bg-[#7c7878] rounded-full h-2 w-2 relative left-96 top-40'></div>
            <div className='bg-[#7c7878] rounded-full h-2 w-2 relative left-96 top-40'></div>
            </div>
            </div>
            
            </div>
            
    </div>
  )
}
