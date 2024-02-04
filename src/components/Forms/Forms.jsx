import React from "react"
import Input from "./Input/Input"

const Forms = () => {
  return(
    <form action="">
      <Input label='Nome' type='text' placeholder='Digite seu nome aqui...'/>
      <Input label='Email' type='email' placeholder='Digite seu email...'/>
      <Input label='Email' type='text' placeholder='Digite seu telefone (XX) XXXXX-XXXX'/>
    </form>
  )
}

export default Forms