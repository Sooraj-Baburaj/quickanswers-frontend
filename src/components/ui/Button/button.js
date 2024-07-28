import React from "react";
import classes from "./button.module.scss";
const Button = ({ title, type = "primary", className }) => {
  return (
    <button className={`${classes[type]} ${className}`}>
      <span>{title}</span>
    </button>
  );
};

export default Button;
