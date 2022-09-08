import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiOpencollective } from "react-icons/si";
const Navbar = () => {
  const [closer, setCloser] = useState(true);

  const navbar_click = () => {
    setCloser(!closer);
  };
  return (
    <div className="flex justify-between items-center h-23 max-w-[1040px] mx-auto  px-4 text-white">
      <h1 className="w-full text-[#00df9a] text-3xl font-bold pt-3 ml-[-5px]">
        React.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={navbar_click} className="block md:hidden">
        {!closer ? (
          <SiOpencollective
            size={19}
            className=" ease-out duration-1000 hover:cursor-pointer"
          />
        ) : (
          <AiFillCloseCircle
            size={19}
            className="ease-in-out duration-1000 hover:cursor-pointer"
          />
        )}
      </div>
      <div
        className={
          closer
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000 md:hidden"
            : "fixed left-[-100%] top-0  h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-[2s] md:hidden"
        }
      >
        <h1 className="w-full text-[#00df9a] text-3xl font-bold pt-3 ml-3">
          React.
        </h1>
        <ul className=" pt-14 uppercase m-5">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4 border-b border-b-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
