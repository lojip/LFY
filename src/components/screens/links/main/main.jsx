import styles from './main.module.css';
import Section from './section/section';

const Main = ({ links }) => {
    const ranges = [
        { start: 0, num: 1 },
        { start: 1, num: 2 },
    ];

    return (
        <main className={styles.main}>
            <div className="container">
                {links.map((link, index) => (
                    <Section key={index} ranges={ranges} title={link.name} links={link.data} />
                ))}
            </div>

        </main>
    );
}

export default Main;