import React from "react";
import CommentsSection from "@/common/components/CommentsSection";
import { commentsData } from "./data";

export default function Comments() {
  return (
    <div>
      <CommentsSection data={commentsData} />
    </div>
  );
}
