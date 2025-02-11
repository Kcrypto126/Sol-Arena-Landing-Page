"use client"
import Image from "next/image";
import React from "react";

interface LeftBarPropsType {
    className?: string,
    isOpen?: boolean,
    setIsOpen: (f: boolean) => void
}
const Lists = [
    { id: "What-is-SOL-Arena", name: "What is SOL Arena?" },
    { id: "Whats-the-Vision", name: "What’s the Vision?" },
    {
        id: "What-Are-the-Key-Features", name: "What Are the Key Features?", childern: [
            { id: "High-Stakes-Gameplay-noCHILL-Crypto-and-Extraction", name: "High-Stakes Gameplay: noCHILL, Crypto, and Extraction" },
            { id: "Community-Driven-Competition-Represent-Your-Coins", name: "Community-Driven Competition: Represent Your Coins" },
            { id: "Accessible-for-All-Rewarding-for-Competitors", name: "Accessible for All, Rewarding for Competitors" },
        ]
    },
    { id: "Whats-the-Roadmap", name: "What’s the Roadmap?" },
    {
        id: "Why-Should-I-Own-CHILL", name: "Why Should I Own $CHILL?", childern: [
            { id: "Tokenomics", name: "Tokenomics" },
            // { id: "What-is-SOL-Arena?", name: "What is SOL Arena?" },
        ]
    },
    { id: "Who-Are-Your-Partners", name: "Who Are Your Partners?" },
    { id: "How-Do-I-Participate", name: "How Do I Participate?" },
    { id: "Links", name: "Links" },
];

const LeftBar: React.FC<LeftBarPropsType> = ({ className, isOpen, setIsOpen }) => {

    return (
        <>
            <div id="right-bar" className={`${className} col-span-1 lg:block ${isOpen ? "block" : "hidden" } lg:overflow-scroll scrollbar-hide h-fit lg:h-[100vh] absolute lg:relative z-40 left-5 border-[#6841FF] lg:border-none rounded-2xl pb-[20px] lg:rounded-none border-[5px] lg:left-0 lg:pt-24 lg:mt-0 mt-24 right-5 top-5 text-white bg-[#11114C] lg:bg-[#03102D]`}>
                <div className=" absolute z-40 lg:mt-5 -translate-y-[50%] -translate-x-[6px]">
                    <div className=" relative h-fit lg:w-[25vw] md:w-[300px] w-[230px]">
                        <Image src={"/assets/chill/Group2303.png"} className="w-full" width={1000} height={200} alt="" />
                        <div className=" absolute  top-[50%] translate-y-[-50%] left-5 text-[18px] md:text-[24px] xl:text-[26px]">
                            Table of Contents
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-[15px] xl:gap-[20px] lg:mt-[100px] px-5 pt-[50px] lg:pt-0 pb-3 text-[16px] ">
                    {
                        Lists.map((e, index) => {
                            return <div key={index}>
                                <div>
                                    <a href={`#${e.id}`} onClick={() => setIsOpen(false)} >{e.name}</a>
                                </div>
                                <ul className={` block relative space-y-5 pl-5 border-s-2`}>
                                    {e.childern && e.childern.map((k, i) => {
                                        return (
                                            <li key={i} className=" relative">
                                                <div className=" absolute -left-[22px] top-[24px]">
                                                    <div className="h-[2px] w-5 bg-white">
                                                    </div>
                                                </div>
                                                <div className=" translate-y-4">
                                                    <a href={`#${k.id}`} onClick={() => setIsOpen(false)}>{k.name}</a>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={`fixed w-[100vw] h-[100vh] bg-[#0000009c] z-[19] md:hidden ${isOpen ? "block" : "hidden"} `}>

            </div>
        </>
    );
}
export default LeftBar;