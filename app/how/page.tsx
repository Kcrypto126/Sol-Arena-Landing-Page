"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sendEvent } from "../googleTag";

import SwiperComponent from "../components/how/VerticalSwiper";
import "./style.css";

export default function Home() {
  const IDList: Array<string> = [
    "1m",
    "23m",
    "45m",
    "67m",
    "89m",
    "10m"
  ];

  const handleScroll = () => {
    // Get the current scroll position
    // const currentScrollPosition = event.currentTarget.scrollTop;
    IDList.forEach((e) => {
      const rect = document.getElementById(e)?.getBoundingClientRect();
      let active_item: HTMLElement | null = null;
      if (rect) {
        if (Math.abs(rect.top) < 10) {
          active_item = document.querySelector(`a[href="#${e}"]`);

          if (active_item) {
            document
              .querySelector(".pagination")
              ?.querySelector(".active")
              ?.classList?.remove("active");
            active_item.classList.add("active");
          }
        }
      }
    });
  };

  const [isButton, setIsButton] = useState(false);
  const navigator = useRouter();
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const videoMobileRefs = useRef<HTMLVideoElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const addVideoRef = (element: HTMLVideoElement) => {
    if (element && !videoRefs.current.includes(element)) {
      videoRefs.current.push(element);
    }
  };
  const addVideoMobileRef = (element: HTMLVideoElement) => {
    if (element && !videoMobileRefs.current.includes(element)) {
      videoMobileRefs.current.push(element);
    }
  };

  const handlePlayButton = () => {
    setIsButton(true);
    setTimeout(() => {
      setIsButton(false);
    }, 600);
    navigator.push("https://play.solarena.io");
  };

  const [height, setHeight] = useState<number>(0);
  const [isTallScreen, setIsTallScreen] = useState(false);
  const [isMiddleScreen, setIsMiddleScreen] = useState(false);

  useEffect(() => {
    //landscape mode
    const handleResize = () => {
      setIsTallScreen(window.screen.availHeight > 550);
      setIsMiddleScreen(window.screen.availHeight < 690);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Update height on component mount and window resize
    const updateHeight = () => {
      setHeight(window.innerHeight); // Adjust for any fixed headers
    };

    updateHeight(); // Set initial height

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div>
    //     <SwiperComponent />
    //     <div className="border" style={{ marginTop: '200vh'}}>
    //     </div>
    // </div>
    <div onScroll={handleScroll} className="px-0 md:px-9 scroller w-full h-screen bg-[url('/assets/play/back.webp')] bg-no-repeat bg-center bg-cover">
      {/* 1m */}
      <div className=" relative px-[30px] md:px-[20px]" id="1m">
        <div
          className={` w-[100%] h-[100%] flex flex-col justify-center items-center ${
            isMiddleScreen ? "gap-2" : "gap-6"
          }`}
        >
          <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
            1. Enter the Arena
          </h2>
          <div className=" relative">
            <video
              width="640"
              height="360"
              ref={addVideoRef}
              controls
              className=" border-[2px] md:border-[6px] border-[#6F58FF]"
            >
              <source src="/assets/play/video/video-1.mp4" type="video/mp4" />
            </video>
            <Image
              src={"/assets/play/1m-left.png"}
              alt="1m-left"
              width={407}
              height={187}
              className=" w-auto md:w-[406px] h-[85px] md:h-[187px] absolute right-[83%] md:right-[100%] bottom-[-20px] md:bottom-0 "
            />
            <Image
              src={"/assets/play/1m-right.png"}
              alt="1m-left"
              width={407}
              height={187}
              className=" w-auto md:w-[406px] h-[85px] md:h-[187px] absolute left-[83%] md:left-[100%] bottom-[-20px] md:bottom-0 "
            />
          </div>
          <p
            className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
              isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
            } flex justify-center items-center text-center`}
          >
            Choose your Challenger and Team—teammates can’t harm you! When
            you’re ready, Enter the Arena!
          </p>
        </div>
      </div>
      {/* 2m-3m */}
      <div className=" slider-desktop relative" id="23m">
        <div className=" w-[100%] h-[100%] flex flex-row gap-5 justify-center items-center">
          {/* 2m */}
          <div className=" w-[100%] h-[100%] flex flex-col justify-center items-end">
            <div
              className={`flex flex-col justify-center items-center ${
                isMiddleScreen ? "gap-2" : "gap-6"
              }`}
            >
              <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                2. Gather Energy
              </h2>
              <div className=" relative">
                <video
                  width="640"
                  height="360"
                  ref={addVideoRef}
                  controls
                  className=" border-[2px] md:border-[6px] border-[#6F58FF] relative z-10"
                >
                  <source
                    src="/assets/play/video/video-2.mp4"
                    type="video/mp4"
                  />
                </video>
                <Image
                  src={"/assets/play/2m-1.png"}
                  alt="2m-1"
                  width={121}
                  height={126}
                  className=" absolute left-[-60px] top-10 z-0 "
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
              <p
                className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
                  isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
                } flex justify-center items-center text-center`}
              >
                Collect Energy to grow your Trail!
              </p>
            </div>
          </div>
          {/* 3m */}
          <div className=" w-[100%] h-[100%] flex flex-col justify-center items-start">
            <div
              className={`flex flex-col justify-center items-center ${
                isMiddleScreen ? "gap-2" : "gap-6"
              }`}
            >
              <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                3. Mystery Box & Power-ups
              </h2>
              <div className=" relative">
                <video
                  width="640"
                  height="360"
                  ref={addVideoRef}
                  controls
                  className=" border-[2px] md:border-[6px] border-[#6F58FF]"
                >
                  <source
                    src="/assets/play/video/video-3.mp4"
                    type="video/mp4"
                  />
                </video>
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
                  width={170}
                  height={196}
                  className="  absolute right-[-50px] bottom-[-80px]"
                />
                <Image
                  src={"/assets/play/3m-3.png"}
                  alt="3m-3"
                  width={77}
                  height={77}
                  className=" absolute left-37 top-[150px]"
                />
              </div>
              <p
                className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
                  isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
                } flex justify-center items-center text-center`}
              >
                Grab Mystery Boxes for random Power-ups!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 2m-mobile */}
      <div className=" slider-mobile relative px-[30px] md:px-0">
        <div
          className={`w-[100%] h-[100%] flex flex-col justify-center items-center ${
            isMiddleScreen ? "gap-2" : "gap-6"
          }`}
        >
          <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
            2. Gather Energy
          </h2>
          <div className=" relative">
            <video
              width="640"
              height="360"
              ref={addVideoRef}
              controls
              className=" relative border-[2px] md:border-[6px] border-[#6F58FF] z-10"
            >
              <source src="/assets/play/video/video-2.mp4" type="video/mp4" />
            </video>
            <Image
              src={"/assets/play/2m-1.png"}
              alt="2m-1"
              width={121}
              height={126}
              className=" w-[60px] h-[63px] md:w-[121px] md:h-[126px] absolute left-[-10%] top-[5%] z-0 "
            />
            <Image
              src={"/assets/play/2m-2.png"}
              alt="2m-2"
              width={89}
              height={91}
              className=" w-[60px] h-[62px] md:w-[89px] md:h-[91px] absolute right-[3%] top-[-15%] z-20"
            />
            <Image
              src={"/assets/play/2m-3.png"}
              alt="2m-3"
              width={97}
              height={101}
              className=" w-[67px] h-[71px] md:w-[97px] md:h-[101px] absolute right-[10%] bottom-[-20%] z-20"
            />
            <Image
              src={"/assets/play/2m-4.png"}
              alt="2m-4"
              width={143}
              height={145}
              className=" w-[73px] h-[75px] md:w-[143px] md:h-[145px] absolute left-[-15%] bottom-[-13%] z-10"
            />
            <Image
              src={"/assets/play/2m-2.png"}
              alt="2m-5"
              width={89}
              height={91}
              className=" absolute left-[60px] bottom-[-45px] z-0"
            />
          </div>
          <p
            className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
              isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
            } flex justify-center items-center text-center`}
          >
            Collect Energy to grow your Trail!
          </p>
        </div>
      </div>
      {/* 3m-mobile */}
      <div className=" slider-mobile relative px-[30px] md:px-0">
        <div
          className={`w-[100%] h-[100%] flex flex-col justify-center items-center ${
            isMiddleScreen ? "gap-2" : "gap-6"
          }`}
        >
          <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
            3. Mystery Box & Power-ups
          </h2>
          <div className=" relative">
            <video
              width="640"
              height="360"
              ref={addVideoRef}
              controls
              className=" border-[2px] md:border-[6px] border-[#6F58FF]"
            >
              <source src="/assets/play/video/video-3.mp4" type="video/mp4" />
            </video>
            <Image
              src={"/assets/play/3m-1.png"}
              alt="3m-1"
              width={73}
              height={73}
              className=" w-[43px] h-[43px] md:w-[73px] md:h-[73px] absolute right-[10%] top-[-10%]"
            />
            <Image
              src={"/assets/play/3m-2.png"}
              alt="3m-2"
              width={227}
              height={226}
              className=" w-[77px] h-[76px] md:w-[227px] md:h-[226px] absolute right-[0%] bottom-[-20%]"
            />
            <Image
              src={"/assets/play/3m-3.png"}
              alt="3m-3"
              width={77}
              height={77}
              className=" w-[27px] h-[27px] md:w-[77px] md:h-[77px] absolute left-[0%] top-[30%]"
            />
          </div>
          <p
            className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
              isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
            } flex justify-center items-center text-center`}
          >
            Grab Mystery Boxes for random Power-ups!
          </p>
        </div>
      </div>
      {/* 4m-5m */}
      <div className=" slider-desktop relative" id="45m">
        <div className=" w-[100%] h-[100%] flex flex-row gap-5 justify-center items-center">
          {/* 4m */}
          <div className=" w-[100%] h-[100%] flex flex-col justify-center items-end">
            <div
              className={`flex flex-col justify-center items-center ${
                isMiddleScreen ? "gap-2" : "gap-6"
              }`}
            >
              <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                4. Boost to Win
              </h2>
              <div className=" relative">
                <video
                  width="640"
                  height="360"
                  ref={addVideoRef}
                  controls
                  className=" border-[2px] md:border-[6px] border-[#0F86E8]"
                >
                  <source
                    src="/assets/play/video/video-4.mp4"
                    type="video/mp4"
                  />
                </video>
                <Image
                  src={"/assets/play/4m-1.png"}
                  alt="4m-1"
                  width={111}
                  height={112}
                  className=" w-[51px] h-[51px] md:w-[81px] md:h-[82px] absolute left-[10%] top-[-55px] z-20"
                />
                <Image
                  src={"/assets/play/4m-2.png"}
                  alt="4m-2"
                  width={258}
                  height={30}
                  className=" absolute right-0 top-[-30px] z-20"
                />
              </div>
              <p
                className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
                  isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
                } flex justify-center items-center text-center`}
              >
                Tap Boost to speed up, but beware—it burns your Energy!
              </p>
            </div>
          </div>
          {/* 5m */}
          <div className=" w-[100%] h-[100%] flex flex-col justify-center items-start">
            <div
              className={`flex flex-col justify-center items-center ${
                isMiddleScreen ? "gap-2" : "gap-6"
              }`}
            >
              <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                5. Collect noCHILL
              </h2>
              <div className=" relative">
                <video
                  width="640"
                  height="360"
                  ref={addVideoRef}
                  controls
                  className=" border-[2px] md:border-[6px] border-[#F29114]"
                >
                  <source
                    src="/assets/play/video/video-5.mp4"
                    type="video/mp4"
                  />
                </video>
                <Image
                  src={"/assets/play/5m-1.png"}
                  alt="5m-1"
                  width={64}
                  height={64}
                  className=" absolute left-[-20px] top-[30px]"
                />
                <Image
                  src={"/assets/play/5m-2.png"}
                  alt="5m-2"
                  width={51}
                  height={51}
                  className=" absolute right-[-40px] top-[160px]"
                />
                <Image
                  src={"/assets/play/5m-3.png"}
                  alt="5m-3"
                  width={111}
                  height={111}
                  className=" absolute right-[-50px] bottom-[-50px]"
                />
              </div>
              <p
                className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
                  isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
                } flex justify-center items-center text-center`}
              >
                Your main objective is to collect noCHILL. This is how you’ll
                climb the leaderboards.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 4m-mobile */}
      <div className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
        <div
          className={`w-[100%] h-[100%] flex flex-col justify-center items-center ${
            isMiddleScreen ? "gap-2" : "gap-6"
          }`}
        >
          <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
            4. Boost to Win
          </h2>
          <div className=" relative">
            <video
              width="640"
              height="360"
              ref={addVideoRef}
              controls
              className=" border-[2px] md:border-[6px] border-[#0F86E8]"
            >
              <source src="/assets/play/video/video-4.mp4" type="video/mp4" />
            </video>
            <Image
              src={"/assets/play/4m-1.png"}
              alt="4m-1"
              width={111}
              height={112}
              className=" w-[30px] h-[30px] md:w-[111px] md:h-[112px] absolute left-[5%] top-[-15%] z-20"
            />
            <Image
              src={"/assets/play/4m-2.png"}
              alt="4m-2"
              width={258}
              height={30}
              className=" w-[124px] h-[14px] md:w-[258px] md:h-[30px] absolute right-0 top-[-14px] md:top-[-30px] z-20"
            />
          </div>
          <p
            className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
              isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
            } flex justify-center items-center text-center`}
          >
            Tap Boost to speed up, but beware—it burns your Energy!
          </p>
        </div>
      </div>
      {/* 5m-mobile */}
      <div className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
        <div
          className={`w-[100%] h-[100%] flex flex-col justify-center items-center ${
            isMiddleScreen ? "gap-2" : "gap-6"
          }`}
        >
          <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
            5. Collect noCHILL
          </h2>
          <div className=" relative">
            <video
              width="640"
              height="360"
              ref={addVideoRef}
              controls
              className=" border-[2px] md:border-[6px] border-[#F29114]"
            >
              <source src="/assets/play/video/video-5.mp4" type="video/mp4" />
            </video>
            <Image
              src={"/assets/play/5m-1.png"}
              alt="5m-1"
              width={64}
              height={64}
              className=" w-[34px] h-[34px] me:w-[64px] md:h-[64px] absolute left-[10%] top-[-10%]"
            />
            <Image
              src={"/assets/play/5m-2.png"}
              alt="5m-2"
              width={51}
              height={51}
              className=" w-[21px] h-[21px] md:w-[51px] md:h-[51px] absolute right-[0%] top-[30%]"
            />
            <Image
              src={"/assets/play/5m-3.png"}
              alt="5m-3"
              width={141}
              height={141}
              className=" w-[51px] h-[51px] md:w-[141px] md:h-[141px] absolute right-[10%] bottom-[-15%]"
            />
          </div>
          <p
            className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
              isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
            } flex justify-center items-center text-center`}
          >
            Your main objective is to collect noCHILL. This is how you’ll climb
            the leaderboards.
          </p>
        </div>
      </div>
      {/* 6m-7m */}
      <div className=" slider-desktop relative" id="67m">
        <div className=" w-[100%] h-[100%] flex flex-row gap-5 justify-center items-center">
          {/* 6m */}
          <div className=" w-[100%] h-[100%] flex flex-col justify-center items-end">
            <div
              className={`flex flex-col justify-center items-center ${
                isMiddleScreen ? "gap-2" : "gap-6"
              }`}
            >
              <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                6. Avoid Collisions
              </h2>
              <div className=" relative">
                <video
                  width="640"
                  height="360"
                  ref={addVideoRef}
                  controls
                  className=" border-[2px] md:border-[6px] border-[#E80F5B]"
                >
                  <source
                    src="/assets/play/video/video-6.mp4"
                    type="video/mp4"
                  />
                </video>
                <Image
                  src={"/assets/play/6m-1.png"}
                  alt="6m-1"
                  width={140}
                  height={79}
                  className=" absolute left-[-40px] top-[0px] z-20"
                />
                <Image
                  src={"/assets/play/6m-2.png"}
                  alt="6m-2"
                  width={144}
                  height={132}
                  className=" absolute right-[-40px] bottom-[-35px] z-20"
                />
              </div>
              <p
                className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
                  isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
                } flex justify-center items-center text-center`}
              >
                Avoid obstacles and enemy trails—colliding means defeat!
              </p>
            </div>
          </div>
          {/* 7m */}
          <div className=" w-[100%] h-[100%] flex flex-col justify-center items-start">
            <div
              className={`flex flex-col justify-center items-center ${
                isMiddleScreen ? "gap-2" : "gap-6"
              }`}
            >
              <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                7. Defeat Enemies
              </h2>
              <div className=" relative">
                <video
                  width="640"
                  height="360"
                  ref={addVideoRef}
                  controls
                  className=" border-[2px] md:border-[6px] border-[#E80F5B]"
                >
                  <source
                    src="/assets/play/video/video-7.mp4"
                    type="video/mp4"
                  />
                </video>
                <Image
                  src={"/assets/play/7m-1.png"}
                  alt="7m-1"
                  width={194}
                  height={208}
                  className=" absolute right-[-75px] bottom-[-80px]"
                />
              </div>
              <p
                className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
                  isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
                } flex justify-center items-center text-center`}
              >
                Defeat players by making them crash into your trail to loot
                their backpack and claim their noCHILL!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 6m-mobile */}
      <div className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
        <div
          className={`w-[100%] h-[100%] flex flex-col justify-center items-center ${
            isMiddleScreen ? "gap-2" : "gap-6"
          }`}
        >
          <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
            6. Avoid Collisions
          </h2>
          <div className=" relative">
            <video
              width="640"
              height="360"
              ref={addVideoRef}
              controls
              className=" border-[2px] md:border-[6px] border-[#E80F5B]"
            >
              <source src="/assets/play/video/video-6.mp4" type="video/mp4" />
            </video>
            <Image
              src={"/assets/play/6m-1.png"}
              alt="6m-1"
              width={140}
              height={79}
              className=" w-[70px] h-[35px] md:w-[140px] md:h-[79px] absolute left-[-5%] top-[0%] z-20"
            />
            <Image
              src={"/assets/play/6m-2.png"}
              alt="6m-2"
              width={144}
              height={132}
              className=" w-[65px] h-[55px] md:w-[144px] md:h-[132px] absolute right-[0%] bottom-[-10%] z-20"
            />
          </div>
          <p
            className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
              isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
            } flex justify-center items-center text-center`}
          >
            Avoid obstacles and enemy trails—colliding means defeat!
          </p>
        </div>
      </div>
      {/* 7m-mobile */}
      <div className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
        <div
          className={`w-[100%] h-[100%] flex flex-col justify-center items-center ${
            isMiddleScreen ? "gap-2" : "gap-6"
          }`}
        >
          <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
            7. Defeat Enemies
          </h2>
          <div className=" relative">
            <video
              width="640"
              height="360"
              ref={addVideoRef}
              controls
              className=" border-[2px] md:border-[6px] border-[#E80F5B]"
            >
              <source src="/assets/play/video/video-7.mp4" type="video/mp4" />
            </video>
            <Image
              src={"/assets/play/7m-1.png"}
              alt="7m-1"
              width={194}
              height={208}
              className=" w-[84px] h-[98px] md:w-[194px] md:h-[208px] absolute right-[-5%] bottom-[-20%]"
            />
          </div>
          <p
            className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
              isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
            } flex justify-center items-center text-center`}
          >
            Defeat players by making them crash into your trail to loot their
            backpack and claim their noCHILL!
          </p>
        </div>
      </div>
      {/* 8m-9m */}
      <div className=" slider-desktop relative" id="89m">
        <div className=" w-[100%] h-[100%] flex flex-row gap-5 justify-center items-center">
          {/* 8m */}
          <div className=" w-[100%] h-[100%] flex flex-col justify-center items-end">
            <div
              className={`flex flex-col justify-center items-center ${
                isMiddleScreen ? "gap-2" : "gap-6"
              }`}
            >
              <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                8. Use Wormholes to Extract
              </h2>
              <div className=" relative">
                <video
                  width="640"
                  height="360"
                  ref={addVideoRef}
                  controls
                  className=" border-[2px] md:border-[6px] border-[#82E240]"
                >
                  <source
                    src="/assets/play/video/video-8.mp4"
                    type="video/mp4"
                  />
                </video>
                <Image
                  src={"/assets/play/8m-1.png"}
                  alt="8m-1"
                  width={82}
                  height={57}
                  className=" absolute left-[-40px] bottom-[-28px] z-20"
                />
                <Image
                  src={"/assets/play/8m-2.png"}
                  alt="8m-2"
                  width={122}
                  height={75}
                  className=" absolute right-[-20px] bottom-[-30px] z-20"
                />
              </div>
              <p
                className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium z-30 leading-[150%] max-w-[640px] ${
                  isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
                } flex justify-center items-center text-center`}
              >
                Escape through a wormhole to secure your noCHILL and rise on the
                leaderboards!
              </p>
            </div>
          </div>
          {/* 9m */}
          <div className=" w-[100%] h-[100%] flex flex-col justify-center items-start">
            <div
              className={`flex flex-col justify-center items-center ${
                isMiddleScreen ? "gap-2" : "gap-6"
              }`}
            >
              <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                9. Airdrop
              </h2>
              <div className=" relative">
                <video
                  width="640"
                  height="360"
                  ref={addVideoRef}
                  controls
                  className=" border-[2px] md:border-[6px] border-[#FFEC40]"
                >
                  <source
                    src="/assets/play/video/video-9.mp4"
                    type="video/mp4"
                  />
                </video>
                <Image
                  src={"/assets/play/9m-1.png"}
                  alt="9m-1"
                  width={270}
                  height={206}
                  className=" absolute right-[-65px] bottom-[-33px]"
                />
              </div>
              <p
                className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
                  isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[74px]"
                } flex justify-center items-center text-center`}
              >
                The more noCHILL you extract, the more $CHILL airdrop you’ll
                receive!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 8m-mobile */}
      <div className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
        <div
          className={`w-[100%] h-[100%] flex flex-col justify-center items-center ${
            isMiddleScreen ? "gap-2" : "gap-8"
          }`}
        >
          <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
            8. Use Wormholes to Extract
          </h2>
          <div className=" relative">
            <video
              width="640"
              height="360"
              ref={addVideoRef}
              controls
              className=" border-[2px] md:border-[6px] border-[#82E240]"
            >
              <source src="/assets/play/video/video-8.mp4" type="video/mp4" />
            </video>
            <Image
              src={"/assets/play/8m-1.png"}
              alt="8m-1"
              width={82}
              height={57}
              className=" w-[42px] h-[30px] md:w-[82px] md:h-[57px] absolute left-[0%] bottom-[-5%] z-20"
            />
            <Image
              src={"/assets/play/8m-2.png"}
              alt="8m-2"
              width={122}
              height={75}
              className=" w-[62px] h-[40px] md:w-[122px] md:h-[75px] absolute right-[0%] bottom-[-10%] z-20"
            />
          </div>
          <p
            className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
              isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[154px]"
            } flex justify-center items-center text-center`}
          >
            Escape through a wormhole to secure your noCHILL and rise on the
            leaderboards!
          </p>
        </div>
      </div>
      {/* 9m-mobile */}
      <div className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
        <div
          className={`w-[100%] h-[100%] flex flex-col justify-center items-center ${
            isMiddleScreen ? "gap-2" : "gap-8"
          }`}
        >
          <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
            9. Airdrop
          </h2>
          <div className=" relative">
            <video
              width="640"
              height="360"
              ref={addVideoRef}
              controls
              className=" border-[2px] md:border-[6px] border-[#FFEC40]"
            >
              <source src="/assets/play/video/video-9.mp4" type="video/mp4" />
            </video>
            <Image
              src={"/assets/play/9m-1.png"}
              alt="9m-1"
              width={242}
              height={189}
              className=" w-[122px] h-[89px] md:w-[242px] md:h-[189px] absolute right-[0%] bottom-[-15%]"
            />
            <Image
              src={"/assets/play/9m-2.png"}
              alt="9m-2"
              width={52}
              height={66}
              className=" absolute left-[-3%] bottom-[45%]"
            />
            <Image
              src={"/assets/play/9m-3.png"}
              alt="9m-3"
              width={46}
              height={47}
              className=" absolute right-[0%] top-[-10%]"
            />
          </div>
          <p
            className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
              isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[154px]"
            } flex justify-center items-center text-center`}
          >
            The more noCHILL you extract, the more $CHILL airdrop you’ll
            receive!
          </p>
        </div>
      </div>
      {/* 10m */}
      <div className=" relative px-[30px] md:px-0" id="10m">
        <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center">
          <div
            className={`flex flex-col justify-center items-center ${
              isMiddleScreen ? "gap-2" : "gap-6"
            }`}
          >
            <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
              10. Refer your Friends!
            </h2>
            <div className=" relative">
              <video
                width="640"
                height="360"
                ref={addVideoRef}
                controls
                className=" border-[2px] md:border-[6px] border-[#6F58FF]"
              >
                <source
                  src="/assets/play/video/video-10.mp4"
                  type="video/mp4"
                />
              </video>
              <Image
                src={"/assets/play/10m-1.png"}
                alt="10m-1"
                width={162}
                height={347}
                className=" w-[57px] h-[113px] md:w-[162px] md:h-[347px] absolute right-[83%] md:right-[100%] bottom-[-15%] md:bottom-0 z-20"
              />
              <Image
                src={"/assets/play/10m-2.png"}
                alt="10m-2"
                width={191}
                height={308}
                className=" w-[69px] h-[104px] md:w-[191px] md:h-[308px] absolute left-[83%] md:left-[100%] bottom-[-15%] md:bottom-0 z-20"
              />
            </div>
            <p
              className={` text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] ${
                isMiddleScreen ? "h-[50px]" : "h-[60px] md:h-[44px]"
              } flex justify-center items-center text-center`}
            >
              Refer your friends and earn a 5% bonus on all their noCHILL
              extractions!
            </p>
            <div className=" play-btn flex justify-center items-center w-[100%] relative">
              <button
                className="w-[163px] md:w-[260px] h-[53px] md:h-[84px] rounded-md font-bold font-[Oswald] text-[28px] md:text-[38px] text-[#020215]"
                style={{
                  backgroundImage: "url(./assets/play-now-btn.png)",
                  backgroundSize: "100% 100%",
                  boxShadow: "0px 0px 10px 1px",
                }}
                onClick={() => {
                  sendEvent("play-now", {}, () => handlePlayButton());
                }}
              >
                PLAY NOW
              </button>
              <Image
                src={"/assets/play-spark.png"}
                alt="spark"
                width={264}
                height={264}
                className=" absolute top-[-40px] left-[50%] w-[160px] h-[160px]"
                style={{ display: isButton ? "block" : "none" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" land-play-btn relative flex flex-row justify-center items-center px-[30px] md:px-0">
        <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center w-[100%] relative">
            <button
              className="w-[163px] md:w-[260px] h-[53px] md:h-[84px] rounded-md font-bold font-[Oswald] text-[28px] md:text-[38px] text-[#020215]"
              style={{
                backgroundImage: "url(./assets/play-now-btn.png)",
                backgroundSize: "100% 100%",
                boxShadow: "0px 0px 10px 1px",
              }}
              onClick={() => {
                sendEvent("play-now", {}, () => handlePlayButton());
              }}
            >
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="pagination" >
        <a href="#1m" className=""></a>
        <a href="#23m" className=""></a>
        <a href="#45m" className=""></a>
        <a href="#67m" className=""></a>
        <a href="#89m" className=""></a>
        <a href="#10m" className=""></a>
      </div>
    </div>
  );
}
