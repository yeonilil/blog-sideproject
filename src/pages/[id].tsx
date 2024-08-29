import { useRouter } from "next/router";
import { getPostById, likePost } from "./api/posts";
import { useEffect, useState } from "react";
import { Post } from "@/types/type";
import { toast } from "react-toastify";
import Image from "next/image";
import { useFormattedDate } from "@/hooks/useFormatDate";
import Header from "@/components/header";
import CommentContainer from "@/components/commentContainer";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [liked, setLiked] = useState(false);

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

  const handleLike = async () => {
    if (!id || typeof id !== "string") return;

    try {
      await likePost(id);
      setLiked(true);
    } catch (error) {
      console.error("공감하기에 실패했습니다", error);
    }
  };

  useEffect(() => {
    if (id && typeof id === "string") {
      fetchPost(id);
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>; // 데이터가 로드될 때까지 로딩 표시
  }

  return (
    <>
      <Header />
      <div className="h-full bg-custom-gradient flex flex-col items-center pt-[100px]">
        <div className="h-screen bg-custom-gradient">
          <div
            className="flex flex-col h-auto w-[400px] md:w-[600px] xl:w-[800px] h-[250px] my-[10px] rounded-[10px] py-[30px] px-[30px] bg-white"
            style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)" }}
          >
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
                  alt="댓글 아이콘"
                  width={30}
                  height={30}
                  className="mr-[5px] cursor-pointer"
                  onClick={handleLike}
                />
                <p className="text-[15px] font-semibold">{post.likes}</p>
              </div>
            </div>
          </div>
          <CommentContainer postId={""} />
        </div>
      </div>
    </>
  );
}
