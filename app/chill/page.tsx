"use client"
import { useState } from "react";
import LeftBar from "../components/chill/LeftBar";
import RightContent from "../components/chill/RightContent";
import Panel from "../components/Panel";
const Page: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <LeftBar isOpen={isOpen} />
      <RightContent className="pt-20" />
      <div className="md:hidden block">
        <Panel isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};
export default Page;
