import { Link } from 'react-router-dom';
import styles from "./header.module.css"

const Header = () => {
    return (
        <header className={`${styles.header} ${styles.img}`}>
            <div className="container">
                <div className={styles.header__mainTitle}>
                    <h3 className={styles.header__subTitle} translate='no'>
                        Convenience
                    </h3>
                    <h1 className={styles.mainTitle__title} translate='no'>
                        Links for you
                    </h1>
                </div>

                <div className={styles.btnCont}>
                    <Link className={styles.btn} to="/Links" translate='no'>
                        welcome
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header