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
  const data = [
    [{ img: "/assets/play/1m.png", title: "1. Enter the Arena", disc: "Choose your Challenger and Team—teammates can’t harm you! When you’re ready, Enter the Arena!" }],
    [
      { img: "/assets/play/2m.png", title: "hader", disc: "disc" },
      { img: "/assets/play/2m.png", title: "hader", disc: "disc" },
    ],
    // "/assets/play/carousel/3.png",
  ];

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
        <div className="max-w-[1440px] m-auto text-white border">
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
            className="mySwiper border "
          >
            {data.map((src, index) => (
              <SwiperSlide key={index} className="border ">
                  <div className=" h-[100%] flex flex-row gap-2 justify-center items-center">
                    {src.map((subsrc, subindex) => (
                      <div className=" border flex flex-col justify-center items-center gap-8" key={subindex}>
                        <h2 className=" font-semibold text-[24px] text-[#41FFC6]">{subsrc.title}</h2>
                        <Image
                          src={subsrc.img}
                          alt={`Slide ${subindex + 1}`}
                          width={1440}
                          height={370}
                          className=" "
                        />
                        <p className=" text-[#C9D5FF] text-[18px] font-medium py-[51px] leading-[150%] max-w-[640px] text-center">{subsrc.disc}</p>
                      </div>
                    ))}
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
};

export default Page;
