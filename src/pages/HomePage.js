import React, {useEffect, useState} from "react";
import Axios from "axios";
import {getRandomId} from "../helpers/getRandomId";
import {getRandomData} from "../helpers/getRandomData";
import CocktailCard from "../components/Card";

export default function HomePage() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDate = async () => {
            try {
                const response = await Axios.get(url);

                const drinks = response.data;
                let getCocktails = Object.keys(drinks).map((k) => drinks[k])[0]
                let getCocktailsToArray = Object.keys(getCocktails).map((k) => getCocktails[k])

                let ids = []
                getCocktailsToArray.forEach((t) => {
                    return ids.push(t.idDrink);
                });

                console.log(`ids : ${ids}`);

                const randomId = getRandomId(ids);
                console.log(`random id : ${randomId}`);

                const getRandomDataCard = getRandomData(randomId, getCocktailsToArray);
                console.log(`random card : ${getRandomDataCard}`);

                setData(getRandomDataCard);
            } catch (err) {
                console.warn(err);
            }
        }

        fetchDate();

    // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>Cocktail of the day:</h1>
            <CocktailCard data={data} />
        </div>

    );
}