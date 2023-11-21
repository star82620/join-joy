import React from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import GroupProfile from "@/modules/GroupProfile";
import Layout from "@/common/components/Layout";
import {
  GroupType,
  GroupDataType,
  CommentsDataType,
  GroupProfilePageProps,
  getStaticPropsProps,
} from "@/modules/GroupProfile/data";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params;
  const { authToken } = context.req.cookies;

  console.log(id);

  const groupApiParams: apiParamsType = {
    apiPath: `/group/easydetail/${id}`,
    method: "GET",
  };

  const groupRes = await fetchApi(groupApiParams);
  const groupData: GroupDataType = groupRes.data.groupWithGames;

  const commentsApiParams: apiParamsType = {
    apiPath: `/group/comments/${id}`,
    method: "GET",
  };

  const commentsRes = await fetchApi(commentsApiParams);

  const commentsData: CommentsDataType[] = Array.isArray(commentsRes.data)
    ? commentsRes.data
    : [];

  return {
    props: { groupId: id, groupData, commentsData },
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
