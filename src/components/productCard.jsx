 import img from "../assets/img/imgone.png";


export default function productCard() {

    return (
        <div className="border-2  bg-slate-100  w-64 h-[350px]   ">
            <div className="discount absolute top-3 left-3 bg-red-500 w-14 h-6 rounded flex items-center text-xs justify-center text-white">
                
                -40%
                
                </div>

                <div className="relative top-14">
        <img src={img} alt="product img" className="m-auto" />
      </div>

                <h3 className="relative top-24 font-medium">HAVIT HV-G92 Gamepad</h3><br/>
                <p className="relative top-20 w-52 h-24 gap-10">
                    <span className="text-red-700">$120</span>{"  "}
                    <span className="dprice text-gray-400">$160</span>
                </p>
                

        </div>
    )
}