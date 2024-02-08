import React from "react"
import styles from './About.module.css'
import ListItems from '../../components/ListItems/ListItems'

const AboutPage = () => {

  const projects = [{
    linkTo: "https://projeto-final-pretalab.netlify.app/",
    path: '/projects/projeto_html.png'
  },
  {
    linkTo: "https://projeto-javascript-pretalab-laissasc.netlify.app/",
    path: '/projects/projeto_javascript.png'
  }]

  return (
    <main className={styles.aboutPage__container}>
      <div className={styles.aboutPage__wrapper}>
        <section className={styles.aboutPage__projects}>
          <div className={styles.aboutPage__description}>
            <h2>Projetos</h2>
            <p>
              Abaixo alguns dos projetos desenvolvidos durante o Ciclo Formativo
            </p>
            <p>As stacks utilizadas foram: HTML, CSS e JavaScript.</p>
          </div>

          <div className={styles.projects__container}>
            <ListItems items={projects} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage