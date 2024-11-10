import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



export default function OfferDate() {
  return (
    <div className='gap-4 '>
    <div className='border-4 gap-7 border-red-500 w-5 h-12 rounded-md bg-red-500  relative bottom-52 left-[125px]'>
     
    </div>
    <div className=' text-red-500  relative bottom-60 text-base font-bold left-44'>Today’s</div>
    <div className='font-semibold text-4xl relative left-[125px] bottom-52'>Flash Sales</div>
    <div className='text-xs flex gap-14 relative bottom-[275px] left-[410px] font-bold'>
      <p>Days</p>
      <p>Hours</p>
      <p>Minutes</p>
      <p>Seconds</p>      </div>
      <div className='text-4xl flex gap-14 relative bottom-[265px] left-[400px] font-bold'>
      <p>03</p>
      <p>23</p>
      <p>19</p>
      <p>56</p>      </div>
      <div className='text-4xl flex text-red-500 gap-[90px] relative bottom-[308px] left-[460px] font-bold'>
      <p>:</p>
      <p>:</p>
      <p>:</p>
           </div>
           <div className=' flex gap-2 relative justify-center bottom-[350px] left-[520px]'>
            <div className=' rounded-full h-10 w-10  flex justify-center items-center bg-slate-300 cursor-pointer hover:bg-red-500'>
              <FaArrowLeft  className='text-2xl'/>
            </div>
            <div className=' rounded-full h-10 w-10  flex justify-center items-center bg-slate-300 cursor-pointer hover:bg-red-500'>
              <FaArrowRight className='text-2xl'/>
            </div>
           </div>

    </div>
  )
}
