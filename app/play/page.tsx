"use client";

import Image from "next/image";
// import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Page: React.FC = () => {
  // const data = [
  //   [{ img: "/assets/play/1m.png", title: "1. Enter the Arena", disc: "Choose your Challenger and Team—teammates can’t harm you! When you’re ready, Enter the Arena!" }],
  //   [
  //     { img: "/assets/play/2m.png", title: "", disc: "" },
  //     { img: "/assets/play/3m.png", title: "", disc: "" },
  //   ],
  //   // "/assets/play/carousel/3.png",
  // ];

  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    // Update height on component mount and window resize
    const updateHeight = () => {
      setHeight(window.innerHeight); // Adjust for any fixed headers
    };

    updateHeight(); // Set initial height

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      {/* <Layout> */}
      <div className=" w-full bg-[url('/assets/play/back.webp')] bg-no-repeat h-screen bg-center bg-cover pt-[72px]">
        <div className="max-w-[1440px] m-auto text-white ">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Mousewheel]}
            style={{
              height: height - 72 + "px",
            }}
            mousewheel
            className="mySwiper"
          >
            {/* 1m */}
            <SwiperSlide className=" relative border flex flex-row justify-center items-center">
              <div className=" border w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h2 className=" font-semibold text-[24px] text-[#41FFC6]">
                  1. Enter the Arena
                </h2>
                <div className=" relative">
                  <Image
                    src={"/assets/play/1m.png"}
                    alt="1m"
                    width={640}
                    height={360}
                    className=" "
                  />
                  <Image
                    src={"/assets/play/1m-left.png"}
                    alt="1m-left"
                    width={407}
                    height={187}
                    className=" absolute left-[-385px] bottom-0"
                  />
                  <Image
                    src={"/assets/play/1m-right.png"}
                    alt="1m-left"
                    width={407}
                    height={187}
                    className=" absolute right-[-385px] bottom-0"
                  />
                </div>
                <p className=" text-[#C9D5FF] text-[18px] font-medium py-[51px] leading-[150%] max-w-[640px] text-center">
                  Choose your Challenger and Team—teammates can’t harm you! When
                  you’re ready, Enter the Arena!
                </p>
              </div>
            </SwiperSlide>
            {/* 2m-3m */}
            <SwiperSlide className=" relative flex flex-row justify-center items-center">
              <div className=" w-[100%] h-[100%] flex flex-row gap-4 justify-center items-center">
                {/* 2m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-end">
                  <div className=" flex flex-col justify-center items-center gap-8">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6]">
                      2. Gather Energy
                    </h2>
                    <div className=" relative">
                      <Image
                        src={"/assets/play/2m.png"}
                        alt="2m"
                        width={640}
                        height={360}
                        className=" relative z-10"
                      />
                      <Image
                        src={"/assets/play/2m-1.png"}
                        alt="2m-1"
                        width={121}
                        height={126}
                        className=" absolute left-[-60px] top-10 z-0"
                      />
                      <Image
                        src={"/assets/play/2m-2.png"}
                        alt="2m-2"
                        width={89}
                        height={91}
                        className=" absolute right-[40px] top-[-45px] z-20"
                      />
                      <Image
                        src={"/assets/play/2m-3.png"}
                        alt="2m-3"
                        width={97}
                        height={101}
                        className=" absolute right-[50px] bottom-[-70px] z-20"
                      />
                      <Image
                        src={"/assets/play/2m-4.png"}
                        alt="2m-4"
                        width={143}
                        height={145}
                        className=" absolute left-[-70px] bottom-[-20px] z-20"
                      />
                      <Image
                        src={"/assets/play/2m-2.png"}
                        alt="2m-5"
                        width={89}
                        height={91}
                        className=" absolute left-[60px] bottom-[-45px] z-0"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium py-[51px] leading-[150%] max-w-[640px] text-center">
                      Collect Energy to grow your Trail!
                    </p>
                  </div>
                </div>
                {/* 3m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-start">
                  <div className=" flex flex-col justify-center items-center gap-8">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6]">
                      3. Mystery Box & Power-ups
                    </h2>
                    <div className=" relative">
                      <Image
                        src={"/assets/play/3m.png"}
                        alt="3m"
                        width={640}
                        height={360}
                        className=" "
                      />
                      <Image
                        src={"/assets/play/3m-1.png"}
                        alt="3m-1"
                        width={73}
                        height={73}
                        className=" absolute right-[-60px] top-[40px]"
                      />
                      <Image
                        src={"/assets/play/3m-2.png"}
                        alt="3m-2"
                        width={227}
                        height={226}
                        className=" absolute right-[-100px] bottom-[-100px]"
                      />
                      <Image
                        src={"/assets/play/3m-3.png"}
                        alt="3m-3"
                        width={77}
                        height={77}
                        className=" absolute left-37 top-[150px]"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium py-[51px] leading-[150%] max-w-[640px] text-center">
                      Grab Mystery Boxes for random Power-ups!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
};

export default Page;
