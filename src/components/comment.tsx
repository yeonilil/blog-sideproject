import Image from "next/image";
import Link from "next/link";

export default function Comment() {
  return (
    <div
      className="flex flex-col h-auto w-[400px] md:w-[600px] xl:w-[800px] h-[250px] my-[10px] rounded-[10px] py-[30px] px-[30px] bg-white"
      style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)" }}
    >
      <div className="flex items-center">
        <Image
          src="/assets/post-profile.svg"
          alt="프로필 아이콘"
          width={40}
          height={30}
          className="mr-[20px] cursor-pointer"
        />
        <p className="font-semibold text-[20px]">{data.title}</p>
      </div>
      <p className="mt-[15px] text-[15px] h-[180px] overflow-hidden">
        {data.content}
      </p>
      <p className="text-[13px] mb-[5px] text-gray-200">{date}</p>
      <div className="flex justify-between items-center">
        <p className="text-[15px] font-semibold">{data.author}</p>
        <div className="flex items-center">
          <Image
            src="/assets/ic-heart.svg"
            alt="댓글 아이콘"
            width={30}
            height={30}
            className="mr-[5px] cursor-pointer"
          />
          <p className="text-[15px] font-semibold">{data.likes}</p>
        </div>
      </div>
    </div>
  );
}
