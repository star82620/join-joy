import React, { Children } from "react";
import fetchApi from "@/common/helpers/fetchApi";
import Image from "@/common/components/FillImage";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";

export default function ProfileSetting() {
  const inputTitleStyle = "text-lg md:text-md mb-2 md:mb-1";
  const inputDescStyle = "text-sm md:text-xs text-gray-500";

  return (
    <section className="p-8 md:px-4">
      <form className="flex flex-col gap-10">
        <div className="flex md:flex-col justify-between gap-6">
          <div className="w-full flex flex-col gap-10 md:gap-6 md:order-2">
            <div>
              <h3 className={`${inputTitleStyle} mb-2 md:mb-1`}>你的名字</h3>
              <input type="text" className="inputStyle" />
            </div>
            <div>
              <h3 className={`${inputTitleStyle} mb-2 md:mb-1`}>帳號</h3>
              <input type="email" readOnly />
            </div>
            <div>
              <h3 className={`${inputTitleStyle} mb-4`}>密碼</h3>
              <Link href="/" className="no-underline">
                <span className="text-blue-dark md:text-sm">重設新的密碼</span>
              </Link>
            </div>
            <div>
              <h3 className={`${inputTitleStyle} mb-2 md:mb-1`}>地區</h3>
              <p className={`${inputDescStyle} mb-2`}>最多選擇 3 個</p>
              <select>
                <option>city</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-6 bg-yellow-tint px-20 py-4 md:px-0 md:py-3 md:order-1">
            <div>
              <h3 className="text-lg md:text-md">大頭貼</h3>
              <p className="text-sm md:text-xs text-gray-500 mt-1">
                圖片需小於 2MB
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                src=""
                alt="userName"
                widthProp="w-[145px] md:w-[108px]"
                heightProp="h-[145px] md:h-[108px]"
              />
              <Button type="submit" appearance="white" rounded>
                <span className="font-semibold text-sm md:text-xs ">
                  變更大頭貼
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:gap-6">
          <div>
            <h3 className={`${inputTitleStyle} mb-2 md:mb-1`}>喜好遊戲種類</h3>
            <p className={`${inputDescStyle} mb-4 md:mb-2`}>最多選擇3個</p>
            <div>一顆一顆</div>
          </div>
          <div>
            <h3 className={`${inputTitleStyle} mb-2 md:mb-1`}>個人簡介</h3>
            <p className={`flex justify-between mb-2`}>
              <span className={inputDescStyle}>讓更多人認識你唷</span>
              <span className="text-sm md:text-xs font-bold">0/100</span>
            </p>
            <textarea placeholder="輸入你的自我介紹"></textarea>
          </div>
        </div>
      </form>
      <div className="flex gap-6 md:gap-4 justify-center items-center mt-10 md:mt-8">
        <Button type="submit" appearance="white" className="w-full" rounded>
          <span className="text-xl md:text-md">放棄變更</span>
        </Button>
        <Button type="submit" appearance="black" className="w-full" rounded>
          <span className="text-xl md:text-md">儲存</span>
        </Button>
      </div>
    </section>
  );
}
