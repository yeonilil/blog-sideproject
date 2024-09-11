import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "./profileDropdown";

export default function Header() {
  return (
    <div className="fixed z-[999] w-full h-[70px] flex justify-between items-center font-semibold text-white bg-black-700">
      <div className="flex items-center">
        <Image
          src="../assets/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="mr-[20px] ml-[30px] cursor-pointer"
        />
        <Link href="/">
          <p className="mr-[20px]  hover:text-bg-200 cursor-pointer">FEED</p>
        </Link>
        <Link href="/mypage">
          <p className=" hover:text-bg-200 cursor-pointer">MY</p>
        </Link>
      </div>
      <div className="flex items-center mr-[50px] ">
        <Link href="/login">
          <p className="mr-[20px]  hover:text-bg-200 cursor-pointer">Login</p>
        </Link>
        <Link href="/signup">
          <p className="mr-[20px]  hover:text-bg-200 cursor-pointer">Signup</p>
        </Link>
        <ProfileDropdown />
      </div>
    </div>
  );
}
