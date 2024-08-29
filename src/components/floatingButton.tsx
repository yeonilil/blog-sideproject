import Image from "next/image";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-10 right-10">
      <Link href="/post">
        <Image
          src="/assets/ic-floating-button.svg"
          alt="플로팅 버튼"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
}
