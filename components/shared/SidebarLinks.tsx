import React from "react";
import {
  Gauge,
  Mail,
  MessageCircle,
  Flower,
  UserSquare,
  CalendarDays,
  MonitorPlay,
  Store,
  GanttChartSquare,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Badge } from "../ui/badge";

const links = [
  {
    name: "Dashboard",
    icon: <Gauge className="w-6 h-6 " />,
  },
  {
    name: "Email",
    icon: <Mail className="w-6 h-6 " />,
    notification: 17,
    isExtend: true,
  },
  {
    name: "Chat",
    icon: <MessageCircle className="w-6 h-6 text-[#7879F1]" />,
    isExtend: false,
    textColor: "#7879F1",
  },
  {
    name: "Kanban",
    icon: <Flower className="w-6 h-6 text-[#6418C3]" />,
    isExtend: true,
    textColor: "#6418C3",
  },
  {
    name: "Contact",
    icon: <UserSquare className="w-6 h-6 text-[#7879F1]" />,
    isExtend: false,
    badge: "New",
    textColor: "#7879F1",
  },
  {
    name: "Calender",
    icon: <CalendarDays className="w-6 h-6 text-[#7879F1]" />,
    isExtend: false,
    textColor: "#7879F1",
  },
  {
    name: "Course",
    icon: <MonitorPlay className="w-6 h-6 " />,
    isExtend: true,
    textColor: "#7879F1",
  },
  {
    name: "Shop",
    icon: <Store className="w-6 h-6 " />,
    isExtend: false,
    textColor: "#7879F1",
  },
  {
    name: "Invoice",
    icon: <GanttChartSquare className="w-6 h-6 text-[#7879F1]" />,
    isExtend: true,
    textColor: "#7879F1",
  },
  {
    name: "Settings",
    icon: <Settings className="w-6 h-6 text-[#7879F1]" />,
    isExtend: false,
    textColor: "#7879F1",
  },
];

const SidebarLinks = () => {
  return (
    <div className="h-full w-full ">
      <ul className="flex flex-col gap-y-5 items-start">
        {links.map((link, index) => (
          <li
            key={index}
            className="flex items-center w-full flex-row gap-x-3 text-sm text-[#464366]"
          >
            {link.icon}
            <p className={`font-semibold leading-5 text-sm text-[${link.textColor}]`}>
              {link.name}
            </p>
            {link.badge ? (
                <Badge className="bg-Accent02 border-none text-sidebar-text absolute right-14">{link.badge}</Badge>
            ) : ("")}


            {link.notification ? (
              <p className="bg-Accent01 absolute right-16 rounded-full w-5 h-5 text-center text-[12px] ">
                {link.notification}{" "}
              </p>
            ) : (
              ""
            )}
            {link.isExtend ? (
              <span className="absolute right-8">
                <ChevronRight className="w-5 h-5" />
              </span>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarLinks;
