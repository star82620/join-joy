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
  defaultStoreData,
  HandleInputValueType,
  HandleLocationKindType,
  HandleCityType,
  HandleStoreType,
  HandleSelectedTimeType,
} from "./data";

export default function StepOne({ citiesData }: StepOneProps) {
  const stepContext = useContext(StepContext);
  const [activeStep, setActiveStep] = stepContext;

  const valuesContext = useContext(ValuesContext);
  const [values, setValues] = valuesContext;

  // API 來的店家資料，需要先選擇地點才會拿到
  const [storesData, setStoresData] = useState<StoreDataType>(defaultStoreData);

  console.log("storesData", storesData);

  const isPlace = values.locationKind === "place";
  const isStore = values.locationKind === "store";
  const formattedDate = values.date.replaceAll("-", "/");

  // 取得店家列表
  const getCityStores = async () => {
    const storesKey: apiParamsType = {
      apiPath: `${apiPaths.getCityStores}?city=${values.cityId}`,
      method: "GET",
    };

    if (isStore && values.cityId) {
      const res = await fetchApi(storesKey);
      const data = res.data ? res.data.matchedStores : [];
      setStoresData((prevStep) => ({ ...prevStep, stores: data }));
    }
  };

  useEffect(() => {
    getCityStores();
  }, [values.cityId, values.locationKind]);

  // 取得指定日期的剩餘座位
  const getRemainingSeats = async () => {
    const remainingSeatsKey: apiParamsType = {
      apiPath: `${apiPaths.getRemainingSeats}/${values.storeId}/${values.date}`,
      method: "GET",
    };

    if (isStore && values.storeId && values.date) {
      const res = await fetchApi(remainingSeatsKey);
      const data = res?.data;
      if (!data) return;
      setStoresData((prevStep) => ({ ...prevStep, remainingSeats: data }));
    }
  };

  useEffect(() => {
    getRemainingSeats();
  }, [values.cityId, values.locationKind, values.date]);

  const { stores, remainingSeats } = storesData;

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
    setValues((values) => ({
      ...values,
      locationKind: e.target.value,
    }));
  };

  // 選擇城市
  const handleCity: HandleCityType = async (e) => {
    // 將 cityId 存入 values.cityId
    const value = Number(e.target.value);
    setValues((values) => ({
      ...values,
      cityId: value,
    }));
  };

  // 選擇店家
  const handleStoreId: HandleStoreType = (e) => {
    // 選擇店家之後
    // 1. 將 storeId 存入 values
    // 2. 打 API 獲得該店家的可預約日期、時間、可選擇的遊戲

    const value = Number(e.target.value);
    setValues((prevState) => ({ ...prevState, storeId: value }));
  };

  // 選擇時間
  const handleSelectedTime: HandleSelectedTimeType = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setValues((prevState) => ({ ...prevState, [inputName]: value }));
  };

  // 輸入店家
  const StoreSelector = () => {
    return (
      <select
        className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
        name="storeId"
        value={values.storeId}
        onChange={handleStoreId}
      >
        <option value="">請選擇店家</option>
        {stores.map((store) => {
          const { storeId, storeName } = store;
          return (
            <option key={storeId} value={storeId}>
              {storeName}
            </option>
          );
        })}
      </select>
    );
  };

  // 輸入自行輸入地點
  const PlaceInput = () => {
    return (
      <input
        type="text"
        className="inputStyle"
        name="place"
        value={values.place}
        onChange={(e) => handleInputValue(e, "place")}
        placeholder="請選擇輸入詳細地址"
      />
    );
  };

  //
  const TotalHours = () => {
    const startTime = Number(values.startTime.split(":")[0]);
    const endTime = Number(values.endTime.split(":")[0]);
    const hours = endTime - startTime;
    return <p className="text-sm text-gray-500 mt-2">共計 {hours} 小時</p>;
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
              value={values.date}
              onChange={(e) => handleInputValue(e, "date")}
            />
          </InputBlock>
        </label>

        <div className="bg-yellow-tone border-l-[3px] border-yellow-primary">
          <h3 className="px-3 py-2">{formattedDate} 各時段可預約人數</h3>
          <div className="px-6 pb-3">
            {remainingSeats.map((item) => {
              const { time, seats } = item;
              const formattedTime = time.replace("~", "-");
              const isFull = seats === 0;
              const textColor = isFull ? "text-danger" : "";
              return (
                <p key={time} className={`text-sm ${textColor}`}>
                  {formattedTime}
                  <span className="ml-4 mr-2">可預約人數</span>
                  {seats}
                </p>
              );
            })}
          </div>
        </div>

        <InputBlock
          title="遊戲時段"
          description="（揪團成立後不可更改）"
          direction="row"
          require={true}
        >
          {/* 下拉式選單？？：time */}
          <div className="flex gap-4 mt-2">
            <label className="w-full">
              開始時間
              <select
                className="inputStyle h-10"
                placeholder="請選擇開始時間"
                name="startTime"
                value={values.startTime}
                onChange={handleSelectedTime}
              >
                <option value="">請選擇</option>
                {remainingSeats.map((item) => {
                  const { time, seats } = item;
                  const formattedTime = time.split("~")[0];
                  if (seats === 0) return;
                  return (
                    <option key={formattedTime} value={formattedTime}>
                      {formattedTime}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className="w-full">
              結束時間
              <select
                className="inputStyle h-10"
                placeholder="請選擇結束時間"
                name="endTime"
                value={values.endTime}
                onChange={handleSelectedTime}
              >
                <option value="">請選擇</option>
                {values.startTime !== "" &&
                  // 如果沒有選擇 startTime 就不顯示時間選項
                  remainingSeats.map((item) => {
                    const { time, seats } = item;
                    const formattedTime = time.split("~")[1];
                    if (seats === 0) return;
                    if (formattedTime <= values.startTime) return;
                    return (
                      <option key={formattedTime} value={formattedTime}>
                        {formattedTime}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          {/* 店家才有這條錢錢 */}
          {values.startTime && values.endTime && <TotalHours />}
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
