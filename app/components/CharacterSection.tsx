"use client";

import Image from "next/image";
import { useState } from "react";

const CharacterSection: React.FC = () => {
  const [isScale, setIsScale] = useState(1);
  return (
    <>
      <div
        className="section w-full bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            isScale == 1
              ? "url('/assets/character/character-back-1.webp')"
              : isScale == 2
                ? "url('/assets/character/character-back-2.webp')"
                : isScale == 3
                  ? "url('/assets/character/character-back-3.webp"
                  : isScale == 4
                    ? "url('/assets/character/character-back-4.webp"
                    : "url('/assets/character/character-back-5.webp",
        }}
      >
        <div
          className={`second-section max-w-[1440px] m-auto flex flex-row pl-0 pr-0 xl:pl-[180px] relative bg-no-repeat bg-[left_16px_top_133px] md:bg-[left_32px_top_133px] lg:bg-[left_32px_top_120px] xl:bg-[left_180px_top_120px] ${isScale == 1
            ? "bg-[length:90%] md:bg-[length:550px_103px] lg:bg-[length:auto]"
            : "bg-[length:90%] md:bg-[length:550px_103px] lg:bg-[length:auto]"
            }
          `}
          style={{
            backgroundImage:
              isScale == 1
                ? "url('/assets/character/back-text-1.png')"
                : isScale == 2
                  ? "url('/assets/character/back-text-2.png')"
                  : isScale == 3
                    ? "url('/assets/character/back-text-3.png"
                    : isScale == 4
                      ? "url('/assets/character/back-text-4.png"
                      : "url('/assets/character/back-text-5.png",
          }}
        >
          <div className="flex-1 pt-[195px] md:pt-[190px] pb-[72px] md:pb-[140px] flex flex-col ">
            <Image
              src={
                isScale == 1
                  ? "/assets/character/main-text-1.png"
                  : isScale == 2
                    ? "/assets/character/main-text-2.png"
                    : isScale == 3
                      ? "/assets/character/main-text-3.png"
                      : isScale == 4
                        ? "/assets/character/main-text-4.png"
                        : "/assets/character/main-text-5.png"
              }
              alt="text img"
              width={685}
              height={70}
              className={` md:h-[70px] h-[47px] mt-[-40px] sm:mt-[-20px] lg:mt-auto pl-4 md:pl-8 xl:pl-0 ${isScale == 1
                ? " ml-[-6px] "
                : isScale == 2
                  ? " ml-[-8px] "
                  : isScale == 3
                    ? " ml-[-9px] "
                    : isScale == 4
                      ? " ml-[-6px] "
                      : " ml-[-9px] "
                }`}
            />
            <div className=" flex flex-row gap-4 pl-4 mt-6 md:pl-8 xl:pl-0">
              <div
                className={`flex justify-center items-center px-2 h-[30px] ${isScale == 1
                  ? "bg-[#7E81A9] border-[#F7FF80]"
                  : isScale == 2
                    ? "bg-[#3676FF] border-[#41FFCC]"
                    : isScale == 3
                      ? "bg-[#E136FF] border-[#FFF641]"
                      : isScale == 4
                        ? "bg-[#FF9E36] border-[#FCFF41]"
                        : "bg-[#FF3658] border-[#FFD341]"
                  } rounded-sm border-b-2 border-r-2 text-[16px] font-semibold text-white`}
              >
                {isScale == 1
                  ? "Common"
                  : isScale == 2
                    ? "Rare"
                    : isScale == 3
                      ? "Epic"
                      : isScale == 4
                        ? "Legendary"
                        : "Artifact"}
              </div>
              <div
                className={`flex justify-center items-center w-[32px] h-[32px] text-[9px] font-bold ${isScale == 1
                  ? "text-[#C0D2FF]"
                  : isScale == 2
                    ? "text-[#61C2FF]"
                    : isScale == 3
                      ? "text-[#E136FF]"
                      : isScale == 4
                        ? "text-[#FEDA61]"
                        : "text-[#FF898B]"
                  } `}
                style={{
                  backgroundImage:
                    isScale == 1
                      ? "url('/assets/character/hex-back-1.png')"
                      : isScale == 2
                        ? "url('/assets/character/hex-back-1.png"
                        : isScale == 3
                          ? "url('/assets/character/hex-back-1.png"
                          : isScale == 4
                            ? "url('/assets/character/hex-back-1.png"
                            : "url('/assets/character/hex-back-1.png",
                }}
              >
                NFT
              </div>
            </div>
            <div
              className={` z-10 max-w-[253px] md:max-w-[529px] ms-8 xl:ms-0 p-5 md:p-10 mt-12 border-r-4 md:border-r-0 border-l-0 md:border-l-8 absolute bottom-[72px] md:bottom-0 right-4 md:right-0 md:relative ${isScale == 1
                ? "border-[#38E8FF]"
                : isScale == 2
                  ? "border-[#FFD752]"
                  : isScale == 3
                    ? "border-[#FF3859]"
                    : isScale == 4
                      ? "border-[#38FFCA]"
                      : "border-[#FFA21F]"
                } bg-[#070733] bg-opacity-45 bg-[url('/assets/character/Pattern.png')] bg-no-repeat`}
              style={{ backgroundSize: "auto 100%" }}
            >
              <p className="text-[#CAD4EF] font-semibold text-[10px] md:text-[20px] leading-[150%] md:leading-[150%]">
                Lorem ipsum dolor sit amet conser. Rhocus gravida massa posuere
                sed. Pharet lorem facis. Sit laoreet sed pretium fusce nisl dksj
                faucibus lssssp.
              </p>
            </div>
            <div
              className=" absolute top-[50px] md:top-0 left-0 md:relative w-[225px] md:w-[284px] h-[40px] md:h-[52px] mt-0 md:mt-[100px] bg-no-repeat flex justify-center items-center text-[24px] md:text-[32px] font-black text-[#0A164E] pr-3 ms-0 md:ms-8 xl:ms-0"
              style={{
                backgroundImage: "url('/assets/character/Frame-2149.png')",
                backgroundSize: "100% 100%",
              }}
            >
              Challengers
            </div>
            <div className="h-[398px] md:h-[138px] mt-[47px] md:mt-8 relative ps-1 xl:ps-0 ">
              <div className=" w-[72px] md:w-[594px] z-20 flex flex-col md:flex-row absolute top-0 md:bottom-0 justify-start md:justify-start items-center md:items-end gap-4 md:gap-1">
                <Image
                  src={
                    isScale !== 1
                      ? "/assets/character/avatar-1.png"
                      : "/assets/character/avatar-1-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${isScale == 1
                    ? " w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                    : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                    }`}
                  onClick={() => {
                    setIsScale(1);
                  }}
                />
                <Image
                  src={
                    isScale !== 2
                      ? "/assets/character/avatar-2.png"
                      : "/assets/character/avatar-2-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${isScale == 2
                    ? "w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                    : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                    }`}
                  onClick={() => {
                    setIsScale(2);
                  }}
                />
                <Image
                  src={
                    isScale !== 3
                      ? "/assets/character/avatar-3.png"
                      : "/assets/character/avatar-3-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${isScale == 3
                    ? "w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                    : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                    }`}
                  onClick={() => {
                    setIsScale(3);
                  }}
                />
                <Image
                  src={
                    isScale !== 4
                      ? "/assets/character/avatar-4.png"
                      : "/assets/character/avatar-4-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${isScale == 4
                    ? "w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                    : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                    }`}
                  onClick={() => {
                    setIsScale(4);
                  }}
                />
                <Image
                  src={
                    isScale !== 5
                      ? "/assets/character/avatar-5.png"
                      : "/assets/character/avatar-5-big.png"
                  }
                  alt="avatar"
                  width={130}
                  height={138}
                  className={` transition-all cursor-pointer ${isScale == 5
                    ? "w-[72px] h-[76px] md:w-[130px] md:h-[138px]"
                    : " w-[60px] h-[64px] md:w-[108px] md:h-[116px]"
                    }`}
                  onClick={() => {
                    setIsScale(5);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-row justify-start items-center pt-[64px] pb-0 md:pb-[64px] z-0 md:relative absolute right-0 bottom-[153px] md:bottom-0">
            <Image
              src={
                isScale == 1
                  ? "/assets/character/character-1.png"
                  : isScale == 2
                    ? "/assets/character/character-2.png"
                    : isScale == 3
                      ? "/assets/character/character-3.png"
                      : isScale == 4
                        ? "/assets/character/character-4.png"
                        : "/assets/character/character-5.png"
              }
              alt="character"
              width={580}
              height={730}
              className="max-w-[343px] max-h-[421px] md:max-w-[580px] md:max-h-[730px] mr-[-25px] md:mr-[20px] z-0"
            />
            <Image
              src={
                isScale == 1
                  ? "/assets/character/character-small-1.png"
                  : isScale == 2
                    ? "/assets/character/character-small-2.png"
                    : isScale == 3
                      ? "/assets/character/character-small-3.png"
                      : isScale == 4
                        ? "/assets/character/character-small-4.png"
                        : "/assets/character/character-small-5.png"
              }
              alt="character"
              width={345}
              height={486}
              className=" z-20 max-w-[104px] max-h-[161px] md:max-w-[325px] md:max-h-[466px] absolute bottom-0 md:bottom-[41px] right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CharacterSection;
