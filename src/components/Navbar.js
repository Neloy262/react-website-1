import React, { useState } from "react";

function Navbar() {
  const [Nav, setNav] = useState("hidden ");
  const [inv, setInv] = useState(0);
  return (
    <>
      <div className="h-full grid grid-cols-2 bg-black font-navbar  text-lg text-white w-full ">
        <div className="flex items-center justify-center font-bold text-4xl ">
          TRVL
        </div>
        <div className="hidden lg:flex lg:justify-center">
          <div className="flex items-center justify-center font-bold mx-5">
            Home
          </div>
          <div className="flex items-center justify-center font-bold mx-5">
            Services
          </div>
          <div className="flex items-center justify-center font-bold mx-5">
            Products
          </div>
          <div className="flex items-center justify-center font-bold mx-5">
            <button className="bg-transparent hover:bg-blue-500 mx-5 font-bold text-white-700 hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[25px] right-[84px] lg:hidden"
        onClick={() => {
          if (inv === 0) {
            setInv(1);
            setNav("flex flex-col ");
          } else {
            setInv(0);
            setNav("hidden ");
          }
        }}
      >
        <i
          className={
            inv
              ? "fas fa-times fa-2x text-white"
              : "fas fa-bars fa-2x text-white"
          }
        ></i>
      </div>
      <div
        className={
          Nav +
          "bg-gray-600 bg-opacity-95 h-screen justify-center gap-11 items-center lg:hidden"
        }
      >
        <div className="flex items-center justify-center font-bold mx-5 text-white text-3xl">
          Home
        </div>
        <div className="flex items-center justify-center font-bold mx-5 text-white text-3xl">
          Services
        </div>
        <div className="flex items-center justify-center font-bold mx-5 text-white text-3xl">
          Products
        </div>
        <div className="flex items-center justify-center font-bold mx-5 ">
          <button className="text-white text-3xl bg-transparent hover:bg-black mx-5 font-bold text-white-700 hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
