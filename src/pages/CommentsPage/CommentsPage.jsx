import React, { useState } from "react"
import Forms from '../../components/Forms/Forms'
import Textarea from '../../components/Forms/Textarea/Textarea'
import Button from '../../components/Forms/Button/Button'
import styles from './Comments.module.css'

const CommentsPage = () => {

  const [newComment, setNewComment] = useState('');
  console.log(newComment, 'Input digitado')


  return (
    <main className={styles.comments__container}>
      <section>
        <div className={styles.comments__wrapper}>
          <div className={styles.comments__description}>
            <h1>Comentários</h1>
            <p>Deixe um comentário abaixo</p>
          </div>

          <div className={styles.comments__form}>
            <Forms>
              <Textarea placeholder="Escreva seu comentário... " onChange={(event) => setNewComment((event.target.value))} value={newComment} />
              <Button type="submit" value="+" />
            </Forms>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CommentsPage