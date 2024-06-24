import React, {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import { useRouter } from "next/router";
import { SearchContext } from "@/common/contexts/SearchProvider";

export default function useSearch() {
  const router = useRouter();

  const searchContext = useContext(SearchContext);
  const { searchKeys, setSearchKeys, activeTab, setActiveTab } = searchContext;

  const isGroup = activeTab === "group";
  const submitBtnText = isGroup ? "搜出揪團" : "搜出店家";

  // 驗證
  const isEmptyCityId = searchKeys.cityId === 0;
  const isEmptyStartDate = searchKeys.startDate === "";
  const isEmptyGameName = searchKeys.gameName === "";
  const isEmptyStoreName = searchKeys.storeName === "";

  const isAllEmpty =
    isEmptyCityId && isEmptyStartDate && isEmptyGameName && isEmptyStoreName;

  const [error, setError] = useState(false);

  const isError = error === true;

  // 儲存 select value
  const setSelectValue: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const inputName = e.target.name;
    const isCityId = inputName === "cityId";
    const value = isCityId ? Number(e.target.value) : e.target.value;

    setSearchKeys({ ...searchKeys, [inputName]: value });
  };

  // 儲存 input value
  const setInputValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setSearchKeys({ ...searchKeys, [inputName]: value });
  };

  // 送出搜尋
  const submitSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isSearchPage = router.asPath.split("?")[0] === "/search";

    const { cityId, startDate, gameName, storeName } = searchKeys;

    // 搜尋頁面 Search
    if (isSearchPage) {
      let queryData: Record<string, string> = { tab: activeTab };

      if (cityId) {
        queryData = { ...queryData, city: encodeURIComponent(cityId) };
      }
      if (startDate) {
        queryData = {
          ...queryData,
          date: encodeURIComponent(startDate.replace(/\//g, "-")),
        };
      }
      if (gameName) {
        queryData = { ...queryData, keyword: encodeURIComponent(gameName) };
      }
      if (storeName) {
        queryData = { ...queryData, keyword: encodeURIComponent(storeName) };
      }

      router.push(
        {
          pathname: "/search",
          query: queryData,
        },
        undefined,
        { shallow: true }
      );
      setIsLoading(false);
      return;
    }

    // 沒有選擇搜尋條件
    if (isAllEmpty) {
      setError(true);
      return;
    }

    // landingPage Search
    let queryValues = `?tab=${activeTab}`;

    if (cityId) {
      queryValues = `${queryValues}&city=${encodeURIComponent(cityId)}`;
    }
    if (startDate) {
      queryValues = `${queryValues}&date=${encodeURIComponent(
        startDate.replace(/\//g, "-")
      )}`;
    }
    if (gameName) {
      queryValues = `${queryValues}&keyword=${encodeURIComponent(gameName)}`;
    }
    if (storeName) {
      queryValues = `${queryValues}&keyword=${encodeURIComponent(storeName)}`;
    }

    router.push(`/search${queryValues}`);
  };

  return {
    setSelectValue,
    setInputValue,
    submitSearch,
    isError,
    submitBtnText,
    isGroup,
  };
}
