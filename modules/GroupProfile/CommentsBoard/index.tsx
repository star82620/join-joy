import React, { useState, useContext } from "react";
import Link from "@/common/components/GeneralLink";
import Button from "@/common/components/GeneralButton";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import CommentCard from "./CommentCard";
import { GroupDataContext } from "../index";
import { CommentsDataItemType } from "../data";
import { AuthContext } from "@/common/contexts/AuthProvider";

const CommentTextArea = ({
  textLength,
  commentValue,
  handleInputValue,
  handleSubmitComment,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="grow">
        <form id="submitComment" onSubmit={handleSubmitComment}>
          <textarea
            maxLength={100}
            rows={3}
            placeholder="輸入你想說的話！"
            className="px-3 py-2 border-b-2 w-full placeholder:text-start"
            value={commentValue}
            onChange={handleInputValue}
          />
        </form>
        <p className="text-right text-xs font-bold mt-1">{textLength}/100</p>
      </div>

      <Button type="submit" appearance="black" rounded form="submitComment">
        <span className="text-sm">送出</span>
      </Button>
    </div>
  );
};

const InputWithoutAuth = () => (
  <p className="text-gray-500">
    <Link href="/login">登入</Link>以留言
  </p>
);

export default function CommentsBoard() {
  const authContext = useContext(AuthContext);
  const { authData, setAuthData } = authContext;

  const { commentsData, groupId } = useContext(GroupDataContext);
  const [textLength, setTextLength] = useState(0);
  const [commentValue, setCommentValue] = useState("");
  const isEmpty = commentsData.length === 0;

  const handleInputValue = (e) => {
    setCommentValue(e.target.value);
    setTextLength(e.target.value.length);
  };

  async function handleSubmitComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const msg = {
      groupId: groupId,
      commentTxt: commentValue,
    };

    const submitMsgKey: apiParamsType = {
      apiPath: "/group/comments",
      method: "POST",
      data: msg,
    };

    const res = await fetchApi(submitMsgKey);
    console.log(res);
  }

  return (
    <section className="px-12 pt-8 pb-10 md:px-3 md:py-4">
      <div className="pb-6 md:pb-4">
        {!!authData ? (
          <CommentTextArea
            textLength={textLength}
            commentValue={commentValue}
            handleInputValue={handleInputValue}
            handleSubmitComment={handleSubmitComment}
          />
        ) : (
          <InputWithoutAuth />
        )}
      </div>

      <div className="flex flex-col gap-6 pt-6 md:pt-4 border-t border-gray-300">
        {isEmpty && (
          <p className="text-center text-gray-600">目前還沒有留言唷！</p>
        )}
        {commentsData.map((comment: CommentsDataItemType) => (
          <CommentCard key={comment.commentDate} comment={comment} />
        ))}
      </div>
    </section>
  );
}
