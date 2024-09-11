import Header from "@/components/header";
import { PostFormProps } from "@/types/type";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { writePost } from "./api/posts";
import Wrapper from "@/components/animation";
import { useState } from "react";

export default function Post() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormProps>({ mode: "onSubmit" });
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryInput, setCategoryInput] = useState<string>("");

  const onSubmit: SubmitHandler<PostFormProps> = async (form) => {
    try {
      // 카테고리 배열을 form 데이터에 추가
      const postData = {
        ...form,
        categories, // 카테고리 배열을 포함
      };

      await writePost(postData);
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

  const handleCategoryClick = (index: number) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const handleCategoryInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedTag = categoryInput.trim();
      if (trimmedTag.length > 0 && trimmedTag.length <= 10) {
        if (categories.includes(trimmedTag)) {
          toast.error("이미 추가된 태그입니다.");
        } else if (categories.length >= 3) {
          toast.info("태그는 3개까지 입력 가능합니다");
        } else {
          setCategories([...categories, trimmedTag]);
        }
        setCategoryInput("");
        e.preventDefault(); // Enter 키로 폼 제출 방지
      }
    }
  };

  return (
    <Wrapper>
      <div className="flex flex-col items-center font-Pretendard h-screen bg-bg-100 font-Pretendard">
        <Header />
        <form
          className="flex flex-col mt-[100px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-[18px] font-bold mb-[20px]">포스트 작성</h1>
          <label className="flex flex-col mb-[30px] font-semibold">
            제목
            <input
              {...register("title", { required: true })}
              placeholder="제목을 입력해주세요"
              className="w-[500px] h-[50px] border-gray-200 border-[1px] bg-white rounded-[10px] md:w-[800px] mt-[10px] pl-[20px]"
            />
          </label>
          <label className="flex flex-col font-semibold mb-[30px]">
            카테고리
            <input
              value={categoryInput}
              onChange={handleCategoryInputChange}
              onKeyPress={handleKeyDown}
              placeholder="포스트의 카테고리를 입력해주세요"
              className="w-[500px] h-[50px] border-gray-200 border-[1px] bg-white rounded-[10px] md:w-[800px] mt-[20px] pl-[20px]"
            />
            <div className="mt-[8px]">
              {categories.map((category, index) => (
                <span
                  key={index}
                  onClick={() => handleCategoryClick(index)}
                  className="mr-[4px] mt-[4px] inline-block transform rounded-[8px] bg-blue-200 px-[8px] py-[4px] text-blue-800 transition hover:scale-105"
                >
                  {category}
                </span>
              ))}
            </div>
          </label>
          <label className="flex flex-col font-semibold">
            내용
            <textarea
              {...register("content", { required: true })}
              placeholder="내용을 작성해주세요"
              className="w-[500px] h-[200px] border-gray-200 border-[1px] bg-white rounded-[10px] md:w-[800px] mt-[20px] pl-[20px] pt-[15px] text-left align-text-top"
            />
          </label>
          <button
            type="submit"
            className="w-[500px] h-[50px] bg-black-400 text-white font-semibold rounded-[10px] md:w-[800px] mt-[50px]"
          >
            작성 완료
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
