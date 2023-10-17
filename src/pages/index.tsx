import Image from "next/image";
import { Inter } from "next/font/google";
import Topbar from "@/components/Topbar";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` bg-white dark:bg-[#000821] dark:text-white text-black min-h-screen ${inter.className}`}
    >
      <Topbar />
      <Sidebar />
      <div className="ml-[120px] flex flex-col gap-4 px-14 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-[34px] font-semibold">Candidate Assessments</h1>
          <Button text="+ Create New" variant="primary" />
        </div>
        <div className="grid grid-cols-3 mt-4 gap-4">
          <Card
            title="DevOps"
            date="Pranathi, 10 Nov 22"
            invited={120}
            dropped={3}
            evaluated={100}
            qualified={98}
            progress={70}
          />
          <Card
            title="DevOps"
            date="Pranathi, 10 Nov 22"
            invited={120}
            dropped={3}
            evaluated={100}
            qualified={98}
            progress={60}
          />
          <Card
            title="DevOps"
            date="Pranathi, 10 Nov 22"
            invited={120}
            dropped={3}
            evaluated={100}
            qualified={98}
            progress={30}
          />
          <Card
            title="DevOps"
            date="Pranathi, 10 Nov 22"
            invited={120}
            dropped={3}
            evaluated={100}
            qualified={98}
            progress={70}
          />
          <Card
            title="DevOps"
            date="Pranathi, 10 Nov 22"
            invited={120}
            dropped={3}
            evaluated={100}
            qualified={98}
            progress={60}
          />
          <Card
            title="DevOps"
            date="Pranathi, 10 Nov 22"
            invited={120}
            dropped={3}
            evaluated={100}
            qualified={98}
            progress={30}
          />
        </div>
      </div>
    </main>
  );
}
