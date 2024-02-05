import React from "react"

const Forms = ({onSubmit , children}) => {
  return(
    <form action="" onSubmit={onSubmit}>{children}</form>
  )
}

export default Forms