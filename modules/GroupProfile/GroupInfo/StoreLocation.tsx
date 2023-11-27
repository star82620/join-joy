import Link from "@/common/components/GeneralLink";
import { StoreLocationProps } from "../data";

export default function StoreLocation({ store }: StoreLocationProps) {
  if (!store) return null;
  return (
    <p className="leading-6">
      <span className="font-medium whitespace-nowrap">
        <Link href={`/store/${store.storeId}`} target="_blank">
          {store.storeName}
        </Link>
      </span>
      <span className="text-sm whitespace-nowrap ml-2 md:ml-0 before:content-['（'] after:content-['）']">
        {store.address}
      </span>
    </p>
  );
}
