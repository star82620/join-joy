import { defaultImages } from "@/constants/defaultImages";

export default function convertImgSrc(img: string | null) {
  const defaultImgSrc = defaultImages.userProfileImg;

  if (!img) return defaultImgSrc;

  if (img && !img.includes("http")) {
    const formattedImg = `${process.env.NEXT_PUBLIC_API_URL}/upload${img}`;

    const result = formattedImg || defaultImgSrc;

    return result;
  }

  const result = img || defaultImgSrc;

  return result;
}
