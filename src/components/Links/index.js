import React from 'react'
import Link from 'next/link'

const Links = ({children, ...rest}) => {
  return (
    <Link {...rest}>{children}</Link>
  )
}

export default Links