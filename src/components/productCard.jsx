 import img from "../assets/img/imgone.png";
 
 import { FaRegHeart } from "react-icons/fa";
 import { FaRegEye } from "react-icons/fa6";
 import { RiStarSFill } from "react-icons/ri";



export default function productCard() {

    return (

        
        <div className="border-2 border-slate-100  w-64 h-[350px] relative bottom-72 left-32  " >

<div className="border-1  bg-slate-100  w-[252px] h-60   ">
        <div className="discount relative top-2 left-2  bg-red-500 w-14 h-6 rounded flex items-center text-xs justify-center text-white">
                 -40%
                </div>

                <div className="relative top-8 right-4">
        <img src={img} alt="product img" className="m-auto" />
      </div>
      <div className="relative left-[200px] bottom-40 rounded-full h-8 w-8  flex justify-center items-center bg-white " ><FaRegHeart /></div>
      <div className=" relative left-[200px] bottom-36 rounded-full h-8 w-8  flex justify-center items-center bg-white "><FaRegEye /></div>
    
                <h3 className="bottamcard1 font-medium">HAVIT HV-G92 Gamepad</h3><br/>
                <p className="discunt w-52 h-24 ">
                    <span className="text-red-700">$120</span>{"  "}
                    <span className="dprice text-gray-400 relative left-3">$160</span>
                </p>
                <div className="stars text-yellow-400 text-xl flex relative top-4"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill />
                  <span className="  text-gray-400"> (85)</span></div>

        </div>
        </div>
    )
}
