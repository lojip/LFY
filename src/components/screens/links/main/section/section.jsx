import RangesData from "../RangesData/RangesData";
import styles from "../main.module.css"

const Section = ({ ranges, title, links }) => {
    function dataLimit(links) {
        return links.length ? links.slice(0, 10) : false;
    }

    return (
        <section className={styles.section}>
            <h3 className={styles.title}>
                {title}
            </h3>
            {dataLimit(links) ? <RangesData ranges={ranges} links={dataLimit(links)} title={title} /> : <p className={styles.notFound}>Not Found</p>}


        </section>
    )
}

export default Section