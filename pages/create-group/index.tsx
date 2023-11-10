import React from "react";
import Layout from "@/common/components/Layout";
import CreateGroup from "@/modules/CreateGroup";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";

export async function getServerSideProps(context) {
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

  return {
    props: {},
  };
}

export default function CreateGroupPage() {
  return (
    <Layout
      pageCategory="create-group"
      mainClassName="py-[88px] lg:py-18 md:py-16 sm:py-14"
    >
      <CreateGroup />
    </Layout>
  );
}
