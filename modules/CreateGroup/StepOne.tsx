import React from "react";
import Button from "@/common/components/GeneralButton";

const handleBtnOne = () => {
  // 把資料丟進 value useState 裡
};

export default function StepOne() {
  return (
    <section className="flex flex-col w-full">
      <label>
        揪團主旨
        <input placeholder="請幫你的揪團取一個酷酷的名字！" />
      </label>

      <label id="">地點</label>
      <label>
        <input type="radio" id="" name="groupType" checked />
        店家
      </label>

      <label>
        <input type="radio" id="" name="groupType" />
        自行輸入
      </label>

      <input placeholder="請幫你的揪團取一個酷酷的名字！" />

      <label>
        揪團主旨
        <input placeholder="請幫你的揪團取一個酷酷的名字！" />
      </label>
      <Button type="button" appearance="orange" onClick={handleBtnOne}>
        下一步
      </Button>
    </section>
  );
}
