import React from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import GroupProfile from "@/modules/GroupProfile";
import Layout from "@/common/components/Layout";
import {
  GroupDataType,
  GroupProfilePageProps,
} from "@/modules/GroupProfile/data";
import { GetServerSidePropsContext } from "next";
import { CommentDataType } from "@/constants/types/commentDataType";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // 獲取 id
  const { id } = context.params as { id: string };
  const { authToken } = context.req.cookies;

  // 取得揪團資料
  const groupApiParams: apiParamsType = {
    apiPath: `/group/easydetail/${id}`,
    method: "GET",
  };

  const groupRes = await fetchApi(groupApiParams);

  // if (!groupRes) {
  //   return console.log("groupRes,NO");
  // }

  const groupData: GroupDataType = groupRes.data.groupWithGames || [];

  // 取得留言板內容
  const commentsApiParams: apiParamsType = {
    apiPath: `/group/comments/${id}`,
    method: "GET",
  };

  const commentsRes = await fetchApi(commentsApiParams);

  // if (commentsRes) {
  //   return console.log("comment,No");
  // }

  const commentsData: CommentDataType[] = Array.isArray(commentsRes.data)
    ? commentsRes.data
    : [];

  return {
    props: { groupId: id, groupData: groupData, commentsData: commentsData },
  };
}

export default function GroupProfilePage({
  groupId,
  groupData,
  commentsData,
}: GroupProfilePageProps) {
  const data = { groupId, groupData, commentsData };
  return (
    <Layout pageCategory="group">
      <GroupProfile data={data} />
    </Layout>
  );
}
