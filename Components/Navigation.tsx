import React from "react";
import "../app/globals.css";

export default function Navigation() {
  const links = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "WORK", href: "#work" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="flex items-center lg:w-[878px] md:w-full h-[22px] md:mx-auto lg:justify-between justify-center lg:gap-[436px] md:gap-[300px] pt-[30px]">
      <div className="md:flex hidden lg:gap-[90px] gap-[70px]">
        {links.slice(0, 2).map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative group cursor-pointer"
          >
            <h1 className="text-white text-[18px] font-medium">{link.name}</h1>

            <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        ))}
      </div>

      <div className="md:flex hidden lg:gap-[90px] gap-[70px]">
        {links.slice(2).map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative group cursor-pointer"
          >
            <h1 className="text-white text-[18px] font-medium">{link.name}</h1>

            <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        ))}
      </div>
    </header>
  );
}
