import React from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";

const handleBtnOne = () => {
  // 把資料丟進 value useState 裡
};

export default function StepTwo() {
  return (
    <>
      <section className="flex flex-col w-full gap-10 border-b">
        <label>
          <p>預計要玩的遊戲</p>
          <p>最多5款，僅通知店家，實際以現場狀況為主</p>
          <input type="text" placeholder="請在下列表單選擇預計要玩的遊戲" />
          <section>
            {/* 可怕的選擇遊戲 */}
            <div>
              <label>
                類別
                <select>
                  <option value="all">全部</option>
                </select>
              </label>
              <label>
                關鍵字
                <input placeholder="輸入你想找的遊戲" />
              </label>
              <Button type="button" appearance="black" className="px-[158px]">
                搜尋
              </Button>
            </div>
            <div>
              <div>
                <div className="w-1/5"></div>
                <div className="w-1/5">類別</div>
                <div className="w-1/5">名稱</div>
                <div className="w-1/5">數量</div>
              </div>
            </div>
          </section>
        </label>

        <section>
          <label htmlFor="place">地點</label>
          {/* 用於辨識是否要選擇店家、 */}
          <label>
            <input type="radio" id="" name="groupType" checked />
            <span className="ml-2">店家</span>
          </label>
          <label className="ml-4">
            <input type="radio" name="groupType" />
            <span className="ml-2">自行輸入</span>
          </label>
          {/* 兩個並排下拉式選單 */}
          <select>
            <option value="">請選擇城市/地區</option>
          </select>
          {/* 店家的選項必須先選城市才會出現 */}
          <select>
            <option value="">請選擇店家</option>
          </select>
        </section>

        {/* 可怕的行事曆來了 */}
        <label>
          日期
          <input placeholder="請選擇日期" />
        </label>

        {/* 下拉式選單？？：time */}
        <section>
          遊戲時段
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
        </section>

        {/* 下拉式選單：totalNum */}
        <label>
          預計揪團人數
          <select>
            <option value="">請選擇人數</option>
          </select>
        </label>

        {/* 下拉式選單： */}
        <label>
          內建人數
          <span>（包含自己）</span>
          <input type="number" placeholder="請幫你的揪團取一個酷酷的名字！" />
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
