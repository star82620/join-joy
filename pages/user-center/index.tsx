import React, { createContext } from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/common/components/Layout";
import UserCenter from "@/modules/UserCenter";
import apiPaths from "@/constants/apiPaths";
import {
  UserCenterPageProps,
  DataContextType,
  ProfileDataType,
  GroupRatingsType,
  GroupDataSetType,
  defaultProfileData,
  defaultGroupsData,
  defaultGroupRatingsSet,
} from "@/modules/UserCenter/date";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import { MyGroupsItemType } from "@/constants/globalTypes";

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

  // 取得會員資料
  const profileApiParams: apiParamsType = {
    apiPath: apiPaths["get-my-profile"],
    method: "GET",
    authToken: authToken,
  };
  const profileRes = await fetchApi(profileApiParams);
  const profileData: ProfileDataType = await profileRes?.data;

  // 取得所有揪團資料
  const groupsApiParams: apiParamsType = {
    apiPath: apiPaths["my-groups-list"],
    method: "GET",
    authToken: authToken,
  };
  const groupsRes = await fetchApi(groupsApiParams);
  const groupsData: GroupDataSetType = await groupsRes.data;

  // 取得個別揪團的評價狀態（揪團紀錄中全部的揪團）
  async function fetchGroupRatings(
    groupsData: MyGroupsItemType[]
  ): Promise<GroupRatingsType[]> {
    const fetchPromises = groupsData.map(async (group) => {
      const commentsApiParams: apiParamsType = {
        apiPath: `${apiPaths["check-group-rating"]}/${group.groupId}`,
        method: "GET",
        authToken: authToken,
      };
      const commentsRes = await fetchApi(commentsApiParams);
      const commentsData = (await commentsRes?.data) ?? commentsRes.message;

      return {
        id: group.groupId,
        groupStatus: group.groupStatus,
        data: commentsData,
      };
    });

    return await Promise.all(fetchPromises);
  }

  const leaderGroupsData = groupsData["leader"];
  const memberGroupsData = groupsData["member"];

  let groupRatingsSet: GroupRatingsType[] = [];
  let leaderGroupRatingsSet: GroupRatingsType[] = [];
  let memberGroupRatingsSet: GroupRatingsType[] = [];
  try {
    leaderGroupRatingsSet = await fetchGroupRatings(leaderGroupsData);
    memberGroupRatingsSet = await fetchGroupRatings(memberGroupsData);
    groupRatingsSet = leaderGroupRatingsSet.concat(memberGroupRatingsSet);
  } catch (error) {
    console.error("Error fetching group ratings:", error);
  }

  return {
    props: { profileData, groupsData, groupRatingsSet },
  };
}

export const DataContext = createContext<DataContextType>({
  profileData: [defaultProfileData],
  groupsData: defaultGroupsData,
  groupRatingsSet: defaultGroupRatingsSet,
});

function UserCenterPage({
  profileData,
  groupsData,
  groupRatingsSet,
}: UserCenterPageProps) {
  const dataSet = { profileData, groupsData, groupRatingsSet };

  console.log("profileData", profileData);
  console.log("groupsData", groupsData);
  console.log("groupRatingsSet", groupRatingsSet);
  return (
    <Layout pageCategory="user-center" mainClassName="pt-14 pb-20 md:py-9">
      <DataContext.Provider value={dataSet}>
        <UserCenter />
      </DataContext.Provider>
    </Layout>
  );
}

export default UserCenterPage;
