import { defaultImages } from "@/constants/defaultImages";

export default function convertImgSrc(img: string | null) {
  // const checkedSrc = img?.includes("http");

  // if (checkedSrc) return img;

  // const convertImgSrc = `${process.env.NEXT_PUBLIC_API_URL}${img}`;

  // console.log("heeee", img, convertImgSrc);

  const defaultImgSrc = defaultImages.userProfileImg;

  const result = img ? img : defaultImgSrc;

  return result;
}
