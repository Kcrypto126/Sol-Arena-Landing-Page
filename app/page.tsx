"use client";
import Image from "next/image";
import CharacterSection from "./components/CharacterSection";
import FeaturesSection from "./components/FeaturesSection";
import EvaSection from "./components/EvaSection";
import SeasonSection from "./components/SeasonSection";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { sendEvent } from "@/app/googleTag";
// Import Swiper sty
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const navigator = useRouter();
  const [isButton, setIsButton] = useState(false);
  const [activeCardID, setActiveCardID] = useState(0);

  const handlePlayButton = () => {
    setIsButton(true);
    setTimeout(() => {
      setIsButton(false);
    }, 600);
    navigator.push("https://play.solarena.io")
  };

  return (
    <>
      <div className="relative z-0 mt-[72px]">
        <main className="w-full">
          <div
            className="hero-section w-full h-[1024px] bg-center bg-no-repeat mb-[-2px]"
          >
            {/* <div className=" w-[100%] absolute top-[340px] sm:top-[438px] flex flex-col justify-center items-center">
              <div
                className=" w-[100%] m-auto h-[170px] md:h-[356px] font-bold bg-[url('/assets/text_back_1.png')] bg-center bg-no-repeat flex justify-center items-center"
                style={{ backgroundSize: "100% 100%" }}
              >
                <h1 className=" relative inline-block border-effect z-10 text-center pb-0 md:pb-1 text-[18px] text-stroke-2 md:text-[40px] lg:text-[54px] font-[Oswald] text-transparent bg-clip-text bg-gradient-to-b from-[#4EFFFF] to-[#fff] bg-[left_0_bottom_-15px] md:bg-[left_0_bottom_-35px] lg:bg-[left_0_bottom_-45px]">
                  The Race for 150,000,000 $CHILL Has Begun
                </h1>
              </div>
              <div className=" w-[100%] m-auto mt-[-130px] md:mt-[-210px] h-[200px] md:h-[250px] bg-[url('/assets/text_back_2.png')] bg-center bg-no-repeat flex justify-center items-center">
                <h1 className=" text-center leading-[110%] font-bold text-[16px] md:text-[32px] lg:text-[40px] font-[Oswald] text-transparent bg-clip-text bg-gradient-to-b from-[#4EFFFF] to-[#fff] bg-[left_0_bottom_-30px]">
                  Collect, Extract, Dominate.
                </h1>
              </div>
            </div> */}
            <div className=" h-[100%] w-full flex flex-col justify-center items-center">
              <Image
                src={"/assets/main_text-1.svg"}
                alt=""
                width={1629}
                height={356}
                className=" mt-[-10%]"
              />
              <Image
                src={"/assets/main_text-2.svg"}
                alt=""
                width={649}
                height={217}
                className=" w-[60%] md:w-[40%] mt-[-11%]"
              />
            </div>
            <div className="flex justify-center items-center w-[100%] absolute top-[490px] sm:top-[642px] md:top-[760px]">
              <button
                className=" w-[163px] h-[52px] md:w-[260px] md:h-[84px] rounded-md font-semibold font-[Oswald] text-[26px] md:text-[34px] text-[#020215]"
                style={{
                  backgroundImage: "url(./assets/play-now-btn.png)",
                  backgroundSize: "100% 100%",
                  boxShadow: "0px 0px 10px 1px",
                }}
                onClick={() => {
                  sendEvent('play-now', {}, () => handlePlayButton());
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

          <CharacterSection />

          <div
            className="section w-full bg-center"
            style={{ backgroundImage: "url('/assets/features/Features.webp')" }}
          >
            <div className="max-w-[1440px] m-auto py-0 md:py-[101px] px-0 md:px-[64px] overflow-hidden">
              <div className=" px-2 flex flex-row justify-center items-center bg-center bg-opacity-20 bg-[#1919AD] bg-[url('/assets/features/Mask-group.png')] w-full h-[837px] border-0 md:border-8 border-[#41FFC6] rounded-none md:rounded-[56px] shadow-none md:shadow-[0_0_41px_3px_#2600A8] shadow-inner-[0_0_50px_3px_#0095FF] relative">
                <div
                  className="flex justify-center mr-[-15px] md:mr-0 items-center w-[210px] md:w-[283px] h-10 md:h-[76px] absolute top-[38px] md:top-0 right-[-1px] bg-cover bg-center text-[24px] md:text-[32px] font-black text-[#0A164E] "
                  style={{
                    backgroundImage: "url('/assets/features/text-back.png')",
                  }}
                >
                  <h1 className="pl-[25px] pb-0 md:pb-[8px]">Features</h1>
                </div>
                <div className=" ">
                  <Image
                    src={"/assets/features/frog.png"}
                    alt="frog"
                    width={238}
                    height={240}
                    className="absolute bottom-[-75px] right-[-30px] z-20 hidden md:block"
                  />
                  <Image
                    src={"/assets/features/butterfly-1.png"}
                    alt="butterfly"
                    width={119}
                    height={119}
                    className=" absolute top-[65px] z-30 md:top-[-13%] right-0 md:right-[-3%]"
                  />
                  <Image
                    src={"/assets/features/butterfly-2.png"}
                    alt="butterfly"
                    width={119}
                    height={119}
                    className=" absolute top-[55px] z-30 md:top-auto bottom-auto md:bottom-[-5%] left-0"
                  />
                </div>

                <div className=" hidden md:block overflow-auto scrollbar-hide">
                  <div id="card-content" className=" flex flex-row items-center gap-5 px-[70px] scrollbar-hide">
                    <FeaturesSection
                      setCardID={setActiveCardID}
                      id={0}
                      isActive={activeCardID === 0 ? true : false}
                      featurescolor="#8C46FF"
                      featuresborder="#EAD4FF"
                      featurestop="/assets/features/feature-image-top1.png"
                      featuresbottom="/assets/features/feature-image-bottom1.png"
                      card="/assets/features/card-1.png"
                      title="Snake Evolved"
                      desc="Dive into adrenaline-pumping action inspired by Snake. Gather energy, grow stronger, and defeat opponents to loot their noCHILL. Outsmart, outmaneuver, and dominate the Arena!"
                    />
                    <FeaturesSection
                      setCardID={setActiveCardID}
                      id={1}
                      isActive={activeCardID === 1 ? true : false}
                      featurescolor="#EF821D"
                      featuresborder="#FFFBD4"
                      featurestop="/assets/features/feature-image-top2.png"
                      featuresbottom="/assets/features/feature-image-bottom2.png"
                      card="/assets/features/card-2.png"
                      title="Extraction"
                      desc="Collect noCHILL and extract through wormholes to secure your winnings. But beware—only the clever and quick make it out alive. Will you survive or lose it all?"
                    />
                    <FeaturesSection
                      setCardID={setActiveCardID}
                      id={2}
                      isActive={activeCardID === 2 ? true : false}
                      featurescolor="#E6D11D"
                      featuresborder="#FFFACC"
                      featurestop="/assets/features/feature-image-top3.png"
                      featuresbottom="/assets/features/feature-image-bottom3.png"
                      card="/assets/features/card-3.png"
                      title="Game Modes"
                      desc="Play for noCHILL to climb the leaderboards
or up the stakes in High Roller Mode to wager and win Solana. Real risk, real rewards."
                    />
                    <FeaturesSection
                      setCardID={setActiveCardID}
                      id={3}
                      isActive={activeCardID === 3 ? true : false}
                      featurescolor="#21E6AB"
                      featuresborder="#B3FFE8"
                      featurestop="/assets/features/feature-image-top4.png"
                      featuresbottom="/assets/features/feature-image-bottom4.png"
                      card="/assets/features/card-4.png"
                      title="Power-ups"
                      desc="Turn the tide with power-ups! 
Collect mystery boxes to unlock power-ups and use them at just the right moment to crush your enemies."
                    />
                    <FeaturesSection
                      setCardID={setActiveCardID}
                      id={4}
                      isActive={activeCardID === 4 ? true : false}
                      featurescolor="#2AD0F4"
                      featuresborder="#B3F1FF"
                      featurestop="/assets/features/feature-image-top5.png"
                      featuresbottom="/assets/features/feature-image-bottom5.png"
                      card="/assets/features/card-5.png"
                      title="Team Play"
                      desc="Join forces with your favorite Solana communities! Pick a team, dominate the competition, and climb the team leaderboards together."
                    />
                  </div>
                </div>

                <div className="w-[100%] block md:hidden pt-10">
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="cardSlider"
                    style={{ height: "580px" }}
                  >
                    <SwiperSlide>
                      <div className=" flex flex-row justify-center">
                        <FeaturesSection
                          setCardID={setActiveCardID}
                          id={0}
                          isActive={activeCardID === 0 ? true : false}
                          featurescolor="#8C46FF"
                          featuresborder="#EAD4FF"
                          featurestop="/assets/features/feature-image-top1.png"
                          featuresbottom="/assets/features/feature-image-bottom1.png"
                          card="/assets/features/card-1.png"
                          title="Snake Evolved"
                          desc="Dive into adrenaline-pumping action inspired by Snake. Gather energy, grow stronger, and defeat opponents to loot their noCHILL. Outsmart, outmaneuver, and dominate the Arena!"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" flex flex-row justify-center">
                        <FeaturesSection
                          setCardID={setActiveCardID}
                          id={1}
                          isActive={activeCardID === 1 ? true : false}
                          featurescolor="#EF821D"
                          featuresborder="#FFFBD4"
                          featurestop="/assets/features/feature-image-top2.png"
                          featuresbottom="/assets/features/feature-image-bottom2.png"
                          card="/assets/features/card-2.png"
                          title="Extraction"
                          desc="Collect noCHILL and extract through wormholes to secure your winnings. But beware—only the clever and quick make it out alive. Will you survive or lose it all?"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" flex flex-row justify-center">
                        <FeaturesSection
                          setCardID={setActiveCardID}
                          id={2}
                          isActive={activeCardID === 2 ? true : false}
                          featurescolor="#E6D11D"
                          featuresborder="#FFFACC"
                          featurestop="/assets/features/feature-image-top3.png"
                          featuresbottom="/assets/features/feature-image-bottom3.png"
                          card="/assets/features/card-3.png"
                          title="Game Modes"
                          desc="Play for noCHILL to climb the leaderboards
or up the stakes in High Roller Mode to wager and win Solana. Real risk, real rewards."
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" flex flex-row justify-center">
                        <FeaturesSection
                          setCardID={setActiveCardID}
                          id={3}
                          isActive={activeCardID === 3 ? true : false}
                          featurescolor="#21E6AB"
                          featuresborder="#B3FFE8"
                          featurestop="/assets/features/feature-image-top4.png"
                          featuresbottom="/assets/features/feature-image-bottom4.png"
                          card="/assets/features/card-4.png"
                          title="Power-ups"
                          desc="Turn the tide with power-ups! 
Collect mystery boxes to unlock power-ups and use them at just the right moment to crush your enemies."
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className=" flex flex-row justify-center">
                        <FeaturesSection
                          setCardID={setActiveCardID}
                          id={4}
                          isActive={activeCardID === 4 ? true : false}
                          featurescolor="#2AD0F4"
                          featuresborder="#B3F1FF"
                          featurestop="/assets/features/feature-image-top5.png"
                          featuresbottom="/assets/features/feature-image-bottom5.png"
                          card="/assets/features/card-5.png"
                          title="Team Play"
                          desc="Join forces with your favorite Solana communities! Pick a team, dominate the competition, and climb the team leaderboards together."
                        />
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          <EvaSection />

          <div
            className="section w-full bg-[left_-80px_top] md:bg-center bg-no-repeat mt-[-215px] z-10 relative pt-[215px]"
            style={{ backgroundImage: "url('/assets/season/season_back.webp')" }}
          >
            <div className="max-w-[1440px] m-auto flex flex-col gap-14 justify-center items-center pt-[40px] md:pt-[50px] pb-[162px]">
              <Image
                src={"/assets/season/season-logo.png"}
                alt="logo"
                width={288}
                height={120}
                className="w-[163px] h-[67px] md:w-[288px] md:h-[120px]"
              />
              <div className="">
                <SeasonSection />
              </div>
              <button
                className="w-[163px] h-[52px] md:w-[260px] md:h-[84px] rounded-md font-semibold font-[Oswald] text-[26px] md:text-[34px] text-[#020215]"
                style={{
                  backgroundImage: "url(./assets/play-now-btn.png)",
                  backgroundSize: "100% 100%",
                  boxShadow: "0px 0px 20px 1px",
                }}
                onClick={() => {
                  sendEvent('play-now', {}, () => navigator.push("https://play.solarena.io"));
                }}
              >
                PLAY NOW
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
