import { defaultImages } from "@/constants/defaultImages";

export default function convertImgSrc(img: string | null) {
  const defaultImgSrc = defaultImages.userProfileImg;

  if (!img) return defaultImgSrc;

  const result = img || defaultImgSrc;

  return result;
}
