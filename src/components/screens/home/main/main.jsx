import styles from './main.module.css'

const Main = () => {
    return (
        <main>
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.about}>
                        <div className={styles.title}>
                            <h2 className={styles.titleText}>
                                About Us
                            </h2>
                        </div>
                        <div className={styles.about__contain}>
                            <div className={styles.contain_img}>
                                <div className={styles.about__item}>
                                    <div className={styles.about__img}>
                                        <img src="about.jpg" alt="image" />
                                    </div>
                                    <div className={styles.about__imgText} translate='no'>
                                        LFY
                                    </div>
                                </div>
                            </div>

                            <div className={styles.contain__offer}>
                                <div className={styles.about__text}>
                                    <p>
                                        The "LFY" (links for you) project is a simple application designed to manage many different links.
                                        The idea for the project was based on the need to organize and classify a large number of links.
                                    </p>
                                </div>
                                <div className={styles.about__button}>
                                    <a href="https://github.com/lojip/LFY" target='_blank' className={styles.button} translate='no'>more</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.about__offer}>
                        <p>
                            Please note that the project is under development, thank you for using the application!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main