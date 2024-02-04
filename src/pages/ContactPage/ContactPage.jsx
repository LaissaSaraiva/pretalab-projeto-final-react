import React from "react";
import styles from './ContactPage.module.css'
import Forms from "../../components/Forms/Forms"

const ContactPage = () => {

  return (
    <section className={styles.contact__container}>
      <div className={styles.contact__container__wrapper}>
        <div>
          <h1>Contato</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit
            quia exercitationem atque, minima quae sequi quas pariatur nemo illo
            hic magni rem voluptatum ipsa?
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