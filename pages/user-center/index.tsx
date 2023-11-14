import React, { createContext } from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/common/components/Layout";
import UserCenter from "@/modules/UserCenter";
import apiPaths from "@/constants/apiPaths";
import {
  UserCenterPageProps,
  DataContextType,
  ProfileDataType,
  GroupDataItemType,
  GroupRatingsType,
  GroupDataSetType,
  defaultProfileData,
  defaultGroupsData,
  defaultGroupRatingsSet,
} from "@/modules/UserCenter/date";

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

  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiHeaders = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  // 取得會員資料
  const profileUrl = `${envUrl}${apiPaths["my-profile"]}`;
  const profileRes = await fetch(profileUrl, apiHeaders);
  const profileJson = await profileRes.json();
  const profileData: ProfileDataType = await profileJson.data;

  // 取得所有揪團資料
  const groupsUrl = `${envUrl}${apiPaths["my-groups-list"]}`;
  const groupsRes = await fetch(groupsUrl, apiHeaders);
  const groupsJson = await groupsRes.json();
  const groupsData: GroupDataSetType = await groupsJson.data;

  // 取得個別揪團的評價狀態（揪團紀錄中全部的揪團）

  async function fetchGroupRatings(
    groupsData: GroupDataItemType[]
  ): Promise<GroupRatingsType[]> {
    const fetchPromises = groupsData.map(async (group) => {
      const url = `${envUrl}${apiPaths["check-group-rating"]}/${group.groupId}`;
      const res = await fetch(url, apiHeaders);
      const result = await res.json();
      const data = result.data ? result.data : null;
      return {
        id: group.groupId,
        data: data,
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
  const datas = { profileData, groupsData, groupRatingsSet };

  return (
    <Layout pageCategory="user-center" mainClassName="pt-14 pb-20 md:py-9">
      <DataContext.Provider value={datas}>
        <UserCenter />
      </DataContext.Provider>
    </Layout>
  );
}

export default UserCenterPage;
