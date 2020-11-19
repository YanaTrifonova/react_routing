import React, {useEffect, useState} from "react";
import Axios from 'axios';
import CocktailCard from "../components/Card";

export default function DiscoverCocktails() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    const [data, setData] = useState([])

    useEffect(() => {
        try {
            const fetchDate = async () => {

                const response = await Axios.get(url);

                const drinks = response.data;
                let getCocktails = Object.keys(drinks).map((k) => drinks[k])[0]
                let getCocktailsToArray = Object.keys(getCocktails).map((k) => getCocktails[k])

                setData(getCocktailsToArray);
            }

            fetchDate();
        } catch (e) {
            console.warn(e);
        }
    }, []);

    return (
        <div>
            <h1>DiscoverCocktails</h1>
            <CocktailCard data={data}/>
        </div>

    );
}