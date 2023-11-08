import LinkItem from "../link-item/LinkItem";
import styles from '../main.module.css'


const OlLink = ({ index, range, links }) => {
    function filterLink(link, num) {
        let numMin = (num - 1) * 5 + 1;
        let numMax = num * 5;
        return link.id >= numMin && link.id <= numMax;
    }

    return (
        <ol key={index} start={(range.start * 5) + 1} className={styles.olLink}>
            {links.length ? links.map(link => {
                if (filterLink(link, range.num)) {
                    return <LinkItem key={link.id} link={link} />;
                }
                return null;
            }) : <p>Not Found</p>}
        </ol>

    )
}

export default OlLink


