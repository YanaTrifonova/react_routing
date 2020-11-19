import React, {useEffect, useState} from "react";
import Axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function DiscoverCocktails() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchDate = async () => {
            const response = await Axios.get(url);

            const drinks = response.data;
            let arr = Object.keys(drinks).map((k) => drinks[k])
            let att = arr[0];
            let tyy = Object.keys(att).map((k) => att[k])
            console.log(tyy);

            // console.log(drinks.drinks[0]);
            // // console.log(typeof drinks);
            // let result = Object.keys(drinks).map((key) => [Number(key), drinks[key]]);
            // console.log(result);
            //
            // console.log(result[drinks]);
            setData(tyy);
        }

        fetchDate();

    }, []);


    //
    // console.log( typeof data);
    // console.log(  data );
    return (
        <div>
            <h1>DiscoverCocktails</h1>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {data.map((cocktail, index) => {
                    return (
                        <Card key={index} style={{width: '18rem', display: 'flex', margin: '40px'}}>
                            <Card.Img variant="top" src={cocktail.strDrinkThumb}/>
                            <Card.Body style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <Card.Title>{cocktail.strDrink}</Card.Title>
                                <Button variant="info" >Learn more</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>

    );
}