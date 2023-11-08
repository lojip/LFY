import Header from "./header/header";
import Main from "./main/main";
import Footer from "../links/footer/footer"


const Home = () => {
    return (
        <>
            <Header style={{ backgroundImage: `url(/lfy.jpg)` }} />
            <Main />
            <Footer />
        </>
    )
}

export default Home