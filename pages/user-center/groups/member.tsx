import React from "react";
import { GetServerSidePropsContext } from "next";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import Layout from "@/common/components/Layout";
import Wrapper from "@/modules/UserCenter/Wrapper";
import GroupsList from "@/modules/UserCenter/MyGroups/GroupsList";
import { MyGroupSetType } from "@/constants/types/apiTypes/group";
import { MyGroupsPageProps } from "@/modules/UserCenter/date";
import {
  GroupRatingStatusItemType,
  GroupRatingStatusSetType,
} from "@/constants/types/apiTypes/comment";

// 取得個別揪團的評價狀態（揪團紀錄中全部的揪團）
async function fetchGroupRatings(
  groupSetData: MyGroupSetType,
  authToken: string
): Promise<GroupRatingStatusSetType[]> {
  const fetchPromises = groupSetData.map(async (group) => {
    const commentsApiParams: apiParamsType = {
      apiPath: `${apiPaths["check-group-rating"]}/${group.groupId}`,
      method: "GET",
      authToken: authToken,
    };

    try {
      const commentsRes = await fetchApi(commentsApiParams);

      const commentsData: GroupRatingStatusItemType | null =
        commentsRes?.data ?? null;

      return {
        id: group.groupId,
        groupStatus: group.groupStatus,
        data: commentsData,
      };
    } catch (error) {
      console.log(error);
      return {
        id: group.groupId,
        groupStatus: group.groupStatus,
        data: null,
      };
    }
  });

  return await Promise.all(fetchPromises);
}

async function getData(authToken: string) {
  let groupSetData: MyGroupSetType | null = null;
  let ratingStatusSet: GroupRatingStatusSetType[] | null = null;

  try {
    // 取得所有揪團資料
    const groupsApiParams: apiParamsType = {
      apiPath: apiPaths["my-groups-list"],
      method: "GET",
      authToken: authToken,
    };

    const groupsRes = await fetchApi(groupsApiParams);

    if (!groupsRes.data) return { groupSetData: null, ratingStatusSet: null };

    groupSetData = await groupsRes.data.member;

    if (!groupSetData)
      return { groupSetData: groupSetData, ratingStatusSet: null };

    const closedGroups = groupSetData.filter((group) => {
      return group.groupStatus === "已結束";
    });

    // 取得所有團的評價狀態
    ratingStatusSet = await fetchGroupRatings(closedGroups, authToken);
  } catch (error) {
    console.log(error);
  }

  return { groupSetData, ratingStatusSet };
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  const { authToken } = req.cookies;
  if (!authToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { groupSetData, ratingStatusSet } = await getData(authToken);

  return {
    props: { groupSetData, ratingStatusSet },
  };
}

export default function MyGroupsMemberPage({
  groupSetData,
  ratingStatusSet,
}: MyGroupsPageProps) {
  return (
    <Layout pageCategory="user-center">
      <Wrapper>
        <GroupsList
          pageCategory="member"
          groupSetData={groupSetData}
          ratingStatusSet={ratingStatusSet}
        />
      </Wrapper>
    </Layout>
  );
}
