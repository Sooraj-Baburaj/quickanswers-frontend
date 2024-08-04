import React from "react";

const Input = ({
  id,
  error,
  type = "text",
  value = "",
  label = "",
  placeholder = "",
  name = "",
  onChange = () => {},
  ...props
}) => {
  return (
    <div className="w-full relative flex flex-col">
      {label && (
        <label className="text-[#6A4B7D] text-lg mb-xs" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={
          "border border-[#cacaca] rounded-sm min-h-[40px] px-lg py-sm bg-[#FAFAFB]"
        }
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && (
        <span className="flex items-center text-md text-red-500 rounded-lg mt-sm">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
