import React from 'react'
import styles from './Menu.module.css'

const Menu = ({items}) => {
  return (
    <nav className={styles.menu__nav}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.list__item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu
