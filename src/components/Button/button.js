import React from 'react'
import classes from './button.module.scss'
const Button = ({title, type = 'primary', icon, ...rest}) => {
  return (
    <div className={classes[type]}>
        <span>{title}</span>
    </div>
  )
}

export default Button