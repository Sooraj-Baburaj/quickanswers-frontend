import React from "react";

const Input = ({ label, type, placeholder, name, error, id, ...reset }) => {
  return (
    <div className="w-full relative flex flex-col">
      {label && (
        <label className="text-[#6A4B7D] text-lg mb-xs" htmlFor="">
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
        {...reset}
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
