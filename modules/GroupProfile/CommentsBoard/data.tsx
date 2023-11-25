import { ChangeEventHandler, MouseEventHandler } from "react";

export type CommentTextAreaProps = {
  textLength: number;
  commentValue: string;
  handleInputValue: ChangeEventHandler<HTMLTextAreaElement>;
  handleSubmitComment: MouseEventHandler<HTMLFormElement>;
};
