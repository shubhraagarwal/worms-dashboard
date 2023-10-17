import Image from "next/image";
import React from "react";
import logo from "/public/images/logo.png";
import dashboard from "/public/images/grid.png";
import edit from "/public/images/edit.png";
import fileText from "/public/images/file-text.png";
import server from "/public/images/server.png";
import settings from "/public/images/settings.png";
import { MoreVertical } from "lucide-react";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-[120px] bg-[#15182B] flex flex-col gap-10 items-center justify-start py-10">
      <div>
        <Image height={26} width={26} alt="icon" src={logo} />
      </div>
      <div>
        <Image height={26} width={26} alt="icon" src={dashboard} />
      </div>
      <div className="bg-pink-500 p-2 rounded-md">
        <Image height={26} width={26} alt="icon" src={edit} />
      </div>
      <div className="flex items-center gap-2 relative">
        <Image height={26} width={26} alt="icon" src={fileText} />
        <MoreVertical className="text-white absolute -right-10" />
      </div>
      <div className="flex items-center gap-2 relative">
        <Image height={26} width={26} alt="icon" src={server} />
        <MoreVertical className="text-white absolute -right-10" />
      </div>
      <div className="flex items-center gap-2 relative">
        <Image height={26} width={26} alt="icon" src={settings} />
        <MoreVertical className="text-white absolute -right-10" />
      </div>
    </div>
  );
};

export default Sidebar;
