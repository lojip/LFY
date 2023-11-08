import BurgerMenu from './BurgerMenu/BurgerMenu';
import styles from './header.module.css'
import img from '/logo.png';



const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navBar}>
                <img src={img} alt="logo" className='logo' />

                <div>
                    <BurgerMenu />
                </div>
            </div>
        </header>

    )
}

export default Header