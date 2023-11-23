import React from "react";
import { GetServerSidePropsContext } from "next";
import Feedback from "@/modules/Feedback";
import Layout from "@/common/components/Layout";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };
  const { authToken } = context.req.cookies;
  // if (!authToken) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {},
  };
}

export default function feedback() {
  return (
    <Layout pageCategory="setting">
      <Feedback />
    </Layout>
  );
}
