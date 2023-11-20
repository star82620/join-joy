import React, { useState } from "react";
import TitleBlock from "./TitleBlock";
import Image from "../FillImage";
import icons from "@/constants/iconsPackage/createGroupIcons";
import { GroupTagItemType } from "@/constants/globalTypes";
import { groupTags } from "@/constants/wordsIndex";
import {
  GroupTagSelectorProps,
  HandleSelectedTagType,
  ToggleTagsBlockType,
} from "./data";

export default function GroupTagSelector({
  selectedTags,
  setSelectedTags,
}: GroupTagSelectorProps) {
  const [isTagsHidden, setIsTagsHidden] = useState<boolean>(true);
  const isEmptySelectedTags = selectedTags.length === 0;

  const toggleIcon = isTagsHidden ? "arrow-down" : "arrow-up";

  const toggleTagsBlock: ToggleTagsBlockType = (e) => {
    setIsTagsHidden(!isTagsHidden);
  };

  const handleSelectedTag: HandleSelectedTagType = (e) => {
    const { id, text } = e.currentTarget.dataset as GroupTagItemType;

    if (!id || !text) return;
    const selectedTag = { id, text };

    const index = selectedTags.findIndex((item) => {
      return item.id === id;
    });

    if (index < 0) {
      setSelectedTags((prevState) => [...prevState, selectedTag]);
    }

    const newValue = [...selectedTags];
    newValue.splice(index, 1);
    setSelectedTags(newValue);
  };

  return (
    <label>
      <TitleBlock title="揪團整體面向">
        <div className="relative" onClick={toggleTagsBlock}>
          <div className="w-full h-10 inputStyle last:after:content-['']">
            {isEmptySelectedTags && (
              <span className="text-gray-500">可複選</span>
            )}
            {selectedTags.map((tag, index, ary) => {
              const tagStyle =
                index !== ary.length - 1 ? "after:content-['、']" : "";
              return (
                <span
                  key={tag.text}
                  className={`before:content-['#'] ${tagStyle}`}
                >
                  {tag.text}
                </span>
              );
            })}
          </div>
          <span className="absolute top-2 right-3">
            <Image
              src={icons[toggleIcon].src}
              alt={icons[toggleIcon].alt}
              widthProp="w-6 md:w-5"
              heightProp="h-6 md:h-5"
            />
          </span>
          {!isTagsHidden && (
            <div className="w-full bg-white py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm absolute left-0 top-10">
              {groupTags.map((tag) => {
                const { id, text } = tag;
                return (
                  <p
                    key={id}
                    className="p-2 hover:bg-gray-50"
                    data-id={id}
                    data-text={text}
                    onClick={(e) => handleSelectedTag(e)}
                  >
                    #{text}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </TitleBlock>
    </label>
  );
}
