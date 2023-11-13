import React, { useEffect, useState } from "react";
import { SelectedGamesType, GameListProps } from "./data";
import GameItem from "./GameItem";

export default function GameList({
  category,
  gamesData,
  selectedGames,
  setSelectedGames,
}: GameListProps) {
  const isReadOnly = category === "view";
  const [renderData, setRenderData] = useState(gamesData);
  const [selectType, setSelectType] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const isEmptyResult = renderData.length === 0;

  useEffect(() => {
    setRenderData(gamesData);
  }, [gamesData]);

  // 得到 selectItems 類別篩選內容
  let selectItems: Array<string> = [];
  gamesData.forEach((game) => {
    const isInclude = selectItems.includes(game.gametype);
    if (isInclude) return;
    selectItems.push(game.gametype);
  });

  const handleSelectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectType(e.target.value);
  };

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gameId = Number(e.target.value);
    const gameName = e.target.dataset.gamename;
    console.log("gameNNName", gameName);
    if (!setSelectedGames || !selectedGames) return;
    if (e.target.checked && gameName) {
      setSelectedGames([
        ...selectedGames,
        { gameId: gameId, gameName: gameName },
      ]);
    } else {
      const index = selectedGames.findIndex((game) => game.gameId === gameId);
      const newData = [...selectedGames];
      newData.splice(index, 1);
      setSelectedGames(newData);
    }
  };

  useEffect(() => {
    const selectedData = gamesData.filter((game) => {
      // 類型篩選
      const typeFilter = selectType === "all" || game.gametype === selectType;
      // 關鍵字篩選
      const searchFilter = game.gameName.includes(searchValue);

      return typeFilter && searchFilter;
    });
    setRenderData(selectedData);
  }, [selectType, searchValue]);

  // ---------

  return (
    <section className="flex flex-col justify-center items-center">
      <div
        className={`flex justify-between w-full pb-6 md:px-0  ${
          isReadOnly ? "px-14 pb-8 md:pb-6" : " bg-yellow-tint px-6 pb-2"
        }`}
      >
        <label className="flex items-center gap-2">
          <span className="md:hidden text-lg font-semibold">類別：</span>
          <select className="px-3 py-2" onChange={handleSelectType}>
            <option value="all">全部</option>
            {selectItems.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <form className="flex items-center gap-4 ml-6 grow md:ml-3">
          <label className="grow flex items-center gap-2">
            <span className="md:hidden text-lg font-semibold">關鍵字：</span>
            <input
              className="px-3 py-2 grow"
              placeholder="輸入你想找的遊戲"
              value={searchValue}
              onChange={handleSearchValue}
            />
          </label>
        </form>
      </div>
      <div className="w-full overflow-scroll">
        <div className="w-full bg-yellow-tint md:bg-transparent px-6 py-4 md:pt-0 md:px-1  md:min-w-[420px]">
          <div className="flex justify-between md:gap-3 pb-4 md:pb-2 md:text-sm font-semibold leading-[1.2] text-center border-b-2 border-gray-400 ">
            {!isReadOnly && <div className="w-[10%]"></div>}
            <div className="w-[20%] min-w-[52px]">類別</div>
            <div className="w-[50%] min-w-[120px] text-left">名稱</div>
            {isReadOnly && (
              <div className="w-[30%] min-w-[84px] whitespace-nowrap">
                建議遊玩人數
              </div>
            )}
            {isReadOnly && <div className="w-[20%] min-w-[28px]">版本</div>}
            <div className="w-[20%] min-w-[28px]">數量</div>
          </div>
          <ul className="mt-4 md:mt-2 h-60 overflow-scroll">
            {renderData.map((game) => (
              <GameItem
                key={game.gameId}
                game={game}
                isReadOnly={isReadOnly}
                handleSelected={handleSelected}
              />
            ))}
            {isEmptyResult && <li className="text-center">沒有符合的項目</li>}
          </ul>
        </div>
      </div>
    </section>
  );
}
