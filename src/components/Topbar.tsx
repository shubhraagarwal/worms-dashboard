import React from "react";
import { Switch } from "./ui/switch";
import { Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import picture from "/public/images/ellipse-32.png";

type Props = {};

const Topbar = (props: Props) => {
  return (
    <div className="flex items-center justify-end gap-6 h-[92px] pr-20 shadow ">
      <Switch onClick={() => document.body.classList.toggle("dark")} />
      <Bell />
      <div className="flex items-center gap-4 justify-between">
        <p className="text-md">Jessica James</p>
        <Avatar>
          <AvatarImage
            src={"/public/images/ellipse-32.png"}
            alt="picture"
            height={32}
            width={32}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ChevronDown className="h-6 w-6 text-gray-500" />
      </div>
    </div>
  );
};

export default Topbar;
