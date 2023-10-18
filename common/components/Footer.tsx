import React from "react";
import useSimpleFooter from "../helpers/useSimpleFooter";

const copyright: string =
  "Copyright © 2023 遊人揪揪工作室 All rights reserved.";

// 這些是測試，到時候應該要另外拉出來做

export default function Footer() {
  const isSimple = useSimpleFooter();

  return (
    <footer className="flex justify-center items-center flex-wrap py-3 bg-gray-700 text-gray-50 text-sm md:text-xs">
      {!isSimple && (
        <div className="container flex justify-betweens">
          <div>
            <div>Logo</div>
            <p>Joining Together, Joy Forever!</p>
          </div>
          <div className="flex gap-12">
            <section>
              <h6 className="font-semibold">關於我們</h6>
              <ul className="border-l border-stone-800 pl-2 mt-2 flex gap-3 flex-col">
                <li>
                  <a>服務條款</a>
                </li>
                <li>
                  <a>隱私權政策</a>
                </li>
                <li>
                  <a href="#">客服中心</a>
                </li>
              </ul>
            </section>
            <section>
              <h6>揪團須知</h6>
              <ul>
                <li>常見問題</li>
                <li>停權機制</li>
              </ul>
            </section>
          </div>
        </div>
      )}
      <p className="text-center w-full">{copyright}</p>
    </footer>
  );
}
