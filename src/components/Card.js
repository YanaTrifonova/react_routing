import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CocktailCard(props) {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {props.data.map((cocktail, index) => {
                return (
                    <Card key={index} style={{width: '18rem', display: 'flex', margin: '40px'}}>
                        <Card.Img variant="top" src={cocktail.strDrinkThumb}/>
                        <Card.Body style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Card.Title>{cocktail.strDrink}</Card.Title>
                            <Button variant="info" href={`/discover/${cocktail.idDrink}`}>Learn more</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}
