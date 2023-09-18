import BodyContent from "@/components/BodyContent";
import HeaderCard from "@/components/HeaderCard";
import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const page = () => {
  return (
    <div className="mx-7 py-3 ">
      <HeaderCard />
      <div className="w-[100%] h-[90%] overflow-x-auto mt-5 scrollbar">
        <BodyContent />
      </div>
    </div>
  );
};

export default page;
