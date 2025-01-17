import { useRouter } from "next/router";
import { getPostById, likePost, deletePost, patchPost } from "./api/posts";
import { useEffect, useState } from "react";
import { Category, Post } from "@/types/type";
import { toast } from "react-toastify";
import Image from "next/image";
import Header from "@/components/header";
import CommentContainer from "@/components/commentContainer";
import { getCategories } from "./api/categories";
import Link from "next/link";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [liked, setLiked] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchPost = async (postId: string) => {
    try {
      const data = await getPostById(postId);
      setPost(data);
      setLiked(data.isLikedByUser);
    } catch (error) {
      toast.error("포스트를 불러오는 데 실패했습니다");
      console.error("포스트를 불러오는 데 실패했습니다", error);
    }
  };

  const fetchCategory = async () => {
    try {
      const categoryData = await getCategories();
      setCategories(categoryData);
    } catch (error) {
      toast.error("카테고리를 불러오는 데 실패했습니다");
      console.error("카테고리를 불러오는 데 실패했습니다", error);
    }
  };

  const handleLike = async () => {
    if (!id || typeof id !== "string" || !post) return;

    try {
      await likePost(id);
      setLiked(true);
      setPost((prevPost) =>
        prevPost ? { ...prevPost, likes: prevPost.likes + 1 } : prevPost
      );
    } catch (error) {
      console.error("공감하기에 실패했습니다", error);
    }
  };

  const handleDelete = async () => {
    if (!id || typeof id !== "string") return;

    if (confirm("이 포스트를 삭제하시겠습니까?")) {
      try {
        await deletePost(id);
        toast.success("포스트가 성공적으로 삭제되었습니다.");
        router.push("/");
      } catch (error) {
        toast.error("포스트 삭제에 실패했습니다.");
        console.error("포스트 삭제 중 오류 발생:", error);
      }
    }
  };

  useEffect(() => {
    if (id && typeof id === "string") {
      fetchPost(id);
      fetchCategory();
      console.log(categories);
      console.log(post);
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="h-full bg-bg-100 flex flex-col items-center pt-[100px]">
        <div className="h-screen bg-bg-100">
          <div className="flex justify-end gap-[10px] text-[13px] ">
            <Link href={`/edit?id=${id}`}>
              <button>수정</button>
            </Link>
            <button onClick={handleDelete}>삭제</button>
          </div>
          <div
            className="flex flex-col h-auto w-[400px] md:w-[600px] xl:w-[800px] h-[250px] my-[10px] rounded-[10px] py-[30px] px-[30px] bg-white"
            style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="flex gap-[4px] mb-[10px]">
              {post.categories.map((category: string, index: number) => (
                <p
                  key={index}
                  className="w-fit text-[13px] text-gray-400 inline-block transform rounded-[8px] bg-blue-200 px-[8px] py-[4px] transition hover:scale-105"
                >
                  {category}
                </p>
              ))}
            </div>
            <p className="font-semibold text-[20px]">{post.title}</p>
            <p className="mt-[30px] text-[15px] h-[180px] overflow-hidden">
              {post.content}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/assets/post-profile.svg"
                  alt="프로필 아이콘"
                  width={40}
                  height={30}
                  className="mr-[20px] cursor-pointer"
                />
                <p className="text-[15px] font-semibold">{post.author}</p>
              </div>
              <div className="flex items-center">
                <Image
                  src={
                    liked ? "/assets/ic-heart-fill.svg" : "/assets/ic-heart.svg"
                  }
                  alt="공감 아이콘"
                  width={30}
                  height={30}
                  className="mr-[5px] cursor-pointer"
                  onClick={handleLike}
                />
                <p className="text-[15px] font-semibold">{post.likes}</p>
              </div>
            </div>
          </div>
          <CommentContainer postId={id as string} />
        </div>
      </div>
    </>
  );
}
