import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import FillImage from "../../FillImage";
import { globalIcons } from "@/constants/iconsPackage/globalIcons";
import { DatePickerInputProps, IOptions } from "./data";

const minDate = () => {
  // 最小可選日期為今天
  const today = new Date();
  const fiveDaysAgo = new Date();
  const minDate = fiveDaysAgo.setDate(today.getDate() - 1);

  return new Date(minDate);
};

const options: IOptions = {
  // title: "Demo Title",
  autoHide: true,
  todayBtn: false,
  clearBtn: false,
  // clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: minDate(),
  theme: {
    background: "bg-white dark:bg-gray-800",
    todayBtn: "bg-yellow-dark text-gray-500 border border-gray-500",
    clearBtn: "",
    icons: "text-gray-950",
    text: "text-purple-dark rounded-none",
    disabledText: "bg-gray-50 !text-gray-400 rounded-none",
    input: "",
    inputIcon: "",
    selected: "!border !border-gray-400 bg-white !text-gray-400 rounded-none",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => (
      <FillImage
        src={globalIcons["arrow-left"].src}
        alt={globalIcons["arrow-left"].alt}
        widthProp="w-5"
        heightProp="h-5"
      />
    ),
    next: () => (
      <FillImage
        src={globalIcons["arrow-right"].src}
        alt={globalIcons["arrow-right"].alt}
        widthProp="w-5"
        heightProp="h-5"
      />
    ),
  },
  datepickerClassNames: "top-15",
  // defaultDate: new Date("2023-12-01"),
  language: "en",
  disabledDates: [],
  weekDays: ["一", "二", "三", "四", "五", "六", "日"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "請選擇日期",
  inputDateFormatProp: {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
};

const formatDate = (date: Date) => {
  const formattedDate = date.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formattedDate;
};

export default function DatePickerInput({
  value,
  setValue,
  minDate,
  maxDate,
}: DatePickerInputProps) {
  const [show, setShow] = useState<boolean>(false);

  if (minDate) {
    options.minDate = minDate;
  }

  if (maxDate) {
    options.maxDate = maxDate;
  }

  const handleChange = (date: Date) => {
    const dateObj = new Date(date);

    const formattedDate = formatDate(dateObj);

    setValue(formattedDate);
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    // <div className="w-full">
    <Datepicker
      options={options}
      onChange={handleChange}
      show={show}
      setShow={handleClose}
    >
      <div className="">
        <div className="relative">
          <span className="absolute left-2 -bottom-[1px] -translate-y-1/4 aheadIcon  before:bg-search-date before:w-6 before:h-6 before:md:w-5 before:md:h-5"></span>

          <input
            type="text"
            className="inputStyle !mt-0 !pl-10"
            placeholder="選擇日期"
            value={value}
            onClick={() => setShow(!show)}
            onChange={() => {}}
            readOnly
          />
        </div>
      </div>
    </Datepicker>
    // </div>
  );
}
