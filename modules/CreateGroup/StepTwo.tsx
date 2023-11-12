import React, { useContext } from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import InputBlock from "./InputBlock";
import InputRadio from "./InputRadio";
import { StepContext } from "./index";
import { questionsWithRadio } from "./data";

export default function StepTwo() {
  const stepContext = useContext(StepContext);
  const [activeStep, setActiveStep] = stepContext;
  const handleBtnTwo = () => {
    // 把資料丟進 value useState 裡
    setActiveStep(3);
  };
  const backPrev = () => {
    // 把資料丟進 value useState 裡
    setActiveStep(1);
  };
  return (
    <>
      <section className="flex flex-col w-full gap-10">
        <label>
          <InputBlock
            title="預計要玩的遊戲"
            titleStyle="block"
            description="最多5款，僅通知店家，實際以現場狀況為主"
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
          </InputBlock>
        </label>
        <label>
          <InputBlock title="遊戲整體面向">
            <select className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm">
              <option>請選擇遊戲標籤</option>
            </select>
          </InputBlock>
        </label>
        <label>
          <section className="w-full">
            <div className="flex justify-between items-end ">
              <h3 className="text-lg font-semibold md:text-md">備註</h3>
              <span className="text-sm md:text-xs">0/100</span>
            </div>
            <input
              type="textarea"
              placeholder="如果需要特別標註的部分，請再寫下並讓團員知道！"
              className="w-full h-20 border-b-2 bg-yellow-tint mt-2 md:mt-1 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            />
          </section>
        </label>
        {questionsWithRadio.map((question, index) => {
          const onChange = () => {};
          return (
            <InputRadio
              title={question.title}
              description={question.description}
              options={question.options}
              key={index}
              onChange={onChange}
            />
          );
        })}

        <div className="mt-6 flex flex-col justify-center items-center gap-4">
          <Button
            type="submit"
            appearance="orange"
            onClick={handleBtnTwo}
            className="px-[158px] md:py-2 md:px-3 md:w-full"
          >
            完成開團
          </Button>

          <p className="underline" onClick={backPrev}>
            上一頁
          </p>
          <Link href="/">返回首頁</Link>
        </div>
      </section>
    </>
  );
}
