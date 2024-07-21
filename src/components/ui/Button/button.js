import React from 'react'
import classes from './button.module.scss'
const Button = ({title, type = 'primary', classNames}) => {
  return (
    <button className={`${classes[type]} ${classNames}`}>
        <span>{title}</span>
    </button>
  )
}

export default Button