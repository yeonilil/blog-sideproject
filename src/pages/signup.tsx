import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from 'react-hook-form'

interface LoginFormProps{
  username: string,
  password: string,
  passwordConfirm:string,
  nickname:string,
  bio: string,
}
export default function Signup() {

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<LoginFormProps>({ mode: 'onBlur' });

  //TODO:유효성 검사
  const idRegex = /^[a-zA-Z0-9]{8}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\(\)])[a-zA-Z\d!@#\$%\^&\*\(\)]{8,}$/;

  //TODO: 제출 시 실행
  const onSubmit: SubmitHandler<LoginFormProps> = (form) => {
    console.log(form);
 }

  return <div className="flex flex-col items-center w-screen h-screen">
  <Link href="/main">
   <Image
  src="../assets/logo.svg"
  alt="logo"
  width={200}
  height={100}
  className="mr-[20px] ml-[30px] cursor-pointer"
  />
  </Link>
<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
  <label className="flex flex-col mb-[30px]">아이디
  <input {...register('username',{required:true, pattern:idRegex})} placeholder="영문,숫자 8자 이상 입력해주세요" className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
  {errors?.username?.type === 'required' && (
              <p className="text-state-error text-[13px] mt-[10px]">이메일을 입력해주세요</p>
            )}
  {errors?.username?.type === 'pattern' && (
              <p className="text-state-error text-[13px] mt-[10px]">이메일 양식에 맞게 입력해주세요</p>
            )}
    <div className="flex">
    <button className="w-[100px] h-[30px] bg-gray-50 border rounded-[10px] mt-[10px] text-[14px]">중복확인</button>
    </div>
  </label>
  <label className="flex flex-col mb-[30px]">비밀번호
    <input {...register('password',{required:true, pattern:passwordRegex})} placeholder="영문,숫자,특수기호 8자 이상 입력해주세요" className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
    {errors?.password?.type === 'required' && (
              <p className="text-state-error text-[13px] mt-[10px]">비밀번호를 입력해주세요</p>
            )}
  {errors?.password?.type === 'pattern' && (
              <p className="text-state-error text-[13px] mt-[10px]">비밀번호 양식에 맞게 입력해주세요</p>
            )}
  </label>
  <label className="flex flex-col mb-[30px]">비밀번호 확인
    <input  {...register("passwordConfirm", {
        required: true,
        validate: {
          check: (val) => {
          if (getValues("password") !== val) {
              return "비밀번호가 일치하지 않습니다.";
          }
          },
      },
       })} placeholder="영문,숫자,특수기호 8자 이상 입력해주세요" className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
     {errors?.passwordConfirm && (
              <p className="text-state-error text-[13px] mt-[10px]">비밀번호가 일치하지 않습니다</p>
            )}  
  </label>
  <label className="flex flex-col mb-[30px]">닉네임
    <input {...register('nickname',{required:true})} placeholder="최대 8자까지 입력 가능" className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
    {errors?.nickname?.type === 'required' && (
              <p className="text-state-error text-[13px] mt-[10px]">닉네임을 입력해주세요</p>
            )}
  </label>
  <label className="flex flex-col mb-[30px]">소개
    <input {...register('bio',{required:true})} placeholder="소개를 작성해주세요." className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
    {errors?.bio?.type === 'required' && (
              <p className="text-state-error text-[13px] mt-[10px]">소개를 입력해주세요</p>
            )}
  </label>
  <button className="w-[300px] h-[50px] bg-black-400 text-white rounded-[10px] md:w-[500px] mt-[30px]">
    SIGNUP
  </button>
  <div className="flex justify-center mt-[20px] mb-[50px]"><p className="mr-[8px] text-gray-500 text-[14px]">계정이 있으신가요?</p><Link href="/login"><p className="hover:text-blue-500 text-[14px]">로그인</p></Link></div>
</form>
</div>
  };
  