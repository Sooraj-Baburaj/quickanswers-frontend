import React from 'react'
import Link from 'next/link'
import classes from './links.module.scss'

const Links = ({children, type = 'link', ...rest}) => {
  return (
    <Link className={classes[type]} {...rest}>{children}</Link>
  )
}

export default Links