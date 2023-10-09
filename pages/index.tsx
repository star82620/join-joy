import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
