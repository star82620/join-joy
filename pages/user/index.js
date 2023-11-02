import React from "react";
import Layout from "@/common/components/Layout";
import UserProfile from "@/modules/UserProfile";

export default function UserProfilePage() {
  return (
    <Layout pageCategory="user" mainClassName="py-14 md:py-8">
      <UserProfile />
    </Layout>
  );
}
