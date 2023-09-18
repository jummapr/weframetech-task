import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="flex md:flex  lg:flex xl:flex">
      <div className="relative">
        <div className="absolute top-2 left-5 h-[26px] w-[26px]   rounded-full p-1 flex  items-center justify-center">
          <Search className="text-[#7879F1]" />
        </div>
        <Input
          className="px-14 py-4 rounded-full bg-[#211A75]  placeholder:text-[#7879F1] text-white  border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0  "
          placeholder="Search here"
        />
      </div>
    </div>
  );
};

export default SearchInput;
