import GroupCard from "@/common/components/GroupCard";
import React from "react";

export default function Landing() {
  return (
    <section className="container">
      <div className="pb-[164px] md:pb-[120px]"></div>
      <div className="flex gap-4 md:gap-3 pt-[72px] pb-[120px] md:pt-6 md:mb-8">
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>
      <div className="pt-[124px] pb-[64px] md:py-6"></div>
    </section>
  );
}
