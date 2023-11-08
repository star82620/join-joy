import React from "react";

type Props = {
  value: number;
  content: string;
  inputName: string;
  handle: React.ChangeEventHandler;
  isActive?: boolean;
};

export default function PreferenceBlock({
  value,
  content,
  inputName,
  handle,
  isActive,
}: Props) {
  const isChecked = !!isActive;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          className="w-0 h-0 hidden appearance-none peer"
          name={inputName}
          value={value}
          checked={isChecked}
          onChange={handle}
        />
        <p
          className={`w-20 h-[52px] flex justify-center items-center font-semibold rounded border-2 border-gray-400 bg-gray-200 shadow-preference text-gray-400 peer-checked:border-gray-950 peer-checked:bg-yellow-neutral peer-checked:shadow-preference-active peer-checked:text-gray-950`}
        >
          {content}
        </p>
      </label>
    </div>
  );
}
