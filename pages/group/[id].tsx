import React from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import GroupProfile from "@/modules/GroupProfile";
import Layout from "@/common/components/Layout";
import {
  GroupDataType,
  GroupProfilePageProps,
  defaultCommentData,
  defaultGroupData,
} from "@/modules/GroupProfile/data";
import { GetServerSidePropsContext } from "next";
import { CommentDataType } from "@/constants/types/commentDataType";
import apiPaths from "@/constants/apiPaths";
import { UserType } from "@/constants/types/groupDataType";

let groupId = 0;
let groupData = defaultGroupData;
let commentsData = defaultCommentData;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // 獲取 id
  const { id } = context.params as { id: string };
  const { authToken } = context.req.cookies;

  // 用該團成員比對確認身份
  const apiParams: apiParamsType = {
    apiPath: `${apiPaths["get-all-members"]}?groupId=${id}`,
    method: "GET",
  };

  const res = await fetchApi(apiParams);
  const data: UserType[] = await res?.data;

  console.log("memberStatussss res", data);

  if (!res.status || !data) return null;

  // 找到 id 跟使用者相同的團員
  // const groupMember = data.filter((user) => {
  //   return user.userId === authUserID;
  // });

  // const memberStatus = groupMember[0].status;

  // 取得揪團資料
  const groupApiParams: apiParamsType = {
    apiPath: `${apiPaths["get-group-info"]}/${id}`,
    method: "GET",
  };

  const groupRes = await fetchApi(groupApiParams);

  if (!groupRes) {
    console.log("groupRes,NO");
    return {
      props: { groupId: id, groupData: groupData, commentsData: commentsData },
    };
  }

  groupData = groupRes.data?.groupWithGames || defaultGroupData;

  // 取得留言板內容
  const commentsApiParams: apiParamsType = {
    apiPath: `/group/comments/${id}`,
    method: "GET",
  };

  const commentsRes = await fetchApi(commentsApiParams);

  if (commentsRes) {
    console.log("comment,No");
  }

  commentsData = Array.isArray(commentsRes.data) ? commentsRes.data : [];

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
