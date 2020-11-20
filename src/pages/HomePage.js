import React, {useEffect, useState} from "react";
import Axios from "axios";
import CocktailCard from "../components/Card";

export default function HomePage() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDate = async () => {
            try {
                const response = await Axios.get(url);
                const data = response.data.drinks;
                console.log("Get random cocktail", data);
                setData(data);
            } catch (err) {
                console.warn(err);
            }
        }

        fetchDate().finally();

    }, []);

    return (
        <div>
            <h1>Cocktail of the day:</h1>
            <CocktailCard data={data}/>
        </div>

    );
}