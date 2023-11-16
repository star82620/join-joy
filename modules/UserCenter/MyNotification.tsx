import GameList from "@/common/components/GameList";
import React, { useState } from "react";
import { data, SelectedGamesType } from "@/common/components/GameList/data";

export default function MyNotification() {
  const [selectedGames, setSelectedGames] = useState<SelectedGamesType>([]);

  return (
    <div className="p-10">
      MyNotification
      <GameList
        category="view"
        gamesData={data}
        selectedGames={selectedGames}
        setSelectedGames={setSelectedGames}
      />
    </div>
  );
}
