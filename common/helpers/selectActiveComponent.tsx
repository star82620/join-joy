import {
  ReturnComponentType,
  TabNameType,
} from "../components/WrapperFile/data";

export default function selectActiveComponent(
  activeTab: TabNameType,
  returnComponent: ReturnComponentType
) {
  return returnComponent[activeTab] || null;
}
