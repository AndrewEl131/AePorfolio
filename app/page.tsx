import Image from "next/image";
import Navigation from "../Components/Navigation";
import Project from "@/Components/Project";
import "./globals.css";

export default function Home() {
  return (
    <>
      <main className="bg-[#100425] relative w-full xl:px-3 px-1 pt-[20px]">
        <div className="w-full h-screen z-0 rounded-lg glass-card">
          <Navigation />

          <div className="xl:w-[612px] md:w-[700px] w-full flex flex-col md:gap-[40px] gap-[20px] relative z-10 md:mt-[200px] mt-[150px] md:left-[70px] left-[20px]">
            <div className="w-full md:h-[350px] h-[300px] md:space-y-[30px] space-y-[20px] gap-[6px]">
              <div className="w-full flex flex-col">
                <h1 className="text-[#FAFAFA] md:text-[88px] text-[24px] font-bold font-josefin-sans tracking-[-0.45px]">
                  Hi, I'm Andy
                </h1>

                <h1 className="md:text-[50px] text-[32px] font-semibold tracking-[-0.45px] bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">
                  Fullstack Developer
                </h1>
              </div>
              <p className="text-[#FAFAFA] md:text-[18px] text-[14px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA] leading-[30px] md:w-[513px] w-[300px] josefin-sans">
                I am a fullstack developer with a passion for creating beautiful
                and functional web applications. I have experience in a variety
                of technologies and frameworks, and I am always eager to learn
                new things.
              </p>
            </div>
            <button className="w-[120px] h-[45px] px-[26px] py-[8px] flex justify-center items-center josefin-sans bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] text-white rounded-[40px] leading-[30px] tracking-[0px] text-[18px] font-semibold">
              Contact
            </button>
          </div>

          <img
            src="/assets/guy.png"
            alt="guy"
            className="absolute right-0 bottom-1 z-10 w-[1000px] h-[700px] xl:flex hidden"
          />
          <div className="lg:w-[738px] lg:h-[800px] w-[200px] h-[200px] rounded-full glow absolute lg:right-0 bottom-0 md:flex hidden"></div>
          <img
            src="/assets/rec-1.png"
            alt=""
            className="w-[196px] h-[47px] absolute top-5 left-[50%] transform translate-x-[-50%]"
          />
        </div>
      </main>
      <div className="bg-[#100425] md:h-[266px] h-[100px] w-full "></div>

      {/* About Section */}
      <div className="bg-[#100425] md:space-y-[130px] space-y-[60px] md:px-0 px-[20px]">
        <div className="lg:w-[1000px] md:w-[700px] w-full mx-auto md:space-y-[70px] space-y-[20px]">
          <h1 className="josefin-sans font-semibold md:text-[66px] text-[36px] tracking-[-0.45px] text-center bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">
            About
          </h1>
          <p className="text-[#FAFAFA] md:text-[18px] text-[14px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA] text-center leading-[30px] josefin-sans">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
        </div>

        {/* Skills Section */}
        <div className="lg:w-[1000px] md:w-[700px] w-full mx-auto md:pb-0 pb-[20px]">
          <img src="/assets/skills.png" alt="skills" />
        </div>
      </div>

      {/* Recent Work Section */}
      <div className="bg-[#100425] lg:space-y-[130px] md:space-y-[80px] space-y-[30px]">
        <div className="mx-auto w-full ">
          <h1 className="josefin-sans font-semibold md:text-[66px] text-[36px] tracking-[-0.45px] text-center bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">
            Recent Work
          </h1>
          <p className="text-[#FAFAFA] text-[18px] font-regular opacity-80 rounded-none tracking-[0px] text-[#FAFAFA] text-center leading-[30px] josefin-sans">
            A collection of projects I've worked on.
          </p>
        </div>

        <div className="lg:space-y-[-152px] space-y-[152px]">
          <Project
            title="Example Project"
            description="A web app for visualizing personalized Spotify data."
            imageUrl="/assets/project.png"
            githubUrl="https://github.com/example/project"
            twitterUrl="https://twitter.com/example"
            linkedinUrl="https://linkedin.com/in/example"
            side="left"
          />

          <Project
            title="Example Project"
            description="A web app for visualizing personalized Spotify data."
            imageUrl="/assets/project.png"
            githubUrl="https://github.com/example/project"
            twitterUrl="https://twitter.com/example"
            linkedinUrl="https://linkedin.com/in/example"
            side="right"
          />

          <Project
            title="Example Project"
            description="A web app for visualizing personalized Spotify data."
            imageUrl="/assets/project.png"
            githubUrl="https://github.com/example/project"
            twitterUrl="https://twitter.com/example"
            linkedinUrl="https://linkedin.com/in/example"
            side="left"
          />

          <Project
            title="Example Project"
            description="A web app for visualizing personalized Spotify data."
            imageUrl="/assets/project.png"
            githubUrl="https://github.com/example/project"
            twitterUrl="https://twitter.com/example"
            linkedinUrl="https://linkedin.com/in/example"
            side="right"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#100425] lg:space-y-[130px] md:space-y-[80px] space-y-[30px]">
        <div className="mx-auto lg:space-y-[70px] md:space-y-[40px] space-y-[20px] md:px-0 px-[20px]">
          <h1 className="josefin-sans font-semibold md:text-[66px] text-[38px] tracking-[-0.45px] text-center bg-gradient-to-r from-[#5DFFFF] to-[#AE0CA7] bg-clip-text text-transparent">
            Contact
          </h1>

          <div className="xl:w-[1222.4px] md:w-[700px] lg:h-[467.37px] mx-auto flex lg:flex-row flex-col lg:gap-[172px] gap-[100px] pb-[20px] relative">
            <div className="md:w-[523px] h-[347.47px] flex flex-col gap-[40px]">
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
                    +1 (123) 456-7890
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
              <div className="md:w-[434px] h-full flex flex-col gap-[30px]">
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
                        className="w-full h-[40px] px-[10px] py-[8px] bg-[#100425] border border-[#5DFFFF] rounded-[4px] text-[#FAFAFA]"
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
                        className="w-full h-[40px] px-[10px] py-[8px] bg-[#100425] border border-[#5DFFFF] rounded-[4px] text-[#FAFAFA]"
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
                      />
                    </div>
                  </div>
                </div>
                <button className="w-full h-[40px] bg-[#5DFFFF] text-[#100425] font-bold rounded-[4px] hover:bg-[#4da8a8] transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[1222.4px] md:w-[700px] w-[300px] h-[2px] bg-[#5DFFFF] mx-auto"></div>
      </div>

      {/* Footer Section */}
      <footer className="w-full h-[80px] bg-[#100425]">
        <div className="xl:w-[1222.4px] md:w-[700px] w-full flex items-center md:justify-between justify-center mx-auto h-full">
          <p className="text-[#FAFAFA] md:text-[16px] text-[14px] font-regular opacity-80 md:text-left text-center">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          <div className="md:flex hidden items-center justify-end md:gap-[16px] gap-[10px] md:mr-[20px]">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/icons/git.png" alt="github" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.png" alt="twitter" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
