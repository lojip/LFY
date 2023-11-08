import Spinner from "./main/spinner/spinner";
import Header from "../links/header/Header";
import Main from "./main/main";
import { useEffect, useState } from "react";
import { links as LinksData } from '../../../links.data.js';


const More = () => {
    const [urlParam, setUrlParam] = useState('');
    const [foundItem, setFoundItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { pathname } = window.location;
        const parts = pathname.split('/more_info/');
        const paramValue = parts[1];
        setUrlParam(paramValue);
        for (const item of LinksData) {
            if (item.name === paramValue) {
                setFoundItem(item);
                return;
            }
        }
        setFoundItem(null);
    }, []);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    if (foundItem === null) {
        return <p>Not found</p>;
    }

    return (
        <>
            <Header />
            {isLoading ? <Spinner /> : <Main title={foundItem.name} links={foundItem.data} />}
        </>
    );
};

export default More;
