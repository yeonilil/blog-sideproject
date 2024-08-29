import { LoginUserRequest } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { loginUser } from "./api/auth";
import { useRouter } from "next/router";

export default function Login() {
 const router=useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserRequest>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<LoginUserRequest> = async (form) => {
    try {
      await loginUser(form); 
      console.log("로그인 완료");
      router.push("/")
    } catch (error:any) {
      toast.error("로그인에 실패했습니다")
      console.error("로그인 실패:", error);
    }
 }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubmit(onSubmit)();
  };


  return <div className="flex flex-col items-center w-screen h-screen bg-custom-gradient pt-[100px]">
    <Link href="/main">
     <Image
    src="../assets/logo.svg"
    alt="logo"
    width={200}
    height={100}
    className="mr-[20px] ml-[30px] cursor-pointer"
    />
    </Link>
  <form className="flex flex-col">
    <label className="flex flex-col mb-[30px]">아이디
    <input {...register("username",{required:true})}className="w-[300px] h-[50px] bg-white rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
    {errors?.username?.type === 'required' && (
              <p className="text-state-error text-[13px] mt-[10px]">아이디를 입력해주세요</p>
            )}
    </label>
    <label className="flex flex-col">비밀번호
      <input {...register("password",{required:true})}className="w-[300px] h-[50px] bg-white rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
      {errors?.password?.type === 'required' && (
              <p className="text-state-error text-[13px] mt-[10px]">비밀번호를 입력해주세요</p>
            )}
    </label>
    <button type="button" onClick={handleButtonClick} className="w-[300px] h-[50px] bg-black-400 text-white rounded-[10px] md:w-[500px] mt-[50px]">
      LOGIN
    </button>
    <div className="flex justify-center mt-[20px]"><p className="mr-[8px] text-gray-500 text-[14px]">계정이 없으신가요?</p><Link href="/signup"><p className="hover:text-blue-500 text-[14px]">회원가입</p></Link></div>
  </form>
  </div>
};
