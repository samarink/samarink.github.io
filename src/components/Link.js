import React from "react"
import { Link as GatsbyLink } from "gatsby"

export default function Link({ file, to, children, isCurrent, ...rest }) {
  if (file) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink isCurrent={isCurrent} to={to} {...rest}>
      {children}
    </GatsbyLink>
  )
}
