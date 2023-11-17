import React, { useContext, useEffect, useState } from "react";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";
import Image from "@/common/components/FillImage";
import icons from "@/constants/iconsPackage/createGroupIcons";
import TitleBlock from "@/common/components/Form/TitleBlock";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import { StepContext, ValuesContext } from "./index";
import apiPaths from "@/constants/apiPaths";
import {
  StepOneProps,
  StoreDataType,
  defaultStoreData,
  HandleInputValueType,
  HandleSelectedNumType,
  HandleSelectedTimeType,
  PlaceInputProps,
  locationOptions,
  // inputParamsSet,
} from "./data";
import TextInput from "@/common/components/Form/TextInput";
import { TextInputParamsType } from "@/common/components/Form/data";
import SelectInput from "@/common/components/Form/SelectInput";
import RadioInput from "@/common/components/Form/RadioInput";

// 輸入自行輸入地點 input
const PlaceInput = ({ place, handleInputValue }: PlaceInputProps) => {
  const textInputParams: Record<string, TextInputParamsType> = {
    place: {
      type: "text",
      inputName: "place",
      value: place,
      onChange: handleInputValue,
      placeholder: "請選擇輸入詳細地址",
    },
  };
  return <TextInput textInputParams={textInputParams.place} />;
};

export default function StepOne({ citiesData }: StepOneProps) {
  const stepContext = useContext(StepContext);
  const [activeStep, setActiveStep] = stepContext;

  const valuesContext = useContext(ValuesContext);
  const [values, setValues] = valuesContext;

  // API 來的店家資料，需要先選擇地點才會拿到
  const [storesData, setStoresData] = useState<StoreDataType>(defaultStoreData);

  const { locationKind, date, city, storeId, place, startTime, endTime } =
    values;
  const { stores, remainingSeats, acceptedNum } = storesData;

  console.log("storesData", storesData);

  const isStore = locationKind === "store";
  const formattedDate = date.replaceAll("-", "/");
  const cityId = city.cityId;

  // 取得店家列表
  useEffect(() => {
    const getCityStores = async () => {
      const isStore = locationKind === "store";

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

    getCityStores();
  }, [locationKind, cityId]);

  // 如果城市或店家有變，將日期歸零
  useEffect(() => {
    setValues((prevState) => ({ ...prevState, date: "" }));
  }, [cityId, storeId]);

  // 取得指定日期的剩餘座位
  useEffect(() => {
    const getRemainingSeats = async () => {
      const isStore = locationKind === "store";

      const remainingSeatsKey: apiParamsType = {
        apiPath: `${apiPaths.getRemainingSeats}/${storeId}/${date}`,
        method: "GET",
      };

      if (isStore && !!storeId && !!date) {
        const res = await fetchApi(remainingSeatsKey);
        const data = res?.data;
        if (!data) return;
        setStoresData((prevStep) => ({ ...prevStep, remainingSeats: data }));
      }
    };

    getRemainingSeats();
  }, [locationKind, cityId, storeId, date]);

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

  // 選擇店家 id => 數字
  const handleSelectedNum: HandleSelectedNumType = (e) => {
    const inputName = e.target.name;
    const value = Number(e.target.value);
    setValues((prevState) => ({ ...prevState, [inputName]: value }));
  };

  // 選擇時間 => string
  const handleSelectedTime: HandleSelectedTimeType = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setValues((prevState) => ({ ...prevState, [inputName]: value }));
  };

  // 輸入城市
  const CitySelector = () => {
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

    const formattedData = citiesData.map((city) => ({
      value: city.Id.toString(),
      text: city.CityName,
    }));
    return (
      <div className="w-full">
        <SelectInput
          inputName="city"
          options={formattedData}
          onChange={handleSelectedCity}
          defaultText="請選擇城市"
          value={city.cityName}
          required={true}
        />
      </div>
    );
  };

  // 輸入店家 input
  const StoreSelector = () => {
    const formattedStores = stores.map((store) => ({
      value: store.storeId.toString(),
      text: store.storeName,
    }));
    const storeIdOptions = cityId ? formattedStores : [];
    const isEmpty = storeIdOptions.length === 0;
    const defaultText =
      cityId && isEmpty ? "這個地區還沒有店家・゜・(PД`q｡)・゜・" : undefined;

    return (
      <div className="w-full">
        <SelectInput
          inputName="storeId"
          value={storeId.toString()}
          options={storeIdOptions}
          onChange={handleSelectedNum}
          defaultText={defaultText}
        />
      </div>
    );
  };

  //時數人數提示
  const TotalHours = () => {
    const formattedStartTime = Number(startTime.split(":")[0]);
    const formattedEndTime = Number(endTime.split(":")[0]);
    const hours = formattedEndTime - formattedStartTime;
    const acceptedNum = storesData.acceptedNum;
    return (
      <p className="text-sm text-gray-500 mt-2">
        共計 {hours} 小時，最多可預約 {acceptedNum} 人
      </p>
    );
  };

  // 可接受的人數
  useEffect(() => {
    const countAcceptedNum = () => {
      const maxAcceptedNum = 12;
      // 轉換時間格式為可以比較的數字
      const convertTimeToNumber = (time: string) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
      };

      const times = remainingSeats;
      const startTimeNumber = convertTimeToNumber(startTime);
      const endTimeNumber = convertTimeToNumber(endTime);

      // 篩選落在這個範圍的時間
      const filteredTimes = times.filter((item) => {
        const [itemStart, itemEnd] = item.time
          .split("~")
          .map(convertTimeToNumber);
        const result = itemStart >= startTimeNumber && itemEnd <= endTimeNumber;
        return result;
      });

      const allSeatsNum = filteredTimes.map((item) => item.seats);
      const [minSeatsNum] = allSeatsNum.sort((a, b) => a - b);

      if (minSeatsNum > maxAcceptedNum) return maxAcceptedNum;
      return minSeatsNum;
    };
    setStoresData((prevState) => ({
      ...prevState,
      acceptedNum: countAcceptedNum(),
    }));
  }, [startTime, endTime, remainingSeats]);

  const [remainingBlockHidden, setRemainingBlockHidden] =
    useState<boolean>(false);

  const toggleIcon = remainingBlockHidden ? "arrow-down" : "arrow-up";

  const toggleRemainingBlock = () => {
    setRemainingBlockHidden(!remainingBlockHidden);
  };

  const groupNameInputParams: TextInputParamsType = {
    type: "text",
    inputName: "groupName",
    value: values.groupName,
    onChange: handleInputValue,
    placeholder: "幫你的揪團取一個酷酷的名字吧！(๑•̀ㅂ•́)و✧",
    required: true,
  };

  return (
    <>
      <section className="flex flex-col w-full gap-10">
        <label>
          <TitleBlock title="揪團主旨" require={true}>
            <TextInput textInputParams={groupNameInputParams} />
          </TitleBlock>
        </label>

        {/* 選擇城市、店家 or 輸入自填地點 */}
        <TitleBlock
          title="地點"
          description="（揪團成立後不可更改）"
          direction="row"
          require={true}
        >
          <div className="mt-3">
            <RadioInput options={locationOptions} onChange={handleInputValue} />
          </div>
          <div className="flex gap-3 md:flex-col">
            {/* 選擇城市 */}
            <CitySelector />
            {/* 店家的選項必須先選城市才會出現 */}
            {isStore ? (
              <StoreSelector />
            ) : (
              <PlaceInput place={place} handleInputValue={handleInputValue} />
            )}
          </div>
        </TitleBlock>

        {/* 可怕的行事曆來了 */}
        <label>
          <TitleBlock
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
              <option value="2023-11-20">2023-11-20</option>
              <option value="2023-12-01">2023-12-01</option>
            </datalist>
          </TitleBlock>
        </label>

        {isStore && values.date && (
          <div className="bg-yellow-tone border-l-[3px] border-yellow-primary py-3">
            <h3 className="px-3 relative" onClick={toggleRemainingBlock}>
              {formattedDate} 各時段可預約人數
              <span className="absolute top-0 right-3">
                <Image
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

        <TitleBlock
          title="遊戲時段"
          description="（揪團成立後不可更改）"
          direction="row"
          require={true}
        >
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
          {values.startTime && values.endTime && <TotalHours />}
        </TitleBlock>

        <label>
          <TitleBlock title="預計揪團人數" require={true}>
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
          </TitleBlock>
        </label>

        {/* 下拉式選單： */}
        <label>
          <TitleBlock
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
          </TitleBlock>
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
