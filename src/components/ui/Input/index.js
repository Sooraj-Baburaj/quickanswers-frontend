import React from "react";

const Input = ({
  id,
  error,
  subText,
  type = "text",
  value = "",
  label = "",
  placeholder = "",
  name = "",
  classNames = "",
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
        className={`border border-[#E8E4EB] min-h-[40px] px-lg py-sm rounded-[10px] ${classNames}`}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && (
        <span className="flex items-center text-sm text-red-500 rounded-lg mt-sm px-sm">
          {error}
        </span>
      )}
      {subText && (
        <span className="flex items-center text-md mt-sm px-sm">{subText}</span>
      )}
    </div>
  );
};

export default Input;
