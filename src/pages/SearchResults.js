import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Axios from "axios";
import CocktailCard from "../components/Card";

export default function SearchResults() {
    const params = useParams();
    const userInput = params["params"];
    const [searchResults, setSearchResults] = useState([]);

    async function search(userInput) {
        console.log("search for:", userInput);

        try {
            const response = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`);
            console.log(response.data);
            setSearchResults(response.data["drinks"]);
        } catch (error) {
            setSearchResults([]);
            console.warn(error);
        }
    }

    useEffect(() => {
        if (userInput) {
            search(userInput).finally();
        }
    }, [userInput])

    console.log("searchResults,", searchResults);

    return (
        <div>
            <h1>Search result for: {userInput}...</h1>
            {searchResults !== null ? <CocktailCard data={searchResults}/> : <h2>Sorry! Nothing was found.</h2>}
        </div>
    );
}