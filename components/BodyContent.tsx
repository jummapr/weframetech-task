import React from "react";
import BodyTitle from "./shared/BodyTitle";
import { ScrollArea } from "./ui/scroll-area";
import BodyCard from "./shared/BodyCard";
import { bodyTodoContent, bodyTodoDone, bodyTodoList, bodyTodoProgressList } from "@/constant";
import RevisedCard from "./RevisedCard";

const BodyContent = () => {
  return (
    <ScrollArea className="w-[110rem] h-full ">
      <div className="grid grid-cols-5 gap-x-10   mb-7">
        <div className="w-[18rem] sm:w-[19rem] md:w-[19rem] lg:w-[20rem] xl:w-[20rem] 2xl:w-[20rem] mx-3 md:mx-0 lg:mx-0 xl:mx-0">
          <BodyTitle title="To-Do List (24)" Class="todoActive" />
          {bodyTodoList.map((item, index) => (
            <>
              <BodyCard
                key={index}
                title={item.name}
                description={item.description}
                color={item.color}
                textColor={item.textColor}
                value={60}
              />
            </>
          ))}
        </div>
        <div className="w-[20rem]">
          <BodyTitle title="In Progress (2)" Class="todoDeActive" />
          {bodyTodoProgressList.map((item, index) => (
            <BodyCard
              key={index}
              title={item.name}
              description={item.description}
              color={item.color}
              textColor={item.textColor}
              value={80}
            />
          ))}
        </div>
        <div className="w-[20rem]">
          <BodyTitle title="Done (3)" Class="todoDeActive" />
          {bodyTodoDone.map((item, index) => (
            <BodyCard
              key={index}
              title={item.name}
              description={item.description}
              color={item.color}
              textColor={item.textColor}
              value={100}
            />
          ))}
        </div>
        <div className="w-[20rem]">
          <BodyTitle title="Revised (0)" Class="todoDeActive" />
          <RevisedCard />
        </div>
        <div className="w-[20rem]">
          <BodyTitle title="Contant(2)" Class="todoDeActive" />
          {bodyTodoContent.map((item, index) => (
            <BodyCard
              key={index}
              title={item.name}
              description={item.description}
              color={item.color}
              textColor={item.textColor}
              value={20}
            />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default BodyContent;
