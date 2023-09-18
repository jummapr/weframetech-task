import React from "react";
import { Menu, MoveRight } from "lucide-react";
import SidebarLinks from "./shared/SidebarLinks";
import Image from "next/image";
import {SideBarVector} from "@/public"

const Sidebar = () => {
  return (
    <div className="h-full w-full bg-Dark02 text-text-100 overflow-y-auto">
      <div className="flex flex-col px-3">
        <div className="flex flex-row px-6 py-8 gap-x-6 items-center">
          <h3 className="text-sidebar-text">weframetech</h3>
          <div>
            <Menu className="h-6 w-6 hidden md:block  text-[#7879F1] absolute right-8 top-8
            " />
          </div>
        </div>

        

        <div className="px-6">
          <h1 className="uppercase font-semibold text-sidebar-text">Main Menu</h1>

          <div className="mt-6">
            <SidebarLinks />
          </div>
        </div>
        <div className="flex flex-col h-28 w-48 mt-3 mx-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-4 ">
            <Image src={SideBarVector} alt="SideBarVector" width={12} height={12}/>
            <h3 className="text-white text-base">Increase your work with kanban</h3> 
            <MoveRight className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
