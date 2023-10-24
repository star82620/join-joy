import React from "react";
import Layout from "@/common/components/Layout"
import CreateGroup from "@/modules/CreateGroup"

export default function CreateGroupPage() {
  return (
    <Layout
      pageCategory="create-group"
      mainClassName="py-[88px] lg:py-18 md:py-16 sm:py-14"
    >
      <CreateGroup />
    </Layout>
  )
}
