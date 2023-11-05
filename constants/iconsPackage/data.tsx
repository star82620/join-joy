export type IconType = {
  src: string;
  alt: string;
};

type IconIdType =
  | "my-following"
  | "my-following-active"
  | "my-groups"
  | "my-groups-active"
  | "profile-setting"
  | "profile-setting-active"
  | "my-notification"
  | "my-notification-active"
  | "logout"
  | "sub-closing"
  | "sub-opening";

export type UserNavIconsType = Record<IconIdType, IconType>;