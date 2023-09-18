import { MoreVertical, MoveLeft, User2 } from "lucide-react";
import React from "react";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { logo_1, addFriend, Chat } from "@/public";
import AvatarGroup from "./AvatarGroup";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import ProgressBar from "./ProgressBar";

const openSans = Open_Sans({ subsets: ["latin"] });

const HeaderCard = () => {
  return (
    <div className=" bg-Dark02 px-6 py-4 mt-3 rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-row items-center justify-between mb-5">
        <div className="flex items-center space-x-3">
          <div className="bg-Grey-01 rounded-full px-1 py-1 mb-7 ">
            <MoveLeft className=" w-4 h-4 " />
          </div>
          <div className="">
            <h3 className="font-[700] text-white text-lg mb-4">
              School November Tasks
            </h3>
            <p
              className={cn(
                "text-Grey-01 text-sm font-normal ",
                openSans.className
              )}
            >
              Created by Instructor Day on November 31, 2022
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-5">
          <div className="hidden flex-col sm:hidden xl:flex md:hidden">
            <h3 className="font-normal text-lg text-[#fff] ">
              Centered Martial Arts
            </h3>
            <p className={cn("text-Grey-01 text-sm", openSans.className)}>
              Sunnyvale, Ca
            </p>
          </div>
          <div className="w-14 h-12  items-center justify-center rounded-lg bg-white hidden xl:flex md:hidden">
            <Image src={logo_1} alt="logo" width={40} height={40} />
          </div>

          <div className="mt-0 md:mt-3 xl:block">
            <MoreVertical className="text-center text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-3 md:flex-col md:gap-y-3 xl:flex-row ">
        <div className=" w-full gap-5 flex  flex-row flex-wrap space-x-2">
            <AvatarGroup />
            <Button
              variant={"primary"}
              size={"primary"}
              className="text-white font-bold text-sm  border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Image
                src={addFriend}
                alt="AddFriend"
                width={20}
                height={20}
                className="pr-1 w-6 h-6"
              />
              Invite People
            </Button>
            <Button  size={"primary"} className="border border-primary text-sm px-4 text-white font-semibold focus-visible:ring-0 focus-visible:ring-offset-0">
                Private
            </Button>
            <Button variant={"default"} size={"primary"} className="border border-none bg-Iris/80 text-sm px-4 text-white font-semibold focus-visible:ring-0 focus-visible:ring-offset-0">
                Edit
            </Button>
            <Button
              variant={"primary"}
              size={"primary"}
              className=" text-white font-bold text-sm  border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Image
                src={Chat}
                alt="AddFriend"
                width={20}
                height={20}
                className="pr-2 w-6 h-6"
              />
             45 Comment
            </Button>
        </div>

        <div className="flex flex-col items-start gap-y-1 w-[10rem] mt-3 xl:w-[20rem] md:w-[20rem] md:flex-row">
            <h3 className="font-normal text-white text-sm w-[14rem]">Total Progress 60%</h3>
            <div className="w-full mt-1">
            <ProgressBar value={50}  />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
