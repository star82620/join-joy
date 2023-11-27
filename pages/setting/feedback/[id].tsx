import React from "react";
import { GetServerSidePropsContext } from "next";
import Feedback from "@/modules/Feedback";
import Layout from "@/common/components/Layout";
import { FeedbackPageProps } from "@/modules/Feedback/data";

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
    props: { id },
  };
}

export default function FeedbackPage({ id }: FeedbackPageProps) {
  // if (!id) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Layout pageCategory="setting">
      <Feedback groupId={id} />
    </Layout>
  );
}
