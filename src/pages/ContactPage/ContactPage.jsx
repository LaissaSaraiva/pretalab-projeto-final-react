import React from "react";
import styles from './ContactPage.module.css'
import Forms from "../../components/Forms/Forms"
import Input from "../../components/Forms/Input/Input"
import Textarea from "../../components/Forms/Textarea/Textarea"
import Button from "../../components/Forms/Button/Button"

const ContactPage = () => {

function handleClick(event) {
  event.preventDefault();
  alert("Obrigada por visitar meu projeto! 😉 Essa função ainda será implementada!")
}

  return (
    <section className={styles.contact__container}>
      <div className={styles.contact__container__wrapper}>
        <div className={styles.contact__description}>
          <h1>Contato</h1>
          <p>
            Quer saber mais sobre meus projetos?<br/>
            Entre em contato!
          </p>
        </div>
        
        <div>
          <Forms onSubmit={handleClick}>
            <Input label='name' type='text' placeholder='Digite seu nome aqui...'/>
            <Input label='email' type='email' placeholder='Digite seu email...'/>
            <Input label='phone' type='text' placeholder='Digite seu telefone (XX) XXXXX-XXXX'/>
            <Textarea label='message' placeholder='Deixe sua mensagem...'/>
            <Button type='submit' value='Submit'/>
          </Forms>
        </div>

      </div>
    </section>
  )
}

export default ContactPage;