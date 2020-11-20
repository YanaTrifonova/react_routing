import './App.css';
import React from "react";
import {Route, Switch} from 'react-router';

import DiscoverCocktails from "./pages/DiscoverCocktails";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import CocktailInfo from "./pages/CocktailInfo";
import SearchResults from "./pages/SearchResults";

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <Switch>
                <Route path="/discover/:cocktailId" component={CocktailInfo}/>
                <Route path="/discover" component={DiscoverCocktails}/>
                <Route path="/search/:params" component={SearchResults}/>
                <Route path="/about" component={AboutMe}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </div>
    );
}

export default App;
