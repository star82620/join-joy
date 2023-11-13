import React, { useContext, useEffect, useRef, useState } from "react";
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
  HandleSelectedNumType,
  HandleSelectedTimeType,
} from "./data";
import FillImage from "@/common/components/FillImage";
import icons from "@/constants/iconsPackage/createGroupIcons";

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
  const cityId = values.city.cityId;

  // 取得店家列表
  const getCityStores = async () => {
    const storesKey: apiParamsType = {
      apiPath: `${apiPaths.getCityStores}?city=${cityId}`,
      method: "GET",
    };

    if (isStore && cityId) {
      const res = await fetchApi(storesKey);
      const data = res.data ? res.data.matchedStores : [];
      setStoresData((prevStep) => ({ ...prevStep, stores: data }));
    }
  };

  useEffect(() => {
    getCityStores();
  }, [cityId, values.locationKind]);

  useEffect(() => {
    setValues((prevState) => ({ ...prevState, date: "" }));
  }, [cityId, values.storeId]);

  // 取得指定日期的剩餘座位
  const getRemainingSeats = async () => {
    const remainingSeatsKey: apiParamsType = {
      apiPath: `${apiPaths.getRemainingSeats}/${values.storeId}/${values.date}`,
      method: "GET",
    };

    if (isStore && !!values.storeId && !!values.date) {
      const res = await fetchApi(remainingSeatsKey);
      const data = res?.data;
      if (!data) return;
      setStoresData((prevStep) => ({ ...prevStep, remainingSeats: data }));
    }
  };

  useEffect(() => {
    getRemainingSeats();
  }, [cityId, values.locationKind, values.date]);

  const { stores, remainingSeats, acceptedNum } = storesData;

  // 換頁按鈕
  const handleBtnOne = () => {
    // 要做一些驗證，必填項目沒填不能按下一頁

    setActiveStep(2);
  };

  // 儲存 input value
  const handleInputValue: HandleInputValueType = (e) => {
    const inputName = e.target.name;
    setValues((prevState) => ({ ...prevState, [inputName]: e.target.value }));
  };

  // 選擇城市
  const handleSelectedCity: HandleSelectedNumType = (e) => {
    const inputName = e.target.name;
    const cityId = Number(e.target.value);
    const index = e.target.selectedIndex;
    const cityName = e.target.options[index].text;

    setValues((prevState) => ({
      ...prevState,
      [inputName]: { cityId, cityName },
    }));
  };

  // 選擇店家 id
  const handleSelectedNum: HandleSelectedNumType = async (e) => {
    const inputName = e.target.name;
    const value = Number(e.target.value);
    setValues((prevState) => ({ ...prevState, [inputName]: value }));
  };

  // 選擇時間
  const handleSelectedTime: HandleSelectedTimeType = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setValues((prevState) => ({ ...prevState, [inputName]: value }));
  };

  // 輸入店家
  const StoreSelector = () => {
    const isEmpty = stores.length === 0;
    const defaultText =
      !!cityId && isEmpty
        ? "這個地區還沒有店家・゜・(PД`q｡)・゜・"
        : "請選擇店家";
    return (
      <select
        className="inputStyle h-10"
        name="storeId"
        value={values.storeId}
        onChange={handleSelectedNum}
      >
        <option value="">{defaultText}</option>
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
        className="inputStyle h-10"
        name="place"
        value={values.place}
        onChange={handleInputValue}
        placeholder="請選擇輸入詳細地址"
      />
    );
  };

  //
  const TotalHours = () => {
    const startTime = Number(values.startTime.split(":")[0]);
    const endTime = Number(values.endTime.split(":")[0]);
    const hours = endTime - startTime;
    const acceptedNum = storesData.acceptedNum;
    return (
      <p className="text-sm text-gray-500 mt-2">
        共計 {hours} 小時，最多可預約 {acceptedNum} 人
      </p>
    );
  };

  // 可接受的人數
  const maxAcceptedNum = 12;
  const countAcceptedNum = () => {
    // 轉換時間格式為可以比較的數字
    const convertTimeToNumber = (time: string) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };

    const times = remainingSeats;
    const { startTime, endTime } = values;
    const startTimeNumber = convertTimeToNumber(startTime);
    const endTimeNumber = convertTimeToNumber(endTime);

    // 篩選落在這個範圍的時間
    const filteredTimes = times.filter((item) => {
      const [itemStart, itemEnd] = item.time
        .split("~")
        .map(convertTimeToNumber);
      return itemStart >= startTimeNumber && itemEnd <= endTimeNumber;
    });
    const allSeatsNum = filteredTimes.map((item) => item.seats);
    const minSeatsNum = allSeatsNum.sort((a, b) => a - b)[0];

    if (minSeatsNum > maxAcceptedNum) return maxAcceptedNum;
    return minSeatsNum;
  };

  useEffect(() => {
    setStoresData((prevState) => ({
      ...prevState,
      acceptedNum: countAcceptedNum(),
    }));
  }, [values.startTime, values.endTime]);

  const [remainingBlockHidden, setRemainingBlockHidden] =
    useState<boolean>(false);
  const toggleIcon = remainingBlockHidden ? "arrow-down" : "arrow-up";

  const toggleRemainingBlock = () => {
    setRemainingBlockHidden(!remainingBlockHidden);
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
              onChange={handleInputValue}
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
                onChange={handleInputValue}
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
                onChange={handleInputValue}
              />
              <span className="ml-2">自行輸入</span>
            </label>
          </div>
          {/* 選擇城市、店家 or 輸入自填地點 */}
          <div className="flex gap-3 md:flex-col">
            {/* 選擇城市 */}
            <select
              className="w-[45%] md:w-full h-10 inputStyle"
              name="city"
              onChange={handleSelectedCity}
            >
              <option value="">請選擇城市</option>
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
              list="data"
              placeholder="請選擇日期"
              className="inputStyle"
              name="date"
              value={values.date}
              onChange={handleInputValue}
            />
            <datalist id="data">
              <option value="2023-11-01">2023-11-01</option>
              <option value="2023-11-07">2023-11-07</option>
            </datalist>
          </InputBlock>
        </label>

        {isStore && values.date && (
          <div className="bg-yellow-tone border-l-[3px] border-yellow-primary py-3">
            <h3 className="px-3 relative" onClick={toggleRemainingBlock}>
              {formattedDate} 各時段可預約人數
              <span className="absolute top-0 right-3">
                <FillImage
                  src={icons[toggleIcon].src}
                  alt={icons[toggleIcon].alt}
                  widthProp="w-6 md:w-5"
                  heightProp="h-6 md:h-5"
                />
              </span>
            </h3>
            {!remainingBlockHidden && (
              <div className="px-6 pt-3">
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
            )}
          </div>
        )}

        <InputBlock
          title="遊戲時段"
          description="（揪團成立後不可更改）"
          direction="row"
          require={true}
        >
          {/* 下拉式選單？？：time */}
          <div className="flex gap-4 mt-2">
            <label className="w-full">
              <h4>開始時間</h4>
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
              <h4>結束時間</h4>
              <select
                className="inputStyle h-10"
                placeholder="請選擇結束時間"
                name="endTime"
                value={values.endTime}
                onChange={handleSelectedTime}
              >
                <option value="">請選擇</option>
                {values.startTime !== "" &&
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
            <select
              className="inputStyle"
              name="totalMemberNum"
              value={values.totalMemberNum.toString()}
              onChange={handleSelectedNum}
            >
              <option value="">
                {!!values.endTime && acceptedNum === 0
                  ? "無可預約人數，請重新選擇時段"
                  : "請選擇人數"}
              </option>

              {values.endTime &&
                [...Array(acceptedNum)].map((_, index) => {
                  const num = index + 1;
                  if (num < 2) return;
                  return (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  );
                })}
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
            <select
              className="inputStyle"
              name="initNum"
              value={values.initNum}
              onChange={handleSelectedNum}
            >
              <option value={1}>1</option>
              {values.totalMemberNum &&
                [...Array(values.totalMemberNum)].map((_, index) => {
                  const num = index + 1;
                  if (index < 1) return;
                  return (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  );
                })}
            </select>
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
