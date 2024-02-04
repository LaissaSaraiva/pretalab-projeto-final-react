import React from "react"
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.home__background}>
      <div className={styles.home__container}>
        <div className={styles.description__container}>
          <div className={styles.pre__title}>
            <p>Olá, Eu sou</p>
          </div>

          <div className={styles.title}>
            <h1>Laíssa Saraiva</h1>
            <p>Desenvolvedora Frontend</p>
          </div>
        </div>
        <div className={styles.image__container}>
          <img className={styles.image} src="/imgs/profile_home.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
