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

export async function getStaticPaths() {
  const apiParams: apiParamsType = {
    apiPath: "/group/getallgroupid",
    method: "GET",
  };

  const res = await fetchApi(apiParams);
  const data = res.data;

  const paths = data.map((group: GroupType) => {
    return {
      params: {
        id: group.groupId.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: getStaticPropsProps) {
  const { id } = params;

  const groupApiParams: apiParamsType = {
    apiPath: `/group/easydetail/${id}`,
    method: "GET",
  };

  const groupRes = await fetchApi(groupApiParams);
  const groupData: GroupDataType = await groupRes.data.groupWithGames;

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
