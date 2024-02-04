import React from "react"
import Input from "./Input/Input"
import Textarea from "./Textarea/Textarea"

const Forms = () => {
  return(
    <form action="">
      <Input label='name' type='text' placeholder='Digite seu nome aqui...'/>
      <Input label='email' type='email' placeholder='Digite seu email...'/>
      <Input label='phone' type='text' placeholder='Digite seu telefone (XX) XXXXX-XXXX'/>
      <Textarea label='message' placeholder='Deixe sua mensagem...'/>
    </form>
  )
}

export default Forms