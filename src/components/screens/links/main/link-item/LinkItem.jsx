import styles from '../main.module.css'

const LinkItem = ({ link }) => {
    return (
        <li key={link.id}>
            <a href={link.link} className={styles.link} target='_blank'>{link.name}</a>
        </li>
    )
}


export default LinkItem