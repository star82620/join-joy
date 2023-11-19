import React from "react";
import { GameItemProps } from "./data";

export default function GameItem({
  game,
  isReadOnly,
  selectedGames,
  handleSelected,
}: GameItemProps) {
  const { gameId, gameType, gameName, peopleNum, version, qtu } = game;

  // 尋找符合的項目
  const selectedItem = selectedGames?.find((item) => {
    return item.gameId === gameId;
  });
  const isDefault = selectedItem !== undefined;

  return (
    <li>
      <label className="flex justify-between md:gap-3 py-2 bg-white text-center md:text-sm">
        {!isReadOnly && (
          <div className="w-[10%]">
            <input
              type="checkbox"
              className="checkboxIcon"
              value={gameId}
              data-gamename={gameName}
              checked={isDefault}
              onChange={handleSelected}
            />
          </div>
        )}
        <div className="w-[20%] min-w-[52px]">
          <span className="text-xs border-[0.5px] rounded p-1 whitespace-nowrap md:px-0.5 md:py-1">
            {gameType}
          </span>
        </div>
        <div className="w-[50%] min-w-[120px] text-left">{gameName}</div>
        {isReadOnly && (
          <>
            <div className="w-[30%] min-w-[84px] after:content-['人'] after:ml-1">
              {peopleNum}
            </div>
            <div className="w-[20%] min-w-[28px]">{version}</div>
          </>
        )}
        <div className="w-[20%] min-w-[28px]">{qtu}</div>
      </label>
    </li>
  );
}
