import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import PostCard from "@/components/postCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() { //전체 게시물
  return (
    <div className="flex flex-col items-center font-Pretendard h-screen bg-custom-gradient">
      <Header/> 
    <div className="mt-[100px]">  
      <div className="flex justify-between">
      <p className="text-bold text-white text-[20px]">Recent Posts</p>
      <button className="px-[10px] py-[5px]  rounded-[10px] text-[15px] text-semibold bg-white">POST</button>
      </div>
      <PostCard/>
      <PostCard/>
    </div>
    </div>
  );
}
