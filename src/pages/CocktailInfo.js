import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Axios from "axios";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import {Tab} from "react-bootstrap"
import {getIngredients} from "../helpers/getIngredients";
import {getMeasure} from "../helpers/getMeasure";

export default function CocktailInfo() {
    const params = useParams();
    const [cocktailInfo, setCocktailInfo] = useState({});
    const [ingredients, setIngredients] = useState([])
    const [measure, setMeasure] = useState([])

    useEffect(() => {
        try {
            const fetchDate = async () => {
                const response = await Axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktailId}`)

                const data = response.data.drinks[0];

                setCocktailInfo(data);

                const arrayOfIngredients = getIngredients(data);
                setIngredients(arrayOfIngredients);

                const arrayOfMeasure = getMeasure(ingredients, data);
                setMeasure(arrayOfMeasure);
            }
            fetchDate();
        } catch (e) {
            console.warn(e);
        }
    }, [ingredients, params.cocktailId]);

    return (

        <Jumbotron fluid>
            <Image style={{maxHeight: '200px'}} src={cocktailInfo.strDrinkThumb} fluid roundedCircle/>
            <Container>
                <h1>{cocktailInfo.strDrink}</h1>
                <p>{`Instruction for preparing: ${cocktailInfo.strInstructions}`}</p>
            </Container>
            <ListGroup style={{maxWidth: '300px', margin: '0 auto'}}>
                {measure.map((measure, index) => {
                    return <ListGroup.Item>{`${measure} of ${ingredients[index]}`}</ListGroup.Item>
                })}
            </ListGroup>
            <div style={{margin: '80px 40px 40px 40px'}}>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Drink category
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Glass Type
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    <h4>{cocktailInfo.strCategory}</h4>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    <h4>{cocktailInfo.strGlass}</h4>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </Jumbotron>
    );
}