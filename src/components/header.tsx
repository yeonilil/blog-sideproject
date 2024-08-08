import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (<div className="h-[100px] flex justify-between items-center border border-b-1 font-bold">
    <div className="flex items-center">
    <Image
    src="../assets/logo.svg"
    alt="logo"
    width={80}
    height={100}
    className="mr-[20px] ml-[30px] cursor-pointer"
    />
     <Link href="/main">
    <p className="mr-[20px]  hover:text-gray-400 cursor-pointer">FEED</p>
    </Link>
    <Link href="/main">
    <p className=" hover:text-gray-400 cursor-pointer">MY</p>
    </Link>
    </div>
    <div className="flex mr-[50px] ">
      <Link href="/login">
        <p className="mr-[20px]  hover:text-gray-400 cursor-pointer">Login</p>
        </Link>
        <Link href="/signup">
        <p className="mr-[20px]  hover:text-gray-400 cursor-pointer">Signup</p>
        </Link>
    </div>
    
  </div>)
};
