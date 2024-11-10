import logo from "../assets/logo/logo.svg"
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

// const frantLink = ["home", "about", "contact us"];
export default function Navbar() {

  //  const navLinkStyle ="capitalize hover:underline cursor-pointer ";
  return (
    <div className="h-28 bdr flex justify-evenly items-center">
     <img src={logo} alt="logoImage" />
     {/* <div>
  <ul>
    {frantLink.map((item , i)=>{
   <li className={navLinkStyle} key={i}>{item}</li>
    })}
    
  </ul>
</div> */}

     <div className="flex w-60  h-6 gap-3  relative left-14 border-transparent"><input type="search" className="w-52 h-5 bg-slate-300 text-white"  placeholder="What are you looking for"/>
    < CiSearch className="text-3xl  text-black relative bottom-1" />

     </div>
     <div className="flex gap-6 relative left-28 ">
  <ul className="cursor-pointer hover:underline hover:text-red-600">Home</ul>
  <ul className="cursor-pointer hover:underline hover:text-red-600">Contact</ul>
  <ul className="cursor-pointer hover:underline hover:text-red-600">About us</ul>
</div>
     <div className="flex gap-5 text-3xl cursor-pointer relative left-24">
      <FaRegHeart />

      <IoCartOutline />

            <div className="text-xl text-white rounded-full h-10 w-10 basiccolor flex justify-center items-center "><FaRegUser /></div>
     </div>
     <div className="text-white rounded-full h-4 w-4 basiccolor text-sm flex justify-center items-center relative right-[68px] bottom-4">4</div>

    </div>
  )
}
