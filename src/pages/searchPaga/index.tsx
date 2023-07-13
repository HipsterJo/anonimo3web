import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const searchPage: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        console.log(query.get("genre"));



    }, [location]);

    return (
        <></>
    )
}

export default searchPage;