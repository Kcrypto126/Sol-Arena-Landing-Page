"use client";

import Image from "next/image";
interface FeaturesSection {
  id: number;
  isActive: boolean;
  setCardID: (id: number) => void;
  featurestop: string;
  featuresbottom: string;
  featurescolor: string;
  featuresborder: string;
  card: string;
  title: string;
  desc: string;
}

const FeaturesSection: React.FC<FeaturesSection> = ({
  setCardID,
  id,
  isActive,
  featurestop,
  featuresbottom,
  featurescolor,
  featuresborder,
  card,
  title,
  desc
}) => {
  return (
    <>
      <div className=" relative">
        <div
          className=" hidden md:block h-[600px] border-2 rounded-3xl p-5 bg-black bg-opacity-55 relative transition-all duration-300 cursor-pointer"
          style={{
            boxShadow: `inset 0 0 20px 12px ${featurescolor}`,
            width: `${isActive ? 360 : 180}px`,
            borderColor: `${featuresborder}`,
          }}
          onClick={() => {
            setCardID(id);
          }}
        >
          <div
            className=" relative flex justify-center items-center bg-transparent overflow-hidden rounded-lg"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div className={` ${isActive ? "" : " bg-[#00000062]"} absolute w-full h-full  `} style={{ boxShadow: `inset 0 0 15px 2px ${featurescolor}` }}>

            </div>
            <Image
              src={card}
              alt="alt"
              width={360}
              height={600}
              className={` ${isActive ? "w-[100%] h-[100%]" : "w-[360px] h-[600px]"} max-w-[360px] rounded-lg`}
            />
          </div>
          <Image
            src={`${featurestop}`}
            alt="alt"
            width={115}
            height={6}
            style={{
              position: "absolute",
              left: `${isActive ? 122 : 32}px`,
              top: "-2px",
            }}
            className="transition-all duration-300"
          />
          <Image
            src={`${featuresbottom}`}
            alt="alt"
            width={70}
            height={6}
            style={{
              position: "absolute",
              left: `${isActive ? 145 : 55}px`,
              bottom: "-2.3px",
            }}
            className="transition-all duration-300"
          />
        </div>
        <div
          className=" block md:hidden w-[343px] h-[506px] md:h-[600px] border-2 rounded-3xl p-5 bg-black bg-opacity-55 relative transition-all duration-300 cursor-pointer "
          style={{
            boxShadow: `inset 0 0 20px 15px ${featurescolor}`,
            borderColor: `${featuresborder}`
          }}
        >
          <div
            className=" relative flex justify-center items-center bg-transparent overflow-hidden rounded-lg"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div className={` ${isActive ? "" : " bg-auto md:bg-[#00000062]"} absolute w-full h-full  `} style={{ boxShadow: `inset 0 0 15px 2px ${featurescolor}` }}>

            </div>
            <Image
              src={card}
              alt="alt"
              width={360}
              height={600}
              className={` w-[100%] h-[100%] max-w-[360px] rounded-lg`}
            />
          </div>
          <Image
            src={`${featurestop}`}
            alt="alt"
            width={115}
            height={6}
            style={{
              position: "absolute",
              left: `114px`,
              top: "-2px",
            }}
            className="transition-all duration-300"
          />
          <Image
            src={`${featuresbottom}`}
            alt="alt"
            width={70}
            height={6}
            style={{
              position: "absolute",
              left: `137px`,
              bottom: "-2.3px",
            }}
            className="transition-all duration-300"
          />
        </div>
        <div
          className={` z-10 text-white flex flex-col absolute bottom-[-36px] md:bottom-[45px] left-[27.5px] md:left-[-71px] ${isActive ? "block" : " block md:hidden"} `}
        >
          <div
            className="w-[136px] md:w-[194px] h-[26px] md:h-[42px] flex justify-start items-center pl-4 bg-center bg-no-repeat font-[Montserrat] font-semibold text-[12px] md:text-[20px]"
            style={{
              backgroundImage: "url('/assets/features/text-back2.png')",
              backgroundSize: "100% 100%"
            }}
          >
            <h1 className="pr-5">{title}</h1>
          </div>
          <div className=" text-[12px] md:text-[16px] font-[Montserrat] text-white font-medium px-3 md:px-4 py-2 md:py-3 border-[2px] border-[#130C51] rounded-[8px] md:rounded-[20px] rounded-ss-none md:rounded-ss-none max-w-[289px] md:max-w-[365px] bg-[#603CDB]">
            {desc}
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturesSection;
