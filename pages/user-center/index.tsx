import React, { createContext } from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/common/components/Layout";
import UserCenter from "@/modules/UserCenter";
import apiPaths from "@/constants/apiPaths";
import {
  UserCenterPageProps,
  DataContextType,
  ProfileDataType,
  GroupsDataType,
  GroupRatingsType,
  GroupRatingType,
  defaultProfileData,
  defaultGroupsData,
  defaultGroupRatingSet,
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

  // 取得揪團資料
  const groupsUrl = `${envUrl}${apiPaths["my-groups-list"]}`;
  const groupsRes = await fetch(groupsUrl, apiHeaders);
  const groupsJson = await groupsRes.json();
  const groupsData: GroupsDataType[] = await groupsJson.data.info;

  // 取得個別揪團的評價狀態
  const groupRatingSet: GroupRatingsType[] = [];
  groupsData.reduce((set, group) => {
    const id = group.groupId;
    const url = `${envUrl}${apiPaths["check-group-rating"]}/${id}`;

    fetch(url, apiHeaders)
      .then((res) => res.json())
      .then((result) => {
        const data: GroupRatingType[] = result.data;
        set.push({ id: id, data: data });
      });

    return set;
  }, groupRatingSet);

  return {
    props: { profileData, groupsData, groupRatingSet },
  };
}

export const DataContext = createContext<DataContextType>({
  profileData: [defaultProfileData],
  groupsData: [defaultGroupsData],
  groupRatingSet: [defaultGroupRatingSet],
});

export default function UserCenterPage({
  profileData,
  groupsData,
  groupRatingSet,
}: UserCenterPageProps) {
  const datas = { profileData, groupsData, groupRatingSet };
  console.log(profileData);
  console.log(groupsData);

  return (
    <Layout pageCategory="user-center" mainClassName="pt-14 pb-20 md:py-9">
      <DataContext.Provider value={datas}>
        <UserCenter />
      </DataContext.Provider>
    </Layout>
  );
}
