import React, { createContext } from "react";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import { GroupDataType } from "@/modules/GroupProfile/data";
import Layout from "@/common/components/Layout";
import ManageGroup from "@/modules/UserCenter/MyGroups/ManageGroup";
import { GroupDataContextType } from "@/modules/UserCenter/MyGroups/ManageGroup/data";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const groupApiParams: apiParamsType = {
    apiPath: `/group/easydetail/${id}`,
    method: "GET",
  };

  const groupRes = await fetchApi(groupApiParams);
  const groupData: GroupDataType = groupRes.data.groupWithGames;

  return {
    props: { groupId: id, groupData },
  };
}

// const defaultContext = {
//   groupId:0,
//   groupData:
//     {
//       groupName: ""
//       groupStatus: "opening";
//       place: null,
//       store: StoreType;
//       date: "",
//       startTime: "",
//       endTime: "",
//       cost: "",
//       totalMemberNum: number;
//       games: GameItemType[];
//       description: "",
//       members: MemberType[];
//       tags: Array<string>;

//   }
// }

const GroupDataContext = createContext<GroupDataContextType>(null);

export default function GroupManagePage({ groupId, groupData }) {
  return (
    <Layout pageCategory="user-center">
      <ManageGroup />
    </Layout>
  );
}
