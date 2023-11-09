import React from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import GroupProfile from "@/modules/GroupProfile";
import Layout from "@/common/components/Layout";
import {
  GroupType,
  getStaticPropsProps,
  GroupDataType,
  msgDataType,
  GroupProfilePageProps,
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

  const msgApiParams: apiParamsType = {
    apiPath: `/group/comments/${id}`,
    method: "GET",
  };

  const msgRes = await fetchApi(msgApiParams);

  const msgData: msgDataType[] = Array.isArray(msgRes.data) ? msgRes.data : [];

  return {
    props: { groupId: id, groupData, msgData },
  };
}

export default function GroupProfilePage({
  groupId,
  groupData,
  msgData,
}: GroupProfilePageProps) {
  const data = { groupId, groupData, msgData };
  return (
    <Layout pageCategory="group">
      <GroupProfile data={data} />
    </Layout>
  );
}
