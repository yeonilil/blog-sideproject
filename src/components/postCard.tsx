import Image from "next/image";

export default function PostCard() {
    return (
      <div className="flex flex-col w-[600px] h-[250px] my-[10px] rounded-[30px] py-[30px] px-[30px] bg-white"   style={{ boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.08)' }}>
       <div className="flex items-center">
       <Image
        src="../assets/post-profile.svg"
        alt="logo"
        width={40}
        height={30}
        className="mr-[20px] cursor-pointer"
        />
       <p className="font-semibold text-[20px]">곽서연</p>
        </div> 
        <p className="mt-[15px] text-[15px]">포스팅 작성 내용 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</p>
      </div>
    );
  }
  
