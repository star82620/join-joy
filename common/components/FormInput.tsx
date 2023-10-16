export default function FormInput({ formSet }) {
  return formSet.map((input) => (
    <label key={input.inputName}>
      <h4>{input.label}</h4>
      <input
        className="w-full border-b-2 bg-yellow-tint mt-2 py-2 px-3"
        type={input.type}
        name={input.inputName}
        placeholder={input.placeholder}
        required={input.required}
      ></input>
    </label>
  ));
}
