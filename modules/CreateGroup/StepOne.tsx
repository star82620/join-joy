import React from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import FormBlock from "./FormBlock";

const handleBtnOne = () => {
  // 把資料丟進 value useState 裡
};

export default function StepOne() {
  return (
    <>
      <section className="flex flex-col w-full gap-10 border-b">
        <label>
          <FormBlock title={"揪團主旨"} require={true}>
            <input type="text" placeholder="請幫你的揪團取一個酷酷的名字！" />
          </FormBlock>
        </label>

        <FormBlock title="地點" require={true}>
          {/* 用於辨識是否要選擇店家、 */}
          <div className="mt-1">
            <label>
              <input type="radio" id="" name="groupType" />
              <span className="ml-2">店家</span>
            </label>
            <label className="ml-4">
              <input type="radio" name="groupType" />
              <span className="ml-2">自行輸入</span>
            </label>
          </div>
          {/* 兩個並排下拉式選單 */}
          <select>
            <option value="">請選擇城市/地區</option>
          </select>
          {/* 店家的選項必須先選城市才會出現 */}
          <select>
            <option value="">請選擇店家</option>
          </select>
        </FormBlock>

        {/* 可怕的行事曆來了 */}
        <label>
          <FormBlock title="日期" require={true}>
            <input placeholder="請選擇日期" />
          </FormBlock>
        </label>

        <FormBlock title="遊戲時段" require={true}>
          {/* 下拉式選單？？：time */}
          <label>
            開始時間
            <input placeholder="請選擇開始時間" />
          </label>
          <label>
            結束時間
            <input placeholder="請選擇結束時間" />
          </label>
          {/* 店家才有這條錢錢 */}
          <p>預計 - 小時（總共 NT$ - /人）</p>
        </FormBlock>

        {/* 下拉式選單：totalNum */}
        <label>
          <FormBlock title="預計揪團人數" require={true}>
            <select>
              <option value="">請選擇人數</option>
            </select>
          </FormBlock>
        </label>

        {/* 下拉式選單： */}
        <label>
          <FormBlock
            title="內建人數"
            desc="（包含自己）"
            descPosition="row"
            require={true}
          >
            <input type="number" placeholder="請幫你的揪團取一個酷酷的名字！" />
          </FormBlock>
        </label>
        <div className="mt-6 flex flex-col justify-center items-center gap-4">
          <Button
            type="button"
            appearance="orange"
            onClick={handleBtnOne}
            className="px-[158px]"
          >
            下一步
          </Button>

          <Link href="/">返回首頁</Link>
        </div>
      </section>
    </>
  );
}
