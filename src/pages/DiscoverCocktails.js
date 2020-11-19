import React, {useEffect, useState} from "react";
import Axios from 'axios';
import CocktailCard from "../components/Card";

export default function DiscoverCocktails() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchDate = async () => {
            try {
                const response = await Axios.get(url);

                const drinks = response.data;
                let getCocktails = Object.keys(drinks).map((k) => drinks[k])[0]
                let getCocktailsToArray = Object.keys(getCocktails).map((k) => getCocktails[k])

                setData(getCocktailsToArray);

                console.log(`Get information from API: ${data.map((t) => console.log(t))}`);

            } catch (err) {
                console.warn(err);
            }
        }

        fetchDate();

    // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>DiscoverCocktails</h1>
            <CocktailCard data={data} />
        </div>

    );
}