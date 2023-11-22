import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "../GeneralLink";
import { AuthContext } from "@/common/contexts/AuthProvider";
import useLogout from "@/common/hooks/useLogout";
import { useRouter } from "next/router";
import { AuthContextType } from "@/constants/globalTypes";
import deleteCookie from "@/common/helpers/deleteCookie";

type dataType = {
  href: string;
  img: Record<string, string>;
  content: string;
};
type dataSetType = dataType[];
type NavbarItemProps = {
  data: dataType;
  toggleNavBar: boolean;
  setToggleNavBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const dataSet: dataSetType = [
  {
    href: "/user-center",
    img: {
      src: "/images/icon-header-user",
      alt: "usercenter",
    },
    content: "我的個人資訊",
  },
  // { href: "", img:{src: "", alt: ""}, content: "" },
];

// function NavbarItem({ data }: NavbarItemProps) {
//   const { href, img, content } = data;

//   return (
//     <Link href={href} className="flex justify-center items-center p-3">
//       <span>{content}</span>
//     </Link>
//   );
// }

export default function Navbar() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const { authData, setAuthData } = authContext;
  console.log("aa", authContext);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (authData?.userId) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [authData]);

  const PushToMyUserProfile = () => {
    router.push("/user-center");
  };

  return (
    <ul className="flex flex-col items-center absolute top-[72px] right-0 border bg-yellow-tint w-[180px]">
      <li className="w-full p-3">嗨！{authData?.nickName}</li>

      <li
        className="w-full p-3 border-t border-b cursor-pointer"
        onClick={PushToMyUserProfile}
      >
        個人檔案
      </li>

      <li
        className="w-full p-3 border-t border-b cursor-pointer"
        onClick={() => deleteCookie("authToken")}
      >
        登出
      </li>
      {!isLogin && (
        <li
          className="w-full p-3 border-t border-b cursor-pointer"
          onClick={() => {
            router.push("/login");
          }}
        >
          登入
        </li>
      )}
    </ul>
  );
}
