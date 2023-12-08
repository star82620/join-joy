import React from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/common/components/Layout";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import Wrapper from "@/modules/UserCenter/Wrapper";
import ProfileSetting from "@/modules/UserCenter/ProfileSetting";
import { UserProfileType } from "@/constants/globalTypes";
import { ProfileSettingPageProps } from "@/modules/UserCenter/date";

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

  let profileData = null;

  try {
    // 取得會員資料
    const profileApiParams: apiParamsType = {
      apiPath: apiPaths["get-my-profile"],
      method: "GET",
      authToken: authToken,
    };
    const profileRes = await fetchApi(profileApiParams);
    const data: UserProfileType = await profileRes?.data;
    if (profileRes.data) {
      profileData =
        data.description === null ? { ...data, description: "" } : data;
    }
  } catch (error) {
    console.log("Have a mistake QQ :", error);
  }

  return {
    props: { profileData },
  };
}

export default function ProfileSettingPage({
  profileData,
}: ProfileSettingPageProps) {
  console.log(profileData);
  return (
    <Layout pageCategory="user-center">
      <Wrapper>
        <ProfileSetting data={profileData}></ProfileSetting>
      </Wrapper>
    </Layout>
  );
}
