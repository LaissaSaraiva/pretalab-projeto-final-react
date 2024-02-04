import React from "react"
import styles from './Input.module.css'

const Input = (input) => {
  return (
    <div className={styles.input__container}>
      <label>{input.label}</label>
      <input type={input.type} placeholder={input.placeholder} />
    </div>
  )
}

export default Input;