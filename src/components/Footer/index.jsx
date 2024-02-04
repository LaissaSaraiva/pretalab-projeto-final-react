import React from "react"
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <span>
          Projeto Final do Módulo de React do{" "}
          <span>
            <a href="https://www.pretalab.com/" rel="noreferrer">
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