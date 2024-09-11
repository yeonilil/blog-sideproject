import Image from "next/image";
import PostCard from "./postCard";
import { useEffect, useState } from "react";
import { Post, UserProfile } from "@/types/type";
import { getAllPosts } from "@/pages/api/posts";
import { toast } from "react-toastify";
import Link from "next/link";
import Router from "next/router";
import { getUserProfile } from "@/pages/api/users";

export default function PostCardContainer() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isMyPage, setIsMyPage] = useState(Router.pathname === "/mypage");

  const fetchPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      toast.error("포스트를 불러오는 데 실패했습니다");
      console.error("포스트를 불러오는 데 실패했습니다", error);
    }
  };
  const fetchProfile = async () => {
    try {
      const userData = await getUserProfile(); //프로필 조회
      setUser(userData);
    } catch (error) {
      console.error("유저 데이터를 불러오는 데 실패했습니다", error);
    }
  };
  useEffect(() => {
    fetchPosts();
    fetchProfile();
    //post 데이터의 author과 현재 유저 정보의 닉네임 비교
    const filteredPosts = isMyPage
      ? posts.filter((post) => post.author === user?.nickname)
      : posts;
    setPosts(filteredPosts);
  }, [isMyPage]);

  return (
    <div>
      <div className="mt-[30px] h-full">
        <div className="flex justify-between">
          <p className="font-semibold text-[14px] text-gray-400 mb-[10px] ">
            {isMyPage ? "내 게시물" : "전체 게시물"}
          </p>
        </div>
        {posts.map((post) => (
          <Link key={post.id} href={`/${post.id}`}>
            <PostCard key={post.id} data={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
