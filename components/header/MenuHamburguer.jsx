import React from 'react';
import { MenuMovil } from './MenuMovil';
import styles from '../../styles/Home.module.css';

export const MenuHamburguer = ({menu}) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className={styles.divContainerMenuhamburguer}>
            <div className='mr-3'>
                <img className='w-8' src="/search.svg" alt="menu Movil"/>
            </div>
            <div className={styles.divContainerIconMenu} onClick={handleClick}>
                <img className='w-8' src="/list.svg" alt="menu Movil"/>
            </div>
            {open ?
                <div className={`absolute rounded p-3 ${styles.menuMovil} smx:block top-11 z-10 `}>
                    <ul>
                        {menu.map(i => <MenuMovil key={i.title} data={i}/>)}
                    </ul>
                </div>
            :
                null
            }
        </div>
    )
}
