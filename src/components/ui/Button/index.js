import React from 'react'
import classes from './button.module.scss'
const Button = ({ title, icon, type = 'primary', children, ...rest }) => {
  return (
    <>
      <button className={`${classes[type]} inline-flex items-center space-x-md`} {...rest}>
        <span>{title || children}</span>
        {icon && icon}
      </button>
    </>
  )
}

export default Button