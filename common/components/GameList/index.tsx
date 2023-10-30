import TagBlock from "@/modules/UserProfile/TagBlock";
import React from "react";
import { games } from "./data";
import Button from "../GeneralButton";

export default function GameList() {
  const isChecked = false;
  return (
    <section className="flex flex-col justify-center items-center border">
      <div
        className={`flex justify-between w-full pb-6 md:px-0  ${
          isChecked ? " bg-yellow-tint px-6 pb-2" : "px-14 pb-8 md:pb-6"
        }`}
      >
        <label className="flex items-center gap-2">
          <span className="md:hidden text-lg font-semibold">類別：</span>
          <select className="px-3 py-2">
            <option value="all">全部</option>
          </select>
        </label>
        <form className="flex items-center gap-4 ml-6 grow md:ml-3">
          <label className="grow flex items-center gap-2">
            <span className="md:hidden text-lg font-semibold">關鍵字：</span>
            <input className="px-3 py-2 grow" placeholder="輸入你想找的遊戲" />
          </label>
          <button
            type="submit"
            className="md:hidden px-4 py-2 rounded bg-gray-950 text-white text-sm"
          >
            搜尋
          </button>
        </form>
      </div>
      <div className={`w-full overflow-scroll ${isChecked ? "" : ""}`}>
        <div className="w-full bg-yellow-tint md:bg-transparent px-6 py-4 md:pt-0 md:px-1  md:min-w-[420px]">
          <div className="flex justify-between md:gap-3 md:text-sm font-semibold leading-[1.2] text-center">
            {isChecked && <div className="w-[10%]"></div>}
            <div className="w-[20%] min-w-[52px]">類別</div>
            <div className="w-[50%] min-w-[120px] text-left">名稱</div>
            {!isChecked && (
              <div className="w-[30%] min-w-[84px] whitespace-nowrap">
                建議遊玩人數
              </div>
            )}
            {!isChecked && <div className="w-[20%] min-w-[28px]">版本</div>}
            <div className="w-[20%] min-w-[28px]">數量</div>
          </div>
          <ul className="border-t-2 border-gray-400 mt-4 pt-4 md:mt-2 md:pt-2">
            {games.map((game) => {
              const { gameId, type, gameName, peopleNum, version, qtu } = game;
              return (
                <>
                  <li className="flex justify-between md:gap-3 py-2 bg-white text-center md:text-sm">
                    {isChecked && (
                      <div className="w-[10%]">
                        <input
                          type="checkbox"
                          defaultChecked={true}
                          onChange={() => {}}
                        />
                      </div>
                    )}
                    <div className="w-[20%] min-w-[52px]">
                      <span className="text-xs border-[0.5px] rounded p-1 whitespace-nowrap md:px-0.5 md:py-1">
                        {type}
                      </span>
                    </div>
                    <div className="w-[50%] min-w-[120px] text-left">
                      {gameName}
                    </div>
                    {!isChecked && (
                      <div className="w-[30%] min-w-[84px]">{peopleNum}</div>
                    )}
                    {!isChecked && (
                      <div className="w-[20%] min-w-[28px]">{version}</div>
                    )}
                    <div className="w-[20%] min-w-[28px]">{qtu}</div>
                  </li>
                  <hr className="border-t-2 border-gray-100 my-0.5" />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
