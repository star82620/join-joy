import React from "react";
import { TextInputProps } from "./data";

export default function TextInput({
  id,
  inputName,
  placeholder,
  value,
  onChange,
  required,
  disabled,
}: TextInputProps) {
  return (
    <input
      type="text"
      className="inputStyle"
      id={id}
      name={inputName}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
}

// const Select = () => {
//   return (
//     <select
//       className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
//       id={id}
//       name=""
//     >
//       <option>daaa</option>
//     </select>
//   );
// };

// export default function TextInput({
//   label,
//   type,
//   inputName,
//   placeholder,
//   required,
//   errorMsg,
// }) {
//   return (
//     <>
//       <input
//         className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3 placeholder:text-gray-400 md:placeholder:text-sm"
//         type={type}
//         name={inputName}
//         placeholder={placeholder}
//       ></input>
//       ;
//     </>
//   );
// }
