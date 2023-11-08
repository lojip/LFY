import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div>
                    <h4>
                        <a href="https://ru.freepik.com/free-vector/watercolor-galaxy-background_21727335.htm#query=cosmos%20background&position=1&from_view=search&track=ais" target="_blank" className={styles.listLink}>Image from coolvector</a> на Freepik

                    </h4>
                </div>
                <div>
                    <h4>
                        <a href="https://github.com/lojip" target="_blank" className={styles.listLink}>
                            About author </a>
                    </h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer