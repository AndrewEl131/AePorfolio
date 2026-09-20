import React from "react";

type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  siteUrl: string;
  linkedinUrl: string;
  side: "left" | "right";
};

export default function Project({
  title,
  description,
  imageUrl,
  githubUrl,
  siteUrl,
  linkedinUrl,
  side,
}: ProjectProps) {
  return side === "left" ? (
    <div className="w-full lg:h-[700px]">
      <div className="xl:w-[1160px] md:w-[700px] w-full lg:h-[340px] flex lg:flex-row flex-col relative mx-auto md:px-[0px] px-[20px]">
        <div className="lg:w-[620px] md:w-[700px] w-full lg:h-full lg:space-y-[35px] z-10 ">
          <div className="w-full lg:space-y-[50px] space-y-[20px] fade-in-up flex flex-col lg:items-start lg:mt-0 mt-[40px]">
            <div className="space-y-[7px]">
              <h1 className="text-[16px] josefin-sans font-semibold tracking-[2%] text-[#5DFFFF]">
                Featured Project
              </h1>
              <h1 className="text-[34px] font-bold josefin-sans tracking-[2%] text-[#FAFAFA]">
                {title}
              </h1>
            </div>

            <div className="lg:w-[619.58px] w-full lg:h-[331px] h-[280px] space-y-[30px]">
              <div className="md:w-[619.58px] h-[165px] bg-[#26083A] rounded-[14px]">
                <p className="text-[#FAFAFA] text-[18px] font-regular opacity-80 rounded-none tracking-[0px] josefin-sans leading-[30px] p-[20px]">
                  {description}
                </p>
              </div>
              <div className="flex items-center gap-[16px] ml-[20px]">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <img src="/icons/git.png" alt="github" />
                </a>
                <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                  <img src="/icons/link.png" alt="site" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <img src="/icons/linkedin.png" alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[583.81px] md:w-[700px] w-full md:h-[341px] lg:absolute right-0 top-0 shadow-[3px_4px_5px_0px_rgba(0,0,0,0.2)]">
          <img
            src={imageUrl}
            alt="project"
            className="w-full h-full rounded-[14px]"
          />
        </div>

        <div className="md:w-[700px] md:h-[700px] md:flex hidden border rounded-full absolute right-[-50px] top-[-120px] bg-gradient-to-r from-[#DC00D34D] to-[#12B4B44D] blur-[350px]"></div>
      </div>
    </div>
  ) : (
    <div className="w-full md:h-[700px] h-[600px]">
      <div className="xl:w-[1160px] md:w-[700px] w-full h-[340px] flex lg:flex-row flex-col relative mx-auto md:px-[0px] px-[20px]">
        <div className="w-full lg:w-[583.81px] md:w-[700px] md:h-[341px] lg:absolute left-0 top-0 shadow-[3px_4px_5px_0px_rgba(0,0,0,0.2)] lg:mb-0 mb-[40px]">
          <img
            src={imageUrl}
            alt="project"
            className="w-full h-full rounded-[14px]"
          />
        </div>

        <div className="lg:w-[620px] md:w-[700px] w-full h-full space-y-[35px] z-10 lg:absolute right-0 top-0">
          <div className="w-full lg:space-y-[50px] space-y-[20px] flex flex-col lg:items-end">
            <div className="space-y-[7px]">
              <h1 className="text-[16px] josefin-sans font-semibold tracking-[2%] text-[#5DFFFF]">
                Featured Project
              </h1>
              <h1 className="text-[34px] font-bold josefin-sans tracking-[2%] text-[#FAFAFA]">
                {title}
              </h1>
            </div>

            <div className="lg:w-[619.58px] w-full h-[331px] space-y-[30px]">
              <div className="lg:w-[619.58px] w-full h-[165px] bg-[#26083A] rounded-[14px]">
                <p className="text-[#FAFAFA] text-[18px] font-regular opacity-80 rounded-none tracking-[0px] josefin-sans leading-[30px] p-[20px]">
                  {description}
                </p>
              </div>
              <div className="flex items-center justify-end gap-[16px] mr-[20px]">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <img src="/icons/git.png" alt="github" />
                </a>
                <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                  <img src="/icons/link.png" alt="site" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <img src="/icons/linkedin.png" alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[700px] md:h-[700px] border rounded-full absolute left-[-50px] top-[-120px] bg-gradient-to-r from-[#DC00D34D] to-[#12B4B44D] blur-[350px]"></div>
      </div>
    </div>
  );
}
