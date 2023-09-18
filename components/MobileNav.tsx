import React from "react";
import { Menu } from "lucide-react";
import { bell, VideoLesson, checkBox, office, flag } from "@/public";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";
import Image from "next/image";
import SearchInput from "./SearchInput";
import SidebarLinks from "./shared/SidebarLinks";
import MobileSideBar from "./MobileSideBar";
import { ScrollArea } from "./ui/scroll-area";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild className="">
          <Button size={"icon"} className=" flex flex-row">
            <Menu className="text-Iris/80" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0 flex gap-0 bg-Dark02">
          <MobileSideBar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
