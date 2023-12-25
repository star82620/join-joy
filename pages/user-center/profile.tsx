import React from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/common/components/Layout";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import Wrapper from "@/modules/UserCenter/Wrapper";
import ProfileSetting from "@/modules/UserCenter/ProfileSetting";
import { UserProfileType } from "@/constants/globalTypes";
import { ProfileSettingPageProps } from "@/modules/UserCenter/date";

async function getData(authToken: string) {
  try {
    // 取得會員資料
    const profileApiParams: apiParamsType = {
      apiPath: apiPaths["get-my-profile"],
      method: "GET",
      authToken: authToken,
    };
    const profileRes = await fetchApi(profileApiParams);
    // 可能回傳解析內容，或者 null

    if (!profileRes.data) return null;

    const data: UserProfileType = await profileRes?.data;

    const profileData =
      data.description === null ? { ...data, description: "" } : data;

    return profileData;
  } catch (error) {
    console.log("Have a mistake QQ :", error);
  }
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

  const profileData = await getData(authToken);

  return {
    props: { profileData },
  };
}

export default function ProfileSettingPage({
  profileData,
}: ProfileSettingPageProps) {
  return (
    <Layout pageCategory="user-center">
      <Wrapper>
        <ProfileSetting data={profileData}></ProfileSetting>
      </Wrapper>
    </Layout>
  );
}
