"use client";

import React from "react";
import { useState } from "react";

export default function Contact() {
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const [err, setErr] = useState("");

  async function sendMail() {
    if (name.length === 0 || message.length === 0 || mail.length === 0) {
      return setErr("გთხოვთ შეავსოთ ყველა ველი !");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      return setErr("გთხოვთ მიუთითოთ ვალიდური ელექტრონული ფოსტა !");
    }

    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail, message, name }),
    });

    const data = await res.json();

    if (data.success) {
      alert("თქვენი წერილი გაიგზავნა!, დაელოდეთ პასუხს.");
    }
  }

  return (
    <div
      className="bg-[#100425] lg:space-y-[130px] md:space-y-[80px] space-y-[30px]"
      id="contact"
    >
      <div className="mx-auto lg:space-y-[70px] md:space-y-[40px] space-y-[20px] md:px-0 px-[20px]">
        <h1 className="josefin-sans font-semibold md:text-[66px] text-[38px] tracking-[-0.45px] text-center bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">
          Contact
        </h1>

        <div className="xl:w-[1222.4px] md:w-[700px] lg:h-[467.37px] mx-auto flex lg:flex-row flex-col lg:gap-[172px] gap-[100px] pb-[20px] relative">
          <div className="md:w-[523px] h-[347.47px] flex flex-col gap-[40px] fade-in-up">
            <div className="w-full flex flex-col gap-[15px]">
              <h1 className="josefin-sans font-semibold md:text-[40px] text-[30px] tracking-[-0.45px] bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">
                Drop me a message
              </h1>

              <p className="text-[#FAFAFA] md:text-[18px] text-[14px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA] leading-[30px] josefin-sans">
                Have a question or want to work together? Fill out the form
                below and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center gap-[15px]">
                <img src="/icons/phone.png" alt="phone" />

                <p className="text-[#FAFAFA] md:text-[18px] text-[14px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA]">
                  +995 591 08 67 04
                </p>
              </div>

              <div className="flex items-center gap-[15px]">
                <img src="/icons/mail.png" alt="email" />

                <p className="text-[#FAFAFA] md:text-[18px] text-[14px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA]">
                  andyelizbarashvilii@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-[15px]">
                <img src="/icons/location.png" alt="location" />

                <p className="text-[#FAFAFA] md:text-[18px] text-[14px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA]">
                  Georgia, Tbilisi
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#2B0B3A] rounded-[8px] md:w-[527.4px] w-full h-[467.37px] px-[47px] py-[34px] flex flex-col gap-[10px] lg:mx-0 mx-auto">
            <div className="md:w-[434px] h-full flex flex-col gap-[30px] fade-in-up">
              <div className="w-full flex flex-col gap-[8px]">
                <div className="w-full flex flex-col gap-[8px]">
                  <div className="w-full flex flex-col gap-[8px]">
                    <label
                      htmlFor="name"
                      className="text-[#FAFAFA] md:text-[18px] text-[14px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      className="w-full h-[40px] px-[10px] py-[8px] bg-[#100425] border border-[#5DFFFF] rounded-[4px] text-[#FAFAFA]"
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setErr("")}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-[8px]">
                  <div className="w-full flex flex-col gap-[8px]">
                    <label
                      htmlFor="email"
                      className="text-[#FAFAFA] md:text-[18px] text-[14px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={mail}
                      className="w-full h-[40px] px-[10px] py-[8px] bg-[#100425] border border-[#5DFFFF] rounded-[4px] text-[#FAFAFA]"
                      onChange={(e) => setMail(e.target.value)}
                      onFocus={() => setErr("")}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-[8px]">
                  <div className="w-full flex flex-col gap-[8px]">
                    <label
                      htmlFor="message"
                      className="text-[#FAFAFA] md:text-[18px] text-[14px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full h-[96px] px-[10px] py-[8px] bg-[#100425] border border-[#5DFFFF] rounded-[4px] text-[#FAFAFA]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setErr("")}
                    />
                  </div>
                </div>
              </div>
              <button
                className="w-full h-[40px] bg-[#5DFFFF] text-[#100425] font-bold rounded-[4px] hover:bg-[#4da8a8] transition-colors duration-300"
                onClick={sendMail}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[1222.4px] md:w-[700px] w-[300px] h-[2px] bg-[#5DFFFF] mx-auto"></div>
    </div>
  );
}
