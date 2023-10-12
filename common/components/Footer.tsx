import React from "react";

interface Props {
  // type: string;
}

const copyrightContent: string =
  "Copyright © 2023 遊人揪揪工作室 All rights reserved.";

export default function Footer({}: Props) {
  //簡易版 <div className="text-center w-full">{copyrightContent}</div>
  return (
    <footer className="flex justify-center items-center py-3 bg-slate-400">
      <div className="container flex justify-between flex-wrap">
        <div>
          <div>Logo</div>
          <div>Joining Together, Joy Forever!</div>
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

        <div className="text-center w-full">{copyrightContent}</div>
      </div>
    </footer>
  );
}
