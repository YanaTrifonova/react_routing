import React, {useEffect, useState} from "react";
import Axios from 'axios';
import CocktailCard from "../components/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {getConvertedData} from "../helpers/getConvertedData";

export default function DiscoverCocktails() {
    const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    const ginUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin';
    const vodkaUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka';
    const rumUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum';
    const amarettoUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=amaretto';
    const baileysUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=bail';
    const cremeDeCassisUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cassis';
    const champagneUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=champagne';


    const [data, setData] = useState([]);
    const [ginData, setGinData] = useState([]);
    const [vodkaData, setVodkaData] = useState([]);
    const [rumData, setRumData] = useState([]);
    const [amarettoData, setAmarettoData] = useState([]);
    const [baileysData, setBaileysData] = useState([]);
    const [cremeDeCassisData, setCremeDeCassisData] = useState([]);
    const [champagneData, setChampagneData] = useState([]);
    const [key, setKey] = useState('all');

    useEffect(() => {
        console.log();
        try {
            const fetchDate = async () => {

                const response = await Axios.get(baseUrl);
                setData(getConvertedData(response));

                const ginResponse = await Axios.get(ginUrl);
                setGinData(getConvertedData(ginResponse));

                const vodkaResponse = await Axios.get(vodkaUrl);
                setVodkaData(getConvertedData(vodkaResponse));

                const rumResponse = await Axios.get(rumUrl);
                setRumData(getConvertedData(rumResponse));

                const amarettoResponse = await Axios.get(amarettoUrl);
                setAmarettoData(getConvertedData(amarettoResponse));

                const baileysResponse = await Axios.get(baileysUrl);
                setBaileysData(getConvertedData(baileysResponse));

                const cremeDeCassisResponse = await Axios.get(cremeDeCassisUrl);
                setCremeDeCassisData(getConvertedData(cremeDeCassisResponse));

                const champagneResponse = await Axios.get(champagneUrl);
                setChampagneData(getConvertedData(champagneResponse));
            }

            fetchDate();
        } catch (e) {
            console.warn(e);
        }
    }, [key]);

    console.log(data);

    return (
        <div>
            <h1>Discover Cocktails by Liquids</h1>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="all" title="All Liquids">
                    <CocktailCard data={data}/>
                </Tab>
                <Tab eventKey="gin" title="Gin">
                    <CocktailCard data={ginData}/>
                </Tab>
                <Tab eventKey="vodka" title="Vodka">
                    <CocktailCard data={vodkaData}/>
                </Tab>
                <Tab eventKey="rum" title="Rum">
                    <CocktailCard data={rumData}/>
                </Tab>
                <Tab eventKey="amaretto" title="Amaretto">
                    <CocktailCard data={amarettoData}/>
                </Tab>
                <Tab eventKey="baileys" title="Baileys">
                    <CocktailCard data={baileysData}/>
                </Tab>
                <Tab eventKey="cremeDeCassis" title="Creme De Cassis">
                    <CocktailCard data={cremeDeCassisData}/>
                </Tab>
                <Tab eventKey="champagne" title="Champagne">
                    <CocktailCard data={champagneData}/>
                </Tab>
            </Tabs>
        </div>

    );
}