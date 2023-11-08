import Footer from './footer/footer'
import Header from './header/Header'
import Main from './main/main'
import { links as LinksData } from '../../../links.data.js';
import styles from './home.module.css'

const Links = () => {
    return (
        <>
            <Header />
            {LinksData.length ? <Main links={LinksData} /> : <div className={styles.notFound}><h1>Links not found</h1></div>}
            <Footer />
        </>
    )
}


export default Links