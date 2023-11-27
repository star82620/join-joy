import React, { useContext } from "react";
import { FilterSetItemType } from "./data";
import { SearchContext } from "@/common/contexts/SearchProvider";
import { SearchKeysType } from "@/constants/globalTypes";

export default function FilterBlock({
  title,
  options,
  inputName,
}: FilterSetItemType) {
  const searchContext = useContext(SearchContext);
  const { searchKeys, setSearchKeys } = searchContext;

  const handleSelectFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    type KeyOfSearchKeysType = keyof SearchKeysType;
    // const inputName = e.target.name;
    const inputName: KeyOfSearchKeysType = e.target.name as KeyOfSearchKeysType;

    if (
      [
        "page",
        "pageSize",
        "groupFilter",
        "groupTag",
        "groupppl",
        "joinppl",
        "storeFilter",
        "storeTag",
      ].includes(inputName)
    ) {
      const value = Number(e.target.value);

      setSearchKeys({
        ...searchKeys,
        [inputName]: value,
      });
    }
  };

  const textNum = title.length;

  const spaces: Record<number, string> = {
    2: "pl-11",
    3: "pl-14.5",
    4: "pl-18",
    5: "pl-22.5",
  };

  const spaceStyle = spaces[textNum];

  return (
    <>
      <label className="relative flex items-center flex-shrink-0 whitespace-nowrap text-sm">
        <select
          className={`min-h-9 rounded-sm bg-yellow-tint border-2 border-gray-500 text-gray-600 pr-3 py-1.5 ${spaceStyle}`}
          name={inputName}
          value={searchKeys[inputName]}
          onChange={handleSelectFilter}
        >
          {options.map((option) => {
            const { value, text, checked } = option;
            return (
              <option key={value} value={value}>
                {text}
              </option>
            );
          })}
        </select>
        <p className="absolute top-[7px] left-3 font-semibold">{title}</p>
      </label>
    </>
  );
}
