import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <div className="hidden md:hidden lg:hidden xl:flex h-full w-[250px] z-30 flex-col fixed overflow-hidden inset-y-0 ">
        <Sidebar />
      </div>
      <main className="lg:h-full xl:pl-[250px] h-full">{children}</main>
    </div>
  );
};

export default layout;
