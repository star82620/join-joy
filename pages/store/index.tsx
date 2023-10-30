import React from "react";
import Layout from "@/common/components/Layout";
import StoreProfile from "@/modules/StoreProfile";

export default function StoreProfilePage() {
  return (
    <>
      <Layout pageCategory="store" mainClassName="py-14 md:py-9">
        <StoreProfile />
      </Layout>
    </>
  );
}
