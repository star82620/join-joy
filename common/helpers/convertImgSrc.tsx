import { defaultImages } from "@/constants/defaultImages";

export default function convertImgSrc(img: string | null) {
  const checkedSrc = img?.includes("http");

  if (checkedSrc) return img;

  const convertImgSrc = `/upload${img}`;

  const defaultImgSrc = defaultImages.userProfileImg;

  const result = img ? convertImgSrc : defaultImgSrc;

  return result;
}
