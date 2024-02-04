import React from "react";
import styles from './ListItems.module.css'

const ListItems = ({items}) => {
  return (
    <ul className={styles.item__box}>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.linkTo} target="_blank" rel="noreferrer">
            <img
              src={item.path}
              alt={item.alt}
              className={styles.item__icon}
              width={30}
              height={30}
            />
            <span className={styles.social__mediaName}>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ListItems