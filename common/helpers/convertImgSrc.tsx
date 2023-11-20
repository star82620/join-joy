export default function convertImgSrc(img: string, defaultImg: string) {
  const convertImgSrc = `${process.env.NEXT_PUBLIC_API_URL}${img}`;

  const result = convertImgSrc || defaultImg;
  return result;
}
