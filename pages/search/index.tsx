import React from "react";
import Layout from "@/common/components/Layout";
import SearchResults from "@/modules/SearchResults";
import TopSearchBar from "@/common/components/Layout/TopSearchBar";

export default function SearchPage() {
  return (
    <Layout pageCategory="search">
      <TopSearchBar />
      <div className="pt-12 pb-[108px]">
        <SearchResults />
      </div>
    </Layout>
  );
}
