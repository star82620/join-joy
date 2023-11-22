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
  // 如果不是團主 => 404

  const { authToken } = context.req.cookies;

  if (!authToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // 獲取 id
  const { id } = context.params as { id: string };

  // 獲取該揪團資訊
  const groupApiParams: apiParamsType = {
    apiPath: `${apiPaths["get-manage-group"]}/${id}`,
    method: "GET",
    authToken: authToken,
  };

  const groupRes = await fetchApi(groupApiParams);

  if (!groupRes.status) {
    return {
      redirect: {
        destination: "/404",
        permanent: true,
      },
    };
  }

  const groupData: GroupDataType = groupRes.data?.groupWithGames;

  // 獲取該揪團審核 & 未審核成員
  const memberApiParams: apiParamsType = {
    apiPath: `${apiPaths["get-group-all-member"]}?groupId=${id}`,
    method: "GET",
  };
  const memberRes = await fetchApi(memberApiParams);
  const membersData = memberRes?.data ?? [];

  // 獲取該揪團店家擁有遊戲列表
  const storeId = groupData.store?.storeId;
  let gamesData = [];
  if (storeId) {
    const gamesApiParams: apiParamsType = {
      apiPath: `${apiPaths["get-store-games"]}/${storeId}`,
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
