import React from "react"

const Forms = ({onSubmit , children}) => {
  return(
    <form onSubmit={onSubmit}>{children}</form>
  )
}

export default Forms