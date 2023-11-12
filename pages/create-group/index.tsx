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

  const citiesKey: apiParamsType = {
    apiPath: apiPaths.getCities,
    method: "GET",
  };

  const citiesRes = await fetchApi(citiesKey);
  const citiesData = citiesRes?.data;

  if (!authToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

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
