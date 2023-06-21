import React from "react";
import main_img from "../images/Rectangle.png";
import alter_img from "../images/alterhr.png";
import path from "../images/Path_78.png";
import circle from "../images/Circle BG copy 3@2x.png";

function Login() {
  return (
    <div className="container">
      {/* <img src={main_img} /> */}
      <img src={main_img} />
      <div className="absolute top-8 m-24  translate-y-1/4">
        <div className="m-2">
          <img src={alter_img} alt="Alter" />
          <img src={path} alt="Path" />
        </div>
        <div className="  w-96  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-5 mt-4 pt-4">
            <h5 className="mb-2 block font-sans text-xl font-semibold text-gray-color leading-snug tracking-normal">
              დეპარტამენტები
            </h5>
            <span className="  w-80  font-extrabold text-3xl">10</span>
            <p>დღეს</p>

            <div className="flex justify-between items-center">
              <span
                className="font-bold
            bg-green-color  text-xs 
             mr-32  px-5 py-0.5 
            rounded  text-white
             border border-green-400"
              >
                +2
              </span>
              <div className="absolute inset-y-40 mr-10 right-0 h-16 w-16 border border-[#2CD889] rounded-full">
                <img src={circle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
