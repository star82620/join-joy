import React from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import GroupProfile from "@/modules/GroupProfile";
import Layout from "@/common/components/Layout";

async function getStaticPath() {
  const apiParams: apiParamsType = {
    apiPath: "/group/getallgroupid",
    method: "GET",
  };

  const data = await fetchApi(apiParams);

  const paths = data.map((group) => {
    return {
      params: {
        groupId: group,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

async function getStaticProps({ params }) {
  const { groupId } = params;

  const url = `/group/easydetail/${groupId}`;
  // const apiParams: apiParamsType = {
  //   apiPath: url,
  //   method: "GET",
  // };

  // const data = await fetchApi(apiParams);
  // const a = data ? "yes" : "aaaa";

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { groupData: data, id: url },
  };
}

export default function GroupProfilePage({ groupData, id }) {
  console.log(groupData, id);
  return (
    <Layout pageCategory="group">
      <GroupProfile />
      {/* {groupData.groupId} */}
    </Layout>
  );
}
