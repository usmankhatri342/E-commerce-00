 import img from "../assets/img/imgone.png";
 import { LuStar } from "react-icons/lu";
 import { FaRegHeart } from "react-icons/fa";
//  import { FaRegEye } from "react-icons/fa6";
 import { FaRegEye } from "react-icons/fa6";


export default function productCard() {

    return (
        <div className="border-2 border-slate-100  w-64 h-[350px]" >

        
        <div className="border-1  bg-slate-100  w-[252px] h-60   ">
            <div className="discount absolute top-3 left-3 bg-red-500 w-14 h-6 rounded flex items-center text-xs justify-center text-white">
                
                -40%
                
                </div>

                <div className="relative top-14 right-6">
        <img src={img} alt="product img" className="m-auto" />
      </div>
      <div className="relative left-52 bottom-32  " ><FaRegHeart />
      </div>
      <div className=" relative left-52 bottom-28 "><FaRegEye /></div>
    

                <h3 className="bottamcard1 font-medium">HAVIT HV-G92 Gamepad</h3><br/>
                <p className="discunt w-52 h-24 ">
                    <span className="text-red-700">$120</span>{"  "}
                    <span className="dprice text-gray-400 relative left-3">$160</span>
                </p>
                <div className="stars text-yellow-400  flex relative top-4"><LuStar /><LuStar /><LuStar /><LuStar /><LuStar /></div>

        </div>
        </div>
    )
}