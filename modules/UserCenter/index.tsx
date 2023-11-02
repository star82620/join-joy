import ModalWrapper from "@/common/components/ModalWrapper";
import React from "react";

export default function UserCenter() {
  return (
    <div className="container flex items-start gap-9">
      <div className="w-[216px]">
        <ModalWrapper title="" layout="secondary">
          ce
        </ModalWrapper>
      </div>
      <div className="grow">
        <ModalWrapper title="我的個人檔案" layout="primary">
          content
        </ModalWrapper>
      </div>
    </div>
  );
}
