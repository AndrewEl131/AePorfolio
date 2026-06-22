import React from "react";

export default function Navigation() {
  return (
    <header className="flex items-center lg:w-[878px] md:w-full  h-[22px] md:mx-auto lg:justify-between justify-center lg:gap-[436px] md:gap-[300px] pt-[30px]">
      <div className="md:flex hidden lg:gap-[90px] gap-[70px] text-white text-[18px] font-medium">
        <h1>HOME</h1>
        <h1>ABOUT</h1>
      </div>

      <div className="md:flex hidden lg:gap-[90px] gap-[70px] text-white text-[18px] font-medium">
        <h1>WORK</h1>
        <h1>CONTACT</h1>
      </div>
    </header>
  );
}
