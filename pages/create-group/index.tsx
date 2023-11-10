import React from "react";
import Layout from "@/common/components/Layout";
import CreateGroup from "@/modules/CreateGroup";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";

export async function getServerSideProps(context) {
  const { req } = context;
  const { authToken } = req.cookies;

  const apiParams: apiParamsType = {
    apiPath: "/auth/checkLoginStatus",
    method: "GET",
  };
  const res = await fetchApi(apiParams);
  const data = res ? res : null;

  return {
    props: {
      res: data,
      authToken: authToken,
    },
  };
}

export default function CreateGroupPage(props) {
  const { res } = props;
  console.log("res", res);
  return (
    <Layout
      pageCategory="create-group"
      mainClassName="py-[88px] lg:py-18 md:py-16 sm:py-14"
    >
      <CreateGroup />
    </Layout>
  );
}
