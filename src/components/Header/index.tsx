import { useState } from "react";
import styles from "./Layout.module.css";
import styles2 from './Home.module.css';

import logo from '../../assets/logo.svg';
import login from '../../assets/user.svg';

export function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <header className={styles2.header}>
                <nav className={styles.navbar}>

                    <a href="/">
                        <img src={logo.src} className={styles.navlogo} />
                    </a>

                    <ul className={isOpen === false ?
                        styles.navmenu : styles.navmenu + ' ' + styles.active}>
                        <li className={styles.navitem}>

                            <a href='/' className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Home</a>
                        </li>
                        <li className={styles.navitem}>
                            <a href='/porfolio' className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Portfólio</a>
                        </li>
                        <li className={styles.navitem}>
                            <a href='/produtos' className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Produtos</a>
                        </li>
                        <li className={styles.navitem}>
                            <a href='/contato' className={isOpen === false ?
                                styles.navlink : styles.navlink + ' ' + styles.active}
                                onClick={openMenu}>Contato</a>
                        </li>

                    </ul>

                    <div className={isOpen === false ?
                        styles.navmenuLogin : styles.navmenuLogin + ' ' + styles.active}>
                        <li className={styles.navitemLogin}>
                            <a href="/entrar">
                                <img className={styles.imgLogin} src={login.src} />
                            </a>
                        </li>
                    </div>

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