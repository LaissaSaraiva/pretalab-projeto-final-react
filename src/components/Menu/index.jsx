import React from 'react'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom';

const Menu = ({ items }) => {
  return (
    <nav className={styles.menu__nav}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.list__item}>
            <Link to={item.linkTo}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu
