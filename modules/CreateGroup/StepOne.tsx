import React, { useContext, useEffect, useState } from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import InputBlock from "./InputBlock";
import { StepContext, ValuesContext } from "./index";
import apiPaths from "@/constants/apiPaths";
import {
  StepOneProps,
  StoreDataType,
  HandleInputValueType,
  HandleLocationKindType,
  handleCityType,
  handleStoreType,
} from "./data";

export default function StepOne({ citiesData }: StepOneProps) {
  const stepContext = useContext(StepContext);
  const [activeStep, setActiveStep] = stepContext;

  const valuesContext = useContext(ValuesContext);
  const [values, setValues, chainKeys, setChainKeys] = valuesContext;

  // API 來的店家資料，需要先選擇地點才會拿到
  const [storesData, setStoresData] = useState<StoreDataType>([]);

  console.log("storesData", storesData);

  // 取得店家列表
  const storesKey: apiParamsType = {
    apiPath: `${apiPaths.getCityStores}?city=${chainKeys.cityId}`,
    method: "GET",
  };

  const isPlace = chainKeys.locationKind === "place";

  const getCityStores = async () => {
    if (!isPlace && chainKeys.cityId) {
      const data = await fetchApi(storesKey);
      setStoresData(data);
    }
  };

  useEffect(() => {
    getCityStores();
  }, [chainKeys.cityId]);

  // 換頁按鈕
  const handleBtnOne = () => {
    // 要做一些驗證，必填項目沒填不能按下一頁

    setActiveStep(2);
  };

  // 儲存 input value
  const handleInputValue: HandleInputValueType = (e, inputName) => {
    setValues((prevState) => ({ ...prevState, [inputName]: e.target.value }));
  };

  // 選擇地點類型
  const handleLocationKind: HandleLocationKindType = (e) => {
    setChainKeys((chainKeys) => ({
      ...chainKeys,
      locationKind: e.target.value,
    }));
  };

  // 選擇城市
  const handleCity: handleCityType = async (e) => {
    // 將 cityId 存入 chainKeys.cityId
    const value = Number(e.target.value);
    setChainKeys((chainKeys) => ({
      ...chainKeys,
      cityId: value,
    }));

    console.log("isPlace", isPlace);
    console.log("cityId", chainKeys.cityId);

    if (!isPlace && chainKeys.cityId) {
      // 打 API 取得店家列表
      const res = await fetchApi(storesKey);
      const data = res?.data;
      console.log("getStore", data);
      setStoresData(data);
    }
  };

  // 選擇店家
  const handleStoreId: handleStoreType = (e) => {
    // 選擇店家之後
    // 1. 將 storeId 存入 values
    // 2. 打 API 獲得該店家的可預約日期、時間、可選擇的遊戲

    const value = Number(e.target.value);
    setChainKeys((prevState) => ({ ...prevState, storeId: value }));
  };

  const StoreSelector = () => (
    <select
      className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
      name="storeId"
      value={values.storeId}
      onChange={handleStoreId}
    >
      <option value="">請選擇店家</option>
      {storesData?.map((store) => {
        const id = store.Id;
        const storeName = store.Name;
        return (
          <option key={id} value={id}>
            {storeName}
          </option>
        );
      })}
    </select>
  );

  // 輸入自行輸入地點
  const PlaceInput = () => {
    // if (values.place === null) {
    //   setValues((prevState) => ({ ...prevState, place: "" }));
    // }

    return (
      <input
        type="text"
        className="inputStyle"
        name="place"
        value={values.place}
        onChange={() => handleInputValue}
        placeholder="請選擇輸入詳細地址"
      />
    );
  };

  return (
    <>
      <section className="flex flex-col w-full gap-10">
        {/* 揪團主旨 */}
        <label>
          <InputBlock title={"揪團主旨"} require={true}>
            <input
              type="text"
              placeholder="請幫你的揪團取一個酷酷的名字！"
              className="inputStyle"
              name="groupName"
              value={values.groupName}
              onChange={(e) => handleInputValue(e, "groupName")}
            />
          </InputBlock>
        </label>

        <InputBlock
          title="地點"
          description="（揪團成立後不可更改）"
          direction="row"
          require={true}
        >
          {/* 用於辨識是否要選擇店家、 */}
          <div className="mt-3">
            <label>
              <input
                type="radio"
                className="radioIcon"
                name="locationKind"
                value="store"
                onChange={handleLocationKind}
                defaultChecked
              />
              <span className="ml-2">店家</span>
            </label>
            <label className="ml-4">
              <input
                type="radio"
                className="radioIcon"
                name="locationKind"
                value="place"
                onChange={handleLocationKind}
              />
              <span className="ml-2">自行輸入</span>
            </label>
          </div>
          {/* 選擇城市、店家 or 輸入自填地點 */}
          <div className="flex gap-3 h-[50px] md:flex-col">
            {/* 選擇城市 */}
            <select
              className="w-[45%] border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
              name="city"
              onChange={handleCity}
            >
              <option value="">請選擇城市/地區</option>
              {citiesData.map((city) => {
                const id = city.Id;
                const cityName = city.CityName;
                return (
                  <option key={id} value={id}>
                    {cityName}
                  </option>
                );
              })}
            </select>
            {/* 店家的選項必須先選城市才會出現 */}
            {isPlace ? <PlaceInput /> : <StoreSelector />}
          </div>
        </InputBlock>

        {/* 可怕的行事曆來了 */}
        <label>
          <InputBlock
            title="日期"
            description="（揪團成立後不可更改）"
            direction="row"
            require={true}
          >
            <input
              placeholder="請選擇日期"
              className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            />
          </InputBlock>
        </label>

        <div className="bg-yellow-tone border-l-[3px] border-yellow-primary">
          <h3 className="px-3 py-2">各時段可容納人數</h3>
          <div className="px-6 py-3">
            <p>時間 可容納人數 人數</p>
          </div>
        </div>

        <InputBlock
          title="遊戲時段"
          description="（揪團成立後不可更改）"
          direction="row"
          require={true}
        >
          {/* 下拉式選單？？：time */}
          <label className="mt-2">
            開始時間
            <input
              placeholder="請選擇開始時間"
              className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            />
          </label>
          <label>
            結束時間
            <input
              placeholder="請選擇結束時間"
              className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            />
          </label>
          {/* 店家才有這條錢錢 */}
          <p>預計 - 小時（總共 NT$ - /人）</p>
        </InputBlock>

        {/* 下拉式選單：totalNum */}
        <label>
          <InputBlock title="預計揪團人數" require={true}>
            <select className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm">
              <option value="">請選擇人數</option>
            </select>
          </InputBlock>
        </label>

        {/* 下拉式選單： */}
        <label>
          <InputBlock
            title="內建人數"
            description="（包含自己）"
            direction="row"
            require={true}
          >
            <input
              type="number"
              className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
            />
          </InputBlock>
        </label>
        <div className="mt-6 flex flex-col justify-center items-center gap-4">
          <Button
            type="button"
            appearance="orange"
            onClick={handleBtnOne}
            className="px-[158px] md:py-2 md:px-3 md:w-full text-xl md:text-md"
          >
            下一步
          </Button>

          <Link href="/">返回首頁</Link>
        </div>
      </section>
    </>
  );
}
