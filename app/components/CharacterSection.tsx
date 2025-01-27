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
          className={`second-section max-w-[1440px] m-auto flex flex-row pl-0 pr-0 xl:pl-[180px] pb-[60px] md:pb-0 relative bg-no-repeat bg-[left_16px_top_133px] md:bg-[left_32px_top_133px] lg:bg-[left_32px_top_120px] xl:bg-[left_180px_top_120px] bg-[length:90%] md:bg-[length:550px_103px] lg:bg-[length:auto] `}
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
          <div className="flex-1 pt-[227px] md:pt-[281px] pb-[72px] md:pb-[140px] flex flex-col">
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
              className={` md:h-[70px] h-[47px] ml-[-6px] absolute top-[165px] md:top-[190px] left-4 md:left-8 xl:left-[180px] ${isScale == 1
                ? "  max-w-[398px]"
                : isScale == 2
                  ? " max-w-[90%] md:max-w-[509px]"
                  : isScale == 3
                    ? " max-w-[90%] md:max-w-[449px]"
                    : isScale == 4
                      ? " max-w-[90%] md:max-w-[688px]"
                      : " max-w-[90%] md:max-w-[449px]"
                }`}
            />
            <div className=" flex flex-row gap-3 md:gap-4 pl-4 md:pl-8 xl:pl-0">
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
                  } rounded-sm border-b-2 border-r-2 text-[12px] md:text-[16px] font-semibold text-white`}
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
                className={`flex justify-center items-center w-[24px] md:w-[32px] h-[24px] md:h-[32px] text-[7px] md:text-[9px] font-bold ${isScale == 1
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
                  backgroundSize: "100% 100%"
                }}
              >
                NFT
              </div>
            </div>
            <div
              className={` z-10 max-w-[100%] md:max-w-[594px] ms-4 md:ms-8 xl:ms-0 p-4 md:p-8 mt-0 md:mt-[48px] border-r-4 md:border-r-0 border-l-0 md:border-l-8 absolute bottom-[40px] md:bottom-auto right-4 md:right-auto md:relative ${isScale == 1
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
                {isScale == 1 ? "Sakura, the bubbly girl next door with a mischievous spark, stumbled into the arena by chance. Her quick thinking and charisma made her a crowd favorite overnight. Every fight is a whirlwind of surprises, proving even the scrappiest underdog can shine in the spotlight."
                  : isScale == 2 ? "Bonkster lives for chaos, his wry grin a signal of trouble waiting to unfold. He moves through the arena with a reckless ease, every wink and smirk daring someone to challenge him. He fights to disrupt, to mock, to remind the powerful they are not untouchable—and to steal a few hearts on the way."
                    : isScale == 3 ? "Hoplyn’s name lights up the skyline, luring the city’s elite to Club Arcadia, the most luxurious gentlemen’s club where secrets are currency. On stage, she moves like a whispered dream, every gesture enchanting. But beneath the charm lies a sharp mind, quietly bending the powerful to her will."
                      : isScale == 4 ? "Pump Master is neon madness wrapped in a tailored suit. His memecoin empire thrives in the digital underbelly, where greed meets irony and chaos reigns supreme. His suits gleam, his staff shines, and the man himself stands ready—fueled by lust for fame and fortune."
                        : "Blastine is pure kinetic energy, a corporate enforcer that thrives on mayhem. Her rocket blazes trails of neon light as she tears through the battlefield. Finesse is meaningless to her—hers is a world of raw fury and explosions, where only the fearless can hope to survive."}
              </p>
            </div>
            <div
              className=" absolute top-[50px] md:top-0 left-0 md:relative w-[225px] md:w-[284px] h-[40px] md:h-[52px] mt-0 md:mt-[72px] bg-no-repeat flex justify-center items-center text-[24px] md:text-[32px] font-black text-[#0A164E] pr-3 ms-0 md:ms-8 xl:ms-0"
              style={{
                backgroundImage: "url('/assets/character/Frame-2149.png')",
                backgroundSize: "100% 100%",
              }}
            >
              Challengers
            </div>
            <div className="h-[398px] md:h-[138px] mt-[24px] md:mt-4 relative ps-1 xl:ps-0 ">
              <div className=" w-[72px] md:w-[594px] z-20 flex flex-col md:flex-row absolute top-0 md:bottom-0 justify-start md:justify-start items-center md:items-end gap-2 md:gap-1">
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
          <div className={` flex flex-1 flex-row justify-start items-end z-0 md:relative absolute md:top-auto bottom-auto md:bottom-[41px] right-auto md:right-0 md:left-auto ${isScale == 1 ? "left-[36px] top-[237px]" : isScale == 2 ? "left-[99px] top-[251px]" : isScale == 3 ? "left-[44px] top-[239px]" : isScale == 4 ? "left-[64px] top-[245px]" : "left-[43px] top-[247px]"} `}>
            <Image
              src={
                isScale == 1
                  ? "/assets/character/effect-character/character-1.png"
                  : isScale == 2
                    ? "/assets/character/effect-character/character-2.png"
                    : isScale == 3
                      ? "/assets/character/effect-character/character-3.png"
                      : isScale == 4
                        ? "/assets/character/effect-character/character-4.png"
                        : "/assets/character/effect-character/character-5.png"
              }
              alt="character"
              width={800}
              height={938}
              className={` ml-0 mb-0 ${isScale == 1 ? " max-w-[374px] max-h-[438px] md:max-w-[726px] md:max-h-[853px] md:ml-[-190px] md:mb-[46px]" : isScale == 2 ? " max-w-[315px] max-h-[370px] md:max-w-[600px] md:max-h-[704px] md:ml-[-35px] md:mb-[106px]" : isScale == 3 ? "max-w-[376px] max-h-[441px] md:max-w-[800px] md:max-h-[938px] md:ml-[-210px] md:mb-0" : isScale == 4 ? "max-w-[376px] max-h-[441px] md:max-w-[763px] md:max-h-[896px] md:mr-[-80px] md:mb-0 md:ml-[-50px]" : " max-w-[324px] max-h-[380px] md:max-w-[717px] md:max-h-[841px] md:ml-[-200px] md:mb-[53px]"} ml-auto z-0`}
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
              width={391}
              height={486}
              className={` max-w-[124px] max-h-[181px] z-20 absolute md:right-0 ${isScale == 1 ? " max-w-[87px] max-h-[150px] right-[52px] md:max-w-[282px] md:max-h-[483px] " : isScale == 2 ? "max-w-[121px] max-h-[150px] right-[20px] mb-[-50px] md:max-w-[391px] md:max-h-[486px]" : isScale == 3 ? "max-w-[120px] max-h-[150px] right-[40px] md:max-w-[385px] md:max-h-[494px]" : isScale == 4 ? "max-w-[106px] max-h-[150px] right-[60px] mb-[10px] md:max-w-[326px] md:max-h-[448px]" : "max-w-[121px] max-h-[150px] right-0 mb-[-50px] md:max-w-[391px] md:max-h-[486px]"}  `}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CharacterSection;
