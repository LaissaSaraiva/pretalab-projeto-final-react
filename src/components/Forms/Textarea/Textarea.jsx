import React from "react"
import styles from './Textarea.module.css'

const Textarea = (textarea) => {
  return (
    <div className={styles.textarea__container}>
      <label>{textarea.label}</label>
      <textarea placeholder={textarea.placeholder}/>
    </div>
  )
}

export default Textarea;