import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import CommentsSection from "@/common/components/CommentsSection";
import { commentsData } from "@/common/components/CommentsSection/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>index</div>
      <ul>
        <li>
          <Link href="/create-group">我要開團</Link>
        </li>
        <li>
          <Link href="/login">登入</Link>
        </li>
        <li>
          <Link href="/signup">註冊</Link>
        </li>
        <li>
          <Link href="/user-center">我的個人資訊</Link>
        </li>
        <li>
          <Link href="/create-group">我要開團</Link>
        </li>
      </ul>
      <div className=" max-w-[826px]">
        <CommentsSection data={commentsData} />
      </div>
    </>
  );
}
