import React from "react";
import main_img from "../images/Rectangle.png";
import alter_img from "../images/alterhr.png";
import path from "../images/Path_78.png";
import circle from "../images/Circle BG copy 3@2x.png";

function Login() {
  return (
    <div className="container max-auto">
      {/* <img src={main_img} /> */}
      <img src={main_img} />
      <div className="absolute top-8 mt-20 ml-32   translate-y-1/4">
        <div className="m-3">
          <img src={alter_img} alt="Alter" />
          <img src={path} alt="Path" />
        </div>
        <div className="w-80 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="block p-5 mt-4 pt-4">
            <h5 className="mb-2  font-sans text-sm font-semibold text-gray-color leading-snug tracking-normal">
              დეპარტამენტები
            </h5>
            <span className=" text-[#6F767E]  w-80  font-extrabold text-xl">
              10
            </span>
            {/* <p className="text-[#C4C4C4] font-bold">დღეს</p> */}

            <div className="flex  pt-2 items-center">
              <p className="text-[#C4C4C4] text-xs font-bold">დღეს</p>
              <span
                className=" font-bold
            bg-green-color  text-xs 
            mr-32  px-5 py-0.5 
            rounded  text-white
             border border-green-400"
              >
                +2
              </span>
              <div className="flex absolute inset-y-36 mr-12 right-0">
                <img
                  src={circle}
                  className="h-16 w-16 rounded-full  border border-[#2CD889] bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
