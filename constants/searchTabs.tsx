import { TabType } from "@/common/components/FileWrapper/data";
import { globalIcons } from "./iconsPackage/globalIcons";

export const searchTabs: TabType[] = [
  {
    tabName: "group",
    tabText: "找揪團",
    img: {
      src: globalIcons["search-group-light"].src,
      alt: globalIcons["search-group-light"].alt,
    },
  },
  {
    tabName: "store",
    tabText: "找店家",
    img: {
      src: globalIcons["search-store-light"].src,
      alt: globalIcons["search-store-light"].alt,
    },
  },
];
