import React, { createContext } from "react";
import { GetServerSidePropsContext } from "next";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import Layout from "@/common/components/Layout";
import GroupManagement from "@/modules/UserCenter/GroupManagement";
import {
  GroupDataContextType,
  GroupDataType,
  GroupManagePageProps,
  defaultGamesData,
  defaultGroupsData,
  defaultMembersData,
} from "@/modules/UserCenter/GroupManagement/data";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // 獲取 id
  const { id } = context.params as { id: string };

  // 獲取該揪團資訊
  const groupApiParams: apiParamsType = {
    apiPath: `${apiPaths["getGroupInfo"]}/${id}`,
    method: "GET",
  };

  const groupRes = await fetchApi(groupApiParams);
  const groupData: GroupDataType = groupRes?.data?.groupWithGames ?? [];

  // 獲取該揪團審核 & 未審核成員
  const memberApiParams: apiParamsType = {
    apiPath: `${apiPaths["getGroupAllMember"]}?groupId=${id}`,
    method: "GET",
  };
  const memberRes = await fetchApi(memberApiParams);
  const membersData = memberRes?.data ?? [];

  // 獲取該揪團店家擁有遊戲列表
  const storeId = groupData.store?.storeId;
  let gamesData = [];
  if (storeId) {
    const gamesApiParams: apiParamsType = {
      apiPath: `${apiPaths["getStoreGames"]}/${storeId}`,
      method: "GET",
    };
    const gamesRes = await fetchApi(gamesApiParams);
    gamesData = gamesRes?.data?.gamelist ?? [];
  }

  return {
    props: { groupId: id, groupData, membersData, gamesData },
  };
}

export const GroupDataContext = createContext<GroupDataContextType>({
  groupId: 0,
  groupData: defaultGroupsData,
  membersData: defaultMembersData,
  gamesData: defaultGamesData,
});

export default function GroupManagePage({
  groupId,
  groupData,
  membersData,
  gamesData,
}: GroupManagePageProps) {
  console.log("groupId", groupId);
  console.log("groupData", groupData);
  console.log("membersData", membersData);
  console.log("gamesData", gamesData);
  return (
    <Layout pageCategory="user-center">
      <GroupDataContext.Provider
        value={{ groupId, groupData, membersData, gamesData }}
      >
        <GroupManagement />
      </GroupDataContext.Provider>
    </Layout>
  );
}
