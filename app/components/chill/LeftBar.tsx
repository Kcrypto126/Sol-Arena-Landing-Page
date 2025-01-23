"use client"
import Image from "next/image";

interface LeftBarPropsType {
    className?: string,
    isOpen?: boolean
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
const LeftBar: React.FC<LeftBarPropsType> = ({ className, isOpen }) => {

    return (
        <>
            <div className={`${className} md:h-[100vh] transition-all duration-1000 md:block ${isOpen ? "block" : "hidden"} fixed z-20 left-10 border-[#6841FF] md:border-none rounded-2xl pb-[20px] md:rounded-none border-[5px] md:left-0 md:pt-24 md:mt-0 mt-24 right-10 top-5 md:relative text-white bg-[#11114C] md:bg-[#03102D]`}>
                <div className=" absolute z-30 md:mt-5 -translate-y-[50%] -translate-x-[6px]">
                    <div className=" relative h-fit md:w-[28vw] w-[60vw]">
                        <Image src={"/assets/chill/Group2303.png"} className="w-full" width={1000} height={200} alt="" />
                        <div className=" absolute  top-[50%] translate-y-[-50%] left-5 text-[18px]">
                            Table of Contents
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-[30px] md:mt-[150px] pl-5 text-[16px]">
                    {
                        Lists.map((e, index) => {
                            return <div key={index}>
                                <div>
                                    <a href={`#${e.id}`}>{e.name}</a>
                                </div>
                                <ul className={` relative space-y-5 pl-5 border-s-2`}>
                                    {e.childern && e.childern.map((k, i) => {
                                        return (
                                            <li key={i} className=" relative">
                                                <div className=" absolute -start-[22px] top-[24px]">
                                                    <div className="h-[2px] w-5 bg-white">

                                                    </div>
                                                </div>
                                                <div className=" translate-y-4">
                                                    <a href={`#${k.id}`}>{k.name}</a>
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