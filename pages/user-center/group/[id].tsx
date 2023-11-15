import React, { createContext } from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import Layout from "@/common/components/Layout";
import ManageGroup from "@/modules/UserCenter/MyGroups/ManageGroup";
import {
  GroupDataContextType,
  GroupDataType,
  GroupManagePageProps,
  defaultGroupsData,
  defaultMemberData,
} from "@/modules/UserCenter/MyGroups/ManageGroup/data";
import apiPaths from "@/constants/apiPaths";

export async function getServerSideProps(context) {
  // 從訪問內容獲取 id
  const { id } = context.params;

  // 獲取該揪團資訊
  const groupApiParams: apiParamsType = {
    apiPath: `${apiPaths["getGroupInfo"]}/${id}`,
    method: "GET",
  };

  const groupRes = await fetchApi(groupApiParams);
  const groupData: GroupDataType = groupRes.data.groupWithGames;

  // 獲取該揪團審核即未審核成員

  // 獲取該揪團資訊
  const memberApiParams: apiParamsType = {
    apiPath: `${apiPaths["getGroupAllMember"]}?groupId=${id}`,
    method: "GET",
  };
  const memberRes = await fetchApi(memberApiParams);
  const memberData = memberRes.data;

  return {
    props: { groupId: id, groupData, memberData },
  };
}

export const GroupDataContext = createContext<GroupDataContextType>({
  groupId: 0,
  groupData: defaultGroupsData,
  memberData: defaultMemberData,
});

export default function GroupManagePage({
  groupId,
  groupData,
  memberData,
}: GroupManagePageProps) {
  return (
    <Layout pageCategory="user-center">
      <GroupDataContext.Provider value={{ groupId, groupData, memberData }}>
        <ManageGroup />
      </GroupDataContext.Provider>
    </Layout>
  );
}
