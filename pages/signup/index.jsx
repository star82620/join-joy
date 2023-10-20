import React from "react";
import Signup from "@/modules/Signup";
import Layout from "@/common/components/Layout";

export default function SignupPage() {
  return (
    <Layout
      pageCategory="signup"
      mainClassName="py-[88px] lg:py-18 md:py-16 sm:py-14"
    >
      <Signup />
    </Layout>
  );
}
