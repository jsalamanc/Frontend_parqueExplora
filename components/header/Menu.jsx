import React from 'react';
import styles from '../../styles/Home.module.css';

export const Menu = ({data}) => {
  return (
    <>
        <li className={styles.liDesktop}>
            <a href={data.link}>
              {data.title}
            </a>
        </li>
    </>
  )
}
