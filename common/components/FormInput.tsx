//import clsx
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// 如果 errorMsg 有內容，就 show errorMsg，沒有的話就隱藏
// 如果 type === password，就 show 眼睛圖
// 點擊 eye image 改變該 input type => useState + useRef

export default function FormInput({ formSet }) {
  // const [visibility, setVisibility] = useState({
  //   pw: "off",
  //   "confirm-pw": "off",
  // });

  // const ref = useRef();

  // function switchVisibility() {
  //   // 要抓到是誰
  //   setVisibility([]."on");
  // }

  // if (input.type === "password") {
  //   input.type = visibility === "on" ? "text" : "password";
  // }

  return formSet.map((input) => (
    <label key={input.inputName}>
      <h4>{input.label}</h4>
      <div className="flex items-center">
        <input
          className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 relative"
          type={input.type}
          name={input.inputName}
          placeholder={input.placeholder}
          required={input.required}
        ></input>
        <span
          className="inline-block w-11 h-7 -ml-11 mt-2 z-10 bg-eye-off bg-center bg-no-repeat bg-yellow-tint"
          onClick={() => {
            console.log("按了要改變 state");
          }}
        ></span>
      </div>

      <p className="hidden text-danger mt-2">{input.errorMsg}</p>
    </label>
  ));
}
