import React from "react";
import Layout from "@/common/components/Layout";
import Login from "@/modules/Login";

export default function LoginPage() {
  return (
    <Layout
      pageCategory="login"
      mainClassName="py-[88px] lg:py-18 md:py-16 sm:py-14"
    >
      <Login />
    </Layout>
  );
}
