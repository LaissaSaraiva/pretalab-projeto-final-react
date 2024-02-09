import React from "react"
import styles from './Footer.module.css'
import ListItems from "../ListItems/ListItems";

const Footer = () => {
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
    <footer className={styles.footer}>
      <div>
        <ListItems items={socialMedia}/>
      </div>
      <div className={styles.footer__container}>
        <span>
          Projeto Final do Módulo de React do{" "}
          <span>
            <a href="https://www.pretalab.com/" target="_blank" rel="noreferrer">
              Ciclo Formativo Pretalab
            </a>
          </span>
        </span>
        <span>
          Desenvolvido por{" "}
          <span>
            <a
              href="https://github.com/LaissaSaraiva"
              target="_blank"
              rel="noreferrer"
            >
              laissasc ♥
            </a>
          </span>{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer