import React, { useEffect, useState } from "react"
import Forms from '../../components/Forms/Forms'
import Textarea from '../../components/Forms/Textarea/Textarea'
import Button from '../../components/Forms/Button/Button'
import { nanoid } from 'nanoid'
import styles from './Comments.module.css'

const CommentsPage = () => {
  const getLocalList = () => {
    let items = localStorage.getItem('list')
  
    if (items) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }

  const [newComment, setNewComment] = useState(getLocalList)
  const [list, setList] = useState([])

  function createNewComment() {
    const comment = {
      id: nanoid(),
      description: newComment
    }

    if(comment.description === '') {
      return
    }

    setList([...list, comment])
    setNewComment('')
  }

  function removeComment(id) {
    const commentsFiltered = list.filter(comment => comment.id !== id)
    setList(commentsFiltered)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

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
              <Textarea placeholder="Escreva seu comentário... "  onChange={(event) => setNewComment((event.target.value))} value={newComment} />
              <Button type="button" value="+" onClick={createNewComment} />
            </Forms>
          </div>
        </div>

        <div className={styles.list__comments__wrapper}>
          <ul>
            {list.map(comment => {

              return(
                <li key={comment.id}>
                <div className={styles.list__description}>
                  <p>{comment.description}</p>
                </div>
                <Button className={styles.list__button} value="" onClick={() => {removeComment(comment.id)}}/>
              </li>
              )
            })}
         </ul>
        </div>
      </section>
    </main>
  )
}

export default CommentsPage