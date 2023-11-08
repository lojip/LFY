import styles from './main.module.css';
import { Link } from 'react-router-dom';
import OlLink from '../../links/main/OlLink/OlLink';

const main = ({ title, links }) => {
    function range(links) {
        const ranges = [];
        let res = Math.ceil(links[links.length - 1].id / 5);
        for (let i = 0; i < res; i++) {
            ranges.push({ start: i + 0, num: i + 1 });
        }
        return ranges;
    }

    const ranges = range(links);

    return (
        <main>
            <div className="container">
                <section className={styles.section}>
                    <h2 className={styles.title}>
                        All links from {title}
                    </h2>
                    <div className={styles.OlLink}>
                        {ranges.map((range, index) => (
                            <OlLink key={index} range={range} links={links} />
                        ))}
                    </div>
                    <Link to='/Links' className='button'>Back</Link>
                </section>
            </div>
        </main>
    )
}

export default main;