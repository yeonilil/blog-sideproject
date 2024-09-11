import { useFormattedDate } from "@/hooks/useFormatDate";
import { Post } from "@/types/type";
import Image from "next/image";

interface PostCardProps {
  data: Post;
}

export default function PostCard({ data }: PostCardProps) {
  const date = useFormattedDate(data.createdAt);

  return (
    <div>
      <div className="flex flex-col h-[250px] w-[400px] md:w-[600px] xl:w-[700px] my-[10px] rounded-[20px] py-[30px] px-[30px] bg-white overflow-hidden  transform transition hover:scale-[1.02]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/assets/post-profile.svg"
              alt="프로필 아이콘"
              width={30}
              height={30}
              className="mr-[20px] cursor-pointer"
            />
            <p className="font-semibold text-[15px]">{data.author}</p>
          </div>
          <p className="text-[13px] mb-[5px] text-gray-200">{date}</p>
        </div>
        <p className="mt-[15px] text-[15px] font-semibold">{data.title}</p>
        <p className="mt-[4px] text-[13px] h-[180px] overflow-hidden">
          {data.content}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={
                data.isLikedByUser
                  ? "/assets/ic-heart-fill.svg"
                  : "/assets/ic-heart.svg"
              }
              alt="댓글 아이콘"
              width={30}
              height={30}
              className="mr-[5px] cursor-pointer"
            />
            <p className="text-[15px] font-semibold">{data.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
