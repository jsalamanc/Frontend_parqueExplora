import React from 'react'
import Image from 'next/image';
import { Menu } from './Menu';
import { MenuHamburguer } from './MenuHamburguer';
import styles from '../../styles/Home.module.css';

export const Header = () => {

    const menu = [{title: 'Inicio', link: '/'},
    {
        title: 'Experimenta',
        link: '/experimenta'
    },
    {
        title: 'Conéctate',
        link: '#'
    },
    {
        title: 'Prográmate',
        link: 'https://encasa.parqueexplora.org/programate/'
    },
    {
        title: 'Conócenos',
        link: 'https://www.parqueexplora.org/que-es-parque-explora'
    },
    {
        title: 'Suscribete',
        link: 'https://encasa.parqueexplora.org/suscribete-2/'
    }
];

    return (
        <>
            <header className={styles.header}>
                <div>
                    <Image src="/logo.png" alt="Logo" width={60} height={50}/>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.ulDesktop}>
                        {menu.map((index) => <Menu key={index.title} data={index}/>)}
                        <li className={styles.liDesktop}><img src='./search.svg'/></li>
                    </ul>
                    <MenuHamburguer menu={menu}/>
                </nav>
            </header>
        </>
    )
}
