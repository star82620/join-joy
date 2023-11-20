import { defaultImages } from "@/constants/defaultImages";

export default function convertImgSrc(img: string | null) {
  const convertImgSrc = `${process.env.NEXT_PUBLIC_API_URL}${img}`;

  const defaultImgSrc = defaultImages.userProfileImg;

  const result = img ? convertImgSrc : defaultImgSrc;

  return result;
}
