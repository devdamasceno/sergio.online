import { useState } from "react";
import styles from "./Layout.module.css";
import styles2 from './Home.module.css'

export function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <header className={styles2.header}>
                <nav className={styles.navbar}>

                    <a href='/' className={styles.navlogo}>Logo</a>

                    <ul className={isOpen === false ?
                        styles.navmenu : styles.navmenu + ' ' + styles.active}>
                        <li className={styles.navitem}>

                            <a href='/' className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Home</a>
                        </li>
                        <li className={styles.navitem}>
                            <a href='/aplicacoes' className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Aplicações</a>
                        </li>
                        <li className={styles.navitem}>
                            <a href='/contato' className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Contato</a>
                        </li>
                    </ul>
                    <button className={isOpen === false ?
                        styles.hamburger : styles.hamburger + ' ' + styles.active}
                        onClick={openMenu}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </nav>
            </header>

        </>
    )
}