"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import react, { useRef } from "react";
import emailjs from '@emailjs/browser';  
// import dotenv from "dotenv";

// dotenv.config();

const Footer: React.FC = () => {
  const navigator = useRouter();
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateFormData = (): boolean => {
    if (!email) {
      setErrorMessage("Email is required");
      return false;
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrorMessage("Invalid email format");
      return false;
    }
    setErrorMessage("");
    return true;
  }

  const handleEmail = async () => {
    if (!validateFormData()) {
      return;
    }

    const serviceId: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
    const templateId: string =  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
    const publicKey: string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

    interface TemplateParams {
      email: string;
      [key: string]: any;
    }

    const templateParams: TemplateParams = {
      email: email,
    }

    try {
      const response = await emailjs.send(
        serviceId, 
        templateId, 
        templateParams, 
        publicKey
      );
      setEmail("");
      console.log('SUCCESS', response.status, response.text);
      setErrorMessage("Email sent successfully");
    } catch (error) {
      console.log('FAILED...', error);
      setErrorMessage("Failed to send email. Please try again.");
    }
    
  };

  return (
    <>
      <div
        className="footer w-full h-[691px] lg:h-[607px] bg-center bg-no-repeat relative overflow-hidden z-30 lg:z-50"
        style={{ backgroundImage: "url('/assets/footer/Footer-back.webp')" }}
      >
        <div className="max-w-[1440px] m-auto flex flex-row">
          <div className="flex flex-col items-center lg:items-start gap-[42px] pt-[50px] lg:pt-[94px] pl-4 lg:pl-[30px] xl:pl-[185px] pb-[25px] m-auto lg:m-0">
            <div className="flex flex-row gap-0">
              <button
                className="font-[Oswald] text-white text-[18px] font-bold border-2 border-[#6F58FF] w-[77px] h-10 flex justify-center items-center"
                onClick={() => {
                  navigator.push("#");
                }}
              >
                TOP
              </button>
              <button
                className="border-2 border-[#6F58FF] rounded-[50%] w-10 h-10 flex justify-center items-center"
                onClick={() => {
                  navigator.push("#");
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
              <div className="font-[Oswald] text-[16px] text-white font-semibold text-center lg:text-left">
                Subscribe to the latest news
              </div>
              <div className=" flex flex-row gap-0">
                <input
                  className="border-2 border-[#41FFC6] w-[260px] lg:w-[290px] h-[50px] lg:h-[60px] bg-[#070733] outline-none ring-0 pl-3 font-[Oswald] text-[#41FFC6] font-bold text-[20px] placeholder:text-[#3e977d]"
                  placeholder="Enter Email"
                  type="Email"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <button
                  className=" w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] ml-[-2px] flex justify-center items-center bg-[#41FFC6]"
                  onClick={() => {
                    handleEmail();
                  }}
                >
                  <Image
                    src={"/assets/footer/arrow.png"}
                    alt=""
                    width={26}
                    height={20}
                    className=" "
                  />
                </button>
              </div>
              <p className={`-mt-[13px] ${errorMessage == "Email sent successfully" ? "text-green-600" : "text-red-600"} text-[12px] font-bold`}>
                {errorMessage}
              </p>
            </div>
            <div className=" flex flex-row gap-8 mt-[30px] md:mt-auto">
              <button
                className="w-[60px] h-[60px] bg-[#6F58FF] flex justify-center items-center"
                onClick={() => {
                  navigator.push("https://t.me/solarenaio");
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
                  navigator.push("https://x.com/solarena_io");
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
                  navigator.push("https://discord.com/invite/chillchatgames");
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
          <div className="z-10">
            <div
              className=" max-w-[363px] w-[164px] sm:w-auto bg-center bg-no-repeat px-[16px] lg:px-[23px] py-[16px] text-[14px] text-black lg:text-[16px] font-semibol leading-[150%] absolute bottom-[145px] right-[190px] sm:right-[250px] lg:right-[350px] bg-[url('/assets/footer/text-back-mobile.png')] sm:bg-[url('/assets/footer/text-back.png')] "
              style={{
                backgroundSize: "100% 100%",
              }}
            >
              Subscribe to our newsletter for the latest updates and exclusive
              rewards!
            </div>
          </div>
        </div>
        <div className=" absolute right-[-60px] sm:right-0 top-[331px] lg:top-9">
          <Image
            src={"/assets/footer/Eva3.webp"}
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
            <Link
              href={
                "https://chillchat.notion.site/SOL-Arena-Terms-of-Use-Privacy-Policy-1202b901b5f98020a945c1291eae0dc5"
              }
              prefetch
            >
              Privacy Policy
            </Link>
            <div className="w-[2px] h-[8px] lg:h-[19px] bg-[#8581FF]"></div>
            <span className=" cursor-pointer">
              Copyright Chillchat Holdings Pte Ltd. All rights reserved.
            </span>
            <div className="w-[2px] h-[8px] lg:h-[19px] bg-[#8581FF]"></div>
            <Link
              href={
                "https://chillchat.notion.site/CHILL-Airdrop-Terms-Conditions-1a02b901b5f98010803bebab74031960"
              }
              prefetch
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
