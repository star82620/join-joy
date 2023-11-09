import React from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import GroupProfile from "@/modules/GroupProfile";
import Layout from "@/common/components/Layout";

export async function getStaticPaths() {
  const apiParams: apiParamsType = {
    apiPath: "/group/getallgroupid",
    method: "GET",
  };

  const res = await fetchApi(apiParams);
  const data = res.data;

  const paths = data.map((group) => {
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

export async function getStaticProps({ params }) {
  const { id } = params;

  const apiParams: apiParamsType = {
    apiPath: `/group/easydetail/${id}`,
    method: "GET",
  };

  const res = await fetchApi(apiParams);
  const data = await res.data.groupWithGames;

  return {
    props: { groupData: data },
  };
}

export default function GroupProfilePage(props) {
  const { groupData } = props;

  return (
    <Layout pageCategory="group">
      <GroupProfile data={groupData} />
    </Layout>
  );
}
