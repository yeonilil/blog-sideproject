import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import PostCard from "@/components/postCard";
import PostCardContainer from "@/components/postCardContainer";
import FloatingButton from "@/components/floatingButton";
import Wrapper from "@/components/animation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //전체 게시물
  return (
    <Wrapper>
      <div className="h-full">
        <div className="flex flex-col items-center font-Pretendard h-full bg-custom-gradient">
          <Header />
          <PostCardContainer />
          <FloatingButton />
        </div>
      </div>
    </Wrapper>
  );
}
