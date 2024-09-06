import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();

  const handlePostButton = () => {
    router.push("/post");
  };
  return (
    <div>
      <div className="mt-[100px] flex flex-col h-[200px] w-[400px] md:w-[600px] xl:w-[700px] my-[10px] rounded-[20px] pl-[30px] overflow-hidden bg-custom-gradient">
        <div className="relative ">
          <Image
            src="assets/white-star-img.svg"
            alt="배너 별 이미지"
            width={30}
            height={30}
            className="mt-[35px]"
          />
          <p className="text-white text-[22px] font-bold leading-snug">
            BLOG로 일상 기록을
            <br />
            시작해보세요
          </p>
          <button
            onClick={handlePostButton}
            className="bg-white px-[12px] py-[4px] mt-[20px] rounded-[100px] text-blue-500 text-[12px] font-semibold hover:text-blue-800"
          >
            작성하기
          </button>
          <Image
            src="assets/purple-flower-img.svg"
            alt="배너 분홍 별 이미지"
            width={100}
            height={100}
            className="absolute left-[220px] top-[-50px]"
          />
          <Image
            src="assets/pink-star-img.svg"
            alt="배너 분홍 별 이미지"
            width={40}
            height={40}
            className="absolute left-[220px] top-[80px]"
          />
          <Image
            src="assets/door-img.svg"
            alt="배너 문 이미지"
            width={200}
            height={200}
            className="absolute right-[10px] top-[30px]"
          />
          <Image
            src="assets/cloud-img.svg"
            alt="배너 문 이미지"
            width={200}
            height={200}
            className="absolute right-[0px] top-[60px]"
          />
        </div>
      </div>
    </div>
  );
}
