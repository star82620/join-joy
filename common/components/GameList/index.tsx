import React, { useEffect, useMemo, useState } from "react";
import { SelectedGamesType, GameListProps } from "./data";
import GameItem from "./GameItem";

export default function GameList({
  category,
  gamesData,
  selectedGames,
  setSelectedGames,
}: GameListProps) {
  const isReadOnly = category === "view";

  const data = useMemo(() => {
    return gamesData ? gamesData : [];
  }, [gamesData]);

  const [renderData, setRenderData] = useState(data);
  const [selectType, setSelectType] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [isFull, setIsFull] = useState(false);

  const isEmptyResult = renderData.length === 0;

  useEffect(() => {
    setRenderData(data);
  }, [data]);

  // 得到 selectItems 類別篩選內容
  let selectItems: Array<string> = [];
  data.forEach((game) => {
    const isInclude = selectItems.includes(game.gameType);
    if (isInclude) return;
    selectItems.push(game.gameType);
  });

  // 類別篩選
  const handleSelectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectType(e.target.value);
  };

  // 關鍵字搜尋
  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 選擇
  const handleSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedGameId = parseInt(e.target.value);
    const gameName = e.target.dataset.gamename;
    const isSelected = e.target.checked;

    if (!setSelectedGames || !selectedGames) return;

    if (isSelected && selectedGames.length === 5) {
      e.preventDefault();
      setIsFull(true);
      return;
    } else {
      setIsFull(false);
    }

    if (isSelected) {
      if (!gameName) return;
      setSelectedGames([
        ...selectedGames,
        { gameId: selectedGameId, gameName: gameName },
      ]);
    } else {
      const updatedSelectedGames = selectedGames.filter(
        (item) => item.gameId !== selectedGameId
      );
      setSelectedGames(updatedSelectedGames);
    }
  };

  useEffect(() => {
    const selectedData = data.filter((game) => {
      // 類型篩選
      const typeFilter = selectType === "all" || game.gameType === selectType;
      // 關鍵字篩選
      const searchFilter = game.gameName.includes(searchValue);

      return typeFilter && searchFilter;
    });
    setRenderData(selectedData);
  }, [selectType, searchValue]);

  const isEmptyGames = selectedGames?.length === 0;

  const headStyle = isReadOnly
    ? "px-14 pb-8 md:pb-6"
    : "bg-yellow-tint md:bg-transparent px-6 pt-4 md:pt-0 md:mb-3";

  // ---------

  return (
    <section className="flex flex-col justify-center items-center">
      {!isReadOnly && (
        <div className="inputStyle h-12 flex gap-2 items-center text-gray-400 mb-3">
          {selectedGames?.map((game) => {
            const { gameId, gameName } = game;
            return (
              <div
                key={gameId}
                className="px-2 py-1 rounded-sm border border-gray-800 text-gray-950 font-medium"
              >
                {gameName}
              </div>
            );
          })}
          {isFull && <span className="text-danger">最多選擇五款 (=´ω`=)</span>}
          {isEmptyGames && <p>請在下列表單選擇預計要玩的遊戲</p>}
        </div>
      )}

      <div className={`flex justify-between w-full md:px-0 ${headStyle}`}>
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
                selectedGames={selectedGames}
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
