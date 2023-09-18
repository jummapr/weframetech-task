import React from "react";
import { Menu } from "lucide-react";
import SidebarLinks from "./shared/SidebarLinks";
import SearchInput from "./SearchInput";
import { bell, VideoLesson, checkBox, office, flag } from "@/public";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

const MobileSideBar = () => {
  return (
    <ScrollArea className=" w-full bg-Dark02 text-text-100 overflow-hidden ">
      <div className="flex flex-col px-3">
        <div className="flex flex-row px-6 py-6 gap-x-6 items-center">
          <h3 className="text-white pt-2">weframetech</h3>
          
        </div>

        <div className="flex flex-col space-y-3 mx-7 my-4">
          <div className="flex md:hidden lg:hidden xl:hidden">
          <SearchInput />
          </div>
            <div className=" md:items-center gap-x-4 flex mx-4">
              <ul className="flex flex-row space-x-10 pt-4 ">
                <li className="relative">
                  <span className="absolute -top-2 -right-1  bg-Accent01 rounded-full text-center w-4  h-4 text-Dark01 text-[10px] font-semibold">
                    10
                  </span>
                  <Image src={bell} alt="" width={24} height={24} />
                </li>
                <li className="relative">
                  <span className="absolute -top-2 -right-1  bg-Accent01 rounded-full text-center w-4  h-4 text-Dark01 text-[10px] font-semibold">
                    10
                  </span>
                  <Image src={VideoLesson} alt="" width={24} height={24} />
                </li>
                <li className="relative">
                  <span className="absolute -top-2 -right-1  bg-Accent01 rounded-full text-center w-4  h-4 text-Dark01 text-[10px] font-semibold">
                    10
                  </span>
                  <Image src={checkBox} alt="" width={24} height={24} />
                </li>
                <li className="relative">
                  <span className="absolute -top-2 -right-1 text-center text-Dark01 bg-Accent02 rounded-full w-4 h-4 text-xs font-semibold">
                    !
                  </span>
                  <Image src={office} alt="" width={24} height={24} />
                </li>
              </ul>
            </div>
        </div>
        

        <div className="px-6">
          <h1 className="uppercase font-semibold text-sidebar-text">Main Menu</h1>

          <div className="mt-6">
            <SidebarLinks />
          </div>
        </div>

      </div>
    </ScrollArea>
  );
};

export default MobileSideBar;
