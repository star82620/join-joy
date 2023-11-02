import ModalWrapper from "@/common/components/ModalWrapper";
import ProfileImg from "@/common/components/ProfileImg";
import React from "react";

export default function UserCenter() {
  return (
    <section className="container flex items-start gap-9">
      <div className="w-[216px]">
        <ModalWrapper title="" layout="secondary">
          <section className="flex flex-col items-center">
            <div className="py-4">
              <ProfileImg
                src="/images/photo-user-000.png"
                alt="userName"
                widthStyle="w-16 md:w-10"
                heightStyle="h-16 md:h-16"
              />
              <p className="mt-3 text-center text-lg font-semibold">多多</p>
            </div>
            <nav className="px-1">
              <ul>
                <li className="p-3 flex gap-3">
                  <span></span>
                  <span>個人檔案</span>
                </li>
                <li>我的揪團</li>
                <ul>
                  <li>我開的揪團</li>
                  <li>我加入的揪團</li>
                </ul>
                <li>我的追蹤</li>
                <li>我的通知</li>
              </ul>
            </nav>
            <div>登出</div>
          </section>
        </ModalWrapper>
      </div>
      <div className="grow">
        <ModalWrapper title="我的個人檔案" layout="primary">
          content
        </ModalWrapper>
      </div>
    </section>
  );
}
