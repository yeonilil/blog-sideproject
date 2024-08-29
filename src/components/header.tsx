import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "./profileDropdown";

export default function Header() {
  return (
  <div className="fixed w-full h-[100px] flex justify-between items-center font-semibold text-white">
    <div className="flex items-center">
    <Image
    src="../assets/logo.svg"
    alt="logo"
    width={100}
    height={100}
    className="mr-[20px] ml-[30px] cursor-pointer"
    />
     <Link href="/main">
    <p className="mr-[20px]  hover:text-bg-200 cursor-pointer">FEED</p>
    </Link>
    <Link href="/main">
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
    </div>
    
  </div>)
};
