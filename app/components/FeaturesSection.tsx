import Image from "next/image";
interface FeaturesSection {
  featuresBack: string;
}

const FeaturesSection: React.FC<FeaturesSection> = ({ featuresBack }) => {
  return (
    <>
      <div className=" relative">
        <div
          className=" w-[360px] h-[600px] border-[#EAD4FF] border-2 rounded-3xl p-5 relative"
          style={{
            boxShadow: "inset 0 0 30px 15px #8C46FF",
          }}
        >
          <div
            className=" flex justify-center items-center bg-white"
            style={{ boxShadow: "inset 0 0 10px 5px #8C46FF", width: "100%", height: "100%" }}
          >
            sdf
          </div>
        </div>
        <div className="z-10 text-white flex flex-col absolute bottom-[45px] left-[-71px]">
          <div
            className="w-[154px] h-[42px] flex justify-center items-center bg-center bg-no-repeat font-[Montserrat] font-semibold text-[20px]"
            style={{
              backgroundImage: "url('/assets/features/text-back2.png')",
            }}
          >
            <h1 className="pr-5">Feature 1</h1>
          </div>
          <div className="text-[16px] font-[Montserrat] text-white font-medium px-4 py-3 border-[2px] border-[#130C51] rounded-[20px] rounded-ss-[0] max-w-[366px] bg-[#603CDB]">
            Lorem ipsum dolor sit amet conser. Rhoncus gravida massa posuere
            sed. Pharet lorem facis. Sit laoreet sed pretm fusce nisl faucibus.
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturesSection;
