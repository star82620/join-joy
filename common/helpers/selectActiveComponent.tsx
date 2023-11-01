import React from "react";
import {
  TabNameType,
  ReturnComponentType,
} from "@/common/components/FileWrapper/data";

export function selectActiveComponent(
  activeTab: TabNameType,
  returnComponent: ReturnComponentType
) {
  return returnComponent[activeTab] || null;
}
