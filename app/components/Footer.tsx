"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer: React.FC = () => {
  const navigator = useRouter();
  return (
    <>
      <div
        className="footer w-full h-[691px] lg:h-[607px] bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: "url('/assets/footer/footer-back.png')" }}
      >
        <div className="max-w-[1440px] m-auto flex flex-row">
          <div className="flex flex-col items-center lg:items-start gap-[42px] pt-[50px] lg:pt-[94px] pl-4 lg:pl-[30px] xl:pl-[185px] pb-[25px] m-auto lg:m-0">
            <div className="flex flex-row gap-0">
              <button
                className="font-[Oswald] text-white text-[18px] font-bold border-2 border-[#6F58FF] w-[77px] h-10 flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                TOP
              </button>
              <button
                className="border-2 border-[#6F58FF] rounded-[50%] w-10 h-10 flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                <Image
                  src={"/assets/footer/top-move.png"}
                  alt="top"
                  width={16}
                  height={16}
                />
              </button>
            </div>
            <div className=" flex flex-col gap-4">
              <div className="font-[Oswald] text-[16px] text-white font-semibold">
                Subscribe to the latest news
              </div>
              <div className=" flex flex-row gap-0">
                <input
                  className="border-2 border-[#41FFC6] w-[260px] lg:w-[290px] h-[50px] lg:h-[60px] bg-[#070733] outline-none ring-0 pl-3 font-[Oswald] text-[#41FFC6] font-bold text-[20px] placeholder:text-[#3e977d]"
                  placeholder="Enter Email"
                ></input>
                <button
                  className=" w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex justify-center items-center bg-[#41FFC6]"
                  onClick={() => {
                    navigator.push("/");
                  }}
                >
                  <Image
                    src={"/assets/footer/arrow.png"}
                    alt=""
                    width={26}
                    height={20}
                  />
                </button>
              </div>
            </div>
            <div className=" flex flex-row gap-8">
              <button
                className="w-[60px] h-[60px] bg-[#6F58FF] flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                <Image
                  src={"/assets/footer/telegram.png"}
                  alt="telegram"
                  width={32}
                  height={32}
                />
              </button>
              <button
                className="w-[60px] h-[60px] bg-[#6F58FF] flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                <Image
                  src={"/assets/footer/twitter.png"}
                  alt="twitter"
                  width={32}
                  height={32}
                />
              </button>
              <button
                className="w-[60px] h-[60px] bg-[#6F58FF] flex justify-center items-center"
                onClick={() => {
                  navigator.push("/");
                }}
              >
                <Image
                  src={"/assets/footer/discord.png"}
                  alt="discord"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
          <div
            className=" z-40 max-w-[363px] w-[164px] sm:w-auto bg-center bg-no-repeat px-[16px] lg:px-[23px] py-[16px] text-[14px] lg:text-[16px] font-semibol text-[#282A33] leading-[150%] absolute bottom-[150px] right-[150px] sm:right-[250px] lg:right-[350px] bg-[url('/assets/footer/text-back-mobile.png')] sm:bg-[url('/assets/footer/text-back.png')] "
            style={{
              backgroundSize: "100% 100%",
            }}
          >
            Subscribe to our newsletter for the latest updates and exclusive
            rewards!
          </div>
        </div>
        <div className=" absolute right-[-80px] sm:right-0 top-[331px] lg:top-9">
          <Image
            src={"/assets/footer/footer-girl.webp"}
            alt=""
            width={573}
            height={570}
            className="w-[361px] h-[359px] lg:w-[573px] lg:h-[570px]"
          />
        </div>
        <div className="max-w-[1440px] w-[100%] lg:w-auto m-auto pl-4 lg:pl-[30px] xl:pl-[185px] pt-[100px] lg:pt-[58px] pb-[15px] lg:pb-[38px] flex flex-col items-center lg:items-start gap-2 lg:gap-8 absolute bottom-0 lg:relative">
          <Image
            src={"/assets/footer/footer-logo.png"}
            alt="footer logo"
            width={140}
            height={58}
            className="w-[96px] h-[40px] lg:w-[140px] lg:h-[58px]"
          />
          <div className="flex flex-row gap-1 lg:gap-6 text-[8px] lg:text-[12px] text-[#99B9FF]">
            <Link href={"/"} prefetch>
              Privacy Policy
            </Link>
            <div className="w-[2px] h-[8px] lg:h-[19px] bg-[#8581FF]"></div>
            <Link href={"/"} prefetch>
              Copyright ____. All Rights Reserved.
            </Link>
            <div className="w-[2px] h-[8px] lg:h-[19px] bg-[#8581FF]"></div>
            <Link href={"/"} prefetch>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
