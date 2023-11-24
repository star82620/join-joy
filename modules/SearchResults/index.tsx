import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import Button from "@/common/components/GeneralButton";
import Image from "@/common/components/FillImage";
import FilterBlock from "./FilterBlock";
import GroupCard from "@/common/components/searchResultCard/GroupCard";
import StoreCard from "@/common/components/searchResultCard/StoreCard";
import { SearchContext } from "@/common/contexts/SearchProvider";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { SearchResultsProps, groupFilterSet, storeFilterSet } from "./data";
import { groupSet, storeSet } from "@/constants/testData";

export default function SearchResults({
  defaultData,
  defaultCount,
}: SearchResultsProps) {
  const searchContext = useContext(SearchContext);
  const {
    searchKeys,
    setSearchKeys,
    activeTab,
    setActiveTab,
    searchResultsData,
    setSearchResultsData,
  } = searchContext;

  console.log("KKK", searchKeys);

  // 總比數
  const [totalCount, setTotalCount] = useState(defaultCount);

  // 將預設資料填入
  useEffect(() => {
    setSearchResultsData(defaultData);
  }, []);

  const isGroup = activeTab === "group";

  // 搜尋對象切換
  const filterSet = isGroup ? groupFilterSet : storeFilterSet;
  const titleText = isGroup
    ? "請選擇你有興趣的揪團加入！"
    : "請選擇你有興趣的店家查看！";

  const resultCountDate = !!searchKeys.startDate
    ? ` ${searchKeys.startDate}`
    : null;

  const resultCountLocation = !!searchKeys.cityId
    ? `在 ${searchKeys.cityId}`
    : null;

  const resultCountTab = isGroup ? "揪團" : "店家";

  const resultCountGroupKeyword = !!searchKeys.gameName
    ? searchKeys.gameName
    : "無";
  const resultCountStoreKeyword = !!searchKeys.storeName
    ? searchKeys.storeName
    : "無";
  const resultCountKeyword = isGroup
    ? resultCountGroupKeyword
    : resultCountStoreKeyword;

  // 如果是 isGroup => 關鍵字看 gameName
  // 如果是 isStore => 關鍵字看 storeName
  // 如果關鍵字沒東西就寫 無

  // 分頁設定
  const pageBtnStyle = "text-gray-950 font-semibold";
  const perPage = isGroup ? 16 : 9;
  const pageNum = Math.ceil(totalCount / perPage);

  const setTurnPage: MouseEventHandler<HTMLButtonElement> = (e) => {
    const pageNum = Number(e.currentTarget.value);
    setSearchKeys({ ...searchKeys, page: pageNum });
  };

  return (
    <div className="container">
      <div>
        <h2>{titleText}</h2>
        <p className="mt-3 md:mt-1">
          找到 {totalCount} 個符合 {resultCountDate}
          {resultCountLocation} 的 {resultCountTab}
          （關鍵字：{resultCountKeyword}）
        </p>
        <div className="flex flex-wrap gap-3 md:gap-1 mt-6 md:mt-2 flex-s">
          {filterSet.map((item) => {
            const { title, options } = item;
            return <FilterBlock key={title} title={title} options={options} />;
          })}
        </div>
      </div>
      <div className="mt-9 md:mt-4">
        {isGroup && (
          <div className="flex flex-wrap gap-x-4 gap-y-8 md:gap-3">
            {searchResultsData.map((item) => {
              const isGroupData = "groupId" in item;
              return (
                <div
                  key={isGroupData ? item.groupId : item.storeId}
                  className="w-full max-w-[280px] md:max-w-full"
                >
                  {isGroupData && <GroupCard data={item} />}
                  {!isGroupData && <StoreCard data={item} />}
                </div>
              );
            })}
          </div>
        )}

        {/* 分頁 */}
        <div className="flex gap-1 items-center w-fit m-auto mt-16 md:mt-8">
          {/* prev arrow */}
          <Button
            type="button"
            appearance="page-selector-arrow"
            rounded
            isDisabled
            className="!p-1"
          >
            <span className={pageBtnStyle}>
              <Image
                src={globalIcons["arrow-left"].src}
                alt={globalIcons["arrow-left"].alt}
                widthProp="w-6"
                heightProp="h-6"
              />
            </span>
          </Button>
          {[...Array(pageNum)].map((_, index) => {
            const num = (index + 1).toString();
            const isActivePage = searchKeys.page === index + 1;
            const btnAppearance = isActivePage ? "orange" : "white-gray";

            return (
              <Button
                type="button"
                appearance={btnAppearance}
                rounded
                className="!px-3 !py-1"
                value={num}
                onClick={setTurnPage}
              >
                <span className={pageBtnStyle}>{num}</span>
              </Button>
            );
          })}
          {/* back arrow */}
          <Button
            type="button"
            appearance="page-selector-arrow"
            rounded
            className="!p-1"
          >
            <span className={pageBtnStyle}>
              <Image
                src={globalIcons["arrow-right"].src}
                alt={globalIcons["arrow-right"].alt}
                widthProp="w-6"
                heightProp="h-6"
              />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
