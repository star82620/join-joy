import React from "react";
import { GameItemProps } from "./data";

export default function GameItem({ game, isReadOnly }: GameItemProps) {
  const { gameId, type, gameName, peopleNum, version, qtu } = game;
  return (
    <li className="flex justify-between md:gap-3 py-2 bg-white text-center md:text-sm">
      {!isReadOnly && (
        <div className="w-[10%]">
          <input type="checkbox" defaultChecked={true} onChange={() => {}} />
        </div>
      )}
      <div className="w-[20%] min-w-[52px]">
        <span className="text-xs border-[0.5px] rounded p-1 whitespace-nowrap md:px-0.5 md:py-1">
          {type}
        </span>
      </div>
      <div className="w-[50%] min-w-[120px] text-left">{gameName}</div>
      {isReadOnly && <div className="w-[30%] min-w-[84px]">{peopleNum}</div>}
      {isReadOnly && <div className="w-[20%] min-w-[28px]">{version}</div>}
      <div className="w-[20%] min-w-[28px]">{qtu}</div>
    </li>
  );
}
