import React from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { bell, VideoLesson, checkBox, office, flag } from "@/public";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import { Avatar, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-x-6 text-primary">
      <div className="flex md:flex xl:hidden lg:flex">
        <MobileNav />
      </div>
      <div className="hidden md:flex sm:hidden lg:flex xl:flex">
      <SearchInput />
      </div>
      <div className=" items-center flex-row space-x-10 hidden md:hidden lg:hidden xl:flex ">
        <Link href={"/"}>
          <p className="underline uppercase text-xs font-bold">Other Menu</p>
        </Link>
        <div className=" md:items-center gap-x-4 flex ">
          <ul className="flex flex-row space-x-4">
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
        <div>
          <Button className="bg-[#211A75] space-x-3 rounded-full border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0">
            <Image
              src={flag}
              alt=""
              width={24}
              height={24}
              className="rounded-full"
            />
            <p className="text-white">English</p>
            <ChevronDown />
          </Button>
        </div>
      </div>
      <div className="flex flex-row space-x-2 items-center mx-2 ">
        <div>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
          </Avatar>
        </div>
        <div className="flex flex-row gap-x-3">
          <div className="flex flex-col">
            <h3 className="text-white text-base">Instructor Day</h3>
            <p className="text-Iris/80 text-sm">Super Admin</p>
          </div>

          <span className="pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
            >
              <path d="M0 0H15L7.5 8L0 0Z" fill="#6418C3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
