import Image from "next/image";
import PostCard from "./postCard";
import { useEffect, useState } from "react";
import { Post, UserProfile } from "@/types/type";
import { getAllPosts } from "@/pages/api/posts";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router"; // useRouter 사용
import { getUserProfile } from "@/pages/api/users";

export default function PostCardContainer() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isMyPage, setIsMyPage] = useState(false); // 초기값 false
  const router = useRouter(); // useRouter 사용하여 Router 객체 가져오기

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
      const userData = await getUserProfile(); // 프로필 조회
      setUser(userData);
    } catch (error) {
      console.error("유저 데이터를 불러오는 데 실패했습니다", error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchProfile();

    // 클라이언트에서만 실행되는 부분
    if (router.pathname === "/mypage") {
      setIsMyPage(true);
    }
  }, [router.pathname]); // router.pathname이 변경될 때 실행

  useEffect(() => {
    if (isMyPage && user) {
      // 내 페이지일 경우, 포스트 필터링
      const filteredPosts = posts.filter(
        (post) => post.author === user.nickname
      );
      setPosts(filteredPosts);
    }
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
