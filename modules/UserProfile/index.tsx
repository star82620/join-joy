import React from "react";
import Image from "next/image";
import Wrapper from "@/common/components/Wrapper";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";

export default function UserProfile() {
  return (
    <div className="flex md:flex-col justify-center items-start gap-9 container">
      <Wrapper title="關於我">
        <div className="flex flex-col items-center gap-6 w-[242px]">
          <div className="w-28 h-28 rounded-full border-2 border-white outline outline-2 outline-gray-950 relative">
            <Image
              src="/images/photo-user-000.png"
              alt="name"
              fill={true}
              className="object-contain rounded-full"
            />
          </div>
          <p>多多</p>
          <p>台北市</p>
          <Button
            type="button"
            appearance="orange"
            className="text-lg leading-[1.2]"
          >
            <span className="after:contents-[''] after:w-6 after:h-6 after:bg-follow-true">
              已追蹤
            </span>
          </Button>
          <div>perfer games</div>
          <div>
            <h5>簡介</h5>{" "}
            <p>
              嗨！大家好，我叫多多，歡迎找我揪團喔喔喔（旺旺）
              嗨！大家好，我叫多多，歡迎找我揪團喔喔喔（旺旺）
              嗨！大家好，我叫多多，歡迎找我揪團喔喔喔（旺旺）
              嗨！大家好，我叫多多，歡迎找我揪團喔喔喔（旺旺）
              嗨！大家好，我叫多多，歡迎找我揪團喔喔喔（旺旺）
              嗨！大家好，我叫多多，歡迎找我揪團喔喔喔（旺旺）
            </p>
          </div>
        </div>
      </Wrapper>
      <section className="flex flex-col w-full relative min-h-full">
        <div className="flex items-start absolute">
          {/* 只有第一個才有露出左邊圓角 */}
          <span
            className="pt-2 pb-[9.5px] px-6 rounded-t-md border-[3px] border-b-0 bg-yellow-dark text-lg font-semibold leading-1 z-10"
            data-active="groups"
          >
            <Image
              src="/images/icon-lists.svg"
              width="24"
              height="24"
              alt="list"
              className="inline align-middle"
            />
            <span className="ml-2 align-middle">揪團清單</span>
          </span>
          <span
            className="pt-2 pb-2 px-6 rounded-tr-md border-[3px] border-b-0 border-gray-400 border-l-0 -ml-3  text-lg font-semibold text-gray-600 bg-gray-200 leading-1"
            data-active="comments"
          >
            <Image
              src="/images/icon-comments.svg"
              width="24"
              height="24"
              alt="comments"
              className="inline align-middle"
            />
            <span className="ml-2 align-middle">綜合評價</span>
          </span>
        </div>
        <section className="p-6 bg-yellow-dark border-[3px] border-t-2 w-full mt-12">
          <div>
            <h3 className="text-lg font-semibold">正在開團中</h3>
            <div className="flex flex-col mt-4 gap-3">
              <section className="flex items-center p-4 border-2 shadow-btn rounded-[4px] bg-yellow-tint">
                <div className="text-lg font-bold">2023/10/2</div>
                <div className="border-l-2 border-gray-500 pl-4 ml-4 grow">
                  <p className="text-lg font-bold">輕鬆派對揪友團</p>
                  <p>
                    <Image
                      src="/images/icon-location-light.svg"
                      alt="location-light"
                      width="18"
                      height="18"
                      className="inline align-middle"
                    />
                    <span className="align-middle text-xs text-gray-400 ml-2">
                      六角學院桌遊店
                    </span>
                  </p>
                </div>
                <div className="font-semibold">目前人數： 6 /12</div>
              </section>
              <section className="flex items-center p-4 border-2 shadow-btn rounded-[4px] bg-yellow-tint">
                <div className="text-lg font-bold">2023/10/2</div>
                <div className="border-l-2 border-gray-500 pl-4 ml-4 grow">
                  <p className="text-lg font-bold">輕鬆派對揪友團</p>
                  <p>
                    <Image
                      src="/images/icon-location-light.svg"
                      alt="location-light"
                      width="18"
                      height="18"
                      className="inline align-middle"
                    />
                    <span className="align-middle text-xs text-gray-400 ml-2">
                      六角學院桌遊店
                    </span>
                  </p>
                </div>
                <div className="font-semibold">目前人數： 6 /12</div>
              </section>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold">過往揪團紀錄</h3>
            <section className=" mt-4">
              <h4 className="text-xl font-bold ml-2">2023</h4>
              <section className="flex items-center p-4 ">
                <div className="text-lg font-bold">10/2</div>
                <div className="border-l-2 border-gray-500 pl-4 ml-4 grow">
                  <p className="text-md font-semibold">輕鬆派對揪友團</p>
                  <p>
                    <Image
                      src="/images/icon-location-dark.svg"
                      alt="location-light"
                      width="20"
                      height="20"
                      className="inline align-middle"
                    />
                    <span className="align-middle text-sm text-gray-400 ml-2">
                      <Link href="/">六角學院桌遊店</Link>
                    </span>
                  </p>
                </div>
              </section>
              <section className="flex items-center p-4 ">
                <div className="text-lg font-bold">10/2</div>
                <div className="border-l-2 border-gray-500 pl-4 ml-4 grow">
                  <p className="text-md font-semibold">輕鬆派對揪友團</p>
                  <p>
                    <Image
                      src="/images/icon-location-dark.svg"
                      alt="location-light"
                      width="20"
                      height="20"
                      className="inline align-middle"
                    />
                    <span className="align-middle text-sm text-gray-400 ml-2">
                      <Link href="/">六角學院桌遊店</Link>
                    </span>
                  </p>
                </div>
              </section>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}
