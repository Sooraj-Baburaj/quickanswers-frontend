import React from 'react'
import classes from './button.module.scss'
const Button = ({ title, type = 'primary', children, ...rest }) => {
  return (
    <>
      <button className={classes[type]} {...rest}>
        <span>{title || children}</span>
      </button>
    </>
  )
}

export default Button