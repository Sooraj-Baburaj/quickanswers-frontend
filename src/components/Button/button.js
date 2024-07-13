import React from 'react'
import classes from './button.module.scss'
const Button = ({title, type = 'primary'}) => {
  return (
    <button className={classes[type]}>
        <span>{title}</span>
    </button>
  )
}

export default Button