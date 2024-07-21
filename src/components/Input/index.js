import React from "react";

const Input = ({ label, type, placeholder, name, error, id, ...reset }) => {
  return (
    <div className="w-full relative flex flex-col py-md">
      {label && <label className="text-[#6A4B7D] text-lg mb-xs" htmlFor="">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={'border border-[#EBEAEC] rounded-sm min-h-[40px] px-lg py-sm bg-[#FAFAFB]'}
        {...reset}
      />
      <span className="flex items-center text-md text-red-500 rounded-lg mt-sm">
        This is a error message
      </span>
    </div>
  );
};

export default Input;
