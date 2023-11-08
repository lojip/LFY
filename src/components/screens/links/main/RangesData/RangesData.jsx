import { Link } from 'react-router-dom'
import OlLink from '../OlLink/OlLink'
import styles from '../main.module.css'


const RangesData = ({ ranges, links, title }) => {
    return (
        <>
            <div className={styles.OlLink}>
                {ranges.map((range, index) => (
                    <OlLink key={index} range={range} links={links} />
                ))}
            </div>
            <Link to={`/Links/more_info/${title}`} className='button' > more</ Link>
        </>
    )
}

export default RangesData