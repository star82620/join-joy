import {
  ReturnComponentType,
  TabNameType,
} from "../components/FileWrapper/data";

export default function selectActiveComponent(
  activeTab: TabNameType,
  returnComponent: ReturnComponentType
) {
  return returnComponent[activeTab] || null;
}
