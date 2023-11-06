import Layout from "@/common/components/Layout";
import UserCenter from "@/modules/UserCenter";
import React from "react";

export default function UserCenterPage() {
  return (
    <Layout pageCategory="user-center" mainClassName="pt-14 pb-20 md:py-9">
      <UserCenter />
    </Layout>
  );
}
