import React from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/common/components/Layout";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import Wrapper from "@/modules/UserCenter/Wrapper";
import MyFollowing from "@/modules/UserCenter/MyFollowing";

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

  let data = null;

  try {
  } catch (error) {
    console.log("Have a mistake QQ :", error);
  }

  return {
    props: { data },
  };
}

export default function FollowingPage() {
  return (
    <Layout pageCategory="user-center">
      <Wrapper>
        <MyFollowing />
      </Wrapper>
    </Layout>
  );
}
