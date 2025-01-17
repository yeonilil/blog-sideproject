import { Inter } from "next/font/google";
import Header from "@/components/header";
import PostCardContainer from "@/components/postCardContainer";
import Wrapper from "@/components/animation";
import Banner from "@/components/banner";
import CategoryContainer from "@/components/categoryContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //전체 게시물
  return (
    <Wrapper>
      <div className="h-full">
        <div className="h-full flex flex-col items-center font-Pretendard h-full bg-bg-100">
          <Header />
          <Banner />
          <CategoryContainer />
          <PostCardContainer />
        </div>
      </div>
    </Wrapper>
  );
}
