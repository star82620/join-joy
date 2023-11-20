import React, { Children, ReactNode, createContext, useState } from "react";

type SearchTabContextType = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

type SearchTabProviderProps = {
  children: ReactNode;
};

const defaultSearchTabContext: SearchTabContextType = {
  activeTab: "group",
  setActiveTab: () => {},
};

export const SearchTabContext = createContext(defaultSearchTabContext);

export default function SearchTabProvider({
  children,
}: SearchTabProviderProps) {
  const [activeTab, setActiveTab] = useState<string>("group");

  const dataSet = {
    activeTab: activeTab,
    setActiveTab: setActiveTab,
  };

  return (
    <SearchTabContext.Provider value={dataSet}>
      {children}
    </SearchTabContext.Provider>
  );
}
