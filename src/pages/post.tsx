import Header from "@/components/header";
import { PostFormProps } from "@/types/type";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { writePost } from "./api/posts";
import Image from "next/image";
import Wrapper from "@/components/animation";

export default function Post() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormProps>({ mode: "onSubmit" });

  const onSubmit: SubmitHandler<PostFormProps> = async (form) => {
    try {
      await writePost(form);
      console.log("글 작성 완료");
      router.push("/");
    } catch (error: any) {
      toast.error("글 작성에 실패했습니다");
      console.error("글 작성 실패:", error);
    }
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubmit(onSubmit)();
  };

  return (
    <Wrapper>
      <div className="flex flex-col items-center font-Pretendard h-screen bg-custom-gradient font-Pretendard">
        <Header />
        <form className="flex flex-col mt-[100px] mx-[50px] ">
          <div className="flex items-center mb-[30px] ">
            <Image
              src="/assets/ic-post.svg"
              width={25}
              height={25}
              alt="포스트 작성 아이콘"
            />
            <h1 className="ml-[6px] text-[18px] font-bold">포스트 작성</h1>
          </div>
          <label className="flex flex-col mb-[30px] font-semibold">
            제목
            <input
              {...register("title", { required: true })}
              placeholder="제목을 입력해주세요"
              className="w-[500px] h-[50px] border-gray-200 border-[2px] bg-white rounded-[10px] md:w-[800px] mt-[10px] pl-[20px]"
            />
          </label>
          <label className="flex flex-col font-semibold">
            내용
            <textarea
              {...register("content", { required: true })}
              placeholder="내용을 작성해주세요"
              className="w-[500px] h-[200px] border-gray-200 border-[2px] bg-white rounded-[10px] md:w-[800px] mt-[20px] pl-[20px] pt-[15px] text-left align-text-top"
            />
          </label>
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-[500px] h-[50px] bg-black-400 text-white font-semibold rounded-[10px] md:w-[800px] mt-[50px]"
          >
            작성 완료
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
