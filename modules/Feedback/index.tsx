import React, { useState } from "react";
import FileWrapper from "@/common/components/FileWrapper";
import Button from "@/common/components/GeneralButton";
import Image from "@/common/components/FillImage";
import ModalWrapper from "@/common/components/ModalWrapper";
import ProfileImg from "@/common/components/ProfileImg";
import TextArea from "@/common/components/Form/TextArea";

const RatingItem = () => {
  return (
    <li className="w-full flex justify-between">
      <p>環境舒適</p>
      <div className="flex whitespace-nowrap">
        <span>{}</span>
        <div
          className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
          data-score="1"
        ></div>
        <div
          className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
          data-score="2"
        ></div>
        <div
          className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
          data-score="3"
        ></div>
        <div
          className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
          data-score="4"
        ></div>
        <div
          className="w-6 h-6 bg-rating-star-gray hover:bg-rating-star-dark"
          data-score="5"
        ></div>
      </div>
    </li>
  );
};

const defaultStoreRating = {
  groupId: 0,
  clean: 0,
  service: 0,
  variety: 0,
  value: 0,
  comment: "",
};

export default function Feedback() {
  const [storeValues, setStoreValues] = useState(defaultStoreRating);
  const [memberValues, setMemberValues] = useState([]);

  const handleInputValue = () => {
    setStoreValues((prevState) => ({ ...prevState, date: "" }));
  };

  return (
    <div className="container pt-14">
      <ModalWrapper title="評論你所體驗的店家">
        <div className="pt-10 pb-14 px-14">
          <div className="flex justify-between gap-[5%]">
            <div className="w-[70%] border flex flex-col justify-center flex-wrap gap-x-4 h-16">
              <ProfileImg src="" alt="storeName" sizeStyle="w-16 h-16" />
              <p className="w-full text-lg truncate">六角桌遊店</p>
              <p className="text-gray-700">高雄市新興區民生一路56號</p>
            </div>
            <div className="w-full">
              <h3 className="text-lg">本次遊戲時間</h3>
              <p>2023/10/2 14:00 - 20:00</p>
            </div>
          </div>
          <div className="flex justify-between gap-[5%] mt-8">
            <div className="w-[70%]">
              <h3 className="text-lg">各項目評分：</h3>
              <ul className="flex flex-col gap-6 mt-4">
                <RatingItem />
              </ul>
            </div>
            <div className="w-full">
              {/* <TextArea title="評語" textAreaParams={} /> */}
              <h3 className="text-lg mb-2">評語</h3>
              <textarea
                className="w-full"
                value={storeValues.comment}
                onChange={}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-3">
          <div className="w-full h-1 progressBar">
            <p className="w-1/2 h-full bg-gray-950"></p>
          </div>
          <Button
            type="button"
            appearance="black"
            rounded
            className="w-[80%] mt-4"
          >
            <p className="text-xl">下一步</p>
          </Button>
          <p className="mt-5">略過</p>
        </div>
      </ModalWrapper>
    </div>
  );
}
