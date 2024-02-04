import React from "react";
import styles from './ContactPage.module.css'
import Forms from "../../components/Forms/Forms"

const ContactPage = () => {

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
          <Forms/>
        </div>

      </div>
    </section>
  )
}

export default ContactPage;