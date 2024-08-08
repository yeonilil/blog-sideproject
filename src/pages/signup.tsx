import Image from "next/image";
import Link from "next/link";

export default function Signup() {
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
<form className="flex flex-col">
  <label className="flex flex-col mb-[30px]">아이디
  <input placeholder="영문,숫자 8자 이상 입력해주세요" className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
  </label>
  <label className="flex flex-col mb-[30px]">비밀번호
    <input placeholder="영문,숫자,특수기호 8자 이상 입력해주세요" className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
  </label>
  <label className="flex flex-col mb-[30px]">비밀번호 확인
    <input placeholder="영문,숫자,특수기호 8자 이상 입력해주세요" className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
  </label>
  <label className="flex flex-col mb-[30px]">닉네임
    <input placeholder="최대 8자까지 입력 가능" className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
  </label>
  <label className="flex flex-col mb-[30px]">소개
    <input placeholder="소개를 작성해주세요." className="w-[300px] h-[50px] bg-gray-100 rounded-[10px] md:w-[500px] mt-[20px] pl-[20px]"/>
  </label>
  <button className="w-[300px] h-[50px] bg-black-400 text-white rounded-[10px] md:w-[500px] mt-[50px]">
    LOGIN
  </button>
  <div className="flex justify-center mt-[20px] mb-[50px]"><p className="mr-[8px] text-gray-500 text-[14px]">계정이 있으신가요?</p><Link href="/login"><p className="hover:text-blue-500 text-[14px]">회원가입</p></Link></div>
</form>
</div>
  };
  