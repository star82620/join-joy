import React from "react";
import { GetServerSidePropsContext } from "next";
import Feedback from "@/modules/Feedback";
import Layout from "@/common/components/Layout";
import { FeedbackPageProps } from "@/modules/Feedback/data";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { id } = context.params as { id: string };

    const { authToken } = context.req.cookies;
    // if (!authToken) {
    //   return {
    //     redirect: {
    //       destination: "/login",
    //       permanent: false,
    //     },
    //   };
    // }

    // 取得揪團資料
    const groupApiParams: apiParamsType = {
      apiPath: `${apiPaths["get-group-info"]}/${id}`,
      method: "GET",
    };
    const groupRes = await fetchApi(groupApiParams);
    let groupData = null;

    if (groupRes.status) {
      groupData = groupRes?.data.groupWithGames;
      console.log("ooooo", groupData);
    }

    // 取得團員評價資料
    const memberApiParams: apiParamsType = {
      apiPath: `${apiPaths["check-group-rating"]}/${id}`,
      method: "GET",
      authToken: authToken,
    };
    const res = await fetchApi(memberApiParams);
    let memberRatingData = null;

    if (res.status) {
      memberRatingData = res?.data;
      console.log("rrrrr", memberRatingData);
    }

    console.log("aaa", res);

    return {
      props: { id, groupData, memberRatingData },
    };
  } catch (error) {
    console.error(error);
  }
}

export default function FeedbackPage({
  id,
  groupData,
  memberRatingData,
}: FeedbackPageProps) {
  console.log("aaaaaaa", memberRatingData);
  if (!memberRatingData || !groupData.store) return <div>挖哈哈哈哈哈</div>;

  return (
    <Layout pageCategory="setting">
      <Feedback
        groupId={id}
        groupData={groupData}
        memberRatingData={memberRatingData}
      />
    </Layout>
  );
}
