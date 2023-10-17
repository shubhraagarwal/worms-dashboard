import React from "react";
import Button from "./Button";
import { Progress } from "./ui/progress";
import { Copy, Link } from "lucide-react";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  date: string;
  invited: number;
  dropped: number;
  evaluated: number;
  qualified: number;
  progress: number;
};

const Card = ({
  title,
  date,
  invited,
  dropped,
  evaluated,
  qualified,
  progress,
}: Props) => {
  return (
    <div className="w-[386px] p-4 space-y-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-gray-500">{date}</p>
        </div>
        <Button text="View" variant="ghost" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-10 justify-between">
            <p>Invited</p>
            <p>{invited}</p>
          </div>
          <div className="flex items-center gap-10 justify-between">
            <p>Evaluated</p>
            <p>{evaluated}</p>
          </div>
        </div>
        <hr className="h-1 w-[63px] bg-[#E0E0E0] rotate-90" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-10 justify-between">
            <p>Dropped Off</p>
            <p>{dropped}</p>
          </div>
          <div className="flex items-center gap-10 justify-between">
            <p>Qualified</p>
            <p>{qualified}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="progress">
          <p
            className={cn({
              "text-green-500": progress >= 70,
              "text-yellow-500": progress >= 50 && progress < 70,
              "text-red-500": progress < 50,
            })}
          >
            Qualifying
          </p>
          {/* <Progress className="bg-gray-100" id="progress" value={70} /> */}
          <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
            <div
              className={cn("flex flex-col justify-center overflow-hidden ", {
                "bg-green-500": progress >= 70,
                "bg-yellow-500": progress >= 50 && progress < 70,
                "bg-red-500": progress < 50,
              })}
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </label>
      </div>
      <div className="flex text-xs items-center w-full gap-4 justify-between">
        <div className="flex gap-5">
          <div className="text-gray-300 hover:cursor-pointer flex flex-col items-center ">
            <Copy />
            Duplicate
          </div>
          <div className="text-gray-300 hover:cursor-pointer flex flex-col items-center ">
            <Link />
            Copy Link
          </div>
        </div>
        <Switch className=" bg-gray-700" />
      </div>
    </div>
  );
};

export default Card;
