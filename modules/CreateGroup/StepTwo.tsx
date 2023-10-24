import React from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import FormBlock from "./FormBlock";

const handleBtnTwo = () => {
  // 把資料丟進 value useState 裡
};

export default function StepTwo() {
  return (
    <>
      <section className="flex flex-col w-full gap-10 border-b">
        <label>
          <FormBlock
            title="預計要玩的遊戲"
            titleStyle="block"
            desc="最多5款，僅通知店家，實際以現場狀況為主"
          >
            <input
              type="text"
              placeholder="請在下列表單選擇預計要玩的遊戲"
              readOnly
              className="w-full py-2 px-3 bg-yellow-tint"
            />
            <section className="px-6 py-4 mt-3 bg-yellow-tint">
              {/* 可怕的選擇遊戲 */}
              <div>
                <label>
                  <span>類別</span>
                  <select className="px-3 py-2 ml-2">
                    <option value="all">全部</option>
                  </select>
                </label>
                <label className="ml-6">
                  關鍵字
                  <input
                    className="px-3 py-2 ml-2"
                    placeholder="輸入你想找的遊戲"
                  />
                </label>
                <button
                  type="button"
                  className="bg-gray-950 text-white py-2 px-4 rounded hover:bg-gray-800 ml-4"
                >
                  搜尋
                </button>
              </div>

              <div>
                <div className="flex justify-around pt-6 pb-3 pl-4 pr-10 border-b-2 mb-3 border-gray-400">
                  <div className="w-[10%]"></div>
                  <div className="w-[20%]">類別</div>
                  <div className="w-[50%]">名稱</div>
                  <div className="w-[20%]">數量</div>
                </div>
                <label className="flex justify-around py-2 pl-4 pr-10 bg-white ">
                  <div className="w-[10%]">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="w-[20%]">
                    <span className="text-xs border-[0.5px] rounded p-1">
                      派對遊戲
                    </span>
                  </div>
                  <div className="w-[50%]">矮人礦坑</div>
                  <div className="w-[20%]">1</div>
                </label>
                <hr className="border-t-2 border-gray-100 my-0.5" />
                <label className="flex justify-around py-2 pl-4 pr-10 bg-white ">
                  <div className="w-[10%]">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="w-[20%]">
                    <span className="text-xs border-[0.5px] rounded p-1">
                      派對遊戲
                    </span>
                  </div>
                  <div className="w-[50%]">矮人礦坑</div>
                  <div className="w-[20%]">1</div>
                </label>
                <hr className="border-t-2 border-gray-100 my-0.5" />
              </div>
            </section>
          </FormBlock>
        </label>
        <label>
          <FormBlock title="遊戲整體面向">
            <select>
              <option>請選擇遊戲標籤</option>
            </select>
          </FormBlock>
        </label>
        <label>
          <FormBlock title="遊戲整體面向">
            <span>0/100</span>
            <input
              type="text"
              placeholder="如果需要特別標註的部分，請再寫下並讓團員知道！"
            />
          </FormBlock>
        </label>
        <section className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              本次開團是否設為『非公開』揪團？
            </h3>
            <p className="text-gray-500 text-sm font-semibold mt-1">
              僅接受獲得連結的團員加入，不會在平台被找到
            </p>
          </div>
          <div className="flex items-center gap-4 text-md font-semibold">
            <label>
              <input type="radio" className="mr-2" />
              公開
            </label>
            <label>
              <input type="radio" className="mr-2" />
              非公開
            </label>
          </div>
        </section>
        <section className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">成團後是否接受團員進出？</h3>
            <p className="text-gray-500 text-sm font-semibold mt-1">
              送出預約後系統會自動鎖定揪團，直到結團前皆可再編輯
            </p>
          </div>
          <div className="flex items-center gap-4 text-md font-semibold">
            <label>
              <input type="radio" className="mr-2" />
              接受
            </label>
            <label>
              <input type="radio" className="mr-2" />
              不接受
            </label>
          </div>
        </section>

        <div className="mt-6 flex flex-col justify-center items-center gap-4">
          <Button
            type="submit"
            appearance="orange"
            onClick={handleBtnTwo}
            className="px-[158px]"
          >
            完成開團
          </Button>

          <Link href="/">上一頁</Link>
          <Link href="/">返回首頁</Link>
        </div>
      </section>
    </>
  );
}
