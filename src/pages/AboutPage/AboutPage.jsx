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
      <section className={styles.aboutPage__faq}>
        <div className={styles.aboutPage__wrapper}>
          <div className={styles.aboutPage__description}>
            <h1>Sobre Mim</h1>
          </div>
          <div className={styles.faq__container}>
            <details>
              <summary> Quem sou eu?</summary>
              <p>
                Ao buscar por novos objetivos profissionais, após quase uma
                década de experiência profissional no segmento de Turismo,
                encontrei na Programação a oportunidade para estar em constante
                aprendizado, então, realizei transição de carreira em 2022.
              </p>
              <p>
                Minhas atuais habilidades técnicas abrangem as tecnologias
                relacionadas ao Desenvolvimento Front-end no segmento de
                e-commerce, como HTML | CSS | SASS | Tailwind CSS | JavaScript e
                VTEX IO. E agora REACT. 😄
              </p>
            </details>
            <details>
              <summary> O que é a Pretalab?</summary>
              <p>
                É uma plataforma que conecta mulheres negras que são ou
                gostariam de ser da tecnologia, por meio de ciclos formativos,
                rede de profissionais, mercado de trabalho, consultorias e
                estudos.
              </p>
            </details>
            <details>
              <summary>O que é o Ciclo Formativo?</summary>
              <p>
                É uma qualificação técnica gratuita para mulheres negras e
                indígenas de todo o Brasil. <br /> Uma metodologia baseada no
                conhecimento técnico, autogestão e autoconhecimento que já
                capacitou mais de 700 mulheres negras.
              </p>
            </details>
            <details>
              <summary>Minha visão sobre o Curso</summary>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique sapiente accusamus dolores eius ipsa ad harum
                reiciendis tempore voluptates mollitia eligendi, ullam officiis
                alias praesentium maiores blanditiis repellat necessitatibus ea
                dignissimos quae molestias ipsam tempora? Autem fugiat quo
                mollitia facere doloribus velit necessitatibus, tempore
                repudiandae vel, voluptate veniam, debitis dolore!
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className={styles.aboutPage__projects}>
        <div className={styles.aboutPage__wrapper}>
          <div className={styles.aboutPage__description}>
            <h2>Projetos</h2>
            <p>
              Durante 16 semanas, aprendemos conceitos e desenvolvemos projetos
              nas áreas de HTML5, CSS3, JavaScript e React.{" "}
            </p>
            <br />
            <p>Abaixo alguns dos meus projetos.</p>
          </div>

          <div className={styles.projects__container}>
            <ListItems items={projects} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage