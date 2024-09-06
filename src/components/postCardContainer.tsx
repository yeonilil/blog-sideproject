import Image from "next/image";
import PostCard from "./postCard";
import { useEffect, useState } from "react";
import { Post } from "@/types/type";
import { getAllPosts } from "@/pages/api/posts";
import { toast } from "react-toastify";
import Link from "next/link";

export default function PostCardContainer() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      toast.error("포스트를 불러오는 데 실패했습니다");
      console.error("포스트를 불러오는 데 실패했습니다", error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="mt-[30px] h-screen">
        <div className="flex justify-between">
          <p className="text-bold text-[16px] ">ALL</p>
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
