import React, { createContext } from "react";
import Layout from "@/common/components/Layout";
import CreateGroup from "@/modules/CreateGroup";
import fetchApi, { apiParamsType } from "@/common/helpers/fetchApi";
import apiPaths from "@/constants/apiPaths";
import { CreateGroupPageProps } from "@/modules/CreateGroup/data";
import { GetServerSidePropsContext } from "next";

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

  const citiesApiParams: apiParamsType = {
    apiPath: apiPaths["get-cities"],
    method: "GET",
  };

  const citiesRes = await fetchApi(citiesApiParams);
  const citiesData = citiesRes?.data ?? [];

  return {
    props: { citiesData },
  };
}

export default function CreateGroupPage({ citiesData }: CreateGroupPageProps) {
  return (
    <Layout pageCategory="create-group">
      <CreateGroup citiesData={citiesData} />
    </Layout>
  );
}
