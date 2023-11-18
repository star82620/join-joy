import GroupCard from "@/common/components/GroupCard";
import React from "react";
import { groupSet } from "./data";
import Button from "@/common/components/GeneralButton";
import Link from "@/common/components/GeneralLink";

export default function LandingPage() {
  const titleStyle =
    "border-l-[6px] -ml-1.5 mb-10 md:mb-6 border-brown-light text-white text-3xl md:text-xl pl-1.5";

  return (
    <section className="">
      <div className="pb-[164px] md:pb-[120px]">search bar</div>
      <div className="bg-brown-dark pt-[72px] pb-[120px] md:pt-6 md:mb-8">
        <div className="container flex flex-col gap-[96px] md:gap-6 bg-brown-dark">
          <div>
            <h2 className={titleStyle}>就差你一個成團</h2>
            <div className="flex gap-4 md:gap-3">
              {groupSet.map((group) => {
                return (
                  <div key={group.groupId} className="max-w-[284px] w-full">
                    <GroupCard data={group} />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className={titleStyle}>你 附近 的揪團</h2>
            <div className="flex gap-4 md:gap-3">
              {groupSet.map((group) => {
                return (
                  <div key={group.groupId} className="max-w-[284px] w-full">
                    <GroupCard data={group} />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className={titleStyle}>你可能會有興趣的揪團</h2>
            <div className="flex md:flex-col gap-4 md:gap-3">
              {groupSet.map((group) => {
                return (
                  <div
                    key={group.groupId}
                    className="max-w-[284px] md:max-w-full w-full"
                  >
                    <GroupCard data={group} />
                  </div>
                );
              })}
            </div>
            <div className="mt-8 md:mt-5">
              <Button type="button" appearance="white">
                查看更多
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[124px] pb-[64px] md:py-6"></div>
    </section>
  );
}
