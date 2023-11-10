import React, { useContext } from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import InputBlock from "./InputBlock";
import { ActiveContext } from "./index";

export default function StepOne() {
  const contextValue = useContext(ActiveContext);
  const [activePage, setActivePage] = contextValue;

  const handleBtnOne = () => {
    // 把資料丟進 value useState 裡
    setActivePage(2);
  };
  return (
    <>
      <section className="flex flex-col w-full gap-10">
        <label>
          <InputBlock title={"揪團主旨"} require={true}>
            <input
              type="text"
              placeholder="請幫你的揪團取一個酷酷的名字！"
              className="inputStyle"
            />
          </InputBlock>
        </label>

        <InputBlock title="地點" require={true}>
          {/* 用於辨識是否要選擇店家、 */}
          <div className="mt-1">
            <label>
              <input type="radio" id="" name="groupType" className="" />
              <span className="ml-2">店家</span>
            </label>
            <label className="ml-4">
              <input type="radio" name="groupType" className="" />
              <span className="ml-2">自行輸入</span>
            </label>
          </div>
          {/* 兩個並排下拉式選單 */}
          <div className="flex gap-3 md:flex-col">
            <select className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm">
              <option value="">請選擇城市/地區</option>
            </select>
            {/* 店家的選項必須先選城市才會出現 */}
            <select className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm">
              <option value="">請選擇店家</option>
            </select>
          </div>
        </InputBlock>

        {/* 可怕的行事曆來了 */}
        <label>
          <InputBlock title="日期" require={true}>
            <input
              placeholder="請選擇日期"
              className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            />
          </InputBlock>
        </label>

        <InputBlock title="遊戲時段" require={true}>
          {/* 下拉式選單？？：time */}
          <label>
            開始時間
            <input
              placeholder="請選擇開始時間"
              className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            />
          </label>
          <label>
            結束時間
            <input
              placeholder="請選擇結束時間"
              className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            />
          </label>
          {/* 店家才有這條錢錢 */}
          <p>預計 - 小時（總共 NT$ - /人）</p>
        </InputBlock>

        {/* 下拉式選單：totalNum */}
        <label>
          <InputBlock title="預計揪團人數" require={true}>
            <select className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm">
              <option value="">請選擇人數</option>
            </select>
          </InputBlock>
        </label>

        {/* 下拉式選單： */}
        <label>
          <InputBlock
            title="內建人數"
            description="（包含自己）"
            direction="row"
            require={true}
          >
            <input
              type="number"
              placeholder="請幫你的揪團取一個酷酷的名字！"
              className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            />
          </InputBlock>
        </label>
        <div className="mt-6 flex flex-col justify-center items-center gap-4">
          <Button
            type="button"
            appearance="orange"
            onClick={handleBtnOne}
            className="px-[158px] md:py-2 md:px-3 md:w-full text-xl md:text-md"
          >
            下一步
          </Button>

          <Link href="/">返回首頁</Link>
        </div>
      </section>
    </>
  );
}
