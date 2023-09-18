import Image from "next/image";
import React from "react";
import { vertIcon } from "@/public";
import { Progress } from "../ui/progress";
import AvatarGroup from "../AvatarGroup";
import { Clock4 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BodyCardProps {
  title: string;
  description: string;
  color: string;
  textColor: string;
  value: number;
}

const BodyCard = ({color,description,title, textColor,value}:BodyCardProps) => {
  return (
    <div className="w-full h-[229px] bg-bg mt-6 rounded-2xl px-4 py-2">
      <div>
        <div className="flex flex-row justify-between items-center py-1">
          <span style={{backgroundColor: color}} className={`w-3 h-3 ${color} border-2 border-none rounded-full `}></span>
          <h3 style={{color: textColor}} className={`w-full h-full ml-3 ${textColor}`}>{title}</h3>

          <Image src={vertIcon} alt="VertIcon" width={20} height={20} />
        </div>
        <p className="text-white pt-4 w-auto">
          {description}
        </p>
        <div className="mt-5">
        <Progress value={value} color={color}/>
        </div>
        <div className="flex flex-row  mt-10 justify-between items-center">
            <AvatarGroup />
            <p className="text-Grey-01 flex flex-row items-center">
            <Clock4 className="h-5 w-5"/>
                <span className="pl-2 text-sm">Due in 4 days</span>
                </p>
        </div>
      </div>
    </div>
  );
};

export default BodyCard;
