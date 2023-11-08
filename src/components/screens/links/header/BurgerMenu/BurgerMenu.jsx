import { useState } from 'react';
import styles from './BurgerMenu.module.css';
import { Link } from 'react-router-dom'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navBarContainer}>

            <div className={`${styles.burgerIcon} ${isOpen ? styles.openIcon : ''}`} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <div className={`${styles.burgerMenu} ${isOpen ? styles.openMenu : ''}`}>
                <ul className={styles.menuItems}>
                    <li>
                        <Link type="button" className={styles.btn} to='/'>main</Link>
                    </li>
                    <li>
                        <Link type='button' className={styles.btn} to='/links'>links</Link>
                    </li>
                    <li>
                        <Link type='button' className={styles.btn} to='/about'>download</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;