import React, { useState, useContext } from "react";
import Button from "@/common/components/GeneralButton";
import ProfileImg from "@/common/components/ProfileImg";
import { GroupDataContext } from "./index";
import { MsgCardProps, msgDataType } from "./data";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";

const MsgCard = ({ msg }: MsgCardProps) => {
  const { userId, userName, userPhoto, commentContent, commentDate } = msg;

  return (
    <div className="flex items-start gap-8">
      <ProfileImg
        src="/images/photo-user-000.png"
        alt="user"
        widthProp="w-16 md:w-9"
        heightProp="h-16 md:h-9"
      />
      <div className="grow">
        <div>
          <p className="font-semibold leading-[1.2] md:text-sm md:leading-6 ">
            {userName}
          </p>
          <p className="text-gray-400 text-xs after:content-['前'] after:ml-0.5">
            {commentDate}
          </p>
        </div>
        <p className="whitespace-pre-wrap mt-2">{commentContent}</p>
      </div>
    </div>
  );
};

export default function MessageBoard() {
  const { msgData, groupId } = useContext(GroupDataContext);
  const [textLength, setTextLength] = useState(0);
  const [msgValue, setMsgValue] = useState("");
  const isEmpty = msgData.length === 0;

  async function handleSubmitMsg(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(msgValue);
    const msg = {
      groupId: groupId,
      commentTxt: "string",
    };

    const submitMsgKey: apiParamsType = {
      apiPath: "/group/comments",
      method: "POST",
      data: msg,
    };

    const data = await fetchApi(submitMsgKey);
  }

  return (
    <section className="px-12 pt-8 pb-10 md:px-3 md:py-4">
      <div className="flex items-center gap-2 border-b border-gray-300 pb-6 md:pb-4">
        <div className="grow">
          <form id="submitMsg" onSubmit={handleSubmitMsg}>
            <textarea
              maxLength={100}
              rows={3}
              placeholder="輸入你想說的話！"
              className="px-3 py-2 border-b-2 w-full placeholder:text-start"
              onChange={(e) => {
                setMsgValue(e.target.value);
                setTextLength(e.target.value.length);
              }}
            />
          </form>
          <p className="text-right text-xs font-bold mt-1">{textLength}/100</p>
        </div>

        <Button type="submit" appearance="black" rounded form="submitMsg">
          <span className="text-sm">送出</span>
        </Button>
      </div>

      <div className="pt-6 md:pt-4">
        {isEmpty && (
          <p className="text-center text-gray-600">目前還沒有留言唷！</p>
        )}
        {msgData.map((msg: msgDataType) => (
          <MsgCard key={msg.commentDate} msg={msg} />
        ))}
      </div>
    </section>
  );
}
