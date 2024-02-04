import React from "react"
import ListItems from '../components/ListItems/ListItems'
import styles from './HomePage.module.css'

const HomePage = () => {
  const socialMedia = [{
    path: '/social-media/linkedin.svg',
    linkTo: 'https://www.linkedin.com/in/laissasc/',
    alt: 'Logo do LinkedIn'
  },
  {
    path: '/social-media/github.svg',
    linkTo: 'https://github.com/LaissaSaraiva',
    alt: 'Logo do Github'
  }]

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

          <div className={styles.items}>
            <ListItems items={socialMedia}/>
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
