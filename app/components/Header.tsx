"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Header: React.FC = () => {
  const navigator = useRouter();
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(0);
  const [isMenuPlay, setIsMenuPlay] = useState(0);
  const [isMenuChill, setIsMenuChill] = useState(0);
  const [isButton, setIsButton] = useState(false);

  const handleButton = () => {
    setIsButton(true);
    navigator.push("/");

    setTimeout(() => {
      setIsButton(false);
    }, 600);
  };

  return (
    <>
      <div className="w-full bg-[#02021D] z-50 fixed top-0 left-0">
        <div
          className="max-w-[1440px] h-[72px] m-[auto] flex flex-row justify-between items-center relative bg-no-repeat bg-right-top pl-0 pr-0 sm:pl-[20px] lg:pl-[83px]"
          style={{
            backgroundImage: "url('/assets/navbar-back2.png')",
          }}
        >
          <div className="flex flex-1 pl-4 sm:pl-0">
            <Image
              src={"/assets/logo.svg"}
              width={"150"}
              height={"100"}
              alt="logo"
              className="logo cursor-pointer "
              onClick={() => {
                navigator.push("/");
              }}
            />
          </div>
          <div className=" border flex flex-[3] flex-wrap flex-col sm:flex-row justify-center sm:justify-start items-center absolute top-0 h-[100vh] sm:h-auto sm:relative w-[100%] gap-4 font-[Oswald] text-[18px] font-bold">
            <Link
              href={"/"}
              prefetch
              className="text-[#CAD4EF] px-9 py-[0.4rem] rounded-[50px] transition-all"
              style={{
                backgroundColor:
                  pathname == "/"
                    ? "#603CDB"
                    : isMenu == 2
                    ? "#3B258F"
                    : isMenu == 1
                    ? "#41FFC6"
                    : "#02021D",
                color:
                  pathname == "/"
                    ? "#fff"
                    : isMenu == 1 || isMenu == 2
                    ? "#fff"
                    : "#CAD4EF",
              }}
              onMouseDown={() => {
                setIsMenu(1);
              }}
              onMouseOver={() => {
                setIsMenu(2);
              }}
              onMouseUp={() => {
                setIsMenu(2);
              }}
              onMouseLeave={() => {
                setIsMenu(0);
              }}
            >
              HOME
            </Link>
            <Link
              href={"/play"}
              prefetch
              className="text-[#CAD4EF] px-9 py-[0.4rem] rounded-[50px] transition-all"
              style={{
                backgroundColor:
                  pathname == "/play"
                    ? "#603CDB"
                    : isMenuPlay == 2
                    ? "#3B258F"
                    : isMenuPlay == 1
                    ? "#41FFC6"
                    : "#02021D",
                color:
                  pathname == "/play"
                    ? "#fff"
                    : isMenuPlay == 1 || isMenuPlay == 2
                    ? "#fff"
                    : "#CAD4EF",
              }}
              onMouseDown={() => {
                setIsMenuPlay(1);
              }}
              onMouseOver={() => {
                setIsMenuPlay(2);
              }}
              onMouseUp={() => {
                setIsMenuPlay(2);
              }}
              onMouseLeave={() => {
                setIsMenuPlay(0);
              }}
            >
              HOW TO PLAY
            </Link>
            <Link
              href={"/chill"}
              prefetch
              className="text-[#CAD4EF] px-9 py-[0.4rem] rounded-[50px] transition-all"
              style={{
                backgroundColor:
                  pathname == "/chill"
                    ? "#603CDB"
                    : isMenuChill == 2
                    ? "#3B258F"
                    : isMenuChill == 1
                    ? "#41FFC6"
                    : "#02021D",
                color:
                  pathname == "/chill"
                    ? "#fff"
                    : isMenuChill == 1 || isMenuChill == 2
                    ? "#fff"
                    : "#CAD4EF",
              }}
              onMouseDown={() => {
                setIsMenuChill(1);
              }}
              onMouseOver={() => {
                setIsMenuChill(2);
              }}
              onMouseUp={() => {
                setIsMenuChill(2);
              }}
              onMouseLeave={() => {
                setIsMenuChill(0);
              }}
            >
              $CHILL
            </Link>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end items-center lg:items-start h-[100vh] lg:h-[100%] w-[100%] absolute lg:relative lg:flex">
            <button
              className="w-[264px] h-[84px] rounded-md font-bold font-[Oswald] text-[38px] text-[#020215]"
              style={{
                backgroundImage: "url(./assets/play-now-btn.png)",
                backgroundSize: "100% 100%",
                boxShadow: "0px 0px 20px 3px",
              }}
              onClick={() => {
                handleButton();
              }}
            >
              PLAY NOW
            </button>
            <Image
              src={"/assets/play-spark.png"}
              alt="spark"
              width={264}
              height={264}
              className=" absolute top-[-70px] left-[-30px] transition-all duration-300"
              style={{ display: isButton == true ? "block" : "none" }}
            />
          </div>
          <div className="pr-4 sm:pr-0 flex-1 text-white flex flex-row justify-end items-center sm:hidden">
            <button
              className=" w-9 h-9 bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/assets/menu-open.png')",
                backgroundSize: "24px 24px",
              }}
              onClick={() => {}}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
