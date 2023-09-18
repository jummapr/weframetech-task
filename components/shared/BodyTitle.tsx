import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface BodyTitleProps {
    title: string;
    Class: "todoActive" | "todoDeActive";
}

const BodyTitle = ({title, Class}:BodyTitleProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className="text-white text-base font-semibold">{title}</h3>
      <div>
        <Button variant={"default"} size={"icon"} className={`${Class} rounded-full `}>
          <Plus className={`${Class}`}/>
        </Button>
      </div>
    </div>
  );
};

export default BodyTitle;
