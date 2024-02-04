import React from "react"
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <div className={styles.button__container}>
      <button type={props.type} value={props.value}>{props.value}</button>
    </div>
  )
}

export default Button