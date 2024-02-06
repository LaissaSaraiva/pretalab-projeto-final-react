import React from "react"
import ListItems from '../../components/ListItems/ListItems'
import styles from './HomePage.module.css'

const HomePage = () => {
  const stacks = [{
    path: '/stacks/html.svg',
    alt: 'Logo do HTML',
    name: 'HTML'
  },
  {
    path: '/stacks/css.svg',
    alt: 'Logo do Css',
    name: 'Css'
  },
  {
    path: '/stacks/js.svg',
    alt: 'Logo do JavaScript',
    name: 'JS'
  },
  {
    path: '/stacks/react.svg',
    alt: 'Logo do React',
    name: 'React'
  },
  {
    path: '/stacks/git.svg',
    alt: 'Logo do Git',
    name: 'Git'
  },
  {
    path: '/stacks/vtexIo.svg',
    alt: 'Logo VTEX',
    name: 'VTEX'
  }]

  return (
    <div className={styles.home__background}>
      <section className={styles.home__container}>
        <div className={styles.description__container}>
          <div className={styles.pre__title}>
            <p>Olá! Eu sou</p>
          </div>

          <div className={styles.title}>
            <h1>Laíssa Saraiva</h1>
            <p>Desenvolvedora Frontend</p>
          </div>

          <div className={styles.items}>
            <ListItems items={stacks} />
          </div>
        </div>

        <div className={styles.image__container}>
          <img className={styles.image} src="/imgs/profile_home.png" alt="" />
        </div>
      </section>

      <section className={styles.home__container2}>
        <div className={styles.home__container2__wrapper}>
          <h2> O que é este Projeto?</h2>
          <p>Este portfólio foi desenvolvido como projeto final do Módulo de React do Ciclo Formativo Básico da Pretalab.</p>
          <br />
          <p>Projeto desenvolvido em React abordando todos os tópicos vistos durante as aulas:</p>
          <ul>
            <li>Componentes</li>
            <li>Props</li>
            <li>Estados</li>
            <li>Listas e Keys</li>
            <li>Hooks</li>
            <li>onChange e onClick</li>
            <li>Context API em React</li>
            <li>React Router DOM</li>
            <li>Modularização do CSS</li>
            <li>E outros...</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
