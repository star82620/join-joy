import React, { ReactNode } from "react";
import ModalWrapper from "@/common/components/ModalWrapper";
import UserNavBar from "./UserNavBar";
import { WrapperProps } from "./date";

export default function Wrapper({ children }: WrapperProps) {
  return (
    <section className="container flex items-start gap-9 lg:gap-6 pt-14 pb-20 md:py-9 grow h-full">
      <div className="w-[216px] md:hidden flex-shrink-0 h-full">
        <ModalWrapper title="" layout="secondary" fill>
          {/* <UserNavBar
            navSet={navSet}
            activeNav={activeNav}
            openSubList={openSubList}
            setIconImg={setIconImg}
            toggleActiveNav={toggleActiveNav}
            toggleActiveSubNav={toggleActiveSubNav}
          /> */}
        </ModalWrapper>
      </div>
      <div className="grow">{children}</div>
    </section>
  );
}
